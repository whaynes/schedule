<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE schedule [
<!ENTITY cr "&#10;">
]>

<!--This stylesheet parses the informer course section list to xml,  Has to deal with courses with more than one instructor, 
and courses that meet in more than one room.  This is stage 1 of the transformation to make schedules with FullCalendar.
Stage 2 transforms this into json, grouped by instructor.-->

<xsl:stylesheet version="2.0" 
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:xs="http://www.w3.org/2001/XMLSchema"
 xmlns:weh='http://weh.maritime.edu'>
 <xsl:output method="xml" indent="yes"/>
 <xsl:strip-space elements="*"/>
 <xsl:template match="records">
  <xsl:result-document method="xml" indent="yes" href='stage1.xml'>
  <schedule>
   <xsl:apply-templates select="record"/>
  </schedule>
 </xsl:result-document>
 </xsl:template>
 <xsl:template match="record">
  <xsl:variable name='record' select="."/>
 <!-- Parses comma separated lists in original xml.-->
  <xsl:variable name="instructorList" select="tokenize(value[@name='secFacultyInfo'], ',')" />
  <xsl:variable name="roomList" select="tokenize(value[@name='courseSecMeeting_assoc_csmRoom'], ',')"/>
  <xsl:variable name="bldgList" select="tokenize(value[@name='courseSecMeeting_assoc_csmBldg'], ',')"/>
  <xsl:variable name="startList" select="tokenize(value[@name='course_sec_meeting_assoc_csmStartTime'], ',')"/>
  <xsl:variable name="endList" select="tokenize(value[@name='course_sec_meeting_assoc_csmEndTime'], ',')"/>
  
 <!--Loops over instructors and rooms, to make separate lines.-->
  <xsl:for-each select="$instructorList">
   <xsl:variable name="instructor" select="normalize-space(.)"/>
   <xsl:for-each select="$roomList">
    <!--$idx keeps track of which room when multiple rooms are used for one class-->
    <xsl:variable name="idx" select="position()"/>
    <!--Multiple rooms may meet at different times.  Doesn't account for case where same room at different times on different days.-->
    <!-- I don't fully understand informer output format.-->
    <xsl:variable name="start"><xsl:value-of select="$startList[$idx]"/></xsl:variable>
    <xsl:variable name="end"><xsl:value-of select="$endList[$idx]"/></xsl:variable>
   <line>
    <id>
     <xsl:value-of select="$record/value[@name='secName']"/>
    </id>
    <title>
     <xsl:value-of select="$record/value[@name='secShortTitle']"/>
    </title>
    <daysOfWeek>
     <!-- Translates days from M T W TH F to 1 2 3 4 5-->
     <xsl:variable name='dayNumbers' select="replace(translate($record/value[@name='courseSecMeeting_assoc_csmDays'],'MTWHF','12345'),'24','4')"/>
<xsl:variable name='dayList' select="tokenize($dayNumbers,',')"/>
<!--     If class meets in more than one room, (hopefully) assign right day to right room, otherwise
     all days go to the same room.-->
     <xsl:if test="count($roomList)>1">
      <xsl:value-of select="$dayList[$idx]"/>
      </xsl:if>
     <xsl:if test="count($roomList)=1">
     <xsl:value-of select="$dayNumbers"/>
     </xsl:if>
     </daysOfWeek>
    
    <!--Times are adjusted to EST-->
    <startTime>
     <xsl:value-of select="format-dateTime(adjust-dateTime-to-timezone($start,xs:dayTimeDuration('-PT5H')),'[H01]:[m01]')"/>
    </startTime>
    <endTime>
     <xsl:value-of select="format-dateTime(adjust-dateTime-to-timezone($end ,xs:dayTimeDuration('-PT5H')),'[H01]:[m01]')"/>
    </endTime>
    <person>
     <xsl:value-of select="$instructor"/>
    </person>
    <room>
     <!--Room Number consist of a building code and a room number -->
     <xsl:value-of select="$bldgList[$idx]"/>
     <xsl:text> </xsl:text>
     <xsl:value-of select="$roomList[$idx]"/>
    </room>
   </line>
  </xsl:for-each>
  </xsl:for-each>
 </xsl:template>
 


</xsl:stylesheet>
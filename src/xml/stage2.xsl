<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE schedule [
<!ENTITY cr "&#10;">
]>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:weh='http://weh.maritime.edu'>
 <xsl:output method="text"/>
 <xsl:strip-space elements="*"/>
 
 <xsl:template match="schedule">
  <xsl:result-document method='text' href="data.json">
  <xsl:text>const data = [&cr;</xsl:text>
  <xsl:for-each-group select="line" group-by='person'>
   <!--Sort by last name by skipping past first initial and period -->
   <xsl:sort select="substring-after(current-grouping-key(), '. ')"></xsl:sort>
   <xsl:text/>{"person": "<xsl:value-of select="current-grouping-key()"/>",&cr; <xsl:text/>
   <xsl:text>"schedule":&cr;  [&cr;</xsl:text>
   <xsl:for-each select="current-group()">
    <xsl:apply-templates select='.'/>
    <xsl:if test="position() != last()">,</xsl:if>
   </xsl:for-each>
   <xsl:text>&cr;  ]&cr;}</xsl:text>
   <xsl:if test="position() != last()">,&cr;</xsl:if>
  </xsl:for-each-group>
  <xsl:text>]&cr;</xsl:text>
  </xsl:result-document>
 </xsl:template>
 

 <xsl:template  match="line">
  <xsl:text>    {&cr;</xsl:text>
  <xsl:apply-templates/>
  <xsl:text>    }</xsl:text>
 </xsl:template>
 

 <xsl:template match='id|title|daysOfWeek|startTime|endTime|room'>
  <xsl:text>       "</xsl:text>
  <xsl:value-of select="local-name()"/>
  <xsl:text>": "</xsl:text>
  <xsl:value-of select="."/>
  <xsl:text>",&cr;</xsl:text>
 </xsl:template>
 
 <xsl:template match="person"/>
</xsl:stylesheet>

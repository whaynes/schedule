9/11/22

Various parts are here to make schedules for the department

Users/whaynes/Desktop/calendar/fullcalendar-example-projects/rollup/

(or where ever this gets moved to)

CODE

The calendar is made using fullcalendar  See website:  https://fullcalendar.io

The javascript, css, and html built with 'rollup' and source is located here.


~/Desktop/FullCalendar/fullcalendar-example-projects/rollup/src/readme.txt


Instruction for getting started with rollup are here:

https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/rollup

I just followed the instructions.

rollup:
	dist:
		main.js
	index.html
	package.json
	README.md
	rollup.config.js
	src:
		main.css   
		main.js
		readme.txt  this file
		xml:
			All course sections by semester - WH-3.xml
			data.json
			stage1.xml
			stage1.xsl
			stage2.xsl

main.css, main.js and the contents of the xml folder are the only files customized for the calendar.


TO CREATE NEW SCHEDULES

1.  Using Colleague run "all course sections by semester" report and export as xml.

2.  Run stage1.xsl against this to produce stage1.xml

3.  Run stage2.xsl against stage1.xml to produce data.json

4.  paste data.json into main.js

5.  Run "npm run build" to create web pages

6.  Open index.html to see results




NOTES

This doesn't seem to work when on google drive.  Try moving the fullcalendar folder to the desktop


 Stage1 rearranges the xml to organize by instructor, not section (potentially with multiple instructors)  Also breaks out cases where course meets in more than one room.

 Stage2 produces a json data structure needed by fullCalendar

 This could be simplified with a makefile or combining stage1.xsl and stage2.xsl

 I don't know how to automatically import the data.json into main.js. It's probably possible.

 There may be some errors in the xslt logic for courses which meet in different rooms, so watch out.



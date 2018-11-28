'use strict'
function whatDayToday() {
var brth = new Date();
var weekDay = brth.getDay();
var choiceStyleFile = document.createElement("link");
if(weekDay >= 1 && weekDay  < 5) {
    // document.write('<link rel="stylesheet" type="text/css" href="style1.css" />');
    choiceStyleFile.setAttribute("rel", "stylesheet");
    choiceStyleFile.setAttribute("type", "text/css");
    choiceStyleFile.setAttribute("href", "style1.css");
    document.getElementsByTagName("head")[0].appendChild(choiceStyleFile);
} else {
    // document.write('<link rel="stylesheet" type="text/css" href="style2.css" />');
    choiceStyleFile.setAttribute("rel", "stylesheet");
    choiceStyleFile.setAttribute("type", "text/css");
    choiceStyleFile.setAttribute("href", "style2.css");
    document.getElementsByTagName("head")[0].appendChild(choiceStyleFile);
}}
whatDayToday();

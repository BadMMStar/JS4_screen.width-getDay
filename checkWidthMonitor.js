'use strict'
function checkWidth(){
var choiceStyleFile = document.createElement("link");
if (window.screen.width >= 1024) {
    document.write('<h1>1024х768</h1>');
    // document.write('<link rel="stylesheet" type="text/css" href="style1.css" />');
    choiceStyleFile.setAttribute("rel", "stylesheet");
    choiceStyleFile.setAttribute("type", "text/css");
    choiceStyleFile.setAttribute("href", "style1.css");
    document.getElementsByTagName("head")[0].appendChild(choiceStyleFile);
} else if (window.screen.width >= 800) {
    document.write('<h1>800х600</h1>');
    // document.write('<link rel="stylesheet" type="text/css" href="style2.css" />');
    choiceStyleFile.setAttribute("rel", "stylesheet");
    choiceStyleFile.setAttribute("type", "text/css");
    choiceStyleFile.setAttribute("href", "style2.css");
    document.getElementsByTagName("head")[0].appendChild(choiceStyleFile);
} else {
    document.write('<h1>640x480</h1>');
    // document.write('<link rel="stylesheet" type="text/css" href="style3.css" />');
    choiceStyleFile.setAttribute("rel", "stylesheet");
    choiceStyleFile.setAttribute("type", "text/css");
    choiceStyleFile.setAttribute("href", "style3.css");
    document.getElementsByTagName("head")[0].appendChild(choiceStyleFile);
}}
checkWidth();

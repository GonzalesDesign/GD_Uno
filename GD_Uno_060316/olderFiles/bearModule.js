
"use strict";
console.log ("•-----=====( bearModule )=====-----•");
/** sudo npm i css-loader --save-dev
 *  loads it in the package.json
 ************************************/
require("./bear.css"); //style!css! prefixed loaders are assigned in webpack.config
//require("style!css!./bear.css")
//require("css-loader./bear.css")

require("./src/GDColumns.js");

/** sudo npm i style-loader --save-dev
 *  works with the css-loader
 *  loads it in the package.json
 **************************************/

//let div = document.createElement("div");
/*
let div = $("<div/>");
module.exports = $("<div/>").html("Grizzly Growl!");
*/

//document.body.onload = addElement;

/*************************************************/
/*var double = function(x) {
  return x + x;
}

export { double };*/

/*************************************************/

module.exports = "Hello!";

  var addElement = function () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
module.exports = {addElement};
//export = {addElement};

/*************************************************/
var x = 5;
var addX = function(value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
/*************************************************/

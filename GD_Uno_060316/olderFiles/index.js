/**
 * Created by Odee on 4/19/16.
 */

/**********************************************************************************/
"use strict";
console.log ("•-----=====( index.js || Main Module )=====-----•");
//require('./bearModule.js');
/** Webpack Asynch loading **/
/*require(['./bearModule.js'], function(bear){
 document.body.appendChild(bear[0])
 });*/
//require(['./bearModule.js'], addElement ());
/*require('./bearModule.js');
 addElement ();*/

/*
 import { double } from 'bearModule';
 double(2); // 4
 */


//require('./bearModule.js', );

//import { addElement } from 'bearModule';
//addElement();
require ("./bear.css");
/**********************************************************************************/
var ajaxJSONColumns = require ('./src/AjaxJSONColumns');
ajaxJSONColumns.fRunAjax ();
/**********************************************************************************/
var gdColmns = require ('./src/GDColumns');
console.log ("gdColmns.aPosterImages: ", gdColmns.aPosterImages);

/* Invoke a TwoColumnsClass from GDColumns module and its fTwoColumns method */
let twoColClass = new gdColmns.TwoColumnsClass ();
twoColClass.fTwoColumns (55);
console.log ("twoColClass.RightColumn: ", twoColClass.RightColumn);

gdColmns.fMediaQueries ();
$ (window).on ('resize', gdColmns.fMediaQueries);
//$ (window).on ('resize', ajaxJSONColumns.fRunAjax);

/* get element from html*/
var testElem = document.getElementsByClassName ("testElem");
/* Invoke a function from GDColumns module */
gdColmns.fAnimateTop (testElem, 100)

/* Invoke a class from GDColumns module and its method */

let newImgResizePerc = new gdColmns.ImageResizerPerc ();
newImgResizePerc.fImgResPerc (400, 200, 300);

/**********************************************************************************/
let x = 12;
let y = x;
console.log (`The value of x = ${x} and the value of y = ${y}`);
/*************************************************/
function fTest () {
  let num = 2;
  for (let i = 0; i < num; i++) {
    console.log ("i: ", i);
  }
};

fTest ();
/**********************************************************************************/
/*
 var misc = require ('./bearModule');
 console.log ("Adding %d to 10 gives us %d", misc.x, misc.addX (10));*/


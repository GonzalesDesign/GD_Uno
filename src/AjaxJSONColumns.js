/**
 * Created by Odee on 4/20/16.
 */
(function () { //IIFE
  'use strict';
  console.log ("AjxJSONCol: •-----=====( AjaxJSONColumns || Module )=====-----•");

  /** Functions for css styling **/
  var borderSolidRed = "1px solid red";

  /**-----=====( CreateContainerClass )=====-----**
   ==********************************************==
   * Create bootstrap container div
   *****************************************==---*/
  let container;
  let rightColumnWidth;
  let leftColumnWidth;
  let containerId;
  let rightColumnHeight;

  class CreateContainerClass {
    constructor () {
      this.containerWidth;
      this.fCreateContainer ();
      //this.fContainerColumns(80);
    }

    fCreateContainer () {
      console.log ("fCreateContainer");
      container = document.createElement ("div");
      //var container      = $ (".containerDiv");
      container.className = "container"; //creates a bootstrap container
      container.id        = "containerId";
      $ (container).appendTo ("body");
      containerId         = $ ("#containerId");
      this.containerWidth = $ (".container").width ();
    }

    fContainerColumns (percentage) {
      //let rightColumnPercentage = percentage; //test
      rightColumnWidth = Math.round (this.containerWidth * (percentage / 100));
      leftColumnWidth  = Math.round (this.containerWidth - rightColumnWidth);
    }
  }

  let containerUno = new CreateContainerClass ();
  containerUno.fContainerColumns (80);
  //containerUno

  /****************************************************
   *  Webpack: require
   ****************************************************/
  var gdColmns = require ('./GDColumns');
  /* Invoke a class from GDColumns module and its method */
  /*let newImgResizePerc  = new gdColmns.ImageResizerPerc ();
   newImgResizePerc.fImgResPerc (544, 449, rightColumnWidth);
   let rightColumnHeight = newImgResizePerc.ImgNewHeight;*/

  let ImageHeight     = function (origWt, origHt) {
    let newImgResizePerc  = new gdColmns.ImageResizerPerc ();
    newImgResizePerc.fImgResPerc (origWt, origHt, rightColumnWidth);
    rightColumnHeight = newImgResizePerc.ImgNewHeight;
    return rightColumnHeight;
    console.log ("AjxJSONCol: AjxJSONCol: leftColumnWidth x: ", leftColumnWidth);
    console.log ("AjxJSONCol: rightColumnWidth x: ", rightColumnWidth);
    console.log ("AjxJSONCol: rightColumnHeight x: ", rightColumnHeight);
  };

  /**************************<<•>>**************************/

  var fContainerWidth = function () {
    //var containerWidth        = $ (".container").width ();
    console.log ("AjxJSONCol: containerWidth: ", containerWidth);
    //var rightColumnPercentage = 100;
    var rightColumnWidth = Math.round (containerWidth * (rightColumnPercentage / 100));
    var leftColumnWidth  = Math.round (containerWidth - rightColumnWidth);
    console.log ("AjxJSONCol: rightColumnWidth: ", rightColumnWidth);
    console.log ("AjxJSONCol: leftColumnWidth: ", leftColumnWidth);
    console.log ("AjxJSONCol: TotalContainerWidth: ", rightColumnWidth + leftColumnWidth);

  };
  //fContainerWidth ();

  var fRowStyling = function (colmnId) {
    colmnId.css ({
      //"width"           : "10px",
      //"height"          : "600px",
      "border"          : "1px solid grey",
      "margin-bottom"   : "20px",
      "background-color": "lightGrey",
      "position"        : "relative", //relative absolute
      //"float"   : "left",
      "overflow"        : "visible"//hidden; visible
    });
  };

  var fLeftColumnStyling = function (colmnId) {
    colmnId.css ({
      "padding-left"    : "-15px",
      "padding-right"   : "-15px",
      //"width"           : "10px",
      "height"          : "100px",
      "width"           : leftColumnWidth,
      "border"          : "1px solid grey",
      "background-color": "yellowGreen",
      "position"        : "relative",
      //"float"   : "left",
      "overflow"        : "visible"//hidden; visible
    });
  };

  /*function randomColor(randColor){
   randColor = Math.floor(Math.random() * (123456))
   /!*r = Math.floor(Math.random() * (256));
   g = Math.floor(Math.random() * (256));
   b = Math.floor(Math.random() * (256));*!/
   //jQuery('body').css('background-color','rgb('+r+','+g+','+b+')');
   }
   var fRoundToSix = function (num) {
   return +(Math.round (num + "e+2") + "e-2");
   };*/


  var fRightColumnStyling = function (colmnId, bgColor, origWt, origHt) {
    colmnId.css ({
      "padding-left"    : "-15px",
      "padding-right"   : "-15px",
      //"width"           : "10px",
      "height"          : rightColumnHeight, //ImageHeight(origWt, origHt),
      "width"           : rightColumnWidth,
      "border"          : borderSolidRed,
      "background-color": bgColor,
      "position"        : "relative",
      "padding-left"    : "0px",
      //"float"   : "left",
      "overflow"        : "visible"//hidden; visible
    });
  };

  var fImgContainerStyling = function (chamberId, totalImgsWidth, origWt, origHt) {
    chamberId.css ({
      "padding-left"    : "-15px",
      "padding-right"   : "-15px",
      "width"           : totalImgsWidth, //610 * 5 + "px", //totalImgsWidth
      "height"          : "300px",//ImageHeight(origWt, origHt),
      "border"          : "1px solid cyan",
      "background-color": "purple",
      "position"        : "relative",
      //"float"   : "left",
      "overflow"        : "visible"//hidden; visible
    });
  };

  var fImgDivStyling = function (imgDivId, imgSrc, origWt, origHt) {
    imgDivId.css ({
      "padding-left"    : "-15px",
      "padding-right"   : "-15px",
      "background"      : "url(" + imgSrc + ") no-repeat",
      "background-size" : "100%", //cover
      "width"           : rightColumnWidth,
      "height"          : "250px", //ImageHeight(origWt, origHt),
      "border"          : "1px solid cyan",
      "background-color": "teal",
      "position"        : "relative",
      "float"           : "left"
      //"overflow"        : "visible"//hidden; visible
    });
  };

  var fContainerStyling = function (contId) {
    contId.css ({
      "padding-left"      : "-15px",
      "padding-right"     : "-15px",
      "margin-bottom"     : "20px",
      "padding-bottom"    : "20px",
      "border"            : "1px solid lightGrey",
      "-webkit-box-shadow": "0px 0px 12px 3px rgba(25, 25, 25, 0.10)",
      "box-shadow"        : "0px 0px 20px 10px rgba(25, 25, 25, 0.10)"
    });
  };

  fContainerStyling (containerId);

  /**-----=====( RowTemplateClass )=====-----**/
  var ii = 0;
  //var row                               = document.createElement ("div");
  var RowTemplateClass                  = function RowTemplateClass () {
    //var ii = 0;
    /*this.fCreateRow = function () {
     ii++;
     var row         = document.createElement ("div");
     row.className = "row";
     row.id        = "rowId" + ii;
     $ (row).appendTo (container);
     var rowId     = $ ("#rowId" + ii);
     fRowStyling (rowId);
     //console.log ("AjxJSONCol: rowId: ", rowId);
     };*/
    //this.row = document.createElement ("div");
  };
  /**-----=====( RowTemplateClass : Prototype : fCreateRow )=====-----**/
  RowTemplateClass.prototype.fCreateRow = function () {
    ii++;
    //var row       = document.createElement ("div");
    row.className = "row";
    row.id        = "rowId" + ii;
    $ (row).appendTo (container);
    var rowId     = $ ("#rowId" + ii);
    fRowStyling (rowId);
    console.log ("AjxJSONCol: rowId: ", rowId);
  };

  //var testfCreateRow = new RowTemplateClass ();
  //testfCreateRow.fCreateRow ();

  //var testfCreateRow2 = new RowTemplateClass ();
  //testfCreateRow2.fCreateRow ();
  var row;//       = document.createElement ("div");
  var fGenRow = function (idCount, appendedTo, otherClassName) {
    row           = document.createElement ("div");
    row.className = "row " + otherClassName; //rowImages";
    row.id    = "rowId" + idCount;
    $ (row).appendTo (appendedTo);
    var rowId = $ ("#rowId" + idCount);
    fRowStyling (rowId);
    /*var rowImages = $(".rowImages");
     rowImages.css({
     "background-color": "purple"
     })*/
  };

  var rowParagh;//       = document.createElement ("div");
  var fGenRowParagh = function (idCount, appendedTo) {
    rowParagh           = document.createElement ("div");
    rowParagh.className = "rowParagh"; // + otherClassName; //rowParaghImages";
    rowParagh.id    = "rowParaghId" + idCount;
    $ (rowParagh).appendTo (appendedTo);
    var rowParaghId = $ ("#rowParaghId" + idCount);
    fRowStyling (rowParaghId);

    /*var rowImages = $(".rowImages");
     rowImages.css({
     "background-color": "purple"
     })*/
  };

  var fGenLeftColumn = function (idCount, appendedTo) {
    var leftColumn       = document.createElement ("div");
    leftColumn.className = "col-xs-2";
    leftColumn.id        = "leftColumnId" + idCount;
    $ (leftColumn).appendTo (appendedTo);
    var leftColumnId     = $ ("#leftColumnId" + idCount);
    fLeftColumnStyling (leftColumnId);
  };
  //fGenLeftColumn (1, row);

  var rightColumn;
  var fGenRightColumn = function (idCount, appendedTo, bgColor, origWt, origHt) {
    rightColumn           = document.createElement ("div");
    rightColumn.className = "col-xs-10";
    rightColumn.id        = "rightColumnId" + idCount;
    $ (rightColumn).appendTo (appendedTo);
    var rightColumnId     = $ ("#rightColumnId" + idCount);
    fRightColumnStyling (rightColumnId, bgColor, origWt, origHt);
  };

  var imgContainer;
  var fGenImageContainer = function (idCount, appendedTo, totalImgsWidth, origWt, origHt) {
    imgContainer = document.createElement ("div");
    //console.log ("AjxJSONCol: imgContainer: ", imgContainer);
    imgContainer.className = "imgContainer";
    imgContainer.id        = "imgContainerId" + idCount;
    $ (imgContainer).appendTo (appendedTo);
    var imgContainerId     = $ ("#imgContainerId" + idCount);
    fImgContainerStyling (imgContainerId, totalImgsWidth, origWt, origHt);
  };

  var fGenImageDiv = function (idCount, appendedTo, imgSrc, origWt, origHt) {
    var imgDiv       = document.createElement ("div");
    imgDiv.className = "imgDiv";
    imgDiv.id        = "imgDivId" + idCount;
    $ (imgDiv).appendTo (appendedTo);
    var imgDivId     = $ ("#imgDivId" + idCount);
    fImgDivStyling (imgDivId, imgSrc, origWt, origHt);
  };
  //fGenRightColumn (1, row);

  /*********************( AJAX • JSON )*********************/

  console.log ("AjxJSONCol: •-----=====( fRunAjax )=====-----•");

  var fRunAjax = function () {
    $.ajax ({
      type   : "GET",
      url    : "./src/json/ajaxData2.json",
      success: function (sections) {
        console.log ("AjxJSONCol: sections: ", sections);
        console.log ("AjxJSONCol: sections.GDSite.length: ", sections.GDSite.length); //1
        //console.log ("AjxJSONCol: sections.GDSite.sectionTitle: ", sections.GDSite[0].sectionTitle); //[Object, Object]
        //console.log ("AjxJSONCol: sections.GDSite[0].Designs[0].title: ", sections.GDSite[0].Designs[0].title); //OwnPhones
        //console.log ("AjxJSONCol: sections.GDSite[0].Designs[1].title: ", sections.GDSite[0].Designs[1].title); //HBCBS
        /*console.log ("AjxJSONCol: success: ");
         console.log ("AjxJSONCol: sections: ", sections);
         console.log ("AjxJSONCol: sections.Designs: ", sections.Designs);
         console.log ("AjxJSONCol: sections.Designs.length: ", sections.Designs.length);
         console.log ("AjxJSONCol: sections.Designs[1].images.length: ", sections.Designs[1].images.length);*/

        /** for-of loop: returns all the Objects in Designs node **/
        for (let value of sections.GDSite) {
          console.log("value: ", value);
        }

        //var i = 0;
        let aValues = [];
        //$.each (sections, function (indx, val) {
        $(sections.GDSite).each(function(indx, val){
          aValues[aValues.length] = val; //push
          console.log ("AjxJSONCol: aValues: ", aValues);
          //console.log ("AjxJSONCol: sections.GDSite[0].Designs.length xxx: ", sections.GDSite[0].Designs.length); //2
          console.log ("AjxJSONCol: sections xxx: ", sections.GDSite[0].sectionTitle); //OwnPhones
          console.log ("AjxJSONCol: indx: ", indx); //GDSite
          console.log ("AjxJSONCol: val.sectionTitle: ", val.sectionTitle); //[Object] >
          console.log ("AjxJSONCol: val.sectionTitle: ", val.sectionTitle.length); //[Object] >
          console.log ("AjxJSONCol: val.projects[0].title: ", val.projects[0].title); //
          console.log ("AjxJSONCol: val.length: ", val.length);

          console.log("************************************************");

          for (let sect of sections.GDSite){
            console.log("sect: ", sect);
            for (let proj of sect.projects){
              console.log("proj.title: ",proj.title);
              for(let imgs of proj.images){
                console.log("imgs.imgName: ",imgs.imgName);
              }
            }
          }
          /*for(let ix of val.projects){
            console.log("ix.title: ",ix.title);
            console.log("ix.images: ",ix.images);
            for(let iix of ix.images){
              console.log("iix.imgName: ",iix.imgName);
            }
          }*/

          console.log("************************************************");


          //console.log ("AjxJSONCol: val[0].Designs[0].sectionTitle: ", val[0].Designs[0].sectionTitle); //Web & Graphics Designs
          //console.log ("AjxJSONCol: val[0].Designs.sectionTitle: ", val[0].Designs[0].title); //OwnPhones
          //console.log ("AjxJSONCol: Title: ", val[sectionIndxNum].title);
          //console.log ("AjxJSONCol: SubTitle: ", val[sectionIndxNum].subTitle);
          console.log ("AjxJSONCol: sections.GDSite[0].Designs.length: ", sections.GDSite[0].Designs.length);
          console.log ("AjxJSONCol: sections.GDSite[0].Illustrations.length: ", sections.GDSite[0].Illustrations.length);

          /**-----=====( Designs Section )=====-----**/
          for (let jD1 = 0; jD1 < sections.GDSite[0].Designs.length; jD1++) {
            console.log ("AjxJSONCol: jD1 xx1: ", jD1);
            console.log ("AjxJSONCol: sections.GDSite[0].Designs[jD1].title: ", sections.GDSite[0].Designs[jD1].title);
            console.log ("AjxJSONCol: sections.GDSite[0].Designs[jD1].imagesWidth: ", sections.GDSite[0].Designs[jD1].imagesWidth);
            console.log ("AjxJSONCol: sections.GDSite[0].Designs[jD1].imagesHeight: ", sections.GDSite[0].Designs[jD1].imagesHeight);
            let imagesWidth = sections.GDSite[0].Designs[jD1].imagesWidth;
            let imagesHeight = sections.GDSite[0].Designs[jD1].imagesHeight;
            fGenRow ("jD1" + jD1, container, "rowImages1");
            fGenLeftColumn ("jD1" + jD1, row);
            fGenRightColumn ("jD1" + jD1, row, "orange", imagesWidth, imagesHeight);

            let totalWidthOfAllImages = rightColumnWidth * sections.GDSite[0].Designs[jD1].images.length;
            fGenImageContainer ("jD1" + jD1, rightColumn, totalWidthOfAllImages, imagesWidth, imagesHeight);

            for (let jD2 = 0; jD2 < sections.GDSite[0].Designs[jD1].images.length; jD2++) {
              let myImage = new Image ();
              myImage.src = "images/" + sections.GDSite[0].Designs[jD1].title + "/" + sections.GDSite[0].Designs[jD1].images[jD2].imgName;
              //console.log("myImage.src: ", myImage.src);
              //fGenImageDiv(idCount, appendedTo, imgSrc);
              fGenImageDiv (sections.GDSite[0].Designs[jD1].title + jD2, imgContainer, myImage.src, imagesWidth, imagesHeight);
              //console.log("imgContainer2: ", imgContainer);
            }
          }

          /**-----=====( Illustrations Section )=====-----**/
          for (let jI1 = 0; jI1 < sections.GDSite[0].Illustrations.length; jI1++) {
            console.log ("AjxJSONCol: jI1 xx2: ", jI1);
            console.log ("AjxJSONCol: sections.GDSite[0].Illustrations[jI1].title: ", sections.GDSite[0].Illustrations[jI1].title);
            console.log ("AjxJSONCol: sections.GDSite[0].Illustrations[jI1].imagesWidth: ", sections.GDSite[0].Illustrations[jI1].imagesWidth);
            console.log ("AjxJSONCol: sections.GDSite[0].Illustrations[jI1].imagesHeight: ", sections.GDSite[0].Illustrations[jI1].imagesHeight);
            let imagesWidth = sections.GDSite[0].Illustrations[jI1].imagesWidth;
            let imagesHeight = sections.GDSite[0].Illustrations[jI1].imagesHeight;
            fGenRow ("jI1" + jI1, container, "rowImagesX");
            fGenLeftColumn ("jI1" + jI1, row);
            fGenRightColumn ("jI1" + jI1, row, "cyan", imagesWidth, imagesHeight);

            let totalWidthOfAllImages = rightColumnWidth * sections.GDSite[0].Illustrations[jI1].images.length;
            console.log ("AjjxJSONCol: totalWidthOfAllImages: ", totalWidthOfAllImages);
            fGenImageContainer ("jI1" + jI1, rightColumn, totalWidthOfAllImages, imagesWidth, imagesHeight);

            for (let jI2 = 0; jI2 < sections.GDSite[0].Illustrations[jI1].images.length; jI2++) {
              let myImage = new Image ();
              myImage.src = "images/" + sections.GDSite[0].Illustrations[jI1].title + "/" + sections.GDSite[0].Illustrations[jI1].images[jI2].imgName;
              //console.log("myImage.src: ", myImage.src);
              //fGenImageDiv(idCount, appendedTo, imgSrc);
              fGenImageDiv (sections.GDSite[0].Illustrations[jI1].title + jI2, imgContainer, myImage.src, imagesWidth, imagesHeight);
              console.log ("sections.GDSite[0].Illustrations[jI1].title + jI2: ", sections.GDSite[0].Illustrations[jI1].title + jI2);
            }
          }
        });

        for (let j = 0; j < sections.GDSite.length; j++) {
          console.log ("AjxJSONCol: aValues[j]: ", aValues[j]);//.Designs[j].sectionTitle);
          console.log ("AjxJSONCol: j: ", j);
          for (let jj = 0; jj < sections.GDSite[0].length; jj++) {
            console.log ("AjxJSONCol: jj: ", jj);
            console.log ("AjxJSONCol: sections.GDSite[0].Designs[jj].title: ", sections.GDSite[0][jj].title);
            fGenRow (jj, container, "rowImages");
            fGenLeftColumn (jj, row);
            fGenRightColumn (jj, row);

            /*fGenRowParagh (jj, container);
             fGenLeftColumn (jj, rowParagh);
             fGenRightColumn (jj, rowParagh);*/

            let totalWidthOfAllImages = rightColumnWidth * sections.Designs[jj].images.length;
            //console.log ("AjjxJSONCol: totalWidthOfAllImages: ", totalWidthOfAllImages);
            //console.log ("AjjxJSONCol: sections.Designs[jj].images.length: ", sections.Designs[jj].images.length);

            fGenImageContainer (jj, rightColumn, totalWidthOfAllImages);

            for (let jjj = 0; jjj < sections.Designs[jj].images.length; jjj++) {
              //totalWidthOfAllImages = 400 * jjj;

              let myImage = new Image ();
              myImage.src = "images/" + sections.Designs[jj].title + "/" + sections.Designs[jj].images[jjj].imgName;
              //console.log("myImage.src: ", myImage.src);
              //fGenImageDiv(idCount, appendedTo, imgSrc);
              fGenImageDiv (sections.Designs[jj].title + jjj, imgContainer, myImage.src, imagesWidth, imagesHeight);
              //console.log("imgContainer2: ", imgContainer);
            }
          }
        }
      }
    });
  }
  /*********************( AJAX • END •  JSON )*********************/


  /** Temporary additional space at the bottom of the page **/
  var tempDiv       = document.createElement ('div');
  tempDiv.className = "temp";
  $ (tempDiv).appendTo (container);
  var temp          = $ (".temp");
  console.log ("AjxJSONCol: temp: ", temp);
  temp.css ({
    "height": "100px",
    //"width" : "200px",
    "border": "1pt solid grey"
  })

  console.log ("AjxJSONCol: •-----=====( End AjaxJSONColumns )=====-----•");

  /****************************************************
   *  Webpack: module.exports
   *
   ****************************************************/
  module.exports.fRunAjax = fRunAjax;

  /**************************<<•>>**************************/

}) ();

/**
 * Created by Odee on 5/17/16.
 */
(function () { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

  "use strict";

  /**********************************************************************************/
  let nextPreviousArrows = require ('./NextPreviousArrows');
  //import NextPreviousClass from './NextPreviousArrows'

  let newNextPrevious = new nextPreviousArrows.NextPreviousClass();
  newNextPrevious.fTestMethod();
  //let testNextPrevious = new NextPreviousArrows();
  
  //console.log("testString: ", testString);
  console.log(`Import || Require to: codeArchitecture_X.js: 
  let nextPreviousArrows = require ('./NextPreviousArrows');`);
  /**********************************************************************************/

  console.log (`
      Things to do:
      - Activate the image navigations
      - Include the youTube video on OwnPhones
      - Modules: Seperate the class and function from the Ajax and animation
      - More research on Promise, Ajax & JSON

      May 16, 2016:
      - Promise
      - Arrow function
      - String literals
      - Transferred JS code to external js file
      
      May 17, 2016:
      - Image arrow navigations
      - computer crashed @ 7pm. Restarted 5x.

    `);

  /************ ANIMATION ENGINE ************/
  var tMx       = TweenMax;
  var easeSine  = Sine.easeOut;
  var easePower = Power3.easeOut;
  var animTym   = .5;
  var zeroTym   = 0;

  /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
  /** Animates element's height and width
   ****************************************************************/
  var fAnimateHeightWidth = function (elem, eHeight, eWidth, animTym) {
    //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
    tMx.to (elem, animTym, {height: (eHeight + "px"), width: eWidth, ease: easePower});
  };

  /**----------------=====| fRoundToTwo Function |=====----------------**/
  /** Description:
   *  fRoundToTwo: rounds the decimals to two.
   *******************************************************************************/
  let fRoundToTwo = function (num) {
    return +(Math.round (num + "e+2") + "e-2");
  };

  /**=---| DOM caching |---=**/
  let container      = $ (".container");
  let containerWidth = (container.width ());
  let containerId    = $ ("#containerId");
//console.log (`containerWidth: `);

  let mainContainer      = $ (".mainContainer");
  let mainContainerWidth = (mainContainer.width ());
  let mainContainerId    = $ ("#mainContainerId");
//console.log (`mainContainerWidth: `);

  /**-----===| use for dynamically populated |===-----**/
  let gdContainer      = $ (".gdContainer");
  let gdContainerWidth = (gdContainer.width ());
  let gdContainerId    = $ ("#gdContainerId");
//console.log (`gdContainerWidth: `);

//let projName = FilipinasProjId_0//"default value";// = $ (".FilipinasProjClass");

  /**----------------=====| JS CSS STYLE |=====----------------**/
  /** Description:
   *  CSS within the ES6.
   *  Usage:
   *  Provides for a dynamic parameters referencing.
   *******************************************************************************/
  class CSSStyle {
    constructor () {

    }

    fCSSstyle (elemId, elemWidth, elemHeight) {
      elemId.css ({
          /*"padding-left"    : "-15px",
           "padding-right"   : "-15px",*/
          //"background"      : "url(" + imgSrc + ") no-repeat",
          //"background-size" : "cover", //cover 100%
          "width"           : elemWidth, //"1300px", //containerWidth,
          "height"          : elemHeight, //ImageHeight(origWt, origHt), "100%", //
          "border"          : "0px solid red",
          "background-color": "teal",
          "position"        : "relative" //relative absolute
          //"float"           : "left"
          /*"overflow"        : "hidden"//hidden; visible*/
        }
      );
    }

  }

  let mainContainerCSS = new CSSStyle ();
  mainContainerCSS.fCSSstyle (mainContainerId, mainContainerWidth, "200px");

  /**----------------=====| SampleClassName Class |=====----------------**/
  /** Description:
   *  Class to calculate two columns within the mainContainer.
   *  The provided percentage argument is use for the right column converted to pixel.
   *  The left column will have the mainContainer width minus the right column width.
   *******************************************************************************/
  /*class SampleClassName {
   constructor (instanceVar, rightColumn, columnDiv) {
   this.InstanceVar = instanceVar;
   this.RightColumn = rightColumn;
   this.LeftColumn  = columnDiv;
   /!**----- To access these properties outside, use classInstance.property -----**!/
   }

   fSampleClassNameMethod1 (paramPercentage) {
   this.RightColumn = Math.round (mainContainerWidth * (paramPercentage / 100));
   this.LeftColumn  = Math.round (
   mainContainerWidth - this.RightColumn);
   console.log (`
   Left Column: ${this.LeftColumn} | Right Column: ${this.RightColumn}`);
   }
   }*/

//let classInstance = new SampleClassName ();
//classInstance.fSampleClassNameMethod1 (80);

  /*class CreateDivs {
   constructor () {
   }

   fCreateProjectDiv (counter, appendedTo, myImageSrc, imgRightColumn, imgNewHt, imageNameString) {
   /!** createElement row **!/
   let rowDiv       = document.createElement ("div");
   rowDiv.id        = "rowDivId_" + counter; //set id
   rowDiv.className = "rowDivClass";
   $ (rowDiv).appendTo (appendedTo);

   let rowDivId = $ ("#rowDivId_" + counter); //get id
   rowDivId.css ({
   "width"           : "100%",
   "height"          : "100%",
   "border"          : "0px solid orange",
   "background-color": "beige",
   "position"        : "relative", //relative absolute
   "float"           : "left"
   });

   /!** createElement left column **!/
   let leftDiv       = document.createElement ("div");
   leftDiv.id        = "leftDivId_" + counter; //set id
   leftDiv.className = "leftDivClass";
   $ (leftDiv).appendTo (rowDivId);

   let leftDivId = $ ("#leftDivId_" + counter); //get id
   leftDivId.css ({
   "width"           : "30%",
   "height"          : "100%",
   "border"          : "0px solid orange",
   "background-color": "lightGrey",
   "position"        : "relative", //relative absolute
   "float"           : "left"
   });

   /!** createElement right column
   **!/
   let rightDiv       = document.createElement ("div");
   rightDiv.id        = "rightDivId_" + counter; //set id
   rightDiv.className = "rightDivClass";
   $ (rightDiv).appendTo (rowDivId);

   let rightDivId = $ ("#rightDivId_" + counter); //get id
   rightDivId.css ({
   "width"           : "70%",
   "height"          : "100%",
   "border"          : "0px solid orange",
   "background-color": "yellowGreen",
   "position"        : "relative", //relative absolute
   "float"           : "left"
   });

   /!** createElement image div inside right column **!/
   let imgDiv       = document.createElement ("div");
   imgDiv.id        = "imageDivId_" + counter; //set id
   imgDiv.className = "imgDivClass";
   $ (imgDiv).appendTo (rightDivId);

   let imgDivId = $ ("#imageDivId_" + counter); //get id
   imgDivId.css ({
   /!*"padding-left"    : "-15px",
   "padding-right"   : "-15px",*!/
   "margin"          : "0px",
   "background"      : "url(" + myImageSrc + ") no-repeat",
   "background-size" : "cover", //cover 100%
   "width"           : imgRightColumn, //"300px",
   "height"          : imgNewHt, //"300px", //ImageHeight(origWt, origHt),
   "border"          : "0px solid orange",
   "background-color": "orange",
   "position"        : "relative", //relative absolute
   "float"           : "left"
   //"overflow"        : "visible"//hidden; visible
   });

   /!** createElement: image name div inside image div **!/
   let imageNameDiv       = document.createElement ("div");
   imageNameDiv.className = "imageNameDivClass";
   imageNameDiv.id        = "imageNameDivId_" + counter; //counter + counter2;// + counter3;
   $ (imageNameDiv).appendTo (imgDivId); //imageContainer
   imageNameDiv.innerHTML = imageNameString;
   }
   }*/

  /*let imagesDiv = new CreateDivs ();
   imagesDiv.fCreateProjectDiv (1, gdContainerId, "./images/elnido.jpg", "300px", "200px", "Image Name String");*/

  /**----------------------=====| CSS Styling |=====----------------------**/
  let fDivStyle = function (divClassName, divHeight, divWidth, borderColor) {
    //twoColTest.fTwoColumns (90, 544);
    //console.log ("twoColTest.LeftColumn2: ", twoColTest.LeftColumn);
    //console.log ("twoColTest.RightColumn2: ", twoColTest.RightColumn);
    divClassName.css ({
      "width"       : divWidth,
      "height"      : divHeight,
      "position"    : "relative", //relative absolute
      "float"       : "left",
      "overflow"    : "visible", //hidden; visible
      //"border"  : "0px solid " + borderColor
      //"border-bottom" : "10px solid",
      "border-color": borderColor
    });
  };

  let fImgDivStyle = function (divNameId, imgSrc, divHeight, divWidth) {
    divNameId.css ({
      //"padding-left"    : "-15px",
      //"padding-right"   : "-15px",
      "background"      : "url(" + imgSrc + ") no-repeat",
      "background-size" : "cover", //cover 100%
      "width"           : divWidth,
      "height"          : divHeight,
      "background-color": "teal",
      "position"        : "relative", //relative absolute
      "float"           : "left",
      "display"         : "block",
      //"overflow"        : "hidden", //hidden; visible
      "border"          : "0px solid red"
    });
  };

  var fParagStyle = function (divClassName) {
    divClassName.css ({
      "width"           : "100%",
      //"height"          : "100%",
      /*"font-family"     : "Open Sans",
       "font-weight"     : "300",
       "font-size"       : "1.2em",*/
      "background-color": "beige",
      "position"        : "relative", //relative absolute
      "float"           : "left"
      //"display"         : "block",
      //"border"          : "1px solid red"
    });
  };

  /***************************| CLASS DECLARATIONS |***************************/
  /*
   /!**----------------------=====| CreateElementDiv Class |=====----------------------**!/
   /!** Description:
   *  Parent class template for creating basic generic divs.
   *  To minimize the creation of multiple methods that are similar in functionalities.
   ************************************************************************************!/
   class CreateElementDiv {
   constructor () { //elemNameClass, elemNameId, divName) {
   //this.InstanceVarOrProperty = instanceVar;
   //this.RightColumn           = rightColumn;
   //this.LeftColumn            = columnDiv;
   //this.ElemNameClass;// = elemNameClass;
   //this.ElemNameId;//    = elemNameId;
   //this.DivName;// = divName;
   //console.log (`this.ElemNameClass: ${this.ElemNameClass}`); //undefined
   //console.log (`elemNameId: ${elemNameId}`); //undefined
   /!**----- To access these properties outside, use classInstance.property -----**!/
   }

   /!** Generic method for creating div element **!/
   fCreateDiv (divName, title, counter, appendedTo) {
   divName           = document.createElement ("div");
   divName.id        = title + "Id_" + counter; //set id
   divName.className = title + "Class";
   //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
   $ (divName).appendTo (appendedTo);
   }
   }

   /!**----------------------=====| ProjectDiv Class |=====----------------------**!/
   /!** Description:
   *  ProjectDiv class template is an extension of the CreateElementDiv class.
   *  For creating project container divs.
   ************************************************************************************!/
   class ProjectDiv extends CreateElementDiv {
   constructor () {
   super ();
   }

   fCreateProjDiv (divName, title, counter, appendedTo, divHeight, divWidth) {
   super.fCreateDiv (divName, title, counter, appendedTo);
   let divClass = $ ("." + title + "Class"); //get class
   fDivStyle (divClass, divHeight, divWidth, "grey");
   }
   }

   /!**----------------------=====| ColumnDiv Class |=====----------------------**!/
   /!** Description:
   *  ColumnDiv class template is an extension of the CreateElementDiv class.
   *  For creating column divs.
   ************************************************************************************!/
   class ColumnDiv extends CreateElementDiv {
   constructor () {
   super ();
   }

   fCreateColumnDiv (divName, title, counter, appendedTo, divHeight, divWidth) {
   super.fCreateDiv (divName, title, counter, appendedTo);
   let divClass = $ ("." + title + "Class"); //get class
   fDivStyle (divClass, divHeight, divWidth, "yellowGreen");
   }
   }

   /!**----------------------=====| ImgDiv Class |=====----------------------**!/
   /!** Description:
   *  ImgDiv class template is an extension of the CreateElementDiv class.
   *  For creating image divs.
   ************************************************************************************!/
   class ImgDiv extends CreateElementDiv {
   constructor () {
   super ();
   }

   fCreateImgDiv (divName, title, counter, appendedTo, imgSrc, divHeight, divWidth) {
   super.fCreateDiv (divName, title, counter, appendedTo);
   //let divClass = $ ("." + title + "Class"); //get class
   let divNameId = $ ("#" + title + "Id_" + counter); //get id
   fImgDivStyle (divNameId, imgSrc, divHeight, divWidth);
   }
   }

   /!**----------------------=====| TextContent Class |=====----------------------**!/
   /!** Description:
   *  TextContent class template is an extension of the CreateElementDiv class.
   *  For creating innerHTML divs.
   ************************************************************************************!/
   class TextContent extends CreateElementDiv {
   constructor () {
   super ();
   }

   fCreateTextDiv (title, counter, appendedTo, textString){ //, divHeight, divWidth) {
   //super.fCreateDiv (divName, title, counter, appendedTo);
   let textContentDiv           = document.createElement ("div");
   let textContentDivClass = $ ("." + title + "Class"); //get class
   let divNameId = $ ("#" + title + "Id_" + counter); //get id
   //fImgDivStyle (divNameId, divHeight, divWidth);
   $ (textContentDiv).appendTo (appendedTo);
   textContentDiv.innerHTML = textString;
   }
   }

   /!**----------------------=====| CreateElementA Class |=====----------------------**!/
   /!** Description:
   *  Class template for creating basic "a" tag.
   ************************************************************************************!/
   class CreateElementAny {
   constructor () { //elemNameClass, elemNameId, divName) {
   //this.InstanceVarOrProperty = instanceVar;
   //this.RightColumn           = rightColumn;
   //this.LeftColumn            = columnDiv;
   //this.ElemNameClass;// = elemNameClass;
   //this.ElemNameId;//    = elemNameId;
   //this.DivName;// = divName;
   //console.log (`this.ElemNameClass: ${this.ElemNameClass}`); //undefined
   //console.log (`elemNameId: ${elemNameId}`); //undefined
   /!**----- To access these properties outside, use classInstance.property -----**!/
   }

   /!** Generic method for creating a element **!/
   fCreateTag (divName, tagType, carouselName, title, counter, appendedTo) {
   divName           = document.createElement (tagType);
   divName.id        = title + "Id_" + counter; //set id
   divName.className = carouselName; //title + "Class";
   //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
   $ (divName).appendTo (appendedTo);
   }
   }
   */
  /***************************| END OF CLASS DECLARATIONS |***************************/

  /***************************| CLASS DECLARATIONS |***************************/

  /**----------------------=====| TwoColumnsClass Class |=====----------------------**/
  /** Description:
   *  Class to calculate the two columns within the image project container.
   *  The provided percentage argument is use for the right column converted to pixel.
   *  The left column will have the container's width minus the right column width.
   ************************************************************************************/
  class TwoColumnsClass {
    constructor (rightColumn, leftColumn, imgNewHeight, imgResizePercent) {
      this.RightColumn      = rightColumn;// = RightColumn; //right column property that's accessible outside through the Class
      this.LeftColumn       = leftColumn;// = LeftColumn; //left column property
      this.ImgNewHeight     = imgNewHeight;
      this.imgResizePercent = imgResizePercent;
      /**----- To access these properties outside, use classInstance.property -----**/
    }

    fTwoColumns (rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
      this.RightColumn = Math.round (gdContainerWidth * (rightColumnPercentage / 100));
      this.LeftColumn  = Math.round (gdContainerWidth - this.RightColumn);

      this.imgResizePercent = fRoundToTwo (this.RightColumn / imgOrigWidth);
      this.ImgNewHeight     = Math.round (imgOrigHeight * this.imgResizePercent);
      //console.log("this.imgResizePercent: ", this.imgResizePercent);
      //imgResizePercent      = fRoundToTwo (imgResizePercent);
      //console.log (`Right Column: ${this.RightColumn} | Left Column: ${this.LeftColumn}`);
    }

    static fReturnTwoColumns () {
      console.log ("This is a static method inside a class");
    }

    fImgResPerc (origImgWidth, origImgHeight, imgRightColumn) {
      /*let imgOrigWidth      = origImgWidth;
       let imgOrigHeight     = origImgHeight;
       let imgResizePercent  = imgRightColumn / imgOrigWidth;
       imgResizePercent      = fRoundToTwo (imgResizePercent);
       this.imgResizePercent = imgResizePercent;
       this.ImgNewHeight     = Math.round (imgOrigHeight * imgResizePercent);*/

      /*aImgsResizePercent[aImgsResizePercent.length] = imgResizePercent; //push to array
       aImgsNewWidth[aImgsNewWidth.length]           = this.RightColumn; //push to array
       aImgsNewHeight[aImgsNewHeight.length]         = this.ImgNewHeight; //push to array*/

      /*console.log ("imgOrigWidth: ", imgOrigWidth);
       console.log ("imgRightColumn: ", imgRightColumn);
       console.log ("imgResizePercent: ", imgResizePercent);
       console.log ("imgOrigHeight: ", imgOrigHeight);
       console.log ("this.ImgNewHeight: ", this.ImgNewHeight);*/
    }
  }

  /** Static Test **/
  TwoColumnsClass.fReturnTwoColumns ();

  /**----------===| Columns: Class Instances |===----------**/
  let twoColTest = new TwoColumnsClass ();
//twoColTest.fTwoColumns (50, (gdContainerWidth/2));
//twoColTest.fTwoColumns (80, 544);
  /*console.log ("twoColTest.LeftColumn: ", twoColTest.LeftColumn);
   console.log ("twoColTest.RightColumn: ", twoColTest.RightColumn);
   console.log ("gdContainerWidth: ", gdContainerWidth);*/
  let twoColumnsImgProjects   = new TwoColumnsClass ();
  let twoColumnsParagProjects = new TwoColumnsClass ();
  let twoColumnsImages        = new TwoColumnsClass ();
  /**----------------------=====| End CreateElementDiv Class |=====----------------------**/

  /**----------------------=====| CreateElementDiv Class |=====----------------------**/
  /** Description:
   *  Parent class template for creating basic generic divs.
   *  To minimize the creation of multiple methods that are similar in functionalities.
   ************************************************************************************/
  class CreateElementDiv {
    constructor () {
      //this.divName;
      //elemNameClass, elemNameId, divName) {
      //this.InstanceVarOrProperty = instanceVar;
      //this.RightColumn           = rightColumn;
      //this.LeftColumn            = columnDiv;
      //this.ElemNameClass;// = elemNameClass;
      //this.ElemNameId;//    = elemNameId;
      //this.DivName;// = divName;
      //console.log (`this.ElemNameClass: ${this.ElemNameClass}`); //undefined
      //console.log (`elemNameId: ${elemNameId}`); //undefined
      /**----- To access these properties outside, use classInstance.property -----**/
    }

    /** Generic method for creating div element **/
    fCreateDiv (title, counter, appendedTo) {
      this.divName           = document.createElement ("div");
      this.divName.id        = title + "Id_" + counter; //set id
      this.divName.className = title + "Class"; //set className
      //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
      $ (this.divName).appendTo (appendedTo);
      //divName.innerHTML = ("<!--/*****************/-->"); //for testing
    }
  }

  /**----------------------=====| ProjectDiv Class |=====----------------------**/
  /** Description:
   *  ProjectDiv class template is an extension of the CreateElementDiv class.
   *  For creating project container divs.
   ************************************************************************************/
  class ProjectDiv extends CreateElementDiv {
    constructor () {
      super ();
    }

    fCreateProjDiv (title, counter, appendedTo, divHeight, divWidth) {
      super.fCreateDiv (title, counter, appendedTo);
      let divClass = $ ("." + title + "Class"); //get class
      fDivStyle (divClass, divHeight, divWidth, "grey");
    }
  }

  /**----------------------=====| ColumnDiv Class |=====----------------------**/
  /** Description:
   *  ColumnDiv class template is an extension of the CreateElementDiv class.
   *  For creating column divs.
   ************************************************************************************/
  class ColumnDiv extends CreateElementDiv {
    constructor () {
      super ();
    }

    fCreateColumnDiv (title, counter, appendedTo, divHeight, divWidth) {
      super.fCreateDiv (title, counter, appendedTo);
      let divClass = $ ("." + title + "Class"); //get class
      fDivStyle (divClass, divHeight, divWidth, "red");
      //divClass.css({"height": "250px"}); //testing
    }
  }

  /**----------------------=====| ImgDiv Class |=====----------------------**/
  /** Description:
   *  ImgDiv class template is an extension of the CreateElementDiv class.
   *  For creating image divs.
   ************************************************************************************/
  class ImgDiv extends CreateElementDiv {
    constructor () {
      super ();
    }

    fCreateImgDiv (title, counter, appendedTo, imgSrc, divHeight, divWidth) {
      super.fCreateDiv (title, counter, appendedTo);
      //let divClass = $ ("." + title + "Class"); //get class
      let divNameId = $ ("#" + title + "Id_" + counter); //get id
      fImgDivStyle (divNameId, imgSrc, divHeight, divWidth);
    }
  }

  /**----------------------=====| TextContent Class |=====----------------------**/
  /** Description:
   *  TextContent class template is an extension of the CreateElementDiv class.
   *  For creating innerHTML divs.
   ************************************************************************************/
  class TextContent extends CreateElementDiv {
    constructor () {
      super ();
      //this.divName;
    }

    fCreateTextDiv (title, counter, appendedTo, textString) { //, divHeight, divWidth) { //textString
      super.fCreateDiv (title, counter, appendedTo);
      this.divName.innerHTML = textString;
      //this.divName.href      = "#modalCarousel"; //test:ignored

      //let textContentDiv       = document.createElement ("div");
      //let textContentDiv.className = title + "Class";
      //let textContentDivId     = $ ("#" + title + "Id_" + counter); //get id
      //fImgDivStyle (divNameId, divHeight, divWidth);
      //$ (textContentDiv).appendTo (appendedTo);
      /*let textContentDivClass  = $ ("." + title + "Class"); //get class
       fParagStyle (textContentDivClass);*/
      //textContentDivClass.css({"height": "50px"}); //testing
      //fDivStyle (textContentDivClass, divHeight, divWidth, "red");
      //console.log("counter: ", counter);
    }
  }

  /**----------------------=====| CreateElementA Class |=====----------------------**/
  /** Description:
   *  Class template for creating basic "a" tag.
   ************************************************************************************/
  class CreateElementAny {
    constructor () { //elemNameClass, elemNameId, divName) {
      //this.InstanceVarOrProperty = instanceVar;
      //this.RightColumn           = rightColumn;
      //this.LeftColumn            = columnDiv;
      //this.ElemNameClass;// = elemNameClass;
      //this.ElemNameId;//    = elemNameId;
      //this.DivName;// = divName;
      //console.log (`this.ElemNameClass: ${this.ElemNameClass}`); //undefined
      //console.log (`elemNameId: ${elemNameId}`); //undefined
      /**----- To access these properties outside, use classInstance.property -----**/
    }

    /** Generic method for creating a tag element **/
    fCreateTag (tagType, carouselName, title, counter, appendedTo) {
      let divName       = document.createElement (tagType);
      divName.id        = title + "Id_" + counter; //set id
      divName.className = carouselName; //title + "Class";
      divName.href      = "#modalCarousel";
      //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
      $ (divName).appendTo (appendedTo);

      /*if (tagType === "a") {
       divName.href = "#modalCarousel"
       } else {
       tagType
       }*/
    }
  }

  /***************************| END OF CLASS DECLARATIONS |***************************/

  let projectContainer = new ProjectDiv ();
  let columnDiv        = new ColumnDiv ();
//let rightColumn = new ColumnDiv ();
//let imgContainer = new ColumnDiv ();
  let imgDiv  = new ImgDiv ();
  let textDiv = new TextContent ();

  let tagElement       = new CreateElementAny ();
  let rightArrowShader = new CreateElementAny ();
  let leftArrow        = new CreateElementAny ();
  let rightArrow       = new CreateElementAny ();

  let titolo             = "FilipinasProj";
  let leftTitolo         = "XXXFilipinasProjLeftCol";
  let rightTitolo        = "XXXFilipinasProjRightCol";
  let imgContainerTitolo = "FilipinasImgContainr";
  let imgDivTitolo       = "FilipinasImgDiv";
  let counter            = 0;

//let projDivIds;
  let projLeftColDivIds;
  let projRightColDivIds;
  let imgContainerDivIds;
//let leftShaderIds;
//let rightShaderIds;

  let aProjDivIds     = [];
  let aLeftShaderIds  = [];
  let aRightShaderIds = [];

  let aProjParagDivIds = [];

  /** Arrow function test **/
      //@formatter off : doesn't work!
  let x = a => a;
  console.log ("x: ", x ("Hello Fats!"));

  let xx = (aa) => {
    return aa
  }
  console.log ("xx: ", xx ("Hello Fats 2!"));
  /** End Arrow function test **/

  /*********************( PROMISE AJAX • START •  JSON )*********************/
  if (window.Promise) {
    console.log ('Promise found');
  }
// let fRunAjax = function () {
  let fRunAjax = () => {
    console.log ("fRunAjax:===-------------------------•");
    /*$.ajax ({
     url     : "./src/json/ajaxData2_simple.json",
     type    : "GET",
     dataType: "json",
     cache   : "false",
     success : function (data) {
     console.log ("data: ", data);*/
    let promise = $.get ("./jsX/json/ajaxData2_simple.json");
    //promise.then ((data) => {
    promise.then (function (data) { //})

        let i   = 0;
        let ii  = 0;
        let iii = 0;

        console.log ("************************************************");

        /**-----===| SECTIONS |===-----**/
        for (let sect of data.GDSite) {
          //console.log ("sect: ", sect);
          i++;

          twoColumnsParagProjects.fTwoColumns (80, 0, 0);
          //console.log("twoColumnsParagProjects.LeftColumn: ", twoColumnsParagProjects.LeftColumn);
          //console.log("twoColumnsParagProjects.RightColumn: ", twoColumnsParagProjects.RightColumn);

          /**----------===| Sections Container |===----------**/
          projectContainer.fCreateProjDiv (sect.title + "_Section", i, gdContainer, "auto", gdContainerWidth);
          let sectDivIds = $ ("#" + sect.title + "_Section" + "Id_" + i);//get ids
          //console.log("sectDivIds: ", sectDivIds);//WebGraphicsDesigns_SectionId_1
          //aProjDivIds[aProjDivIds.length] = projDivIds;

          /**----------===| Sections Left Column |===----------**/
          columnDiv.fCreateColumnDiv (sect.title + "_Left", i, sectDivIds, "20px", twoColumnsParagProjects.LeftColumn);
          //columnDiv.fCreateColumnDiv ("left", i, sectDivIds, "100px", twoColumnsImgProjects.LeftColumn);
          //let sectLeftColDivIds = $ ("#" + leftTitolo + "Id_" + i);

          /**----------===| Sections Right Column |===----------**/
          columnDiv.fCreateColumnDiv (sect.title + "_Right", i, sectDivIds, "auto", twoColumnsParagProjects.RightColumn);
          let sectRightColDivIds = $ ("#" + sect.title + "_Right" + "Id_" + i);
          //console.log("sectRightColDivIds: ", sectRightColDivIds);

          /**----------===| Sections Title |===----------**/
          textDiv.fCreateTextDiv ("sectTitle", i, sectRightColDivIds, sect.sectionTitle);//, "300px", "80%");//, "100px", "80%");
          //console.log("sect.sectionTitle: ", sect.sectionTitle);

          //allSections.fBuildSectionHeaderContainer (sect.sectionTitle, i);
          //projectGDImgs.fCreateRowDiv (i, gdContainerId); // "./images/elnido.jpg", "300px", "200px", "Image Name String");

          /**-----===| PROJECTS: ROW |===-----**/
          for (let proj of sect.projects) {
            ii++;
            /*
             /!** Project Container **!/
             projectContainer.fCreateProjDiv ("projDiv", proj.title, ii, gdContainer, "100px", gdContainerWidth);
             let projDivIds                  = $ ("#" + proj.title + "Id_" + ii);//get ids
             aProjDivIds[aProjDivIds.length] = projDivIds; //push to array
             //console.log("projDivIds: ", projDivIds);
             //fAnimateHeightWidth (projDivIds, 50, gdContainerWidth);

             /!** Project Left Column **!/
             columnDiv.fCreateColumnDiv ("projLeftDiv", leftTitolo, ii, projDivIds, "100px", "30%");
             //let projLeftColDivIds = $ ("#" + leftTitolo + "Id_" + ii);

             /!** Project Right Column **!/
             columnDiv.fCreateColumnDiv ("projRightDiv", rightTitolo, ii, projDivIds, "100px", "70%");
             let projRightColDivIds = $ ("#" + rightTitolo + "Id_" + ii);

             /!** Carousel Control: Left **!/
             tagElement.fCreateTag ("tagElement", "a", "carousel-control left", "leftCarousel", ii, projRightColDivIds);
             let leftShaderIds = $ ("#leftCarouselId_" + ii);//get ids
             //aLeftShaderIds[aLeftShaderIds.length] = leftShaderIds; //push to array
             tagElement.fCreateTag ("leftArrow", "i", "glyphicon glyphicon-chevron-left", "leftArrow", ii, leftShaderIds);

             /!** Carousel Control: Right **!/
             tagElement.fCreateTag ("rightArrowShader", "a", "carousel-control right", "rightCarousel", ii, projRightColDivIds);
             let rightShaderIds = $ ("#rightCarouselId_" + ii);//get ids
             //aRightShaderIds[aRightShaderIds.length] = rightShaderIds; //push to array
             tagElement.fCreateTag ("rightArrow", "i", "glyphicon glyphicon-chevron-right", "rightArrow", ii, rightShaderIds);

             /!** Project Paragraph Container **!/
             projectContainer.fCreateProjDiv ("projParagDiv", "paragraph_" + proj.title, ii, gdContainer, "100px", gdContainerWidth);
             let projParagDivIds = $ ("#" + "paragraph_" + proj.title + "Id_" + ii);//get ids
             aProjParagDivIds[aProjParagDivIds.length] = projParagDivIds; //push to array

             /!** Project Paragraph Left Column **!/
             columnDiv.fCreateColumnDiv ("projLeftDiv", "projLeftDiv", ii, projParagDivIds, "100px", "20%");
             //let projLeftColDivIds = $ ("#" + leftTitolo + "Id_" + ii);

             /!** Project Paragraph Right Column **!/
             columnDiv.fCreateColumnDiv ("projRightDiv", "projRightDiv", ii, projParagDivIds, "100px", "80%");
             let projParagraphDivIds = $ ("#projRightDivId_" + ii);

             textDiv.fCreateTextDiv ("projTitle", ii, projParagraphDivIds, proj.title);//, "100px", "80%");
             console.log (`proj.title: ${proj.title}`);
             */

            /**----------===| Screen Queries |===----------**/
            if (gdContainerWidth <= 500) {
              proj.columnPercentage = 100;
            } else {
              proj.columnPercentage = proj.columnPercentage;
            }
            /**----------===| End Screen Queries |===----------**/

            //twoColTest.fTwoColumns (80, 544);
            /*twoColTest.fTwoColumns (proj.columnPercentage, proj.imagesWidth, proj.imagesHeight);
             console.log(`
             twoColTest.LeftColumn: ${twoColTest.LeftColumn}
             proj.imagesWidth: ${proj.imagesWidth} : twoColTest.RightColumn: ${twoColTest.RightColumn}
             proj.imagesHeight: ${proj.imagesHeight} : twoColTest.ImgNewHeight: ${twoColTest.ImgNewHeight}
             gdContainerWidth: ${gdContainerWidth}
             twoColTest.imgResizePercent: ${twoColTest.imgResizePercent}
             `);*/

            /**----------===| Columns: Class Instances Invocation |===----------**/
            twoColumnsImgProjects.fTwoColumns (proj.columnPercentage, proj.imagesWidth, proj.imagesHeight);

            twoColumnsParagProjects.fTwoColumns (80, proj.imagesWidth, proj.imagesHeight);

            /*console.log ("twoColTest.LeftColumn: ", twoColTest.LeftColumn);
             console.log ("twoColTest.RightColumn: ", twoColTest.RightColumn);
             console.log ("gdContainerWidth: ", gdContainerWidth);
             console.log ("twoColTest.imgResizePercent: ", twoColTest.imgResizePercent);*/

            /**----------===| Project Image Container |===----------**/
            projectContainer.fCreateProjDiv (proj.title + "_Proj", ii, gdContainer, "100%", gdContainerWidth);
            let projDivIds                  = $ ("#" + proj.title + "_Proj" + "Id_" + ii);//get ids
            aProjDivIds[aProjDivIds.length] = projDivIds; //push to array use for animation
            //console.log("projDivIds: ", projDivIds);
            //fAnimateHeightWidth (projDivIds, 50, gdContainerWidth);

            /**----------===| Project Image Left Column |===----------**/
            columnDiv.fCreateColumnDiv (proj.title + "_Left", ii, projDivIds, "100px", twoColumnsImgProjects.LeftColumn);
            //columnDiv.fCreateColumnDiv ("left", ii, projDivIds, "100px", twoColumnsImgProjects.LeftColumn);
            //let projLeftColDivIds = $ ("#" + proj.title + "Id_" + ii);

            /**----------===| Project Image Right Column |===----------**/
            columnDiv.fCreateColumnDiv (proj.title + "_Right", ii, projDivIds, twoColumnsImgProjects.ImgNewHeight, twoColumnsImgProjects.RightColumn);
            let projRightColDivIds = $ ("#" + proj.title + "_Right" + "Id_" + ii);
            //console.log ("projRightColDivIds ii: ", projRightColDivIds);

            /**----------===| Project Right Column Image Fluid-Container |===----------**/
            let imageFluidContainerWidth = twoColumnsImgProjects.RightColumn * proj.images.length;
            console.log ("imageFluidContainerWidth: ", imageFluidContainerWidth);

            columnDiv.fCreateColumnDiv (proj.title + "_FluidContainer_", ii, projRightColDivIds, twoColumnsImgProjects.ImgNewHeight, imageFluidContainerWidth);
            let imageContainerIds = $ ("#" + proj.title + "_FluidContainer_" + "Id_" + ii);
            //let imageContainerIds = $ ("#imageContainerId_" + ii);
            //console.log ("imageContainerIds: ", imageContainerIds);

            /**----------===| Carousel Control: Left |===----------**/
            tagElement.fCreateTag ("a", "carousel-control left", "leftCarousel", ii, projRightColDivIds);
            let leftShaderIds = $ ("#leftCarouselId_" + ii);//get ids
            //aLeftShaderIds[aLeftShaderIds.length] = leftShaderIds; //push to array
            tagElement.fCreateTag ("i", "glyphicon glyphicon-chevron-left", "leftArrow", ii, leftShaderIds);

            /**----------===| Carousel Control: Right |===----------**/
            tagElement.fCreateTag ("a", "carousel-control right", "rightCarousel", ii, projRightColDivIds);
            let rightShaderIds = $ ("#rightCarouselId_" + ii);//get ids
            //aRightShaderIds[aRightShaderIds.length] = rightShaderIds; //push to array
            tagElement.fCreateTag ("i", "glyphicon glyphicon-chevron-right", "rightArrow", ii, rightShaderIds);


            /** Instance: Imported NextPreviousClass **/
            let rightArrowOwn = $ ("#rightCarouselId_" + ii);
            let imgWidth = twoColumnsImgProjects.RightColumn;
            //console.log("imgWidth: ", imgWidth);
            leftShaderIds.hide ();
            newNextPrevious.fNextPreviousButtons(rightShaderIds, leftShaderIds, imageContainerIds, imageFluidContainerWidth, imgWidth);

            /**----------===| Project Paragraph Container |===----------**/
            projectContainer.fCreateProjDiv ("paragraph_" + proj.title, ii, gdContainer, "100%", gdContainerWidth);
            let projParagDivIds                       = $ ("#" + "paragraph_" + proj.title + "Id_" + ii);//get ids
            aProjParagDivIds[aProjParagDivIds.length] = projParagDivIds; //push to array for animation

            /**----------===| Project Paragraph Left Column |===----------**/
            columnDiv.fCreateColumnDiv ("projLeftColumn", ii, projParagDivIds, "10px", twoColumnsParagProjects.LeftColumn);
            let projLeftColDivIds = $ ("#projLeftColumnId_" + ii);

            /**----------===| Project Paragraph Right Column |===----------**/
            columnDiv.fCreateColumnDiv ("projRightColumn", ii, projParagDivIds, "100%", twoColumnsParagProjects.RightColumn);
            let projParagRightDivIds = $ ("#projRightColumnId_" + ii); //get Ids

            /**----------===| Project Title |===----------**/
            textDiv.fCreateTextDiv ("projTitle", ii, projParagRightDivIds, proj.title);//, "300px", "80%");//, "100px", "80%");

            /**----------===| Project Sub-Title |===----------**/
            textDiv.fCreateTextDiv ("projSubTitle", ii, projParagRightDivIds, proj.subTitle); //, "100px", "80%");

            /**----------===| Project Descriptions |===----------**/
            textDiv.fCreateTextDiv ("projDescription", ii, projParagRightDivIds, proj.projDescription);

            /** Test string template literal **/
            let templateLiteralTest = ` <div> <h4>${proj.subTitle}</h4></div> `;
            document.getElementById (proj.title + "_LeftId_" + ii).innerHTML = templateLiteralTest;
            //projLeftColDivIds.innerHTML = templateLiteralTest;

            /*
             /!** Project Left Column **!/
             columnDiv.fCreateColumnDiv ("projLeftDiv", proj.title, ii, projDivIds, "20px", "30%");
             projLeftColDivIds = $ ("#" + leftTitolo + "Id_" + ii);

             /!** Project Right Column **!/
             columnDiv.fCreateColumnDiv ("projRightDiv", rightTitolo, ii, projDivIds, "20px", "70%");
             projRightColDivIds = $ ("#" + rightTitolo + "Id_" + ii);

             /!** Project Image Container **!/
             let imgContainerWidth = (200 * 3) + 10;
             imgContainer.fCreateColumnDiv ("imgContainer", imgContainerTitolo, ii, projRightColDivIds, "100px", imgContainerWidth);
             imgContainerDivIds = $ ("#" + imgContainerTitolo + "Id_" + ii);
             */

            /*
             /!** Calculates right columns width **!/
             twoColumnsTestInstance.fTwoColumns (proj.columnPercentage);

             aColumnPercentage[aColumnPercentage.length] = proj.columnPercentage; //push to array

             /!** Calculates div heights **!/
             twoColumnsTestInstance.fImgResPerc (proj.imagesWidth, proj.imagesHeight,
             twoColumnsTestInstance.RightColumn);

             aImgsOrigWidth[aImgsOrigWidth.length]   = proj.imagesWidth; //push to array
             aImgsOrigHeight[aImgsOrigHeight.length] = proj.imagesHeight; //push to array

             let imageContainerWidth = proj.images.length * twoColumnsTestInstance.RightColumn + 100;//proj.imagesWidth +100;
             console.log ("imageContainerWidth:", imageContainerWidth, "• images count:", proj.images.length, "•", proj.title);

             /!*allSections.fBuildProjectContainer (
             ii, proj.title, proj.title, proj.subTitle,
             proj.projDescription, imageContainerWidth,
             ownImageResizePerc.ImgNewHeight);*!///, ("My Unique Tag:  " + proj.title));
             console.log ("=====-------------------------------------------=====");
             projectGDImgs.fCreateProjectDiv (ii, gdContainerId); //, twoColumnsTestInstance.ImgNewHeight);

             let rowDiv = "imgRowDiv";
             projectGDImgs.fCreateRowDiv (rowDiv, ii, twoColumnsTestInstance.ImgNewHeight);

             projectGDImgs.fCreateLeftDiv (ii, twoColumnsTestInstance.LeftColumn);
             projectGDImgs.fCreateRightDiv (ii, twoColumnsTestInstance.RightColumn, twoColumnsTestInstance.ImgNewHeight, imageContainerWidth);

             projectGDImgs.fCreateRowParagDiv (ii);
             projectGDImgs.fCreateLeftParagDiv (ii, twoColumnsTestInstance.LeftColumn);
             projectGDImgs.fCreateRightParagDiv (ii, twoColumnsTestInstance.RightColumn, proj.title, proj.subTitle, proj.projDescription);
             */

            //projectGDImgs.fCreateRowDiv (i+ii, gdContainerId, "200px");
            //projectGDImgs.fCreateProjectDiv (ii, gdContainer);
            //projectGDPar.fCreateRowDiv (ii, twoColumnsTestInstance.ImgNewHeight);
            //projectGDPar.fCreateLeftDiv (ii, twoColumnsTestInstance.LeftColumn);
            //projectGDPar.fCreateRightDiv (ii, twoColumnsTestInstance.RightColumn, twoColumnsTestInstance.ImgNewHeight, imageContainerWidth);

            /*console.log (
             `
             |=====--------------------------=====| i:${i} iii:${iii}
             Project Log Info | Project: ${proj.title} | ii: ${ii}
             Project Right Column Percentage: ${proj.columnPercentage}
             RowDiv Ht: ${twoColumnsTestInstance.ImgNewHeight}
             `);*/

            /**-----===| IMAGES |===-----**/
            for (let imgs of proj.images) {
              iii++;
              //console.log (`iii: ${iii}`);
              //console.log ("iii: ", iii);

              //twoColumnsImgProjects.fTwoColumns (proj.columnPercentage, proj.imagesWidth, proj.imagesHeight);

              //console.log ("projRightColDivIds iii: ", projRightColDivIds);

              /**----------===| Project Right Column Image Container |===----------**/
              /*let imageFluidContainerWidth = twoColumnsImgProjects.RightColumn * proj.images.length;
               console.log ("imageFluidContainerWidth: ", imageFluidContainerWidth);*/

              /*columnDiv.fCreateColumnDiv ("imageContainer", iii, projRightColDivIds, twoColumnsImgProjects.ImgNewHeight, imageFluidContainerWidth);
               let imageContainerIds = $ ("#imageContainerId_" + 1);*/
              //let imageContainerIds2 = $ ("#imageContainerId_" + iii);
              //console.log ("imageContainerIds: ", imageContainerIds);
              //console.log ("imageContainerIds2: ", imageContainerIds2);
              twoColumnsImages.fTwoColumns (
                proj.columnPercentage, proj.imagesWidth, proj.imagesHeight);

              let myImage    = new Image ();
              let imagesPath = "./images/" + proj.title + "/";
              myImage.src    = imagesPath + imgs.imgName;
              //console.log ("myImage.src: ", myImage.src);

              //imgDiv.fCreateImgDiv (title, counter, appendedTo, imgSrc, divHeight, divWidth);
              imgDiv.fCreateImgDiv (
                "imageTitle", iii, imageContainerIds, myImage.src, 
                twoColumnsImages.ImgNewHeight, twoColumnsImages.RightColumn);

              //twoColumnsTestInstance.fImgResPerc (proj.imagesWidth, proj.imagesHeight, twoColumnsTestInstance.RightColumn);

              /*let myImage    = new Image ();
               let imagesPath = "./images/" + proj.title + "/";
               myImage.src    = imagesPath + imgs.imgName;

               imgNewHt = twoColumnsTestInstance.ImgNewHeight;
               imgNewWt = twoColumnsTestInstance.RightColumn;
               imgDiv   = "imgDiv";
               projectGDImgs.fCreateImageDiv (imgDiv, iii, myImage.src, imgNewWt, imgNewHt);
               /!*fAnimateHeight (imgDiv, imgNewHt);
               fAnimateWidth(imgDiv, imgNewWt);*!/

               projectGDImgs.fCreateImageNameDiv (iii, imgs.imgTitle);*/

              /*allSections.fBuildImageDivs (
               proj.title, iii, myImage.src, imgs.imgTitle,
               twoColumnsTestInstance.RightColumn,
               ownImageResizePerc.ImgNewHeight);

               ownImageResizePerc.fImgResPerc (
               proj.imagesWidth, proj.imagesHeight,
               twoColumnsTestInstance.RightColumn);*/

              /*console.log (
               `
               |=====--------------------------=====| i:${i} ii:${ii}
               Images Log Info | Title: ${proj.title} | iii: ${iii}
               Orig Width: ${proj.imagesWidth} | Orig Height: ${proj.imagesHeight}
               Image Resize Percentage: ${twoColumnsTestInstance.imgResizePercent}
               New Width: ${twoColumnsTestInstance.RightColumn} | New Height: ${twoColumnsTestInstance.ImgNewHeight}
               imgName: ${imgs.imgName} | imgTitle: ${imgs.imgTitle}
               `);*/

            }
          }
        }
        console.log ("************************************************");
      },
      /** promise failure **/
      function (data) {
        console.log ("Request Failed!")
      }
    )

  } //);
//};

  fRunAjax ();
  /*********************( AJAX • END •  JSON )*********************/

  /*
   let projectDiv = new CreateElementDiv ();
   let sectionDiv = new CreateElementDiv ();
   let sectionChildDiv = new CreateElementDiv ();

   /!* these will be inside ajax call *!/
   let titolo = "FilipinasProj";
   let sectLeftTitolo = "FilipinasLeftSect";
   let sectRightTitolo = "FilipinasRightSect";
   let sectRightChildTitolo = "FilipinasRightChildSect";

   let counter = 0;

   projectDiv.fCreateDiv ("projDiv", titolo, counter, gdContainer, gdContainerWidth, "300px");

   //let projName = $ ("#FilipinasProjId_0"); FilipinasProjClass
   //let projName = $ ("." + titolo + "Class");
   let projName = document.getElementsByClassName(titolo + "Class")
   console.log("projName: ", projName);


   //let rightDivChild = $ ("." + sectRightTitolo + "Class");
   //let rightDivChild = $ (".FilipinasRightSectClass");

   let rightDivChild = document.getElementsByClassName(sectRightTitolo + "Class")

   //FilipinasRightSectClass
   //console.log(`rightDivChild: ${rightDivChild}`);
   //console.log("rightDivChild: ", rightDivChild);
   //console.log(`sectionDiv.divNameId: ${sectionDiv.elemNameId}`);

   sectionDiv.fCreateDiv ("sectLeftDiv", sectLeftTitolo, counter, projName, "30%", "100px");
   sectionDiv.fCreateDiv ("sectRightDiv", sectRightTitolo, counter, projName, "70%", "200px");

   sectionDiv.fCreateDiv ("sectRightDivChild", sectRightChildTitolo, counter, rightDivChild, "50%", "150px");

   sectionDiv.ElemNameId;
   console.log (`sectionDiv.ElemNameId: ${sectionDiv.ElemNameId}`);

   /!** Test to manipulate the width **!/
   /!** cache the DOM **!/
   let rowDivId = $ ("#rowDivId_1");
   let projDivId = $ ("#" + titolo + "Id_" + counter);
   let imgDivId = $ ("#imageDivId_1");

   /!*rowDivId.css ({
   "width": "600px",
   "height": "600px"
   });*!/
   fAnimateHeightWidth (rowDivId, 600, 600);

   /!*imgDivId.css ({
   "width": "600px",
   "height": "100%"
   });*!/
   fAnimateHeightWidth (imgDivId, 600, 600);
   */

  /***----------=====| Window Resize Function |=====----------***/

  let fOnWindowResize = function () {
    gdContainerWidth = (gdContainer.width ());
    //fAnimateHeightWidth (rowDivId, 600, gdContainerWidth);
    //fAnimateHeightWidth (imgDivId, "auto", "100%");
    /** Project Container **/
    fAnimateHeightWidth (projDivId, 210, gdContainerWidth, animTym);
    fAnimateHeightWidth (projDivId2, 210, gdContainerWidth, animTym);
    /** Project Left Column **/
    fAnimateHeightWidth (projLeftColDivId, 90, "30%", animTym);
    /** Project Right Column **/
    fAnimateHeightWidth (projRightColDivId, 200, "70%", zeroTym);

    /** Project Right Column Width **/
    let rightColumnWidth = projRightColDivId.width ();
    //console.log("rightColumnWidth: ",rightColumnWidth);

    /** Project Image Container **/
    imgContainerWidth = (rightColumnWidth * 3) + 10;
    //imgContainer.fCreateColumnDiv ("imgContainer", imgContainerTitolo, counter, projRightColDivId, "100px", imgContainerWidth);
    fAnimateHeightWidth (imgContainerDivId, "auto", imgContainerWidth, zeroTym);

    /** Project Images **/
    for (let count = 0; count < imagesCount; count++) {
      //imgDiv.fCreateImgDiv ("imgDiv", imgDivTitolo, count, imgContainerDivId, aMyImgSrc[count], "200px", "200px");
      let imgDivId = $ ("#" + imgDivTitolo + "Id_" + count);
      fAnimateHeightWidth (imgDivId, "auto", rightColumnWidth, zeroTym);
    }

    /** from Ajax **/
    fAnimateHeightWidth (aProjDivIds, 100, gdContainerWidth, animTym);
    fAnimateHeightWidth (aProjParagDivIds, 100, gdContainerWidth, animTym);

    //fRunAjax ();

  };

//fOnWindowResize ();

//$ (window).on ('resize', fOnWindowResize);
  /**----------=====| End Window Resize Function |=====----------**/

  /*
   /!**----------------=====| Test code from GDTwoColumns.js |=====----------------**!/
   /!** Description:
   *  Taken a project section code to compare with the dynamically generated divs
   *******************************************************************************!/
   /!************************=| OWNPHONES SECTION |=************************!/
   /!**-----------=====| OwnPhones Reference Variables |=====-----------**!/
   var ownImgTitle = $ ("#ownImagesChamberId .liRImages h5");

   var ownImagesChamberId = $ ("#ownImagesChamberId");
   var ownImg1Id = $ ("#ownImg1Id");
   var ownImg2Id = $ ("#ownImg2Id");
   var ownImg3Id = $ ("#ownImg3Id");
   var ownImg4Id = $ ("#ownImg4Id");
   var ownImg5Id = $ ("#ownImg5Id");
   var aOwnImages = [ownImg1Id, ownImg2Id, ownImg3Id, ownImg4Id, ownImg5Id];

   //fImgLeftMargin (aOwnImages);

   /!**---{ OwnPhones Buttons }---**!/
   var leftArrowOwn = $ ("#leftArrowOwn");
   var rightArrowOwn = $ ("#rightArrowOwn");
   //var leftArrowStax2 = $ ("#leftArrowStax2");

   /!**-----------=====| Image Columns |=====-----------**!/
   var ownColRight = $ (".ownColRight");
   var ownColLeft = $ (".ownColLeft");
   var ownColRightCrop = $ (".ownColRightCrop");

   /!**---------==={ Create TwoColumnsClass instances }===--------**!/
   var ownTwoColumns = new TwoColumnsClass ();
   //ownTwoColumns.fTwoColumns (80);
   /!**---------==={ Create ImageResizerPerc instances }===--------**!/
   var ownImgResizer = new ImageResizerPerc ();
   //ownImgResizer.fImgResPerc (544, 449, ownTwoColumns.RightColumn);
   /!**---------==={ Create NewLeftRightColumnsClass instances }===--------**!/
   var ownLeftRightColumns = new NewLeftRightColumnsClass ();
   //ownLeftRightColumns.fLeftRightCol(ownColLeft, ownColRight, ownColRightCrop, ownTwoColumns, ownImgResizer);
   /!**---------==={ Create NextPreviousClass instances }===--------**!/
   var ownNextPrevArrow = new NextPreviousClass ();
   ownNextPrevArrow.fNextPreviousButtons (rightArrowOwn, leftArrowOwn, aOwnImages, ownImagesChamberId);

   /!**-----------=====| OwnPhones Queries |=====-----------**!/
   /!**---------==={ fOwnPhonesQueries function }===--------**!/
   /!** Collection of functions for this particular section
   *  that runs inside "fMediaQueries()" that gets invoke
   *  whenever the window resized.
   *************************************************************!/
   var fOwnPhonesQueries = function (columnWidthPerc) {
   /!**---------==={ TwoColumnsClass instance }===--------**!/
   /!** This will set the right column percentage and calculate
   *  the value for the "this.RightColumn" and "this.LeftColumn"
   *  properties that will be used by the "columns", "images or videos",
   *  and the "image cropper".
   *************************************************************!/
   ownTwoColumns.fTwoColumns (columnWidthPerc);//setter

   /!**---------==={ ImageResizerPerc instance }===--------**!/
   /!** Calculates the percentage based on the original image width
   *  and the current bootstrap.container. This runs under the
   *  window resize function so it's automatically calculated whenever
   *  the window is resize.
   *  It also sets the value for the "this.ImgNewHeight" property
   ******************************************************************!/
   ownImgResizer.fImgResPerc (544, 449, ownTwoColumns.RightColumn);

   /!**---------==={ NewLeftRightColumnsClass instance }===--------**!/
   /!** This will set the new left and right columns measurements
   *  Arguments:
   *  ownColLeft: Left column
   *  ownColRight: Right column
   *  ownTwoColumns: Section's TwoColumnsClass instance
   *  ownImgResizer: Section's ImageResizerPerc instance
   ******************************************************************!/
   ownLeftRightColumns.fLeftRightCol (ownColLeft, ownColRight, ownColRightCrop, ownTwoColumns, ownImgResizer);

   /!**---------==={ Images height and width }===--------**!/
   /!** This will set the new image height and width measurements
   *  aOwnImages: Array of images
   *  ownImgResizer.ImgNewHeight: Image height
   *  ownTwoColumns.RightColumn: Image width
   ******************************************************************!/
   fImageHeightWidth (aOwnImages, ownImgResizer.ImgNewHeight, ownTwoColumns.RightColumn);

   /!**---------==={ Images chamber total width }===--------**!/
   /!** Total width of the chamber or container div holding the array of images
   *  at the current percentage. Sums up the total images width plus an additional
   *  pixels based on "chamberExtraLength".
   ******************************************************************************!/
   var ownTotalImgsWidth = ((ownTwoColumns.RightColumn * aOwnImages.length) + chamberExtraLength);
   ownImagesChamberId.css ({"width": ownTotalImgsWidth});

   /!**---------==={ NextPreviousClass instances }===--------**!/
   /!** Function for the navigation arrows
   *  Slider width value is based on the current right column width.
   *******************************************************************************!/
   ownNextPrevArrow.NxtPos = ownTwoColumns.RightColumn;
   ownNextPrevArrow.PrevPos = ownTwoColumns.RightColumn;

   /!**---------==={ fPinChamber function }===--------**!/
   /!** Keeps the chamber in position during window resize
   *******************************************************************************!/
   fPinChamber (ownImagesChamberId, ownTwoColumns, ownNextPrevArrow);

   /!**---------==={ ownImgTitle css }===--------**!/
   /!** Image title top position
   *******************************************************************************!/
   ownImgTitle.css ({"top": (ownImgResizer.ImgNewHeight)});
   };

   /!************************=| FUNCTIONS |=************************!/
   /!**----------------=====| fImgLeftMargin Function |=====----------------**!/
   /!** Description:
   *  fImgLeftMargin: margin-left: -2.5px to fit the image better in the div.
   *******************************************************************************!/
   var fImgLeftMargin = function (aryImages) {
   for (var i = 1; i < aryImages.length; i++) {
   aryImages[i].css ({"marginLeft": "-2.5px"});
   //aryImages[i].css ({"backgroundSize": "cover"});
   //aryImages[i].css ({"backgroundSize": "100%"});
   }
   };

   /!**-----------=====| fPinChamber Function |=====-----------**!/
   /!** Description:
   *  Function to keep the Chamber in place whenever
   *  the end user resize the window.
   *  Scenario:
   *  Navigate the section's images by clicking
   *  the left or right arrow.
   *  Resize the window, without this function if the image
   *  selected is greater than index[0], the image will be
   *  all over the place.
   ****************************************************************!/
   var fPinChamber = function (elem, sectTwoColumns, sectNxtPrevArrow) {
   var chamberXPos = sectTwoColumns.RightColumn * sectNxtPrevArrow.countNum;
   tMx.to (elem, .2, {left: -chamberXPos, ease: easePower});
   };

   /!**-----------=====| fImageHeightWidth Function |=====-----------**!/
   /!** Function for image height and width
   *  imgsArray: images array
   *  ht: image height
   *  wt: image width
   ****************************************************************!/
   var fImageHeightWidth = function (imgsArray, ht, wt) {
   /!**----( Setting array member's heights and widths )----**!/
   for (var i = 0; i < imgsArray.length; i++) {
   fAnimateHeightWidth (imgsArray[i], ht, wt); //rowImgRightColmnWidth);
   ////console.log ("imgsArray[i]: ", imgsArray[i]);
   }
   };
   /!**-----------=====| fAnimateHeightWidth Function |=====-----------**!/
   /!** Animates element's height and width
   ****************************************************************!/
   var fAnimateHeightWidth = function (elem, eHeight, eWidth) {
   //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
   tMx.to (elem, animTym, {height: (eHeight + "px"), width: eWidth, ease: easePower});
   };

   */

} ());

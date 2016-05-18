/**----------===| Created by Odee on 5/17/16.|===----------**/

(function () { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

  "use strict";

  /**********************************************************************************/
  let nextPreviousNav = require ('./NextPreviousArrows');

  let nextPreviousImage = new nextPreviousNav.NextPreviousClass ();
  //let prevImage = new nextPreviousNav.PreviousImageClass ();

  //let nextPreviousArrows = require ('./NextPreviousArrows');
  //import NextPreviousClass from './NextPreviousArrows'


  //let newNextPrevious = new nextPreviousArrows.NextPreviousClass ();
  //newNextPrevious.fTestMethod ();
  //let testNextPrevious = new NextPreviousArrows();

  //console.log("testString: ", testString);
  console.log (`Import || Require to: codeArchitecture_X.js: 
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
   ** fRoundToTwo: rounds the decimals to two.
   *******************************************************************************/
  let fRoundToTwo = function (num) {
    return +(Math.round (num + "e+2") + "e-2");
  };

  /**----------------=====| DOM CACHING |=====----------------**/
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
   ** CSS within the ES6.
   ** Usage:
   ** Provides for a dynamic parameters referencing.
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
      });
    }
  }

  let mainContainerCSS = new CSSStyle ();
  mainContainerCSS.fCSSstyle (mainContainerId, mainContainerWidth, "200px");

  let fDivStyle = function (divClassName, divHeight, divWidth, borderColor) {
    //twoColTest.fTwoColumns (90, 544);
    //console.log ("twoColTest.LeftColumn2: ", twoColTest.LeftColumn);
    //console.log ("twoColTest.RightColumn2: ", twoColTest.RightColumn);
    divClassName.css ({
      "width"       : divWidth,
      "height"      : divHeight,
      "position"    : "relative", //relative absolute
      "float"       : "left",
      "overflow"    : "hidden", //hidden; visible
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

  /**----------------------=====| TwoColumnsClass Class |=====----------------------**/
  /** Description:
   ** Class to calculate the two columns within the image project container.
   ** The provided percentage argument is use for the right column converted to pixel.
   ** The left column will have the container's width minus the right column width.
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
   ** Parent class template for creating basic generic divs.
   ** To minimize the creation of multiple methods that are similar in functionalities.
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
   ** ProjectDiv class template is an extension of the CreateElementDiv class.
   ** For creating project container divs.
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
   ** ColumnDiv class template is an extension of the CreateElementDiv class.
   ** For creating column divs.
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
   ** ImgDiv class template is an extension of the CreateElementDiv class.
   ** For creating image divs.
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
   ** TextContent class template is an extension of the CreateElementDiv class.
   ** For creating innerHTML divs.
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
   ** Class template for creating basic "a" tag.
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

        /**--------------------===| SECTIONS LOOP |===--------------------**/
        for (let sect of data.GDSite) {
          //console.log ("sect: ", sect);
          i++;

          /**----------===| Paragraph Columns: |===----------**/
          /** All paragraphs copy are distributed by 20/80 columns **/
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

          /**--------------------===| PROJECTS LOOP |===--------------------**/
          for (let proj of sect.projects) {
            ii++;
            /**----------===| Smallest Screen Querie |===----------**/
            if (gdContainerWidth <= 500) {
              proj.columnPercentage = 100;
            } else {
              proj.columnPercentage = proj.columnPercentage;
            }
            /**----------===| End Smallest Screen Querie |===----------**/

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
            let imgWidth      = twoColumnsImgProjects.RightColumn;
            leftShaderIds.hide ();
            nextPreviousImage.fNextPreviousClass (
              rightShaderIds, leftShaderIds, imageContainerIds, imageFluidContainerWidth, imgWidth);

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

            /**--------------------===| IMAGES LOOP |===--------------------**/
            for (let imgs of proj.images) {
              iii++;

              twoColumnsImages.fTwoColumns (proj.columnPercentage, proj.imagesWidth, proj.imagesHeight);

              let myImage    = new Image ();
              let imagesPath = "./images/" + proj.title + "/";
              myImage.src    = imagesPath + imgs.imgName;
              //console.log ("myImage.src: ", myImage.src);
              //imgDiv.fCreateImgDiv (title, counter, appendedTo, imgSrc, divHeight, divWidth);
              imgDiv.fCreateImgDiv ("imageTitle", iii, imageContainerIds, myImage.src,
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

} ());

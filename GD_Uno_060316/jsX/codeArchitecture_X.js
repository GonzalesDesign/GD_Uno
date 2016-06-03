/**----------===| Created by Odee on 5/17/16.|===----------**/

(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

  "use strict";

  /**-----------=====| IMPORT | REQUIRE |=====-----------**/
  /** DESCRIPTIONS:
   ** FILES IMPORTED FROM OTHER JS FILES
   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
   **----------------------------------------------------------------**/
  let nextPreviousNav = require('./NextPreviousArrows');
  // let nextPreviousImage = new nextPreviousNav.NextPreviousClass();
  // let nextPreviousImage2 = new nextPreviousNav.NextPreviousClass();
  // let nextPreviousCounter = new nextPreviousNav.NextPreviousClass();
  // let nextPreviousNumero = new nextPreviousNav.NextPreviousClass();

  let nxtPrev2Columns = new nextPreviousNav.NextPreviousTwoColumnsClass();
  let nxtPrev2Columns2 = new nextPreviousNav.NextPreviousTwoColumnsClass();

  let animFunct = require('./AnimationFunctions');



  let animTymSlow = 1;
  let animTymFast = .5;
  //let anim = new animFunct.AnimationFunctions();
  /**----------------------------------------------------------------**/
  console.log(`
    Filename: codeArchitecture_X.js);
    Import || Require: NextPreviousArrows.js
    Import || Require: AnimationFunctions.js
    `);
  /**----------------------------------------------------------------**/

  /*
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

   May 18, 2016:
   - Integrated YouTube video
   - Image slider

   May 19, 2016:
   - Image description

   May 23 - 24:
   - Re-wrote class for generating div element
   - Seperated the class and style from each other. Make a separate calls in ajax for... of... loops
   - Easier to read and update

  May 25, Wednesday:
  - Start working on the page animations

   `);
   */

  /************ ANIMATION ENGINE ************/
  // var tMx = TweenMax;
  // var easeSine = Sine.easeOut;
  // var easePower = Power3.easeOut;
  // var animTymSlow = .5;
  // var zeroTym = 0;

  let fLog = function(logTHis) {
    console.log(logTHis);
  };

  /**----------=====| fRoundToTwo Function |=====----------**/
  /** Description:
   ** fRoundToTwo: rounds the decimals to two.
   **------------------------------------------------------**/
  let fRoundToTwo = function(num) {
    return +(Math.round(num + "e+2") + "e-2");
  };

  /**----------=====| DOM CACHING |=====----------**/
  let container = $(".container");
  let containerWidth = (container.width());
  let containerId = $("#containerId");
  //console.log (`containerWidth: `);

  let mainContainer = $(".mainContainer");
  let mainContainerWidth = (mainContainer.width());
  let mainContainerId = $("#mainContainerId");
  //console.log (`mainContainerWidth: `);

  /**----------===| use for dynamically populated |===----------**/
  let gdContainer = $(".gdContainer");
  let gdContainerWidth = (gdContainer.width());
  let gdContainerId = $("#gdContainerId");

  /**----------===| ARRAYS: USE FOR ANIMATIONS |===----------**/
  let aSectionsCount = [];
  let aSectionsRightColumnPercent = [];
  let aSectionHeaders = [];
  let aSectionHeadrLeftColmn = [];
  let aSectionHeadrRightColmn = [];
  let aSectionHeadrTitles = [];

  let aProjectsCount = [];
  let aProjectRightColumnPercent = [];
  let aProjContainerIds = [];
  let aProjLeftDivIds = [];
  let aProjRightDivIds = [];

  let aProjImagesCount = [];

  let aLeftShaderIds = [];
  let aRightShaderIds = [];

  let aParagraphContainer = [];
  //let aProjParagDivIds = [];
  let aProjParagLeftDivIds = [];
  let aProjParagRightDivIds = [];

  let aParagraphRightColumnPercent = [];
  let aParagraphLeftColumnWidth = [];
  let aParagraphRightColumnWidth = [];

  let aImagesCount = [];
  let aImagesRightColumnPercent = [];
  let aImageFluidContainerIds = [];
  let aImageFluidContainerWidth = [];
  let aImageFluidContainerHeight = [];
  let aImagesOrigWidth = [];
  let aImagesOrigHeight = [];

  //TEST
  let a2ColImgProjRightCol = [];
  let a2ColImgProjCount = [];

  //let aTempClickedCount = [1, 2, 3, 4]
  let aImages = [];
  let aImageIds = [];
  let aImagesWidth = [];
  let aImagesHeight = [];
  let aImageDescriptIds = [];

  let aKounter = [];
  let aKontainer = [];

  let fluidContainerW;
  let imageW;


  /**----------=====| JS CSS STYLE |=====----------**/
  /** Description:
   ** CSS within the ES6.
   ** Usage:
   ** Provides for a dynamic parameters referencing.
   **----------------------------------------------**/
  class CSSStyle {
    constructor() {}

    fCSSstyle(elemId, elemWidth, elemHeight) {
      elemId.css({
        /*"padding-left"    : "-15px",
         "padding-right"   : "-15px",*/
        //"background"      : "url(" + imgSrc + ") no-repeat",
        //"background-size" : "cover", //cover 100%
        "width": elemWidth, //"1300px", //containerWidth,
        "height": elemHeight, //ImageHeight(origWt, origHt), "100%", //
        "border": "0px solid red",
        "background-color": "teal",
        "position": "relative" //relative absolute
      //"float"           : "left"
      /*"overflow"        : "hidden"//hidden; visible*/
      });
    }
  }

  let mainContainerCSS = new CSSStyle();
  mainContainerCSS.fCSSstyle(mainContainerId, mainContainerWidth, "200px");


  let fDivStyle = function(divClassName, divHeight, divWidth, divOverflow = "visible", borderColor) {
    //twoColTest.fTwoColumns (90, 544);
    //console.log ("twoColTest.LeftColumn2: ", twoColTest.LeftColumn);
    //console.log ("twoColTest.RightColumn2: ", twoColTest.RightColumn);
    divClassName.css({
      "width": divWidth,
      "height": divHeight,
      "position": "relative", //relative absolute
      "float": "left",
      "overflow": divOverflow, //hidden; visible
      //"border"  : "0px solid " + borderColor
      //"border-bottom" : "10px solid",
      "border-color": borderColor
    });
  };

  let fImgDivStyle = function(divNameId, imgSrc, divHeight, divWidth, divOverflow) {
    divNameId.css({
      //"padding-left"    : "-15px",
      //"padding-right"   : "-15px",
      "background": "url(" + imgSrc + ") no-repeat",
      "background-size": "cover", //cover 100%
      "width": divWidth,
      "height": divHeight,
      "background-color": "teal",
      "position": "relative", //relative absolute
      "float": "left",
      "display": "block",
      "overflow": divOverflow, //"hidden", //hidden; visible
      //"border"          : "0px solid red"
      "border-color": "red"
    });
  };

  var fParagStyle = function(divClassName) {
    divClassName.css({
      "width": "100%",
      //"height"          : "100%",
      /*"font-family"     : "Open Sans",
       "font-weight"     : "300",
       "font-size"       : "1.2em",*/
      "background-color": "beige",
      "position": "relative", //relative absolute
      "float": "left"
    //"display"         : "block",
    //"border"          : "1px solid red"
    });
  };
  var fImgDescriptIdStyle = function(divNameId, imgHeight) {
    divNameId.css({
      "font-size": "2em",
      "width": "100%",
      "padding-top": "0px",
      "height": "50px",
      "padding-right": "30px",
      "letter-spacing": "1px",
      "text-shadow": "2px 2px 2px rgba(0, 0, 0, .3)",
      "margin-top": imgHeight + "px"
    });
  };

  /***************************| CLASS DECLARATIONS |***************************/

  /**----------=====| TwoColumnsClass Class |=====----------**/
  /** Description:
   ** Class to calculate the two columns within the image project container.
   ** The provided percentage argument is use for the right column converted to pixel.
   ** The left column will have the container's width minus the right column width.
   **------------------------------------------------------**/
  class TwoColumnsClass {
    constructor() { //rightColumn, leftColumn, newHeight, resizePercent) {
      this.RightColumn; // = rightColumn; // = RightColumn; //right column property that's accessible outside through the Class
      // this.LeftColumn; // = leftColumn; // = LeftColumn; //left column property
      // this.NewHeight; // = newHeight;
      // this.ResizePercent; // = resizePercent;

    /**---------- To access these properties outside, use classInstance.property ----------**/
    /**---------- But an instance of the fTwoColumns method has to be invoked first! ----------**/
    }

    fTwoColumns(rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
      this.RightColumn = Math.round(gdContainerWidth * (rightColumnPercentage / 100));
      this.LeftColumn = Math.round(gdContainerWidth - this.RightColumn);
      this.ResizePercent = fRoundToTwo(this.RightColumn / imgOrigWidth);
      this.NewHeight = Math.round(imgOrigHeight * this.ResizePercent);
      this.Stringy = "Hello from fTwoColumns";
    //console.log("nextPreviousImage.Num:2c ", nextPreviousImage.Num); //test
    //console.log("this.ResizePercent: ", this.ResizePercent);
    //resizePercent      = fRoundToTwo (resizePercent);
    //console.log (`Right Column: ${this.RightColumn} | Left Column: ${this.LeftColumn}`);
    }
  }

  // let fTwoColumnsAnimation = function(elem, rightColumnPercentage, parentElemWidth) {
  //   let elemWidth = Math.round(parentElemWidth * (rightColumnPercentage / 100));
  //   elem.css({
  //     "width": elemWidth
  //   })
  // }

  /**----------===| Columns: Class Instances |===----------**/
  let twoColumnsHeaderSection = new TwoColumnsClass();
  let twoColumnsImgProjects = new TwoColumnsClass();
  let twoColumnsParagProjects = new TwoColumnsClass();
  let twoColumnsImages = new TwoColumnsClass();
  let twoColumnsVideo = new TwoColumnsClass();

  let twoColumnsImgProjectsAnim = new TwoColumnsClass();
  let twoColumnsImagesAnim = new TwoColumnsClass();

  /**----------=====| CreateElementDiv Class |=====----------**/
  /** Description:
   ** Parent class template for creating basic generic divs.
   ** To minimize the creation of multiple methods that are similar in functionalities.
   **--------------------------------------------------------**/
  class CreateElementDiv {
    constructor() {
      //this.divName;
      //elemNameClass, elemNameId, divName) {
      //this.InstanceVarOrProperty = instanceVar;
      //this.RightColumn           = rightColumn;
      //this.LeftColumn            = columnDiv;
      //this.ElemNameClass;// = elemNameClass;
      //this.ElemNameId;//    = elemNameId;
      //this.DivName;// = divName;
      /**---------- To access these properties outside, use classInstance.property ----------**/
    }

    /** Generic method for creating div element **/
    fCreateDiv(title, counter, appendedTo) {
      this.divName = document.createElement("div");
      this.divName.id = title + counter; //set id // title + "Id_" + counter;
      this.divName.className = title + "Class"; //set className
      //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
      $(this.divName).appendTo(appendedTo);
    //divName.innerHTML = ("<!--/*****************/-->"); //for testing
    }
  }

  /**------------=====| CreateBasicElement Class |=====------------**/
  /** Description:
   ** CreateBasicElement class: For creating basic elements like divs.
   **--------------------------------------------------------------**/
  class CreateBasicElement {
    constructor() {
      this.titleName;
    }

    fCreateBasicElement(titleId, counter, titleClass, appendedTo) {
      this.titleName = document.createElement("div");
      this.titleName.id = titleId + counter; //set id // title + "Id_" + counter;
      this.titleName.className = titleClass; //set className
      //let titleNameId     = $ ("#" + title + "Id_" + counter); //get id
      $(this.titleName).appendTo(appendedTo);
    //fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
    }
  }

  class BasicTextContent extends CreateBasicElement {
    constructor() {
      super();
    }

    fBasicTextContent(titleId, counter, titleClass, appendedTo, textString) {
      super.fCreateBasicElement(titleId, counter, titleClass, appendedTo);
      this.titleName.innerHTML = textString;
    }
  }

  /**------------=====| fBasicStyle CSS |=====------------**/
  let fBasicStyle = function(divName, divHeight, divWidth) {
    divName.css({
      "width": divWidth,
      "height": divHeight,
      "position": "relative", //relative absolute
      "float": "left"
    //"overflow": divOverflow, //hidden; visible
    //"border"  : "0px solid " + borderColor
    //"border-bottom" : "10px solid",
    //"border-color": borderColor
    });
  //animFunct.fAnimateHeightWidth(divName, divHeight, divHeight, animTymSlow);
  };
  /**------------=====| fBasicStyle CSS |=====------------**/
  let fBasicImageStyle = function(divName, divHeight, divWidth, imgSrc) {
    divName.css({
      "width": divWidth,
      "height": divHeight,
      "background": "url(" + imgSrc + ") no-repeat",
      "background-size": "cover", //cover 100%
      "position": "relative", //relative absolute
      "float": "left"
    //"overflow": divOverflow, //hidden; visible
    //"border"  : "0px solid " + borderColor
    //"border-bottom" : "10px solid",
    //"border-color": borderColor
    });
  };

  const sectionHeaderContainer = new CreateBasicElement();
  const sectionHeaderText = new BasicTextContent();

  const projectBasicContainer = new CreateBasicElement();
  const imageBasicDiv = new CreateBasicElement();

  /**------------=====| End CreateBasicElement Class |=====------------**/

  /**----------=====| ProjectDiv Class |=====----------**/
  /** Description:
   ** ProjectDiv class template is an extension of the CreateElementDiv class.
   ** For creating project container divs.
   ***********************/
  class ProjectDiv extends CreateElementDiv {
    constructor() {
      super();
    }

    fCreateProjDiv(title, counter, appendedTo, divHeight, divWidth, divOverflow) {
      super.fCreateDiv(title, counter, appendedTo);
      let divClass = $("." + title + "Class"); //get class
      fDivStyle(divClass, divHeight, divWidth, divOverflow, "grey");
    }
  }

  /**----------=====| ColumnDiv Class |=====----------**/
  /** Description:
   ** ColumnDiv class template is an extension of the CreateElementDiv class.
   ** For creating column divs.
   ***********************/
  class ColumnDiv extends CreateElementDiv {
    constructor() {
      super();
    }

    fCreateColumnDiv(title, counter, appendedTo, divHeight, divWidth, divOverflow) {
      super.fCreateDiv(title, counter, appendedTo);
      let divClass = $("." + title + "Class"); //get class
      let divNameId = $("#" + title + counter); //get id
      fDivStyle(divNameId, divHeight, divWidth, divOverflow, "black");
    //divClass.css({"height": "250px"}); //testing
    }

  /*fCreateColumnVideoDiv (title, counter, appendedTo, divHeight, divWidth) {
   super.fCreateDiv (title, counter, appendedTo);
   let divClass = $ ("." + title + "Class"); //get class
   fDivStyle (divClass, divHeight, divWidth, "red");
   //divClass.css({"height": "250px"}); //testing
   }*/
  }

  /**----------=====| ImgDiv Class |=====----------**/
  /** Description:
   ** ImgDiv class template is an extension
   ** of the CreateElementDiv class.
   ** For creating image divs.
   **----------------------------------------------**/
  class ImgDiv extends CreateElementDiv {
    constructor() {
      super();
    }

    fCreateImgDiv(title, counter, appendedTo, imgSrc, divHeight, divWidth, divOverflow) {
      super.fCreateDiv(title, counter, appendedTo);
      //let divClass = $ ("." + title + "Class"); //get class
      /** getting the div id name has to follow the same convention
       ** as it was set on the parent class.
       ** this.divName.id        = title + "Id_" + counter; //set id name
       ** let divNameId = $ ("#" + title + "Id_" + counter); //get id name
       ** additional id name customization has to be set at the instance level.
       ** see: imgDiv.fCreateImgDiv (proj.title+"_Image", i3, imageContainerIds...
       ****************************************************************************/
      let divNameId = $("#" + title + counter); //get id //("#" + title + "Id_" + counter)
      fImgDivStyle(divNameId, imgSrc, divHeight, divWidth, divOverflow);
    }

  /*fCreateVideoDiv (title, counter, appendedTo, imgSrc, divHeight, divWidth) {
   super.fCreateDiv (title, counter, appendedTo);
   //let divClass = $ ("." + title + "Class"); //get class
   /!** getting the div id name has to follow the same convention
   ** as it it was set on the parent class.
   ** this.divName.id        = title + "Id_" + counter; //set id name
   ** let divNameId = $ ("#" + title + "Id_" + counter); //get id name
   ** additional id name customization has to be set at the instance level.
   ** see: imgDiv.fCreateImgDiv (proj.title+"_Image", i3, imageContainerIds...
   ****************************************************************************!/
   let vidDivNameId = $ ("#" + title + counter); //get id //("#" + title + "Id_" + counter)
   fImgDivStyle (vidDivNameId, imgSrc, divHeight, divWidth);
   }*/
  }

  /**----------=====| TextContent Class |=====----------**/
  /** Description:
   ** TextContent class template is an extension
   ** of the CreateElementDiv class.
   ** For creating innerHTML divs. ************/
  /**------------**/
  class TextContent extends CreateElementDiv {
    constructor() {
      super();
    }

    fCreateTextDiv(title, counter, appendedTo, textString) {
      super.fCreateDiv(title, counter, appendedTo);
      this.divName.innerHTML = textString;
    }
  }

  /**----------=====| CreateElementVideo Class |=====----------**/
  /** Description:
   ** Class template for creating div specifically for YouTube video.
   ***********************/
  class CreateElementVideo {
    constructor() {}

    fCreateVideoDiv(videoId, appendedTo, divHeight, divWidth) {
      let divName = document.createElement("div");
      divName.id = videoId; //set id
      let divClass = $("." + videoId + "Class"); //get class
      let divId = $("." + videoId); //get id
      fDivStyle(divClass, divHeight, divWidth, "red");
      $(divName).appendTo(appendedTo);
    }
  }

  /**----------=====| CreateElementA Class |=====----------**/
  /** Description:
   ** Class template for creating basic "a" tag.
   ***********************/
  class CreateElementAny {
    constructor() { //elemNameClass, elemNameId, divName) {
      //this.InstanceVarOrProperty = instanceVar;
      //this.RightColumn           = rightColumn;
      //this.LeftColumn            = columnDiv;
      //this.ElemNameClass;// = elemNameClass;
      //this.ElemNameId;//    = elemNameId;
      //this.DivName;// = divName;
      //console.log (`this.ElemNameClass: ${this.ElemNameClass}`); //undefined
      //console.log (`elemNameId: ${elemNameId}`); //undefined
      /**---------- To access these properties outside, use classInstance.property ----------**/
    }

    /** Generic method for creating a tag element **/
    fCreateTag(tagType, carouselName, title, counter, appendedTo) {
      let divName = document.createElement(tagType);
      divName.id = title + "Id_" + counter; //set id
      divName.className = carouselName; //title + "Class";
      divName.href = "#modalCarousel";
      //let divNameId     = $ ("#" + title + "Id_" + counter); //get id
      $(divName).appendTo(appendedTo);

    /*if (tagType === "a") {
     divName.href = "#modalCarousel"
     } else {
     tagType
     }*/
    }
  }
  /**----------=====| END OF CLASS DECLARATIONS |=====----------**/

  const projectContainer = new ProjectDiv();
  const columnDiv = new ColumnDiv();
  //let rightColumn = new ColumnDiv ();
  //let imgContainer = new ColumnDiv ();
  const imgDiv = new ImgDiv();
  const textDiv = new TextContent();

  const tagElement = new CreateElementAny();
  const rightArrowShader = new CreateElementAny();
  const leftArrow = new CreateElementAny();
  const rightArrow = new CreateElementAny();

  const youTubeVideo = new CreateElementVideo();

  /*let titolo             = "FilipinasProj";
   let leftTitolo         = "XXXFilipinasProjLeftCol";
   let rightTitolo        = "XXXFilipinasProjRightCol";
   let imgContainerTitolo = "FilipinasImgContainr";

   let counter            = 0;
   //let projContainerIds;
   let projLeftColDivIds;
   let projRightColDivIds;
   let imgContainerDivIds;
   //let leftShaderIds;
   //let rightShaderIds;*/

  const imgDivTitolo = "FilipinasImgDiv";


  /**----------===| CONSOLE LOG TEMPLATE FOR EACH MODULE |===----------**
  ** Webpack add additional headers that amounts to 54 lines of code
  ** ONLY WORKS HERE!
  **------------------------------------------------------------------------------------**/
  // console.log(`
  //   codeArchitecture_X.js lineNumber: ${(new Error).lineNumber - 54}
  //   imgDivTitolo: ${imgDivTitolo}
  // `);

  /*********************( PROMISE AJAX • START •  JSON )*********************/
  if (window.Promise) {
    console.log('Promise found');
  }

  /**----------===| Additional height for image description but not video |===----------**
  **  This variable is also called in the images looping section |===-------------------**/
  let additionalHeight;

  let arbitraryNum = 100;

  let date = new Date();
  console.log(date)

  let newImageRightColmWidth;

  //let rightShaderIds;

  //TEST
  let fNxtPrvColumns = function(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth) {
    nxtPrev2Columns.fNextPreviousTwoColumnsClass(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth);
  };

  /**----------------------------------------------------------------------------------------------**/
  /**--------------------============| ~ PROMISE • AJAX • JSON ~  |============--------------------**/
  /**----------------------------------------------------------------------------------------------**/

  //  let kounter = 0;
  console.log(`
  /**|======================================================|**/
  /**|                        PROMISE:                      |**/
  /**|                      AJAX • JSON                     |**/
  /**|======================================================|**/
  `);
  const fRunAjax = () => {
    console.log("fRunAjax:===-------------•");
    /*$.ajax ({
     url     : "./src/json/ajaxData2_simple.json",
     type    : "GET",
     dataType: "json",
     cache   : "false",
     success : function (data) {
     console.log ("data: ", data);*/
    //let promise = $.get("./jsX/json/ajaxData2_EvenSimpler.json");
    //let promise = $.get("./jsX/json/ajaxData2_EvenSimpler.json");
    let promise = $.get("./jsX/json/ajaxData2_1Project.json");
    promise.then(function(data) { //})
      let j1 = 0;
      let j2 = 0;
      let j3 = 0;

      console.log(`
      /**|===============================|**/
      /**|      SECTIONS JSON LOOP       |**/
      /**|===============================|**/
      `);
      for (let sect of data.GDSite) {
        j1++;
        aSectionsCount[aSectionsCount.length] = sect;
        console.log(`
          <•----------------------------------•>
          aSectionsCount.length:j1 :  ${aSectionsCount.length}
          ${sect.title}
          <•----------------------------------•>
          `);
        /**----------===| INVOKE SECTION COLUMNS |===----------**/
        twoColumnsHeaderSection.fTwoColumns(sect.headerRightColumnPercent, arbitraryNum, arbitraryNum);
        /**----------===| push to array |===----------**/
        aSectionsRightColumnPercent[aSectionsRightColumnPercent.length] = sect.headerRightColumnPercent;

        /**----------===| CREATE SECTION HEADER CONTAINER |===----------------------------------------**/
        sectionHeaderContainer.fCreateBasicElement(sect.title, j1, "sectionHeaderClass", gdContainer);
        /**----------===| Sections Header: Container Ids |===----------**/
        let sectDivIds = $("#" + sect.title + j1);
        /**s----------===| Basic CSS: (id, height, width) |===----------**/
        fBasicStyle(sectDivIds, "auto", gdContainerWidth);
        /**----------===| push to array |===----------**/
        aSectionHeaders[aSectionHeaders.length] = sectDivIds;

        /**----------===| CREATE HEADER LEFT COLUMN |===------------------------------------------------------------**/
        sectionHeaderContainer.fCreateBasicElement(sect.title + "_Left", j1, "sectionHeaderLeftColmnClass", sectDivIds);
        /**----------===| Left Column: Ids |===----------**/
        let sectLeftIds = $("#" + sect.title + "_Left" + j1);
        /**s----------===| Left Column: Basic CSS |===----------**/
        fBasicStyle(sectLeftIds, arbitraryNum, twoColumnsHeaderSection.LeftColumn);
        /**----------===| push to array |===----------**/
        aSectionHeadrLeftColmn[aSectionHeadrLeftColmn.length] = sectLeftIds;

        /**----------===| CREATE HEADER RIGHT COLUMN |===-------------------------------------------------------------**/
        sectionHeaderContainer.fCreateBasicElement(sect.title + "_Right", j1, "sectionHeaderRightColmnClass", sectDivIds);
        /**----------===| Sections Header Right Column: Ids |===----------**/
        let sectRightIds = $("#" + sect.title + "_Right" + j1);
        /**s----------===| Sections Header Right Column: Basic Style |===----------**/
        fBasicStyle(sectRightIds, "auto", twoColumnsHeaderSection.RightColumn);
        /**----------===| push to array use for animation |===----------**/
        aSectionHeadrRightColmn[aSectionHeadrRightColmn.length] = sectRightIds;
        /**----------===| Sections Header Title Text |===----------**/
        sectionHeaderText.fBasicTextContent(sect.title + "_Text", j1, "sectionHeaderTxtContentClass", sectRightIds, sect.sectionTitle);
        /**----------===| Sections Header Title Text: Ids |===----------**/
        let sectionTitleIds = $("#" + sect.title + "_Text" + j1);
        /**s----------===| Sections Header Title Text: Basic Style |===----------**/
        fBasicStyle(sectionTitleIds, "auto", twoColumnsHeaderSection.RightColumn);
        /**----------===| push to array use for animation |===----------**/
        aSectionHeadrTitles[aSectionHeadrTitles.length] = sectionTitleIds;


        console.log(`
        /**|===============================|**/
        /**|      PROJECTS JSON LOOP       |**/
        /**|===============================|**/
        `);
        for (let proj of sect.projects) {
          j2++;
          /**----------===| Divider tag for DOM and style inspection in the browser dev view for testing |===----------**/
          tagElement.fCreateTag("i", "Divider:-------------------====•", proj.title, j2, gdContainer);
          /**----------===| PUSH TO ARRAY: PROJECT COUNT |===----------**/
          aProjectsCount[aProjectsCount.length] = proj;

          console.log(`
            <•----------------------------------•>
            aProjectsCount.length:j2 :  ${aProjectsCount.length}
            ${proj.title}
            <•----------------------------------•>
            `);
          /**----------===| SMALLEST SCREEN QUERIE |===----------**/
          /*if (gdContainerWidth <= 500) {
           proj.imgRightColumnPercent = 100;
           } else {
           proj.imgRightColumnPercent = proj.imgRightColumnPercent;
           }*/
          /**----------===| End Smallest Screen Querie |===----------**/

          /**----------===| INVOKE PROJECT COLUMNS |===----------**/
          twoColumnsImgProjects.fTwoColumns(proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight);
          /**----------===| PUSH TO ARRAY: PROJECT RIGHT COLUMNS |===----------**/
          aProjectRightColumnPercent[aProjectRightColumnPercent.length] = proj.imgRightColumnPercent;
          aImagesOrigWidth[aImagesOrigWidth.length] = proj.imagesWidth;
          aImagesOrigHeight[aImagesOrigHeight.length] = proj.imagesHeight;

          /**----------===| PROJECT IMAGE CONTAINER |===----------**/
          projectBasicContainer.fCreateBasicElement(proj.title + "_ProjContainer", j2, "projectContainerClass", gdContainer);
          /**----------===| Project Container Ids |===----------**/
          let projContainerIds = $("#" + proj.title + "_ProjContainer" + j2);
          /**p----------===| Project Container: Basic Style |===----------**/
          fBasicStyle(projContainerIds, "auto", gdContainerWidth); // ID, HEIGHT, WIDTH
          /**----------===| push to array use for animation |===----------**/
          aProjContainerIds[aProjContainerIds.length] = projContainerIds;

          /**----------===| PROJECT IMAGE CONTAINER: LEFT COLUMN |===----------**/
          projectBasicContainer.fCreateBasicElement(proj.title + "_Left", j2, "projectLeftColmnClass", projContainerIds);
          /**----------===| Left Column Ids |===----------**/
          let projContainrLeftColDivIds = $("#" + proj.title + "_Left" + j2);
          /**p----------===| Left Column: Basic Style |===----------**/
          fBasicStyle(projContainrLeftColDivIds, "100px", twoColumnsImgProjects.LeftColumn); // other css properties: ".projectLeftColmnClass" in css file.
          /**----------===| push to array |===----------**/
          aProjLeftDivIds[aProjLeftDivIds.length] = projContainrLeftColDivIds;

          /**----------===| PROJECT IMAGE CONTAINER: RIGHT COLUMN |===----------**/
          /** function parameters:(Id, Class, appendTo)
          **-----------------------------------------------------------------------------------------------------**/
          projectBasicContainer.fCreateBasicElement(proj.title + "_ProjRight", j2, "projectRightColmnClass", projContainerIds);
          /**----------===| Right Column: Ids |===----------**/
          let projRightColDivIds = $("#" + proj.title + "_ProjRight" + j2);
          /**----------===| Right Column: Basic CSS |===----------------------------------**/
          fBasicStyle(projRightColDivIds, twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn);
          /**----------===| push ids to array: images display |===----------**/
          aProjRightDivIds[aProjRightDivIds.length] = projRightColDivIds;
          /**----------===| Image Fluid-Container Ids: scope declaration |===----------**/

          //let imageContainerIds;
          let imageFluidContainerWidth;

          /**----------===| PROJECT IMAGE DISPLAY PREFERENCES: IMAGE OR VIDEO |===----------**/
          //if (proj.displayType) { //} === "image") {
          additionalHeight = 60;
          /**----------===| PROJECT RIGHT COLUMN IMAGE FLUID-CONTAINER WIDTH |===----------**/
          imageFluidContainerWidth = twoColumnsImgProjects.RightColumn * (proj.images.length + 1);

          aProjImagesCount[aProjImagesCount.length] = proj.images.length + 1;
          console.log("aProjImagesCount.length: j2 ", aProjImagesCount.length);
          console.log("proj.images.length + 1: j2 ", proj.images.length + 1);

          projectBasicContainer.fCreateBasicElement(proj.title + "_FluidContainer_", j2, "projectImageFluidContainerClass", projRightColDivIds);
          /**----------===| PROJECT RIGHT COLUMN CONTAINER: IDS |===----------**/
          let imageContainerIds = $("#" + proj.title + "_FluidContainer_" + j2);
          /**----------===| push to array |===----------**/
          aImageFluidContainerIds[aImageFluidContainerIds.length] = imageContainerIds;

          /**p----------===| Project Container Right Column: Basic CSS |===----------**/
          fBasicStyle(imageContainerIds, twoColumnsImgProjects.NewHeight + additionalHeight, imageFluidContainerWidth);

          /**----------===| push to array |===----------**/
          aImageFluidContainerWidth[aImageFluidContainerWidth.length] = imageFluidContainerWidth;
          aImageFluidContainerHeight[aImageFluidContainerHeight.length] = twoColumnsImgProjects.NewHeight + additionalHeight;

          /**----------===| CAROUSEL CONTROL: LEFT |===----------**/
          tagElement.fCreateTag("a", "carousel-control left", "leftCarousel", j2, projRightColDivIds);
          let leftShaderIds = $("#leftCarouselId_" + j2); //get ids
          /**----------===| push to array |===----------**/
          aLeftShaderIds[aLeftShaderIds.length] = leftShaderIds; //push to array
          /**----------===| CAROUSEL CONTROL: LEFT ARROW |===----------**/
          tagElement.fCreateTag("i", "glyphicon glyphicon-chevron-left", "leftArrow", j2, leftShaderIds);

          /**----------===| CAROUSEL CONTROL: RIGHT |===----------**/
          tagElement.fCreateTag("a", "carousel-control right", "rightCarousel", j2, projRightColDivIds);
          let rightShaderIds = $("#rightCarouselId_" + j2); //get ids
          /**----------===| push to array |===----------**/
          aRightShaderIds[aRightShaderIds.length] = rightShaderIds;
          /**----------===| CAROUSEL CONTROL: RIGHT ARROW |===----------**/
          tagElement.fCreateTag("i", "glyphicon glyphicon-chevron-right", "rightArrow", j2, rightShaderIds);

          /**----------===| Instance: Imported NextPreviousClass |===----------**/
          //let imgWidth = twoColumnsImgProjects.RightColumn;
          /**----------===| On first enter the site all left image arrows are hidden |===----------**/
          leftShaderIds.hide();
          /**----------===| IMPORTED CLASS: ACTIVATES THE IMAGES NAV |===----------**/
          //fNextPreviousClass(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth)
          //newImageRightColmWidth = twoColumnsImgProjects.RightColumn;
          //let kounter = 0;

          //aKounter[aKounter.length] = kounter++;

          // static next previous navs
          // fluidContainerW = twoColumnsImgProjects.RightColumn * (proj.images.length + 1);
          // imageW = twoColumnsImgProjects.RightColumn;

          // ES6 Version
          //nextPreviousImage.fNextPreviousClass(rightShaderIds, leftShaderIds, imageContainerIds, twoColumnsImgProjects.RightColumn * (proj.images.length + 1), twoColumnsImgProjects.RightColumn);

          //console.log("twoColumnsImgProjects.RightColumn:j2 ", twoColumnsImgProjects.RightColumn);

          //console.log("rightShaderIds:j2 ", rightShaderIds);
          console.log("aRightShaderIds[0]:j2 ", aRightShaderIds[0]);

          // nxtPrev2Columns.fNextPreviousTwoColumnsClass(rightShaderIds, leftShaderIds, imageContainerIds, twoColumnsImgProjects.RightColumn * (proj.images.length + 1), twoColumnsImgProjects.RightColumn);

          //TEST: Single array member : Declared once :
          //the fluid-container needs to be dynamic after this declaration
          // to get the correct left positioning
          // If this instance is declared in animation
          // it can't track the correct amount of click

          a2ColImgProjRightCol[a2ColImgProjRightCol.length] = twoColumnsImgProjects.RightColumn;
          a2ColImgProjCount[a2ColImgProjCount.length] = (proj.images.length + 1);


          // fNxtPrvColumns(
          //   aRightShaderIds[0], aLeftShaderIds[0],
          //   aImageFluidContainerIds[0],
          //   a2ColImgProjRightCol[0] * a2ColImgProjCount[0],
          //   a2ColImgProjRightCol[0]);

          nxtPrev2Columns.fNextPreviousTwoColumnsClass(
            aRightShaderIds[0], aLeftShaderIds[0],
            aImageFluidContainerIds[0],
            a2ColImgProjRightCol[0] * a2ColImgProjCount[0],
            a2ColImgProjRightCol[0]);

          //animFunct.fXSlider(aImageFluidContainerIds[0], -(twoColumnsImgProjects.RightColumn * nxtPrev2Columns.Num));

          //TEST j2
          console.log(nxtPrev2Columns.String); //access to the method
          console.log(nxtPrev2Columns.RightArrow);
          console.log(nxtPrev2Columns.Num);
          console.log("nxtPrev2Columns.ImgWidth:j2 ", nxtPrev2Columns.ImgWidth);

          //nextPreviousClassTwoColumns.fNextPreviousTwoColumnsClass();
          // console.log("nextPreviousImage.Num:j2 ", nextPreviousImage.Num);
          // console.log("nextPreviousImage.Kontainer:j2 ", nextPreviousImage.Kontainer);
          // aKontainer[aKontainer.length] = nextPreviousImage.Kontainer;
          // console.log("aKontainer:j2 ", aKontainer[j2]);
          // aKounter[aKounter.length] = nextPreviousImage.Num;
          //nextPreviousNumero.fCountNum(nextPreviousImage.Num);

          //nextPreviousNumero.fCountNum();
          //console.log(j2, ": nextPreviousNumero.Numero:j2anim ", nextPreviousNumero.Numero);

          //nextPreviousCounter.fThisNum();
          //console.log(j2, "nextPreviousCounter.Kounter:x ", nextPreviousCounter.Kounter);

          /**----------===| DISPLAY TYPE: VIDEO |===----------**/
          // } else {
          //   imageFluidContainerWidth = twoColumnsImgProjects.RightColumn;
          //   /**----------===| Project Container Right Column |===----------**/
          //   //projectBasicContainer.fCreateBasicElement(proj.title + "_RightVideo", j2, "projectRightColmnVideoClass", projContainerIds);
          //   /**----------===| Project Container Right Column: Ids |===----------**/
          //   //let projRightColVideoIds = $("#" + proj.title + "_RightVideo" + j2);
          //   /**----------===| Project Container Right Column: Basic CSS |===----------**/
          //   fBasicStyle(projRightColDivIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn);
          //   /**----------===| push ids to array: images display |===----------**/
          //   //aProjRightDivIds[aProjRightDivIds.length] = projRightColDivIds;
          //   /**----------===| VIDEO HEIGHT CSS |===----------**/
          //   projRightColDivIds.css({
          //     //"background-color": "black",
          //     "height": twoColumnsImgProjects.NewHeight
          //   });
          // //////TEMP!////// youTubeVideo.fCreateVideoDiv("video-placeholder", projRightColDivIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn);
          //}

          /**----------==========| PROJECT PARAGRAPHS |==========----------**/
          /**----------===| Project Paragraph Columns |===----------**/
          twoColumnsParagProjects.fTwoColumns(proj.paragraphRightColumnPercent, 0, 0);

          aParagraphRightColumnPercent[aParagraphRightColumnPercent.length] = proj.paragraphRightColumnPercent;
          //console.log("proj.paragraphRightColumnPercent: ", proj.paragraphRightColumnPercent, j2);
          //console.log("aParagraphRightColumnPercent: ", aParagraphRightColumnPercent, j2);
          aParagraphLeftColumnWidth[aParagraphLeftColumnWidth.length] = twoColumnsParagProjects.LeftColumn;
          //console.log("twoColumnsParagProjects.LeftColumn: ", twoColumnsParagProjects.LeftColumn, j2);
          /**----------===| Project Paragraph Container |===----------**/
          projectBasicContainer.fCreateBasicElement(proj.title + "_Paragraph", j2, "paragraphContainerClass", gdContainer);
          /**----------===| Project Paragraph Container: Ids |===----------**/
          let projParagDivIds = $("#" + proj.title + "_Paragraph" + j2);
          /**----------===| Project Paragraph Container: Basic CSS |===----------**/
          fBasicStyle(projParagDivIds, "auto", gdContainerWidth);

          /**----------===| Project Paragraph Container: Push to array |===----------**/
          aParagraphContainer[aParagraphContainer.length] = projParagDivIds;

          /**----------===| Project Paragraph Left Column |===----------**/
          projectBasicContainer.fCreateBasicElement(proj.title + "_ParagLeftColmn", j2, "paragraphLeftColumnClass", projParagDivIds);
          /**----------===| Project Paragraph Left Column: Ids |===----------**/
          let paragLeftColDivIds = $("#" + proj.title + "_ParagLeftColmn" + j2);

          /**----------===| Project Paragraph Left Column: Basic CSS |===----------**/
          fBasicStyle(paragLeftColDivIds, "100px", twoColumnsParagProjects.LeftColumn);

          /**----------===| Project Paragraph Left Column:: Push to array |===----------**/
          aProjParagLeftDivIds[aProjParagLeftDivIds.length] = paragLeftColDivIds;
          //console.log("paragLeftColDivIds, aProjParagLeftDivIds: ", paragLeftColDivIds, aProjParagLeftDivIds);
          /**----------===| Project Paragraph Right Column |===----------**/
          projectBasicContainer.fCreateBasicElement(proj.title + "_ParagRightColmn", j2, "paragraphRightColumnClass", projParagDivIds);
          /**----------===| Project Paragraph Right Column: Ids |===----------**/
          let paragRightColDivIds = $("#" + proj.title + "_ParagRightColmn" + j2);
          aProjParagRightDivIds[aProjParagRightDivIds.length] = paragRightColDivIds;
          /**----------===| Project Paragraph Right Column: Basic CSS |===----------**/
          fBasicStyle(paragRightColDivIds, "auto", twoColumnsParagProjects.RightColumn);

          /**----------===| Project Paragraph Right Column:: Push to array |===----------**/
          aParagraphRightColumnWidth[aParagraphRightColumnWidth.length] = twoColumnsParagProjects.RightColumn;
          //console.log("aParagraphRightColumnWidth: ", aParagraphRightColumnWidth);
          /**----------===| Project Title |===----------**/
          textDiv.fCreateTextDiv("projTitle", j2, paragRightColDivIds, proj.title);
          /**----------===| Project Sub-Title |===----------**/
          textDiv.fCreateTextDiv("projSubTitle", j2, paragRightColDivIds, proj.subTitle);
          /**----------===| Project Descriptions |===----------**/
          textDiv.fCreateTextDiv("projDescription", j2, paragRightColDivIds, proj.projDescription);

          console.log(`
          /**|===============================|**/
          /**|       IMAGES JSON LOOP        |**/
          /**|===============================|**/
          ======================================================
          `);
          for (let imgs of proj.images) {
            //console.log ("imgs-------------: ", imgs);
            j3++;
            // console.log(`
            //   <•----------------------------------•>
            //   aImagesCount.length:j3 :  ${aImagesCount.length}
            //   ${imgs.imgTitle}
            //   <•----------------------------------•>
            //   `);
            //console.log ("proj.displayType: ", proj.displayType);
            if (proj.displayType === "image") {
              /**----------===| push to array use for animation |===----------**/
              aImagesCount[aImagesCount.length] = imgs;
              //console.log("aImagesCount: ", aImagesCount);
              twoColumnsImages.fTwoColumns(proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight);
              aImagesRightColumnPercent[aImagesRightColumnPercent.length] = proj.imgRightColumnPercent;
              //aImagesOrigWidth[aImagesOrigWidth.length] = proj.imagesWidth;
              //aImagesOrigHeight[aImagesOrigHeight.length] = proj.imagesHeight;
              //console.log("aImagesHeight: ", aImagesHeight);
              //console.log("proj.imgRightColumnPercent j3: ", proj.imgRightColumnPercent);
              /**----------===| Image Creation |===----------**/
              let myImage = new Image();
              let imagesPath = "./images/" + proj.title + "/";
              myImage.src = imagesPath + imgs.imgName;
              aImages[aImages.length] = myImage.src;
              let columnHeight = twoColumnsImages.NewHeight;
              let columnWidth = twoColumnsImages.RightColumn;
              aImagesWidth[aImagesWidth.length] = twoColumnsImages.RightColumn;
              aImagesHeight[aImagesHeight.length] = twoColumnsImages.NewHeight;
              //let imageContainerIds = $("#" + proj.title + "_FluidContainer_" + j3);
              /**----------===| Image Div |===----------**/
              imageBasicDiv.fCreateBasicElement(proj.title + "_Image", j3, "imageDivClass", imageContainerIds);
              /**----------===| Image Div: Ids |===----------**/
              let imageIds = $("#" + proj.title + "_Image" + j3);
              //console.log("imageIds[j3]: ", imageIds);
              /**----------===| Image Div: CSS |===----------**/
              fBasicImageStyle(imageIds, columnHeight, columnWidth, myImage.src);
              /**----------===| push ids to array |===----------**/
              aImageIds[aImageIds.length] = imageIds;
              /**----------===| Images Description |===----------**/
              textDiv.fCreateTextDiv("imgDescription_", j3, imageIds, imgs.imgDescription);
              /*** TEST: Put this outside ajax and into a class **/
              let imageDescriptIds = $("#imgDescription_" + j3); //id = imgDescription_j3
              aImageDescriptIds[aImageDescriptIds.length] = imageDescriptIds;
              let imageDescriptClass = $(".imgDescription_Class"); // + proj.title + "_Class");
              //fImgDescriptIdStyle(imageDescriptIds, twoColumnsImgProjects.NewHeight);
              //.imgDescription_Class
              imageDescriptIds.css({
                "margin-top": twoColumnsImgProjects.NewHeight + "px"
              });
            //console.log("nextPreviousImage.Num:j3 ", nextPreviousImage.Num);
            //console.log("nextPreviousImage.Kontainer:j3 ", nextPreviousImage.Kontainer);
            } //end if

          } //end images loop
        }
      }
      console.log("************************************************");
    },
      /** promise failure **/
      function(data) {
        console.log("Request Failed!")
      }
    )
  }

  fRunAjax();
  /*********************( AJAX • END •  JSON )*********************/

  /**------------------------------------------------------**/
  /**                      STATIC EVENTS                   **/
  /**------------------------------------------------------**/
  //
  console.log(`
  /**|======================================================|**/
  /**|                      ANIMATION:                      |**/
  /**|                 ARRAY STATIC EVENTS                  |**/
  /**|======================================================|**/
  `);
  let fEventHeaders = () => {
    for (let e1 = 0; e1 < aSectionsCount.length; e1++) {
      /**----------===| INVOKE SECTION COLUMNS |===----------**/
      twoColumnsHeaderSection.fTwoColumns(aSectionsRightColumnPercent[e1], arbitraryNum, arbitraryNum);
      /**----------===| Basic CSS: (id, height, width) |===----------**/
      //fBasicStyle(aSectionHeaders[e1], "auto", gdContainerWidth);
      /**----------===| Left Column: Basic CSS |===----------**/
      fBasicStyle(aSectionHeadrLeftColmn[e1], 60, twoColumnsHeaderSection.LeftColumn);
      /**----------===| Sections Header Right Column: Basic Style |===----------**/
      //fBasicStyle(aSectionHeadrRightColmn[e1], "auto", twoColumnsHeaderSection.RightColumn);
      /**----------===| Sections Header Title Text: Basic Style |===----------**/
      //fBasicStyle(aSectionHeadrTitles[e1], "auto", twoColumnsHeaderSection.RightColumn);
      //gdContainerWidth = (gdContainer.width());
      animFunct.fAnimateHeightWidth(aSectionHeaders[e1], "auto", gdContainerWidth, animTymSlow);
      //animFunct.fAnimateHeightWidth(aSectionHeadrLeftColmn[e1], arbitraryNum, twoColumnsHeaderSection.LeftColumn, animTymFast);
      animFunct.fAnimateHeightWidth(aSectionHeadrRightColmn[e1], "auto", twoColumnsHeaderSection.RightColumn, animTymSlow);
      animFunct.fAnimateHeightWidth(aSectionHeadrTitles[e1], "auto", "auto", animTymSlow);
      // TEMP
      aSectionHeadrTitles[e1].css({
        "border-bottom": "1px solid white"
      })
    }
  }
  //fEventHeaders();

  let fEventProjects = () => {
    for (let e2 = 0; e2 < aProjectsCount.length; e2++) {
      /**----------===| INVOKE PROJECT COLUMNS |===----------**/
      twoColumnsImgProjects.fTwoColumns(aProjectRightColumnPercent[e2], aImagesOrigWidth[e2], aImagesOrigHeight[e2]);
      /**----------===| Project Container: Basic Style |===----------**/
      fBasicStyle(aProjContainerIds[e2], "auto", gdContainerWidth);
      /**----------===| Left Column: Basic Style |===----------**/
      fBasicStyle(aProjLeftDivIds[e2], "100px", twoColumnsImgProjects.LeftColumn);
      /**----------===| Right Column: Basic CSS |===----------**/
      fBasicStyle(aProjRightDivIds[e2], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn);

      //if (proj.displayType) { //} === "image") {
      additionalHeight = 60;
      /**----------===| Project Container Right Column: Basic CSS |===----------**/
      fBasicStyle(aImageFluidContainerIds[e2], twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn * aProjImagesCount[e2]);

      // ES6 Version
      //nextPreviousImage.fNextPreviousClass(aRightShaderIds[e2], aLeftShaderIds[e2], aImageFluidContainerIds[e2], twoColumnsImgProjects.RightColumn * aProjImagesCount[e2], twoColumnsImgProjects.RightColumn);

      // fNxtPrvColumns(aRightShaderIds[0], aLeftShaderIds[0],
      //   aImageFluidContainerIds[0],
      //   twoColumnsImgProjects.RightColumn * aProjImagesCount[0],
      //   twoColumnsImgProjects.RightColumn);

      // nxtPrev2Columns2.fNextPreviousTwoColumnsClass(
      //   aRightShaderIds[0], aLeftShaderIds[0],
      //   aImageFluidContainerIds[0],
      //   twoColumnsImgProjects.RightColumn * aProjImagesCount[0],
      //   twoColumnsImgProjects.RightColumn);

      a2ColImgProjRightCol[a2ColImgProjRightCol.length] = twoColumnsImgProjects.RightColumn;
      a2ColImgProjCount[a2ColImgProjCount.length] = aProjImagesCount[0];

      /**----------===| Keep the fluid container height and width synch |===----------**/
      //animFunct.fXSlider(aImageFluidContainerIds[0], -(nxtPrev2Columns.NxtPos));
      animFunct.fXSlider(aImageFluidContainerIds[0],
        -(twoColumnsImgProjects.RightColumn * nxtPrev2Columns.Num));


      // TEST e2
      console.log("e2: ", e2, "-----------------------------------");
      console.log("Right column width : e2 ", twoColumnsImgProjects.RightColumn);
      //console.log("twoColumnsImgProjects.Stringy:e2 ", twoColumnsImgProjects.Stringy);
      console.log("nxtPrev2Columns.ImgWidth:e2 ", nxtPrev2Columns.ImgWidth);
      console.log("nxtPrev2Columns.Num:e2 ", nxtPrev2Columns.Num);
      console.log("nxtPrev2Columns2.Num:e2 ", nxtPrev2Columns2.Num);
      console.log("nxtPrev2Columns.ImgContainerWidth:e2 ", nxtPrev2Columns.ImgContainerWidth);
      console.log("nxtPrev2Columns.NxtPos:e2 ", nxtPrev2Columns.NxtPos);
      console.log("nxtPrev2Columns.fluidContainerLeftPosition:e2 ", nxtPrev2Columns.fluidContainerLeftPosition);

      // console.log("aProjImagesCount.length: e2 ", aProjImagesCount.length);
      // console.log("Fluid container left position : e2 ", twoColumnsImgProjects.RightColumn * nxtPrev2Columns.Num);
      //console.log("nextPreviousImage.Num:e2 ", nextPreviousImage.Num)
      //console.log("twoColumnsImgProjects.RightColumn:e2 ", twoColumnsImgProjects.RightColumn)

      // console.log("----------------------------------------------------");
      // console.log("calculate dynamic fluid container width");
      // console.log(twoColumnsImgProjects.RightColumn);
      // console.log(twoColumnsImgProjects.ResizePercent + "%");
      // console.log(aProjImagesCount[e2]);
      // //console.log(aProjImagesCount.length);
      // console.log(twoColumnsImgProjects.RightColumn * aProjImagesCount[e2]);
      // console.log("----------------------------------------------------");

      /**----------===| Project Paragraph Columns |===----------**/
      twoColumnsParagProjects.fTwoColumns(aParagraphRightColumnPercent[e2], 0, 0);
      /**----------===| Project Paragraph Container: Basic CSS |===----------**/
      fBasicStyle(aParagraphContainer[e2], "auto", gdContainerWidth);
      /**----------===| Project Paragraph Left Column: Basic CSS |===----------**/
      fBasicStyle(aProjParagLeftDivIds[e2], "100px", twoColumnsParagProjects.LeftColumn);
      /**----------===| Project Paragraph Right Column: Basic CSS |===----------**/
      fBasicStyle(aProjParagRightDivIds[e2], "auto", twoColumnsParagProjects.RightColumn);

    }
  }
  //fEventProjects();

  console.log(`
  /**|======================================================|**/
  /**|                      ANIMATION:                      |**/
  /**|                WINDOW RESIZE FUNCTION                |**/
  /**|======================================================|**/
  `);
  let fOnWindowResize = function() {
    gdContainerWidth = (gdContainer.width());
    /***----------=====| SECTIONS ANIMATION |=====----------***/
    //console.log("SECTIONS ANIMATION: |-------------------------------•");
    //twoColumnsHeaderSection.LeftColumn;
    //twoColumnsHeaderSection.RightColumn;
    fEventHeaders();
    fEventProjects();
    // for (let i = 0; i < aSectionsCount.length; i++) {
    //   /**----------===| INVOKE SECTION COLUMNS |===----------**/
    //   twoColumnsHeaderSection.fTwoColumns(aSectionsRightColumnPercent[i], arbitraryNum, arbitraryNum);
    //   /**----------===| ANIMATE HEADERS HEIGHT & WIDTH |===----------**/
    //   animFunct.fAnimateHeightWidth(aSectionHeaders[i], "auto", gdContainerWidth, animTymSlow);
    //   animFunct.fAnimateHeightWidth(aSectionHeadrLeftColmn[i], "auto", twoColumnsHeaderSection.LeftColumn, animTymFast);
    //   animFunct.fAnimateHeightWidth(aSectionHeadrRightColmn[i], "auto", twoColumnsHeaderSection.RightColumn, animTymSlow);
    // }
    /***----------=====| PROJECTS ANIMATION |=====----------***/
    //console.log("PROJECTS ANIMATION: |-------------------------------------------------------------------------------------•");

    //
    // for (let i2 = 0; i2 < aProjectsCount.length; i2++) {
    //
    //   /**----------===| INVOKE PROJECTS COLUMNS |===----------**/
    //   twoColumnsImgProjectsAnim.fTwoColumns(aProjectRightColumnPercent[i2], aImagesOrigWidth[i2], aImagesOrigHeight[i2]);
    //
    //   //console.log(i2, ": Right Column Width: ", twoColumnsImgProjectsAnim.RightColumn);
    //
    //   /**----------===| ANIMATE PROJECT IMAGE FLUID-CONTAINER HEIGHT & WIDTH |===----------**/
    //   //nextPreviousImage.fNextPreviousClass(rightShaderIds, leftShaderIds, imageContainerIds, twoColumnsImgProjects.RightColumn * (proj.images.length + 1), twoColumnsImgProjects.RightColumn);
    //   /**----------===| IMPORTED CLASS: ACTIVATES THE IMAGES NAV |===----------**/
    //   //fNextPreviousClass(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth)
    //   //nextPreviousImage2.fNextPreviousClass(aRightShaderIds[i2], aLeftShaderIds[i2], aImageFluidContainerIds[i2], twoColumnsImgProjectsAnim.RightColumn * aProjImagesCount[i2], twoColumnsImgProjectsAnim.RightColumn);
    //
    //   //console.log(i2, "aProjImagesCount[i2]: ", aProjImagesCount[i2]);
    //   //console.log("twoColumnsImgProjects.RightColumn * aProjImagesCount[i2]: ", twoColumnsImgProjects.RightColumn * aProjImagesCount[i2]);
    //   //console.log(i2, ": twoColumnsImgProjectsAnim.RightColumn: ", twoColumnsImgProjectsAnim.RightColumn);
    //   /**-----{ fXSlider: Slides the image container in the horizontal position }-----**/
    //   /** move the fluid-container to the CURRENT right column width value
    //       multiplied by how many times it has been clicked **/
    //   //console.log(i2, "nextPreviousImage2.Num: ", nextPreviousImage2.Num);
    //   //console.log(i2, "nextPreviousImage2.NxtPos: ", nextPreviousImage2.NxtPos);
    //   //console.log(i2, "nextPreviousImage2.Num: ", nextPreviousImage2.Num);
    //   //console.log(i2, "nextPreviousImage2.NxtPos: ", nextPreviousImage2.NxtPos);
    //   //nextPreviousCounter.fThisNum();
    //   //console.log(i2, "nextPreviousCounter.Num: ", nextPreviousCounter.Num);
    //   //console.log(i2, "nextPreviousCounter.Kounter: ", nextPreviousCounter.Kounter);
    //   //console.log("nextPreviousImage.Counter:x ", nextPreviousImage.Counter);
    //
    //   //console.log(i2, "aKounter[i2]: ", aKounter[i2]);
    //   //console.log("rightShaderIds: ", rightShaderIds);
    //
    //   //console.log("twoColumnsImgProjectsAnim.RightColumn * nextPreviousImage.Num: ", twoColumnsImgProjectsAnim.RightColumn * aProjImagesCount[i2]); //nextPreviousImage.Num);
    //   // the fluid-container x position should be: the current right column width multiplied by the number of clicks
    //
    //   /**----------===| Fluid-container dynamic left position on resize |===----------**/
    //   //x.fXSlider(elem, horizPos);
    //
    //
    //   //fluidContainerW = twoColumnsImgProjectsAnim.RightColumn * aProjImagesCount[i2]; //(proj.images.length + 1);
    //   //imageW = twoColumnsImgProjectsAnim.RightColumn;
    //
    //   animFunct.fXSlider(aImageFluidContainerIds[i2], -(twoColumnsImgProjectsAnim.RightColumn * nextPreviousImage.Num));
    //   //animFunct.fXSlider(aKontainer[i2], -(twoColumnsImgProjectsAnim.RightColumn * aKounter[i2]));
    //   //animFunct.fXSlider(nextPreviousImage.Kontainer, -(twoColumnsImgProjectsAnim.RightColumn * nextPreviousImage.Num));
    //
    //   //console.log("-(twoColumnsImgProjectsAnim.RightColumn * nextPreviousImage.Num): ", -(twoColumnsImgProjectsAnim.RightColumn * nextPreviousImage.Num))
    //   //console.log(i2, ": twoColumnsImgProjects.RightColumn: ", twoColumnsImgProjects.RightColumn);
    //   //console.log(i2, ": twoColumnsImgProjectsAnim.RightColumn: ", twoColumnsImgProjectsAnim.RightColumn);
    //   // console.log(i2, ": nextPreviousImage.Num:i2anim ", nextPreviousImage.Num);
    //   // console.log(i2, ": nextPreviousImage.Kontainer:i2anim ", nextPreviousImage.Kontainer);
    //   // console.log(i2, ": nextPreviousImage.KontainerWidth:i2anim ", nextPreviousImage.KontainerWidth);
    //   // console.log(i2, ": nextPreviousImage.ImageWidth:i2anim ", nextPreviousImage.ImageWidth);
    //
    //   //console.log("aKontainer:i2 ", aKontainer[i2]);
    //   //console.log("aKounter:i2 ", aKounter[i2]);
    //
    //
    //   //console.log(i2, ": nextPreviousNumero.Numero:i2anim ", nextPreviousNumero.Numero);
    //   //console.log(i2, ": nextPreviousNumero.String:i2anim ", nextPreviousNumero.String);
    //   //console.log(i2, ": nextPreviousImage2.Num: ", nextPreviousImage2.Num);
    //
    //   //console.log("aImageFluidContainerIds[i2]: ", aImageFluidContainerIds[i2]);
    //   //console.log("aProjImagesCount[i2]: ", aProjImagesCount[i2]);
    //
    //   // aImageFluidContainerIds[i2].css({
    //   //   "left": -twoColumnsImgProjectsAnim.RightColumn,
    //   //   "top": "100px",
    //   //   "width": twoColumnsImgProjectsAnim.RightColumn
    //   // });
    //
    //   /**----------===| Dynamic height & width |===----------**/
    //   animFunct.fAnimateHeightWidth(aImageFluidContainerIds[i2], twoColumnsImgProjectsAnim.NewHeight + additionalHeight, twoColumnsImgProjectsAnim.RightColumn * aProjImagesCount[i2], animTymFast);
    //
    //   /**----------===| ANIMATE PROJECT HEIGHT & WIDTH |===----------**/
    //   //newImageRightColmWidth = twoColumnsImgProjectsAnim.RightColumn;
    //   //fLog("newImageRightColmWidth: ", newImageRightColmWidth);
    //   //console.log("newImageRightColmWidth: ", newImageRightColmWidth);
    //   animFunct.fAnimateHeightWidth(aProjContainerIds[i2], "auto", gdContainerWidth, animTymSlow);
    //   animFunct.fAnimateHeightWidth(aProjLeftDivIds[i2], "auto", twoColumnsImgProjectsAnim.LeftColumn, animTymSlow);
    //   animFunct.fAnimateHeightWidth(aProjRightDivIds[i2], twoColumnsImgProjectsAnim.NewHeight + additionalHeight, twoColumnsImgProjectsAnim.RightColumn, animTymSlow);
    //   console.log(i2, "--------------------------------------------");
    //   /**----------===| INVOKE PROJECTS PARAGRAPH COLUMNS |===----------**/
    //   twoColumnsParagProjects.fTwoColumns(aParagraphRightColumnPercent[i2], arbitraryNum, arbitraryNum);
    //   /**----------===| ANIMATE PROJECT PARAGRAPH HEIGHT & WIDTH |===----------**/
    //   animFunct.fAnimateHeightWidth(aParagraphContainer[i2], "auto", gdContainerWidth, animTymSlow);
    //   animFunct.fAnimateHeightWidth(aProjParagLeftDivIds[i2], "auto", twoColumnsParagProjects.LeftColumn, animTymFast);
    //   animFunct.fAnimateHeightWidth(aProjParagRightDivIds[i2], "auto", twoColumnsParagProjects.RightColumn, animTymSlow);
    // }
    //

    /***----------=====| IMAGES ANIMATION |=====----------***/
    //console.log("IMAGES ANIMATION: |-------------------------------•");
    for (let i3 = 0; i3 < aImagesCount.length; i3++) {
      /**----------===| INVOKE PROJECTS IMAGES COLUMNS |===----------**/
      twoColumnsImagesAnim.fTwoColumns(aImagesRightColumnPercent[i3], aImagesWidth[i3], aImagesHeight[i3]);
      /***----------=====| Images divs height and width |=====-------------------***/
      animFunct.fAnimateHeightWidth(aImageIds[i3], twoColumnsImagesAnim.NewHeight, twoColumnsImagesAnim.RightColumn, animTymSlow);

      aImageDescriptIds[i3].css({
        "margin-top": twoColumnsImagesAnim.NewHeight + "px"
      });

      //animFunct.fXSlider(aImageFluidContainerIds[i2], -(twoColumnsImgProjectsAnim.RightColumn * nextPreviousImage.Num));
      // console.log("-(twoColumnsImgProjectsAnim.RightColumn * nextPreviousImage.Num): ", -(twoColumnsImgProjectsAnim.RightColumn * nextPreviousImage.Num))
      // console.log(i2, ": twoColumnsImgProjects.RightColumn: ", twoColumnsImgProjects.RightColumn);
      // console.log(i2, ": twoColumnsImgProjectsAnim.RightColumn: ", twoColumnsImgProjectsAnim.RightColumn);
      //console.log(i3, ": nextPreviousImage.Num:i3 ", nextPreviousImage.Num);
      //console.log(i3, ": nextPreviousImage2.Num:i3 ", nextPreviousImage2.Num);


    } /**----===| END IMAGES ANIMATION: |-------------------------------•**/
  }; // End fOnWindowResize

  //fOnWindowResize();

  /**-----------=====| fInitMediaQueries Function |=====-----------**/
  /** Function to initialize fMediaQueries function on load
   *  TweenMax.ticker is used to add and remove the event listener
   *  ix: counter
   ****************************************************************/
  /************ ANIMATION ENGINE ************/
  // var tMx = TweenMax;
  // //  var easeSine = Sine.easeOut;
  // //  var easePower = Power3.easeOut;
  // //  var animTymSlow = .5;
  // //  var zeroTym = 0;
  // var ix = 0;
  // var fInitMediaQueries = function() {
  //   tMx.ticker.addEventListener("tick", fTimer);
  //   function fTimer() {
  //     /**-----===( Load Media Queries )===-----**/
  //     //fOnWindowResize();
  //     $(window).on('resize', fOnWindowResize);
  //     ix++;
  //     console.log("ix: ", ix);
  //     if (ix >= 1) {
  //       fRemoveEvntListnr(fTimer);
  //     }
  //   }
  // };
  // var fRemoveEvntListnr = function(myFunct) {
  //   tMx.ticker.removeEventListener("tick", myFunct);
  // };
  //
  // fInitMediaQueries();
  /**-----------=====| End fInitMediaQueries |=====-----------**/

  $(window).on('resize', fOnWindowResize);
  /**----------=====| End Window Resize Function |=====----------**/

  // let sampleFunction = function() {
  //   console.log("Sample Function");
  // }

  /**-----------=====| EXPORTS |=====-----------**/
  /** DESCRIPTIONS:
   ** TWO COLUMN CALCULATION
   ** Webpack: module.exports
   **----------------------------------------------------------------**/
  module.exports.TwoColumnsClass = TwoColumnsClass;
  //module.exports.sampleFunction = sampleFunction;

}());

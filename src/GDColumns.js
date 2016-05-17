/***********************************************************************
 * Created by Odee on 3/13/16.
 * Using as a test template for ES6 and Webpack on 4/20/16
 * Checking dependencies and behavior when using with module.exports
 ***********************************************************************/
(function () { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation
  'use strict';
  console.log ("GDCol: •-----=====( GDColumns.js || Module )=====-----•");

  /**-----------=====| TweenMax Reference Variables |=====-----------**/
  var tMx       = TweenMax;
  var easeSine  = Sine.easeOut;
  var easePower = Power3.easeOut;
  var animTym   = .5;

  /**-----------=====| Miscellaneous Counter |=====-----------**/
  /**--{ ix: TweenMax.ticker Counter }--**/
  var ix = 0;

  /**-----------=====| Browser Window Dimensions Reference Variables |=====-----------**/
  var windowInnerWidth  = window.innerWidth;
  var windowInnerHeight = window.innerHeight;
  //console.log ("GDCol: windowInnerWidth: ", windowInnerWidth);
  var winHeight = $ (window).height ();

  /**-----------=====| Bootstrap Container Inner Width Reference Variables |=====-----------**/
  var container      = $ (".container");
  var padLeftRight   = 30;
  var containerWidth = (container.width ()) + padLeftRight; //Move to fMediaQueries later
  ////console.log ("GDCol: containerWidth: ", containerWidth);

  /**-----------=====| Devices Viewport Width |=====-----------**/
  var largeDevices  = 1200;
  var mediumDevices = 992;
  var smallDevices  = 640;

  /**-----------=====| Poster Area |=====-----------**/
  var aPosterImages = ["intro_02", "intro_03", "intro_04"]; //"intro_00", "intro_01",

  var r1PosterArea    = $ ("#r1PosterArea");
  /** posterWinHeight variable
   * When use for testing, divide the winHeight by any number to
   * decrease the poster height.
   * For production, just take off the divider.
   ***************************************************************/
  var posterWinHeight = winHeight / 4;
  /********************************~********************************/
  r1PosterArea.css ({"height": posterWinHeight}); //Fills the whole viewport on load.
  //r1PosterArea.css ({"background": "url('./images/postersIntro/intro_04.jpg') no-repeat;"});
  /**-----====={ Load poster image randomly }=====-----**/
  var randImg  = aPosterImages[Math.floor (aPosterImages.length * Math.random ())];
  var imageURL = "./images/postersIntro/" + randImg + ".jpg";
  r1PosterArea.css ('background-image', 'url(' + imageURL + ')');

  /*var width = ownImg1Id.clientWidth;
   var height = ownImg1Id.clientHeight;
   //console.log("image width: ",width, " image height: ", height);*/

  var fLogoContainer = function () {
    var logoContainer       = $ (".logoContainer");
    var logoContainerHeight = logoContainer.height ();
    var heightPercentage    = posterWinHeight * .05;
    ////console.log ("GDCol: winHeight: ", winHeight);
    ////console.log ("GDCol: heightPercentage: ", heightPercentage);
    //logoContainer.css ({"top": (winHeight + (logoContainerHeight - 300))});
    logoContainer.css ({"marginTop": posterWinHeight - (logoContainerHeight + heightPercentage)});
  };
  /**-----{ fLogoContainer: Adjust the logo container's top position }-----**/
  fLogoContainer ();

  /**-----=====================| FUNCTIONS |=====================-----**/
  /**-----------=====| fImageHeightWidth Function |=====-----------**/
  /** Function for image height and width
   *  imgsArray: images array
   *  ht: image height
   *  wt: image width
   ****************************************************************/
  var fImageHeightWidth = function (imgsArray, ht, wt) {
    /**----( Setting array member's heights and widths )----**/
    for (var i = 0; i < imgsArray.length; i++) {
      fAnimateHeightWidth (imgsArray[i], ht, wt); //rowImgRightColmnWidth);
      ////console.log ("GDCol: imgsArray[i]: ", imgsArray[i]);
    }
  };
  /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
  /** Animates element's height and width
   ****************************************************************/
  var fAnimateHeightWidth = function (elem, eHeight, eWidth) {
    //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
    tMx.to (elem, animTym, {height: (eHeight + "px"), width: eWidth, ease: easePower});
  };
  /**-----------=====| fXSlider Function |=====-----------**/
  /** Animates element's left positions
   *  Use the attribute "left" instead of the matrix "x" (translateX())
   *  as a key and the horizPos as value.
   *  http://greensock.com/forums/topic/6963-tweenmax-tweening-css-x-vs-left/
   ****************************************************************/
  var fXSlider = function (elem, horizPos) {
    //tMx.to (elem, animTym, {x: horizPos, ease: easePower});
    //tMx.to (elem, animTym, {css: {x: horizPos}, ease: easePower});
    //tMx.to (elem, animTym, {css: {left: horizPos}, ease: easePower});
    elem.css ({"opacity": 0});
    tMx.to (elem, 2, {opacity: 1, ease: easeSine});
    tMx.to (elem, 1, {left: horizPos, ease: easePower});
    //elem.animate({left: horizPos}, animTym, "easeInQuad"); //JQuery animation. Doesn't work as is.
  };
  /**-----------=====| fAnimateWidth Function |=====-----------**/
  /** Animates element's width
   ****************************************************************/
  function fAnimateWidth (elem, eWidth) {
    //tMx.to (elem, animTym, {css: {width: eWidth}, ease: easePower});
    tMx.to (elem, animTym, {width: eWidth, ease: easePower});
  }

  /**-----------=====| fAnimateHeight Function |=====-----------**/
  /** Animates element's height
   ****************************************************************/
  function fAnimateHeight (elem, eHeight) {
    //tMx.to (elem, animTym, {css: {height: eHeight}, ease: easePower});
    tMx.to (elem, animTym, {height: (eHeight + "px"), ease: easePower});
  }

  /**-----------=====| fTitlePlacement Function |=====-----------**/
  /** Function for image's title placement underneath each
   *  elem: title class name
   *  ht: title background bar height
   *  vPos: top position or vertical position
   ****************************************************************/
  function fTitlePlacement (elem, ht, vPos) {
    fAnimateHeight (elem, ht);
    fAnimateTop (elem, vPos);
  }

  /**-----------=====| fAnimateTop Function |=====-----------**/
  /** Animates element's top positions
   *  Exported and can be called and used elsewhere
   ****************************************************************/

  function fAnimateTop (elem, eTopPos) {
    let animTym = 8;
    //tMx.to (elem, animTym, {css: {top: eTopPos}, ease: easePower});
    tMx.to (elem, animTym, {top: eTopPos, ease: easePower});
    //tMx.to (elem, animTym, {top: (eTopPos + "px")});
    //elem.css ({"top": eTopPos}); //Works!
  };

  /**-----------=====| Headers Reference Variables |=====-----------**/
  var h1    = $ ("h1");
  var h1Sub = $ (".h1Sub");
  var h2    = $ ("h2");
  var h3    = $ ("h3");
  var h5    = $ ("h5"); //Image title

  var h5Height = 60;

  var ownImgTitle       = $ ("#ownImagesChamberId .liRImages h5");
  var stax2ImgTitle     = $ ("#stax2ImagesChamberId .liRImages h5");
  var filipinasImgTitle = $ ("#filipinasImagesChamberId .liRImages h5");
  var digIllusImgTitle  = $ ("#digIllusImagesChamberId .liRImages h5");

  /*
   /!**-----------=====| OwnPhones Variables |=====-----------**!/
   /!**-----------=====| OwnPhones Images |=====-----------**!/
   var ownImagesChamberId = $ ("#ownImagesChamberId");
   var ownImg1Id          = $ ("#ownImg1Id");
   var ownImg2Id          = $ ("#ownImg2Id");
   var ownImg3Id          = $ ("#ownImg3Id");
   var ownImg4Id          = $ ("#ownImg4Id");
   var ownImg5Id          = $ ("#ownImg5Id");

   var aOwnImages = [ownImg1Id, ownImg2Id, ownImg3Id, ownImg4Id, ownImg5Id];

   /!**---{ OwnPhones Buttons }---**!/
   var leftArrowOwn  = $ ("#leftArrowOwn");
   var rightArrowOwn = $ ("#rightArrowOwn");

   /!**---{ Stax2 Gallery Buttons }---**!/
   var leftArrowStax2  = $ ("#leftArrowStax2");
   var rightArrowStax2 = $ ("#rightArrowStax2");

   /!**-----------=====| All the Left Arrows |=====-----------**!/
   var aLeftArrows = [leftArrowOwn, leftArrowStax2];
   /!** On load hide all the left arrows **!/
   /!*for (var i = 0; i < aLeftArrows.length; i++) {
   aLeftArrows[i].hide ();
   }*!/
   for (var i in aLeftArrows) {
   aLeftArrows[i].hide ();
   };

   var ownColRight = $ (".ownColRight");
   //var ownColRightWidth   = ownColRight.width (); //Move to fMediaQueries later
   ////console.log("ownColRightWidth x1 : ",ownColRightWidth);
   var ownColLeft = $ (".ownColLeft");
   //var ownColLeftWidth   = ownColLeft.width ();
   var ownColRightCrop = $ (".ownColRightCrop");
   */
  //var stax2ColRight       = $ (".stax2ColRight");
  //var stax2ColRightWidth = stax2ColRight.width ();

  /**----------------=====| TwoColumnsClass Class |=====----------------**/
  /** Description:
   *  Function to calculate the two columns within the bootstrap container.
   *  The provided percentage argument is use for the right column
   *  converted to pixel.
   *  The left column will have the container width minus the right column width.
   *******************************************************************************/
  /*var TwoColumnsClassX = function () {
   var self = this;
   this.RightColumn; // = RightColumn; //right column property that's accessible outside through the Class
   this.LeftColumn; // = LeftColumn; //left column property
   this.fTwoColumns = function (rightColumnPercentage) {
   self.RightColumn = Math.round (containerWidth * (rightColumnPercentage / 100));
   self.LeftColumn  = Math.round (containerWidth - self.RightColumn);
   //console.log ("GDCol: rightColumnPercentage: ", rightColumnPercentage);
   ////console.log ("GDCol: containerWidth: ", containerWidth);
   ////console.log ("GDCol: self.RightColumn inside: ", self.RightColumn);
   ////console.log ("GDCol: self.LeftColumn inside: ", self.LeftColumn);
   };
   };*/

  //var TwoColumnsClass = function () {
  class TwoColumnsClass {
    constructor () {
      //var self = this;
      this.RightColumn;// = RightColumn; //right column property that's accessible outside through the Class
      this.LeftColumn;// = LeftColumn; //left column property
      //this.fTwoColumns();
    }

    //= function (rightColumnPercentage) {
    fTwoColumns (rightColumnPercentage) {
      this.RightColumn = Math.round (containerWidth * (rightColumnPercentage / 100));
      this.LeftColumn  = Math.round (containerWidth - self.RightColumn);
      //console.log ("GDCol: rightColumnPercentage x: ", rightColumnPercentage);
      ////console.log ("GDCol: containerWidth: ", containerWidth);
      ////console.log ("GDCol: self.RightColumn inside: ", self.RightColumn);
      ////console.log ("GDCol: self.LeftColumn inside: ", self.LeftColumn);
    }
  }

  /**----------------=====| fRoundToTwo Function |=====----------------**/
  /** Description:
   *  fRoundToTwo: rounds the decimals to two.
   *******************************************************************************/
  var fRoundToTwo = function (num) {
    return +(Math.round (num + "e+2") + "e-2");
  };

  /**-----{ Percentage for image height and width }-----**/
  /*var imgOrigWidth = 544; //Image original width
   var imgOrigHeight = 449; //438; //Image original height
   var imgResizePercent = ownTwoColumns.RightColumn / imgOrigWidth; //Current right column image width / image orig width
   var imageHeight = Math.round (imgOrigHeight * imgResizePercent);
   //console.log ("GDCol: imageHeight: ", imageHeight);*/
  /**----------------=====| ImageResizerPerc Class |=====----------------**/
  /** Description:
   *  Class constructor to calculate the percentage based on
   *  the original width and the new width.
   *  The image's new height will inherit the calculated percent
   *  The new calculated height is also used for the
   *  cropping div plus the title height (h5Height).
   *******************************************************************************/
  //var imgNewHeight;
  /*var ImageResizerPercX = function () {
   var self         = this;
   this.ImgNewHeight; //to be accessible outside
   console.log ("GDCol: this.ImgNewHeight: ", this.ImgNewHeight);
   this.fImgResPerc = function (origImgWidth, origImgHeight, imgRightColumn) {
   var imgOrigWidth     = origImgWidth;
   var imgOrigHeight    = origImgHeight;
   var imgResizePercent = imgRightColumn / imgOrigWidth;
   imgResizePercent     = fRoundToTwo (imgResizePercent);
   self.ImgNewHeight    = Math.round (imgOrigHeight * imgResizePercent);
   //console.log ("GDCol: imgResizePercent: ", imgResizePercent);
   };
   };*/

  //let someTestValue = 101;
  class ImageResizerPerc {
    //somTestVal = someTestValue;
    constructor () {
      //super(ImgNewHeight); use super when extending
      this.ImgNewHeight; //to be accessible outside
      //console.log ("GDCol: this.ImgNewHeight: ", this.ImgNewHeight);
    }

    // this.fImgResPerc = (origImgWidth, origImgHeight, imgRightColumn) => {
    fImgResPerc (origImgWidth, origImgHeight, imgRightColumn) {
      var imgOrigWidth     = origImgWidth;
      var imgOrigHeight    = origImgHeight;
      var imgResizePercent = imgRightColumn / imgOrigWidth;
      imgResizePercent     = fRoundToTwo (imgResizePercent);
      this.ImgNewHeight    = Math.round (imgOrigHeight * imgResizePercent);
      //console.log ("GDCol: origImgWidth x: ", origImgWidth);
      //console.log ("GDCol: origImgHeight: ", origImgHeight);
      //console.log ("GDCol: imgRightColumn: ", imgRightColumn);
      //};
    }

    MethodExtensionTest (paramXtend) {
      //console.log("TestExtension");
      return paramXtend;
    }

  }

  class ImageTestExtends extends ImageResizerPerc {
    constructor () {
      super ();
      console.log ("TestExtension() x: ");
    }
  }

  let testXtnds = new ImageTestExtends ();
  testXtnds.MethodExtensionTest ("I'm getting extended!");

  /**-----------=====| NextPreviousClass Class |=====-----------**/
  /** Description:
   *  NextPreviousClass: Function to navigate the images inside the
   *  chamber. Similar to Carousel.
   *******************************************************************************/
  var NextPreviousClass = function NextPreviousClass () {
    /** Variables **/
    this.nxtPos;
    var prevPos;
    var ii = 0;
    //this.countNum = 0;
    /** Method **/
    this.fNextPreviousButtons = function fNextPreviousButtons (rightArrow, leftArrow, aryImages, sectionChamber) {
      /** Variables **/
      var self            = this;
      this.countNum;
      /** Properties **/
      this.RightArrow     = rightArrow;
      this.LeftArrow      = leftArrow;
      this.SectionChamber = sectionChamber;
      this.NxtPos;
      this.PrevPos;
      /** Method **/
      /**-------------===========( Right Arrow: Next Click Functions )===========-------------**/
      this.RightArrow.click (function () { //JQuery
        ii++;
        self.countNum = ii;
        self.nxtPos   = self.NxtPos * ii;
        leftArrow.show ();
        //console.log ("GDCol: aryImages.length: ", aryImages.length);
        if (ii >= (aryImages.length - 1)) { //last image in an array
          ii = aryImages.length - 1;
          rightArrow.hide ();
        }
        /**-----{ fXSlider: Slides the image chamber to the right }-----**/
        fXSlider (self.SectionChamber, -(self.nxtPos)); // +8
        //console.log ("GDCol: -self.nxtPos: ", -self.nxtPos);
        /**-----{ sectionChamber }-----**/
        //fContainerMultiplier (self.SectionChamber, ii);
      });

      /**-------------===========( Left Arrow: Previous Click Functions )===========-------------**/
        //this.LeftArrow.bind ("click", function () {
      this.LeftArrow.click (function () {
        ii--;
        self.countNum = ii;
        prevPos       = self.PrevPos * ii;
        //console.log ("GDCol: -prevPos: ", self.PrevPos, " ii: ", ii);
        rightArrow.show ();
        /*if (prevPos <= 0) {
         prevPos = 0;
         }*/
        if (ii <= 0) {
          ii = 0;
          leftArrow.hide ();
        }
        /**-----{ fXSlider: Slides the images chamber to the left }-----**/
        fXSlider (self.SectionChamber, -prevPos);
        ////console.log ("GDCol: -prevPos: ", -prevPos, " ii: ", ii);

        /**-----{ sectionChamber }-----**/
        //fContainerMultiplier (sectionChamber, ii);
      })
    };
  };

  /**----------------=====| fImgLeftMargin Function |=====----------------**/
  /** Description:
   *  fImgLeftMargin: margin-left: -2.5px to fit the image better in the div.
   *******************************************************************************/
  var fImgLeftMargin = function (aryImages) {
    for (var i = 1; i < aryImages.length; i++) {
      aryImages[i].css ({"marginLeft": "-2.5px"});
      //aryImages[i].css ({"backgroundSize": "cover"});
      //aryImages[i].css ({"backgroundSize": "100%"});
    }
  };

  /**----------------=====| NewLeftRightColumns Class |=====----------------**/
  /** Description:
   *  Function to assign the new width and height for the
   *  image left and right columns as well as the right column cropper
   *******************************************************************************/
  var NewLeftRightColumnsClass = function () {
    this.fLeftRightCol = function (leftColumn, rightColumn, rightColumnCrop, sectionTwoColumns, sectionImgResizer) {
      /**-----------=====| New left column |=====-----------**/
      leftColumn.css ({"width": sectionTwoColumns.LeftColumn});
      /**-----------=====| New right column |=====-----------**/
      rightColumn.css ({"width": sectionTwoColumns.RightColumn}); //getter
      /**-----------=====| New right column cropper (overflow:hidden) |=====-----------**/
      rightColumnCrop.css ({"width": sectionTwoColumns.RightColumn});
      rightColumnCrop.css ({"height": (sectionImgResizer.ImgNewHeight + h5Height)});
      /**---===( overflow:hidden or visible. Can be use for testing as well )===---**/
      rightColumnCrop.css ({"overflow": "hidden"});  //visible hidden
    };
  };
  /*
   /!**-----------=====| New left column |=====-----------**!/
   ownColLeft.css ({"width": ownTwoColumns.LeftColumn});
   /!**-----------=====| New right column |=====-----------**!/
   ownColRight.css ({"width": ownTwoColumns.RightColumn});
   /!**-----------=====| New right column cropper (overflow:hidden) |=====-----------**!/
   ownColRightCrop.css ({"width": ownTwoColumns.RightColumn});
   ownColRightCrop.css ({"height": (ownImgResizer.ImgNewHeight + h5Height)}); //imageHeight
   */

  /**----------------=====| fParagraphColumns Function |=====----------------**/
  /** Description:
   *  Simple function for all the paragraphs.
   *  It divides the .container width into two based on the percentage argument.
   *******************************************************************************/
  var fParagraphColumns = function (leftColumn, rightColumn, sectionTwoColumns) {
    /*rightCol.css ({"width": rightPerc + "%"});
     var leftPerc = 100 - rightPerc;
     leftCol.css ({"width": leftPerc + "%"});*/
    /**-----------=====| New left column |=====-----------**/
    leftColumn.css ({"width": sectionTwoColumns.LeftColumn});
    /**-----------=====| New right column |=====-----------**/
    rightColumn.css ({"width": sectionTwoColumns.RightColumn}); //getter
  };
  /**----------------=====| fOwnVideoColumns Function |=====----------------**/
  /** Description:
   *  Simple function for OwnPhones videos.
   *  It divides the .container width into two based on the percentage argument.
   *******************************************************************************/
  var fOwnVideoColumns = function (leftColumn, rightColumn, sectionTwoColumns) {
    var videoPadding = 0; //30;
    /**-----------=====| New left column |=====-----------**/
    leftColumn.css ({"width": sectionTwoColumns.LeftColumn});
    /**-----------=====| New right column |=====-----------**/
    rightColumn.css ({"width": sectionTwoColumns.RightColumn + videoPadding}); //getter
  };
  /**----------------=====| SimpleLeftRightColumns Class |=====----------------**/
  /** Description:
   *  Function to assign the new width and height for Paragraph, Video or
   *  anything that needs a new left and right columns.
   *******************************************************************************/
  var SimpleLeftRightColumns = function () {
    this.fSimpleLeftRightCol = function (leftColumn, rightColumn, sectionTwoColumns, sectionImgResizer) {
      /**-----------=====| New left column |=====-----------**/
      leftColumn.css ({"width": sectionTwoColumns.LeftColumn});
      /**-----------=====| New right column |=====-----------**/
      rightColumn.css ({"width": sectionTwoColumns.RightColumn}); //getter
      rightColumn.css ({"height": (sectionImgResizer.ImgNewHeight)});
    };
  };

  /**-----------=====| fPinChamber Function |=====-----------**/
  /** Description:
   *  Function to keep the Chamber in place whenever
   *  the end user resize the window.
   *  Scenario:
   *  Navigate the section's images by clicking
   *  the left or right arrow.
   *  Resize the window, without this function if the image
   *  selected is greater than index[0], the image will be
   *  all over the place.
   ****************************************************************/
  var fPinChamber = function (elem, sectTwoColumns, sectNxtPrevArrow) {
    var chamberXPos = sectTwoColumns.RightColumn * sectNxtPrevArrow.countNum;
    tMx.to (elem, .2, {left: -chamberXPos, ease: easePower});
  };

  /** Additional length for the images chamber to avoid flickering when abruptly resize **/
  var chamberExtraLength = 500;

  /************************=| PARAGRAPH SECTION |=************************/
  /**-----------=====| Paragraph Columns |=====-----------**/
  var colRight          = $ (".colRight");
  var colLeft           = $ (".colLeft");
  /**---------==={ Create TwoColumnsClass instance }===--------**/
  var paragTwoColumns   = new TwoColumnsClass ();
  /**-----------=====| fParagraphQueries Queries |=====-----------**/
  var fParagraphQueries = function (columnWidthPerc) {
    paragTwoColumns.fTwoColumns (columnWidthPerc);//setter
    fParagraphColumns (colLeft, colRight, paragTwoColumns);
  };
  /************************=| END PARAGRAPH SECTION |=************************/

  /**-----------=====| OwnPhones Video Columns |=====-----------**/
  var rowVideoRightColmn = $ (".rowVideoRightColmn");
  var rowVideoLeftColmn  = $ (".rowVideoLeftColmn");

  /**---------==={ Create TwoColumnsClass instance }===--------**/
  var ownVideo1TwoColumns       = new TwoColumnsClass ();
  /**---------==={ Create ImageResizerPerc instances }===--------**/
  var ownVidResizer             = new ImageResizerPerc ();
  /**---------==={ Create NewLeftRightColumnsClass instances }===--------**/
  var ownSimpleLeftRightColumns = new SimpleLeftRightColumns ();

  /**-----------=====| fVideoQueries Queries |=====-----------**/
  var fVideoQueries = function (columnWidthPerc) {
    var ownVideo1 = $ ("#video-placeholder");
    ownVideo1TwoColumns.fTwoColumns (columnWidthPerc);//setter
    /**---------==={ ImageResizerPerc instance }===--------**/
    ownVidResizer.fImgResPerc (853, 480, ownVideo1TwoColumns.RightColumn);
    ////console.log("ownVideo1TwoColumns.RightColumn: ", ownVideo1TwoColumns.RightColumn + padLeftRight);
    /**---------==={ NewLeftRightColumnsClass instance }===--------**/
      //ownSimpleLeftRightColumns.fSimpleLeftRightCol(rowVideoLeftColmn, rowVideoRightColmn, ownVideo1TwoColumns, ownVidResizer);
    fOwnVideoColumns (rowVideoLeftColmn, rowVideoRightColmn, ownVideo1TwoColumns);
    //console.log ("GDCol: rowVideoRightColmn: ", rowVideoRightColmn);
    ownVideo1.css ({
      "height"  : ownVidResizer.ImgNewHeight,
      "maxWidth": ownVideo1TwoColumns.RightColumn,
      "width"   : ownVideo1TwoColumns.RightColumn
    });
    /*ownVideo1.css("height", ownVidResizer.ImgNewHeight);
     ownVideo1.css("maxWidth", ownVideo1TwoColumns.RightColumn);
     ownVideo1.css("width", ownVideo1TwoColumns.RightColumn);*/
    /*ownVideo1.css ({"maxWidth": ownVideo1TwoColumns.RightColumn});
     ownVideo1.css ({"width": ownVideo1TwoColumns.RightColumn});*/
  };

  /**-----------=====| New left column |=====-----------**/
  //colLeft.css ({"width": "20%"});
  /**-----------=====| New right column |=====-----------**/
  //colRight.css ({"width": "80%"});

  /**-----------=====| SECTION QUERIES |=====-----------**/
  /**---------==={ fSectionQueries function }===--------**/
  /** Collection of functions for a particular section
   *  that runs inside "fMediaQueries()" and gets invoke
   *  whenever the window resize.
   *************************************************************/
  var fSectionQueries = function (sectionTwoColumns, columnWidthPerc,
                                  sectionImgResizer, imgOrigWidth, imgOrigHeight,
                                  sectionLeftRightColumns, sectionColLeft, sectionColRight, sectionColRightCrop,
                                  aSectionImages,
                                  sectionImagesChamberId, sectionNextPrevArrow,
                                  sectionImgTitle) {

    /**---------==={ TwoColumnsClass instance }===--------**/
    /** This will set the right column percentage and calculate
     *  the value for the "this.RightColumn" and "this.LeftColumn"
     *  properties that will be used by the "columns", "images or videos",
     *  and the "image cropper".
     *************************************************************/
    sectionTwoColumns.fTwoColumns (columnWidthPerc);

    /**---------==={ ImageResizerPerc instance }===--------**/
    /** Calculates the percentage based on the original image width
     *  and the current bootstrap.container. This runs under the
     *  window resize function so it's automatically calculated whenever
     *  the window is resize.
     *  It also sets the value for the "this.ImgNewHeight" property
     ******************************************************************/
    sectionImgResizer.fImgResPerc (imgOrigWidth, imgOrigHeight, sectionTwoColumns.RightColumn);

    /**---------==={ NewLeftRightColumnsClass instance }===--------**/
    /** This will set the new left and right columns measurements
     *  Arguments:
     *  sectionColLeft: Left column
     *  sectionColRight: Right column
     *  sectionTwoColumns: Section's TwoColumnsClass instance
     *  sectionImgResizer: Section's ImageResizerPerc instance
     ******************************************************************/
    sectionLeftRightColumns.fLeftRightCol (sectionColLeft, sectionColRight, sectionColRightCrop, sectionTwoColumns, sectionImgResizer);

    /**---------==={ Images height and width }===--------**/
    /** This will set the new image height and width measurements
     *  aSectionImages: Array of images
     *  sectionImgResizer.ImgNewHeight: Image height
     *  sectionTwoColumns.RightColumn: Image width
     ******************************************************************/
    fImageHeightWidth (aSectionImages, sectionImgResizer.ImgNewHeight, sectionTwoColumns.RightColumn);

    /**---------==={ Images chamber total width }===--------**/
    /** Total width of the chamber or container div holding the array of images
     *  at the current percentage. Sums up the total images width plus an additional
     *  pixels based on "chamberExtraLength".
     ******************************************************************************/
    var sectionTotalImgsWidth = ((sectionTwoColumns.RightColumn * aSectionImages.length) + chamberExtraLength);
    sectionImagesChamberId.css ({"width": sectionTotalImgsWidth});

    /**---------==={ NextPreviousClass instances }===--------**/
    /** Function for the navigation arrows
     *  Slider width value is based on the current right column width.
     *******************************************************************************/
    sectionNextPrevArrow.NxtPos  = sectionTwoColumns.RightColumn;
    sectionNextPrevArrow.PrevPos = sectionTwoColumns.RightColumn;

    /**---------==={ fPinChamber function }===--------**/
    /** Keeps the chamber in position during window resize
     *******************************************************************************/
    fPinChamber (sectionImagesChamberId, sectionTwoColumns, sectionNextPrevArrow);

    /**---------==={ ownImgTitle css }===--------**/
    /** Image title top position
     *******************************************************************************/
    sectionImgTitle.css ({"top": (sectionImgResizer.ImgNewHeight)});
  };

  /**-----------=====| END SECTION QUERIES |=====-----------**/

  /************************=| OWNPHONES SECTION |=************************/
  /**-----------=====| OwnPhones Reference Variables |=====-----------**/
  var ownImagesChamberId = $ ("#ownImagesChamberId");
  var ownImg1Id          = $ ("#ownImg1Id");
  var ownImg2Id          = $ ("#ownImg2Id");
  var ownImg3Id          = $ ("#ownImg3Id");
  var ownImg4Id          = $ ("#ownImg4Id");
  var ownImg5Id          = $ ("#ownImg5Id");
  var aOwnImages         = [ownImg1Id, ownImg2Id, ownImg3Id, ownImg4Id, ownImg5Id];
  fImgLeftMargin (aOwnImages);

  /**---{ OwnPhones Buttons }---**/
  var leftArrowOwn  = $ ("#leftArrowOwn");
  var rightArrowOwn = $ ("#rightArrowOwn");
  //var leftArrowStax2 = $ ("#leftArrowStax2");

  /**-----------=====| Image Columns |=====-----------**/
  var ownColRight     = $ (".ownColRight");
  var ownColLeft      = $ (".ownColLeft");
  var ownColRightCrop = $ (".ownColRightCrop");

  /**---------==={ Create TwoColumnsClass instances }===--------**/
  var ownTwoColumns = new TwoColumnsClass ();
  //ownTwoColumns.fTwoColumns (80);
  /**---------==={ Create ImageResizerPerc instances }===--------**/
  var ownImgResizer = new ImageResizerPerc ();
  //ownImgResizer.fImgResPerc (544, 449, ownTwoColumns.RightColumn);
  /**---------==={ Create NewLeftRightColumnsClass instances }===--------**/
  var ownLeftRightColumns = new NewLeftRightColumnsClass ();
  //ownLeftRightColumns.fLeftRightCol(ownColLeft, ownColRight, ownColRightCrop, ownTwoColumns, ownImgResizer);
  /**---------==={ Create NextPreviousClass instances }===--------**/
  var ownNextPrevArrow = new NextPreviousClass ();
  ownNextPrevArrow.fNextPreviousButtons (rightArrowOwn, leftArrowOwn, aOwnImages, ownImagesChamberId);

  /**-----------=====| OwnPhones Queries |=====-----------**/
  /**---------==={ fOwnPhonesQueries function }===--------**/
  /** Collection of functions for this particular section
   *  that runs inside "fMediaQueries()" that gets invoke
   *  whenever the window resized.
   *************************************************************/
  var fOwnPhonesQueries = function (columnWidthPerc) {
    /**---------==={ TwoColumnsClass instance }===--------**/
    /** This will set the right column percentage and calculate
     *  the value for the "this.RightColumn" and "this.LeftColumn"
     *  properties that will be used by the "columns", "images or videos",
     *  and the "image cropper".
     *************************************************************/
    ownTwoColumns.fTwoColumns (columnWidthPerc);//setter
    /**---------==={ ImageResizerPerc instance }===--------**/
    /** Calculates the percentage based on the original image width
     *  and the current bootstrap.container. This runs under the
     *  window resize function so it's automatically calculated whenever
     *  the window is resize.
     *  It also sets the value for the "this.ImgNewHeight" property
     ******************************************************************/
    ownImgResizer.fImgResPerc (544, 449, ownTwoColumns.RightColumn);
    /**---------==={ NewLeftRightColumnsClass instance }===--------**/
    /** This will set the new left and right columns measurements
     *  Arguments:
     *  ownColLeft: Left column
     *  ownColRight: Right column
     *  ownTwoColumns: Section's TwoColumnsClass instance
     *  ownImgResizer: Section's ImageResizerPerc instance
     ******************************************************************/
    ownLeftRightColumns.fLeftRightCol (
      ownColLeft, ownColRight, ownColRightCrop, ownTwoColumns, ownImgResizer);
    /**---------==={ Images height and width }===--------**/
    /** This will set the new image height and width measurements
     *  aOwnImages: Array of images
     *  ownImgResizer.ImgNewHeight: Image height
     *  ownTwoColumns.RightColumn: Image width
     ******************************************************************/
    fImageHeightWidth (
      aOwnImages, ownImgResizer.ImgNewHeight, ownTwoColumns.RightColumn);

    /**---------==={ Images chamber total width }===--------**/
    /** Total width of the chamber or container div holding the array of images
     *  at the current percentage. Sums up the total images width plus an additional
     *  pixels based on "chamberExtraLength".
     ******************************************************************************/
    var ownTotalImgsWidth = ((ownTwoColumns.RightColumn * aOwnImages.length) + chamberExtraLength);
    ownImagesChamberId.css ({"width": ownTotalImgsWidth});

    /**---------==={ NextPreviousClass instances }===--------**/
    /** Function for the navigation arrows
     *  Slider width value is based on the current right column width.
     *******************************************************************************/
    ownNextPrevArrow.NxtPos  = ownTwoColumns.RightColumn;
    ownNextPrevArrow.PrevPos = ownTwoColumns.RightColumn;

    /**---------==={ fPinChamber function }===--------**/
    /** Keeps the chamber in position during window resize
     *******************************************************************************/
    fPinChamber (ownImagesChamberId, ownTwoColumns, ownNextPrevArrow);

    /**---------==={ ownImgTitle css }===--------**/
    /** Image title top position
     *******************************************************************************/
    ownImgTitle.css ({"top": (ownImgResizer.ImgNewHeight)});
  };

  /************************=| END OWNPHONES SECTION |=************************/

  /************************=| STAX SECTION |=************************/
  /**-----------=====| Stax 2 Reference Variables |=====-----------**/
  var stax2ImagesChamberId = $ ("#stax2ImagesChamberId");
  var stax2Img1Id          = $ ("#stax2Img1Id");
  var stax2Img2Id          = $ ("#stax2Img2Id");
  var stax2Img3Id          = $ ("#stax2Img3Id");
  var stax2Img4Id          = $ ("#stax2Img4Id");
  var stax2Img5Id          = $ ("#stax2Img5Id");
  var stax2Img6Id          = $ ("#stax2Img6Id");
  var stax2Img7Id          = $ ("#stax2Img7Id");
  var stax2Img8Id          = $ ("#stax2Img8Id");
  var stax2Img9Id          = $ ("#stax2Img9Id");
  var aStax2Images         = [stax2Img1Id, stax2Img2Id, stax2Img3Id, stax2Img4Id, stax2Img5Id, stax2Img6Id, stax2Img7Id, stax2Img8Id, stax2Img9Id];
  fImgLeftMargin (aStax2Images);

  /**---{ Stax2 Buttons }---**/
  var leftArrowStax2  = $ ("#leftArrowStax2");
  var rightArrowStax2 = $ ("#rightArrowStax2");

  /**-----------=====| Image Columns |=====-----------**/
  var stax2ColRight     = $ (".stax2ColRight");
  var stax2ColLeft      = $ (".stax2ColLeft");
  var stax2ColRightCrop = $ (".stax2ColRightCrop");

  /**---------==={ Create TwoColumnsClass instances }===--------**/
  var stax2TwoColumns = new TwoColumnsClass ();
  //stax2TwoColumns.fTwoColumns (50);
  /**---------==={ Create ImageResizerPerc instances }===--------**/
  var stax2ImgResizer = new ImageResizerPerc ();
  //stax2ImgResizer.fImgResPerc (544, 449, stax2TwoColumns.RightColumn);
  /**---------==={ Create NewLeftRightColumnsClass instances }===--------**/
  var stax2LeftRightColumns = new NewLeftRightColumnsClass ();
  //stax2LeftRightColumns.fLeftRightCol (stax2ColLeft, stax2ColRight, stax2ColRightCrop, stax2TwoColumns, stax2ImgResizer);

  /**----==={ fImageHeightWidth: Setting array member's heights and widths }===----**/
  /** tMx.to (elem, animTym, {height: (eHeight+"px"), width: eWidth, ease: easePower});
   **************************************************************************************/
  //fImageHeightWidth (aStax2Images, stax2ImgResizer.ImgNewHeight, stax2TwoColumns.RightColumn);

  /** Setting the Stax2 chamber total width **/
      //var stax2TotalImgsWidth = ((stax2TwoColumns.RightColumn * aStax2Images.length) + 100);
      //stax2ImagesChamberId.css ({"width": stax2TotalImgsWidth});

  var stax2NextPrevArrow = new NextPreviousClass ();
  stax2NextPrevArrow.fNextPreviousButtons (rightArrowStax2, leftArrowStax2, aStax2Images, stax2ImagesChamberId);
  //stax2NextPrevArrow.NxtPos  = stax2TwoColumns.RightColumn;
  //stax2NextPrevArrow.PrevPos = stax2TwoColumns.RightColumn;

  /**-----{ fTitlePlacement: Sets the image title's height and the top position }-----**/
  stax2ImgTitle.css ({"top": (stax2ImgResizer.ImgNewHeight)});
  /**-----------=====| Stax2 Queries |=====-----------**/
  /*var fStax2Queries      = function (columnWidthPerc) {
   stax2TwoColumns.fTwoColumns (columnWidthPerc);
   stax2ImgResizer.fImgResPerc (544, 350, stax2TwoColumns.RightColumn);
   stax2LeftRightColumns.fLeftRightCol (stax2ColLeft, stax2ColRight, stax2ColRightCrop, stax2TwoColumns, stax2ImgResizer);
   fImageHeightWidth (aStax2Images, stax2ImgResizer.ImgNewHeight, stax2TwoColumns.RightColumn);
   /!** Setting the Stax2Phones chamber total width **!/
   var stax2TotalImgsWidth    = ((stax2TwoColumns.RightColumn * aStax2Images.length) + chamberExtraLength);
   stax2ImagesChamberId.css ({"width": stax2TotalImgsWidth});
   stax2NextPrevArrow.NxtPos  = stax2TwoColumns.RightColumn;
   stax2NextPrevArrow.PrevPos = stax2TwoColumns.RightColumn;
   fPinChamber (stax2ImagesChamberId, stax2TwoColumns, stax2NextPrevArrow);
   stax2ImgTitle.css ({"top": (stax2ImgResizer.ImgNewHeight)});
   };*/
  /************************=| END STAX SECTION |=************************/

  /************************=| FILIPINAS SECTION |=************************/
  /**-----------=====| Filipinas Reference Variables |=====-----------**/
  var filipinasImagesChamberId = $ ("#filipinasImagesChamberId");
  var filipinasImg1Id          = $ ("#filipinasImg1Id");
  var filipinasImg2Id          = $ ("#filipinasImg2Id");
  var filipinasImg3Id          = $ ("#filipinasImg3Id");
  var filipinasImg4Id          = $ ("#filipinasImg4Id");
  var filipinasImg5Id          = $ ("#filipinasImg5Id");
  var aFilipinasImages         = [filipinasImg1Id, filipinasImg2Id, filipinasImg3Id, filipinasImg4Id, filipinasImg5Id];
  fImgLeftMargin (aFilipinasImages);
  /**---{ Filipinas Buttons }---**/
  var leftArrowFilipinas       = $ ("#leftArrowFilipinas");
  var rightArrowFilipinas      = $ ("#rightArrowFilipinas");
  //var leftArrowStax2 = $ ("#leftArrowStax2");
  /**-----------=====| Image Columns |=====-----------**/
  var filipinasColRight         = $ (".filipinasColRight");
  var filipinasColLeft          = $ (".filipinasColLeft");
  var filipinasColRightCrop     = $ (".filipinasColRightCrop");
  /**---------==={ Create TwoColumnsClass instances }===--------**/
  var filipinasTwoColumns       = new TwoColumnsClass ();
  /**---------==={ Create ImageResizerPerc instances }===--------**/
  var filipinasImgResizer       = new ImageResizerPerc ();
  /**---------==={ Create NewLeftRightColumnsClass instances }===--------**/
  var filipinasLeftRightColumns = new NewLeftRightColumnsClass ();
  /**---------==={ Create NextPreviousClass instances }===--------**/
  var filipinasNextPrevArrow    = new NextPreviousClass ();
  filipinasNextPrevArrow.fNextPreviousButtons (rightArrowFilipinas, leftArrowFilipinas, aFilipinasImages, filipinasImagesChamberId);
  /**-----------=====| fFilipinasQueries Queries |=====-----------**/
  var fFilipinasQueries         = function (columnWidthPerc) {
    filipinasTwoColumns.fTwoColumns (columnWidthPerc);
    filipinasImgResizer.fImgResPerc (544, 449, filipinasTwoColumns.RightColumn);
    filipinasLeftRightColumns.fLeftRightCol (filipinasColLeft, filipinasColRight, filipinasColRightCrop, filipinasTwoColumns, filipinasImgResizer);
    fImageHeightWidth (aFilipinasImages, filipinasImgResizer.ImgNewHeight, filipinasTwoColumns.RightColumn);
    /** Setting the Filipinas chamber total width **/
    var filipinasTotalImgsWidth    = ((filipinasTwoColumns.RightColumn * aFilipinasImages.length) + chamberExtraLength);
    filipinasImagesChamberId.css ({"width": filipinasTotalImgsWidth});
    filipinasNextPrevArrow.NxtPos  = filipinasTwoColumns.RightColumn;
    filipinasNextPrevArrow.PrevPos = filipinasTwoColumns.RightColumn;
    fPinChamber (filipinasImagesChamberId, filipinasTwoColumns, filipinasNextPrevArrow);
    filipinasImgTitle.css ({"top": (filipinasImgResizer.ImgNewHeight)});
  };
  /************************=| END FILIPINAS SECTION |=************************/

  /************************=| DIGITAL ILLUSTRATIONS SECTION |=************************/
  /**-----------=====| 3D Reference Variables |=====-----------**/
  var digIllusImagesChamberId = $ ("#digIllusImagesChamberId");
  var digIllusImg1Id          = $ ("#digIllusImg1Id");
  var digIllusImg2Id          = $ ("#digIllusImg2Id");
  var digIllusImg3Id          = $ ("#digIllusImg3Id");
  var digIllusImg4Id          = $ ("#digIllusImg4Id");
  var aDigIllusImages         = [digIllusImg1Id, digIllusImg2Id, digIllusImg3Id, digIllusImg4Id];
  fImgLeftMargin (aDigIllusImages);
  /**---{ DigIllus Buttons }---**/
  var leftArrowDigIllus       = $ ("#leftArrowDigIllus");
  var rightArrowDigIllus      = $ ("#rightArrowDigIllus");
  //var leftArrowStax2 = $ ("#leftArrowStax2");
  /**-----------=====| Image Columns |=====-----------**/
  var digIllusColRight         = $ (".digIllusColRight");
  var digIllusColLeft          = $ (".digIllusColLeft");
  var digIllusColRightCrop     = $ (".digIllusColRightCrop");
  /**---------==={ Create TwoColumnsClass instances }===--------**/
  var digIllusTwoColumns       = new TwoColumnsClass ();
  /**---------==={ Create ImageResizerPerc instances }===--------**/
  var digIllusImgResizer       = new ImageResizerPerc ();
  /**---------==={ Create NewLeftRightColumnsClass instances }===--------**/
  var digIllusLeftRightColumns = new NewLeftRightColumnsClass ();
  /**---------==={ Create NextPreviousClass instances }===--------**/
  var digIllusNextPrevArrow    = new NextPreviousClass ();
  digIllusNextPrevArrow.fNextPreviousButtons (rightArrowDigIllus, leftArrowDigIllus, aDigIllusImages, digIllusImagesChamberId);
  /**-----------=====| fDigIllusQueries Queries |=====-----------**/
  var fDigIllusQueries         = function (columnWidthPerc) {
    digIllusTwoColumns.fTwoColumns (columnWidthPerc);
    digIllusImgResizer.fImgResPerc (714, 1070, digIllusTwoColumns.RightColumn);
    digIllusLeftRightColumns.fLeftRightCol (digIllusColLeft, digIllusColRight, digIllusColRightCrop, digIllusTwoColumns, digIllusImgResizer);
    fImageHeightWidth (aDigIllusImages, digIllusImgResizer.ImgNewHeight, digIllusTwoColumns.RightColumn);
    /** Setting the DigIllus chamber total width **/
    var digIllusTotalImgsWidth    = ((digIllusTwoColumns.RightColumn * aDigIllusImages.length) + chamberExtraLength);
    digIllusImagesChamberId.css ({"width": digIllusTotalImgsWidth});
    digIllusNextPrevArrow.NxtPos  = digIllusTwoColumns.RightColumn;
    digIllusNextPrevArrow.PrevPos = digIllusTwoColumns.RightColumn;
    fPinChamber (digIllusImagesChamberId, digIllusTwoColumns, digIllusNextPrevArrow);
    digIllusImgTitle.css ({"top": (digIllusImgResizer.ImgNewHeight)});
  };
  /************************=| END DIGITAL ILLUSTRATIONS SECTION |=************************/

  //fTitlePlacement (h5, h5Height, imageHeight);
  //var h5 = document.getElementsByTagName ("h5");
  //fAnimateTop (h5, imageHeight);
  //Set it for each section
  ////console.log(h5);
  //fTitlePlacement (h5, h5Height, imageHeight);
  /**-----------=====| H5 Image Title |=====-----------**/
  //titolo.css ({"top": "500px"});
  //h5.css ({"height": (imageHeight)});
  /**-----------=====| All the Left Arrows: Move at the bottom later |=====-----------**/
  var aLeftArrows = [leftArrowOwn, leftArrowStax2, leftArrowFilipinas, leftArrowDigIllus]; //Move this at the bottom after all section's vars has been declared
  /** On load hide all the left arrows **/
  /*for (var i = 0; i < aLeftArrows.length; i++) {
   aLeftArrows[i].hide ();
   }*/
  for (var i in aLeftArrows) {
    aLeftArrows[i].hide ();
  }
  /**-----------=====| fCommonFunctionalities Function |=====-----------**/
  /** These are common functions that are being run on fMediaQueries
   *  Based on the screen size.
   *  Makes it easier for additional sections from the html page
   *  to be added.
   ****************************************************************/
  function fCommonFunctionalities () {

  }

  /**-----------=====| Media Queries |=====-----------**/
  var fMediaQueries = function () {
    console.log ("GDCol: fMediaQueries: ------------");
    containerWidth = (container.width ()) + padLeftRight;
    console.log ("GDCol: containerWidth: ", containerWidth);

    fOwnPhonesQueries (80);
    fVideoQueries (100);

    //fStax2Queries (80);
    fSectionQueries (stax2TwoColumns, 80,
      stax2ImgResizer, 544, 350,
      stax2LeftRightColumns, stax2ColLeft, stax2ColRight, stax2ColRightCrop,
      aStax2Images,
      stax2ImagesChamberId, stax2NextPrevArrow,
      stax2ImgTitle);

    //fFilipinasQueries (100);
    fSectionQueries (filipinasTwoColumns, 100,
      filipinasImgResizer, 544, 449,
      filipinasLeftRightColumns, filipinasColLeft, filipinasColRight, filipinasColRightCrop,
      aFilipinasImages,
      filipinasImagesChamberId, filipinasNextPrevArrow,
      filipinasImgTitle);

    fDigIllusQueries (80);

    fParagraphQueries (80);

  };

  /**-----------=====| fInitMediaQueries Function |=====-----------**/
  /** Function to initialize fMediaQueries function on load
   *  TweenMax.ticker is used to add and remove the event listener
   *  ix: counter
   ****************************************************************/
  var ix                = 0;
  var fInitMediaQueries = function () {
    tMx.ticker.addEventListener ("tick", fTimer);
    function fTimer () {
      /**-----===( Load Media Queries )===-----**/
      fMediaQueries ();
      ix++;
      if (ix >= 1) {
        fRemoveEvntListnr (fTimer);
      }
    }
  };
  var fRemoveEvntListnr = function (myFunct) {
    tMx.ticker.removeEventListener ("tick", myFunct);
  };
  /**-----------=====| End fInitMediaQueries |=====-----------**/

  /**-----===( Invoke Media Queries)===-----**/
    //fInitMediaQueries ();
  fMediaQueries ();
  /**-----===( Viewport resize re-load the page )===-----**/
  //window.addEventListener ('resize', fInitMediaQueries); //JS
  //$ (window).on ('resize', fMediaQueries); //JQuery

  /*
   /!**-----------=====| ImageSectionClass Class |=====-----------**!/
   var ImageSectionClass = function ImageSectionClass (elem, imgArry) {
   this.Elem = elem;
   //this.RightColPercntage = rightColPercntage;
   this.ImgArry = imgArry;
   var me = this;
   /!**-----------=====| Bootstrap Container Inner Width |=====-----------**!/
   var container = $ (".container");
   var colRight3 = $ (".colRight3");
   var colRightWidth3 = colRight3.width ();
   //var colRightWidth3 = colRight3.width ();

   this.imgSectConfig = function (rightColPercntage) {

   /!**----( Two columns )----**!/
   var padLeftRight   = 30;
   var containerWidth = (container.width ()) + padLeftRight;
   var columnRight    = containerWidth * (rightColPercntage / 100); // (90 / 100) for 90%
   var columnLeft = containerWidth - columnRight;

   //console.log ("GDCol: elem: ", elem[0].id, " @ ", rightColPercntage, "% Width :-------------=");
   //console.log ("GDCol: columnLeft: ", columnLeft);
   //console.log ("GDCol: columnRight: ", columnRight);

   //colRightWidth3 = Math.round (columnRight);
   ////console.log ("GDCol: colRightWidth3: ", colRightWidth3);
   //colRightWidth             = Math.round (columnRight);
   //colRightCrop3Width = colRightWidth3;

   //if(elem === elemCrop){

   //colLeft3.css ({"width": columnLeft});
   //colRight3.css ({"width": colRightWidth3});

   /!**-----{ Percentage for height and width }-----**!/
   var imgOrigWidth = 544; //Image original width
   var imgOrigHeight = 449; //438; //Image original height
   var imgResizePercent = colRightWidth3 / imgOrigWidth; //Current right column image width / image orig width
   var imgRowHeight3 = Math.round (imgOrigHeight * imgResizePercent); //Applying the same percentage for the height
   //console.log ("GDCol: imgResizePercent: ", imgResizePercent);
   //console.log ("GDCol: imgRowHeight3: ", imgRowHeight3);

   /!** Setting the chamber total width **!/
   var totalImgsWidth = ((colRightWidth3 * imgArry.length) + 100);//"100px";
   //console.log ("GDCol: totalImgsWidth: ", totalImgsWidth);
   elem.css ({"width": totalImgsWidth});
   //fAnimateHeight (id, ht + imgTitleHeight);

   /!**----{ fImageHeightWidth: Setting array member's heights and widths }----**!/
   fImageHeightWidth (imgArry, imgRowHeight3, colRightWidth3);
   //me.ImgArry.css ({"height": imgRowHeight3});
   //me.ImgArry.css ({"width": colRightWidth3});

   /!**----{ fAnimateHeight: Sets the chamber's height plus the title height }----**!/
   //fAnimateHeight (elem, (imgRowHeight3 + imgTitleHeight));
   elem.css ({"height": (imgRowHeight3 + imgTitleHeight)});

   /!**----{ fImagesChamberWidthHeight: Sets the container width based on images array length }----**!/
   //fImagesChamberWidthHeight (elem, imgArry, imgRowHeight3);
   elem.css ({"height": imgRowHeight3});
   elem.css ({"width": totalImgsWidth});


   /!**----{ fAnimateWidth: Sets the title in column right }----**!/
   //fAnimateWidth (imgTitle, colRightWidth3);

   /!**-----{ fTitlePlacement: Sets the image title's height and the top position }-----**!/
   //fTitlePlacement (imgTitle, imgTitleHeight, imgRowHeight3);
   };
   };

   /!**-----{ Create instances of the ImageSectionClass }-----**!/
   var ownImageSectionX   = new ImageSectionClass (ownImagesChamberId, aOwnImages);
   var stax2ImageSection = new ImageSectionClass (stax2ImagesChamberId, aStax2Images);
   //ownImageSection.imgSectConfig (); //Put instances in fCommonFunctionalities to get invoke every time the window gets resize.
   //console.log ("GDCol: ownImageSection.Elem: ", ownImageSectionX.Elem);
   //console.log ("GDCol: ownImageSection.RightColPercntage: ", ownImageSectionX.RightColPercntage);
   //console.log ("GDCol: ownImageSection.ImgArry: ", ownImageSectionX.ImgArry);

   /!**-----------=====| fCommonFunctionalities Function |=====-----------**!/
   /!** These are common functions that are being run on fMediaQueries
   *  Based on the screen size.
   *  Makes it easier for additional sections from the html page
   *  to be added.
   ****************************************************************!/
   function fCommonFunctionalities () {
   /!*!/!**-----{ Image title height and top position }-----**!/
   fTitlePlacement (imgTitle, imgTitleHeight, imgRowHeight);

   /!**----{ fImageHeightWidth: Setting array member's heights and widths }----**!/
   fImageHeightWidth (aHorizonImages, imgRowHeight, colRightWidth);
   fImageHeightWidth (aStaxImages, imgRowHeight, colRightWidth);
   //fImageHeightWidth (aOwnImages, imgRowHeight, colRightWidth);

   /!**----{ fImagesChamberWidthHeight: Setting images chamber width based on images array }----**!/
   fImagesChamberWidthHeight (horizonImagesChamberId, aHorizonImages, imgRowHeight);
   fImagesChamberWidthHeight (staxImagesChamberId, aStaxImages, imgRowHeight);
   //fImagesChamberWidthHeight (ownImagesChamberId, aOwnImages, imgRowHeight);

   /!**-----{ fHeightWidthPercentage: Find the percentage based on image orig size }-----**!/
   fHeightWidthPercentage ();

   /!**-----{ fLogoContainer: Adjust the logo container's top position }-----**!/
   fLogoContainer ();*!/
   ownImageSectionX.imgSectConfig (100);
   stax2ImageSection.imgSectConfig (45);
   }

   var ownXpos;
   var ownMultiplier     = 0;
   var stax2Xpos;
   var stax2Multiplier   = 0;



   /!**-----------=====| Media Queries |=====-----------**!/
   function fMediaQueries () {
   //mQ++;
   ////console.log ("GDCol: fMediaQueries -------: ", mQ);
   /!**-----===( When re-sizing window get the clicked amount mulitplied
   * by the current image width and used that number to re-position the container
   *********************************************************************)===-----**!/
   //horizonMultiplier = 0;
   //horizonXpos = parseInt(colRightWidth * horizonMultiplier);

   //horizonXpos = colRightWidth * horizonMultiplier;
   //staxXpos    = colRightWidth * staxMultiplier;
   ownXpos   = ownColRightWidth3 * ownMultiplier;
   stax2Xpos = stax2ColRightWidth3 * stax2Multiplier;

   /!** Keeps the image in place whenever the window gets resized **!/
   //fXSlider (horizonImagesChamberId, -horizonXpos); //Used the css left instead of the x matrix
   //fXSlider (staxImagesChamberId, -staxXpos);
   //fXSlider (ownImagesChamberId, -ownXpos);
   //fXSlider (stax2ImagesChamberId, -stax2Xpos);
   ownImagesChamberId.css ({"left": ownXpos});
   stax2ImagesChamberId.css ({"left": stax2Xpos});

   //winWidth = $ (window).width (); //Browser window width
   //////console.log ("GDCol: winWidth: " + winWidth);
   windowInnerWidth = window.innerWidth;

   /!**-------------===========( Cellphones Viewport )===========-------------**!/
   if (windowInnerWidth <= 480) {
   ////console.log ("GDCol: •-------------------- Tiny : <= 480 ---------------------•");
   /!**-----{ //fTwoColumns: Changing the 2 columns width percentages in a Row }-----**!/
   //fTwoColu//mns (90); //Right column @ 90% width. Left column @ 10%.
   //fHeaderFonts (2.5, .75, 1.2, 1.2, 1);
   fCommonFunctionalities ();
   //fResetContainers ();
   ////console.log ("GDCol: •-------------------- End Tiny ---------------------•");

   /!**-------------===========( Smartphones Viewport: 480 - 640 )===========-------------**!/
   } else if (windowInnerWidth <= smallDevices && windowInnerWidth > 480) {
   //console.log ("GDCol: •-------------------- Small : 480 - 640 ---------------------•");
   /!**-----{ Changing columns width percentage in a Row }-----**!/
   //fTwoColumns (90);
   //fHeaderFonts (4, 1, 1.4, 1.4, 1.2);
   fCommonFunctionalities ();
   //fResetContainers ();
   ////console.log ("GDCol: •-------------------- End Small ---------------------•");

   /!**-------------===========( Between Tablets and Smartphones Viewport )===========-------------**!/
   } else if (windowInnerWidth <= mediumDevices && windowInnerWidth > smallDevices) {
   //console.log ("GDCol: •--------------- Medium : 640 - 992 ----------------•");
   ////console.log ("GDCol: mediumDevices: ", mediumDevices, " smallDevices: ", smallDevices);
   //colRightCropWidth = 550
   //var colRightWidthX = 500
   /!**-----{ Changing columns width percentage in a Row }-----**!/
   //fTwoColumns (80);
   //fHeaderFonts (6, 1.2, 1.4, 1.4, 1.2);
   fCommonFunctionalities ();
   ////console.log ("GDCol: •-------------------- End Medium ---------------------•");

   /!**-------------===========( Between Desktop and Tablets Viewport )===========-------------**!/
   } else if (windowInnerWidth <= largeDevices && windowInnerWidth > mediumDevices) {
   //console.log ("GDCol: •--------------- Large : 992 - 1200 ----------------•");
   ////console.log ("GDCol: largeDevices: ", largeDevices, "mediumDevices: ", mediumDevices);
   /!**-----{ Changing columns width percentage in a Row }-----**!/
   ////fTwoColumns2 (100);//Testing config 2 for the logo container
   //////fTwoColumns3 (containerTemp, 100)
   //fT//woColumns (80);
   //fHeaderFonts (8, 1.4, 1.4, 1.5, 1.2); //Large settings
   fCommonFunctionalities ();

   /!**-------------===========( Extra Large Viewport )===========-------------**!/
   } else {
   //console.log ("GDCol: •-------------------- Extra Large ---------------------•");
   /!**-----{ Changing columns width percentage in a Row }-----**!/
   //fTwoColumns (80);
   //fHeaderFonts (10, 1.4, 1.4, 1.5, 1.2); //Large settings
   fCommonFunctionalities ();
   ////console.log ("GDCol: •-------------------- End Extra Large ---------------------•");
   }
   };

   /!**-----------=====| fInitMediaQueries Function |=====-----------**!/
   /!** Function to initialize fMediaQueries function on load
   *  TweenMax.ticker is used to add and remove the event listener
   *  ix: counter
   ****************************************************************!/
   function fInitMediaQueries () {
   tMx.ticker.addEventListener ("tick", fTimer);
   function fTimer () {
   /!**-----===( Load Media Queries )===-----**!/
   fMediaQueries ();
   ix++;
   if (ix >= 2) {
   fRemoveEvntListnr (fTimer);
   }
   }
   }

   function fRemoveEvntListnr (myFunct) {
   tMx.ticker.removeEventListener ("tick", myFunct);
   }

   */
  /**-----------=====| End fInitMediaQueries |=====-----------**/

  /**-----===( aColumnLeft Array: FOR TESTING ONLY! )===-----**/
  var aColumnLeft = [colLeft, ownColLeft, stax2ColLeft, filipinasColLeft, digIllusColLeft];
  for (var i in aColumnLeft) {
    //for (var i = 0; i < aColumnLeft.length; i++) {
    ////console.log ("GDCol: aColumnLeft[i]: ", aColumnLeft[i]);

    //aColumnLeft[i].css ({"backgroundColor": "yellowgreen"});
    aColumnLeft[i].css ({"height": "0px"});
  }

  /****************************************************
   *  Webpack: module.exports
   *
   ****************************************************/
  module.exports.aPosterImages    = aPosterImages;
  module.exports.fAnimateTop      = fAnimateTop;
  module.exports.ImageResizerPerc = ImageResizerPerc;
  module.exports.fMediaQueries    = fMediaQueries;

  module.exports.TwoColumnsClass = TwoColumnsClass;

  /**************************<<•>>**************************/

  /**-----------=====| End IIFE |=====-----------**/
} ());

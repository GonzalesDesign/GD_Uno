/**
 * Created by Odee on 5/17/16.
 */



"use strict";

/**-----------=====| TweenMax Reference Variables |=====-----------**/
var tMx       = TweenMax;
var easeSine  = Sine.easeOut;
var easePower = Power3.easeOut;
var animTym   = .5;
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
  tMx.to (elem, animTym, {opacity: 1, ease: easeSine});
  tMx.to (elem, animTym, {left: horizPos, ease: easePower});
  //elem.animate({left: horizPos}, animTym, "easeInQuad"); //JQuery animation. Doesn't work as is.
};

/**-----------=====| NextPreviousClass Class |=====-----------**/
/** Description:
 *  NextPreviousClass: Function to navigate the images inside the
 *  chamber. Similar to Carousel.
 *******************************************************************************/

class NextPreviousClass {
  constructor(rightArrow, leftArrow, imgWidth){
    this.nxtPos;
    this.RightArrow = rightArrow;
    this.LeftArrow      = leftArrow;
    this.SectionChamber; // = sectionChamber;
    this.NxtPos = imgWidth;
    this.PrevPos;

  }
  fTestMethod(){
    let testString = "String from NextPreviousArrows.js";
    console.log ("testString: ", testString);
  }

  fNextPreviousButtons(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth){
    let ix = 0;
    console.log ("fNextPreviousButtons: ");
    /**-------------===========( Right Arrow: Next Click Functions )===========-------------**/
    rightArrow.click (function () {
      ix++;
      console.log ("fNextPreviousButtons 2: ix ", ix);
      this.countNum = ix;
      this.nxtPos   = imgWidth * ix;
      //imgWidth * ix;
      leftArrow.show ();
      //console.log ("aryImages.length: ", aryImages.length);
      /*if (ix >= (aryImages.length - 1)) { //last image in an array
        ix = aryImages.length - 1;
        rightArrow.hide ();
      }*/
      console.log("imgContainerWidth: ", imgContainerWidth);
      if(imgContainerWidth){
        //rightArrow.hide ();
      }

      /**-----{ fXSlider: Slides the image chamber to the right }-----**/
      //fXSlider (this.SectionChamber, -(this.nxtPos)); // +8
      fXSlider (imgContainer, -(imgWidth)); // +8
      console.log ("-imgWidth: ", -imgWidth);
      /**-----{ sectionChamber }-----**/
      //fContainerMultiplier (this.SectionChamber, ix);
    });
  }
}

var NextPreviousClassOld = function NextPreviousClass () {
  let testString = "String from MextPreviousArrows.js";
  console.log ("testString: ", testString);

  /** Variables **/
  this.nxtPos;
  var prevPos;
  var ix = 0;
  //this.countNum = 0;
  /** Method **/
  this.fNextPreviousButtons = function fNextPreviousButtons (rightArrow, leftArrow, aryImages, sectionChamber) {
    /** Variables **/
    var self = this;
    this.countNum;
    /** Properties **/
    this.RightArrow = rightArrow;
    this.LeftArrow      = leftArrow;
    this.SectionChamber = sectionChamber;
    this.NxtPos;
    this.PrevPos;
    /** Method **/
    /**-------------===========( Right Arrow: Next Click Functions )===========-------------**/
    this.RightArrow.click (function () { //JQuery
      ix++;
      self.countNum = ix;
      self.nxtPos   = self.NxtPos * ix;
      leftArrow.show ();
      console.log ("aryImages.length: ", aryImages.length);
      if (ix >= (aryImages.length - 1)) { //last image in an array
        ix = aryImages.length - 1;
        rightArrow.hide ();
      }
      /**-----{ fXSlider: Slides the image chamber to the right }-----**/
      fXSlider (self.SectionChamber, -(self.nxtPos)); // +8
      console.log ("-self.nxtPos: ", -self.nxtPos);
      /**-----{ sectionChamber }-----**/
      //fContainerMultiplier (self.SectionChamber, ix);
    });

    /**-------------===========( Left Arrow: Previous Click Functions )===========-------------**/
    //this.LeftArrow.bind ("click", function () {
    this.LeftArrow.click (function () {
      ix--;
      self.countNum = ix;
      prevPos       = self.PrevPos * ix;
      console.log ("-prevPos: ", self.PrevPos, " ix: ", ix);
      rightArrow.show ();
      /*if (prevPos <= 0) {
       prevPos = 0;
       }*/
      if (ix <= 0) {
        ix = 0;
        leftArrow.hide ();
      }
      /**-----{ fXSlider: Slides the images chamber to the left }-----**/
      fXSlider (self.SectionChamber, -prevPos);
      //console.log ("-prevPos: ", -prevPos, " ix: ", ix);

      /**-----{ sectionChamber }-----**/
      //fContainerMultiplier (sectionChamber, ix);
    })
  };
};

/****************************************************
 *  Webpack: module.exports
 ****************************************************/
module.exports.NextPreviousClass = NextPreviousClass;

//export default NextPreviousClass = NextPreviousClass;
//module.exports.testString = testString;

console.log(`Export from: NextPreviousArrows.js: 
module.exports.NextPreviousClass = NextPreviousClass;`);

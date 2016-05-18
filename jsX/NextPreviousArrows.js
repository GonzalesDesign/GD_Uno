/**
 * Created by Odee on 5/17/16.
 */



"use strict";

/**-----------=====| TweenMax Reference Variables |=====-----------**/
let tMx       = TweenMax;
let easeSine  = Sine.easeOut;
let easePower = Power3.easeOut;
let animTym   = .5;

/**-----------=====| fOpacityAnim Function |=====-----------**/
/** Description:
 ** Animates element's opacity from 0% to 100%
 *************************************************************/
let fOpacityAnim = function (elem) {
  elem.css ({"opacity": 0});
  tMx.to (elem, animTym, {opacity: 1, ease: easeSine});
};

/**-----------=====| fXSlider Function |=====-----------**/
/** Description:
 ** Animates element's horizontal positions
 ** Use the attribute "left" instead of the matrix "x" (translateX())
 ** as a key and the horizPos param as value.
 ** http://greensock.com/forums/topic/6963-tweenmax-tweening-css-x-vs-left/
 ****************************************************************/
let fXSlider = function (elem, horizPos) {
  fOpacityAnim (elem);
  tMx.to (elem, animTym, {left: horizPos, ease: easePower});
};

/**-------------------=====| NextPreviousClass Class |=====--------------------**/
/** Description:
 ** NextPreviousClass: Function to navigate the images inside the image container.
 ** Similar to a Carousel.
 ********************************************************************************/
class NextPreviousClass {
  constructor () {
    this.NxtPos;
  }
  fNextPreviousClass (rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth) {

    let num = 0; //closure

    /**-----------=====| Next button function |=====-----------**/
    rightArrow.click (() => {
      num++;
      this.NxtPos = imgWidth * num;
      leftArrow.show ();
      /**-----{ when it hits the end of the image container }-----**/
      if (this.NxtPos >= (imgContainerWidth - imgWidth)) {
        rightArrow.hide ();
      }
      /**-----{ fXSlider: Slides the image chamber to the right }-----**/
      fXSlider (imgContainer, -(this.NxtPos));
    });

    /**-----------=====| Previous button function |=====-----------**/
    leftArrow.click (() => {
      num--;
      this.NxtPos = imgWidth * num;
      rightArrow.show ();
      /**-----{ when it hits the beginning of the image container }-----**/
      if (this.NxtPos <= 0) {
        leftArrow.hide ();
      }
      /**-----{ fXSlider: Slides the image chamber to the right }-----**/
      fXSlider (imgContainer, -(this.NxtPos));
    });
  }
}

/****************************************************
 ** Webpack: module.exports
 ****************************************************/
//module.exports.NextPreviousClass = NextPreviousClass;
module.exports.NextPreviousClass = NextPreviousClass;
//module.exports.PreviousImageClass = PreviousImageClass;

//export default NextPreviousClass = NextPreviousClass;
//module.exports.testString = testString;

console.log (`Export from: NextPreviousArrows.js: 
module.exports.NextPreviousClass = NextPreviousClass;`);

/**----------===| Created by Odee on 5/18/16.|===----------**/

(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

  "use strict";
  console.log("Filename: AnimationFunctions.js");
  /**-----------=====| TweenMax Reference Variables |=====-----------**/
  /** Description:
   ** Animation engine using GSAP TweenMax
   ********************************************************************/
  //let fTweenMax = function() {
  let tMx = TweenMax;
  let easeSine = Sine.easeOut;
  let easePower = Power3.easeOut;
  let animTym = .5;
  //};

  /**-----------=====| fOpacityAnim Function |=====-----------**/
  /** Description:
   ** Animates element's opacity from 0% to 100%
   *************************************************************/
  let fOpacityAnim = function(elem) {
    elem.css({
      "opacity": 0
    });
    tMx.to(elem, animTym, {
      opacity: 1,
      ease: easeSine
    });
  };

  /**-----------=====| fXSlider Function |=====-----------**/
  /** Description:
   ** Animates element's horizontal positions
   ** Use the attribute "left" instead of the matrix "x" (translateX())
   ** as a key and the horizPos param as value.
   ** http://greensock.com/forums/topic/6963-tweenmax-tweening-css-x-vs-left/
   ****************************************************************/
  let fXSlider = function(elem, horizPos) {
    fOpacityAnim(elem);
    tMx.to(elem, animTym, {
      left: horizPos,
      ease: easePower
    });
  //console.log("elem, horizPos: ", elem, horizPos);
  };

  /**-----------=====| fAnimateHeightWidth Function |=====-----------**/
  /** Descriptions:
   ** Animates element's height and width
   **----------------------------------------------------------------**/
  var fAnimateHeightWidth = function(elem, eHeight, eWidth, animTym) {
    //tMx.to (elem, animTym, {css: {height: eHeight, width: eWidth}, ease: easePower});
    tMx.to(elem, animTym, {
      height: (eHeight + "px"),
      width: eWidth,
      ease: easePower
    });
  };

  var fImageHeightWidth = function(imgsArray, ht, wt) {
    /**----( Setting array member's heights and widths )----**/
    for (var i = 0; i < imgsArray.length; i++) {
      fAnimateHeightWidth(imgsArray[i], ht, wt); //rowImgRightColmnWidth);
      console.log("imgsArray[i]: ", imgsArray[i]);
    }
  };



  /**-----------=====| EXPORTS |=====-----------**/
  /** DESCRIPTIONS:
   ** ANIMATION MODULES
   ** Webpack: module.exports
   **----------------------------------------------------------------**/
  //module.exports.fTweenMax = fTweenMax;
  module.exports.fXSlider = fXSlider;
  module.exports.fAnimateHeightWidth = fAnimateHeightWidth;
  module.exports.fImageHeightWidth = fImageHeightWidth;
  //module.exports.animTym = animTym;
  /**----------------------------------------------------------------**/
  console.log(`
  Filename: AnimationFunctions.js
  module.exports.fXSlider = fXSlider
  `);
  /**----------------------------------------------------------------**/

}());

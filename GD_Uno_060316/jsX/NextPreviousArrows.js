/**----------===| Created by Odee on 5/17/16.|===----------**/

(function() { //IIFE:Immediately-Invoked Function Expression. Scope Encapsulation

  "use strict";

  /**-----------=====| IMPORT | REQUIRE |=====-----------**/
  /** DESCRIPTIONS:
   ** FILES IMPORTED FROM OTHER JS FILES
   ** SEPERATE JS FILES FOR EASIER READABILITY AND MAINTENANCE
   **----------------------------------------------------------------**/
  let anim = require('./AnimationFunctions');

  //let TwoColumnsClass = require('./codeArchitecture_X'); //.TwoColumnsClass;
  //let twoColmn = new TwoColumnsClass();

  //let sampleTest = require('./codeArchitecture_X');
  //let sample = new sampleTest.sampleFunction();
  //sampleTest.sampleFunction();
  /**----------------------------------------------------------------**/
  console.log(`
  Filename: NextPreviousArrows.js
  Import || Require: AnimationFunctions.js
  `);
  /**----------------------------------------------------------------**/

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
    //this.Stringy = "Hello from TwoColumn";
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

  class someClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    sayName() {
      alert(this.name);
    }

    sayAge() {
      alert(this.age);
    }
  }

  // var myInstance = new someClass('dwayne', 27);
  // myInstance.sayName();

  /**----------===| Columns: Class Instances |===----------**/
  //let twoColumnsHeaderSection = new TwoColumnsClass();
  class NextPreviousTwoColumnsClass {
    constructor() {
      this.String = "Hello from NextPreviousTwoColumnsClass constructor. Accesible when the method is not define.";
    }

    fNextPreviousTwoColumnsClass(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth) { //}, rightColumnPercentage, imgOrigWidth, imgOrigHeight) {
      this.RightArrow = rightArrow;
      this.LeftArrow = leftArrow;
      this.ImgContainer = imgContainer;
      this.ImgContainerWidth = imgContainerWidth;
      this.ImgWidth = imgWidth;
      //   this.RightColumnPercentage = rightColumnPercentage;
      //   this.ImgOrigWidth = imgOrigWidth;
      //   this.ImgOrigHeight = imgOrigHeight;
      let num = 0; //closure
      this.String = "Hello from fNextPreviousTwoColumnsClass method";
      this.Num = 0; // = 2; //num;
      this.NxtPos;
      this.fluidContainerLeftPosition;
      /**-----------=====| Next button function |=====-----------**/
      this.RightArrow.click(() => {
        num++;
        this.Num = num;
        //this.Num++;
        //this.Numero = num;
        //fCountNum(this.Num);
        console.log("num:np ", num);
        console.log("this.Num:np ", this.Num);
        //this.NxtPos = imgWidth * num; //this.Num;
        this.NxtPos = this.ImgWidth * this.Num;
        this.fluidContainerLeftPosition = imgWidth * num;
        console.log("this.fluidContainerLeftPosition:np ", this.fluidContainerLeftPosition);
        leftArrow.show();
        /**-----{ when it hits the end of the image container }-----**/
        // if (this.NxtPos >= (this.KontainerWidth - (this.ImgWidth * 2))){
        //   rightArrow.hide();
        // }
        if (this.NxtPos >= (this.ImgContainerWidth - (this.ImgWidth * 2))) {
          rightArrow.hide();
        }
        /**-----{ fXSlider: Slides the image container to the left }-----**/
        // anim.fXSlider(this.Kontainer, -(imgWidth * this.Num));
        anim.fXSlider(imgContainer, -(imgWidth * num));
        console.log("imgWidth:np ", imgWidth);
        console.log("this.ImgWidth:np ", this.ImgWidth);
        console.log("----------------------------------------------------------------");
      //return this.Num;
      });

      /**-----------=====| Previous button function |=====-----------**/
      leftArrow.click(() => {
        this.ImgWidth = imgWidth;
        num--;
        this.Num = num;
        console.log("this.Num: ", this.Num);
        this.NxtPos = imgWidth * this.Num;
        rightArrow.show();
        /**-----{ when it hits the beginning of the image container }-----**/
        if (this.NxtPos <= 0) {
          leftArrow.hide();
        }
      /**-----{ fXSlider: Slides the image container to the right }-----**/
      //anim.fXSlider(this.Kontainer, -(this.NxtPos));
      //** anim.fXSlider(imgContainer, -(this.ImgWidth * num));
      });



    }
    // get num() {
    //   return this.Num;
    // }
    // set num(num) {
    //   this.Num = num;
    //   console.log("this.Num: sN", this.Num);
    // }

  }

  /**-----------=====| NextPreviousClass Class |=====-----------**/
  /** Description:
   ** Function to navigate the images inside the image container.
   ** Similar to a Carousel.
  /**----------------------------------------------------------------**/
  class NextPreviousClassES6 {
    constructor(num) {
      //   //   this.NxtPos = 0;
      this.Num = num;
    //   //   this.Kounter;
    //   //   this.Kontainer;
    //   //let num = 0; //NA
    //   this.Numero;
    }

    //fCountNum() {
    fCountNum() {
      this.Numero = this.Num;
      this.String = "Hello from fCountNum"
    }

    fNextPreviousClass(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth) {
      //   this.NxtPos;
      //this.Num; // = 0;
      //   this.Kontainer = imgContainer;
      //   this.KontainerWidth; // = imgContainerWidth;
      //   this.ImgWidth; // = imgWidth;
      let num = 0; //closure
      /**-----------=====| Next button function |=====-----------**/
      rightArrow.click(() => {
        this.Kontainer = imgContainer;
        this.KontainerWidth = imgContainerWidth;
        this.ImgWidth = imgWidth;
        //console.log("twoColmn.RightColumn:nP ", twoColmn.RightColumn);
        num++;
        //this.Num++;
        this.Num = num; //how do you pass the num to thisNum property?
        //this.Numero = num;
        //fCountNum(this.Num);
        console.log("this.Num:np ", this.Num);
        this.NxtPos = imgWidth * this.Num;
        //this.NxtPos = this.ImgWidth * this.Num;
        leftArrow.show();
        /**-----{ when it hits the end of the image container }-----**/
        // if (this.NxtPos >= (this.KontainerWidth - (this.ImgWidth * 2))) {
        //   rightArrow.hide();
        // }
        if (this.NxtPos >= (imgContainerWidth - (imgWidth * 2))) {
          rightArrow.hide();
        }
        /**-----{ fXSlider: Slides the image container to the left }-----**/
        // anim.fXSlider(this.Kontainer, -(imgWidth * this.Num));
        // console.log("this.Kontainer: ", this.Kontainer);
        //anim.fXSlider(this.Kontainer, -(this.NxtPos));
        anim.fXSlider(imgContainer, -(this.ImgWidth * num));
        // console.log("imgContainer: ", imgContainer);
        // console.log("this.Kontainer: ", this.Kontainer);
        //
        // console.log("imgContainerWidth: ", imgContainerWidth);
        // console.log("this.KontainerWidth: ", this.KontainerWidth);
        //
        console.log("imgWidth:np ", imgWidth);
        console.log("this.ImgWidth:np ", this.ImgWidth);
      //return this.Num;
      });

      /**-----------=====| Previous button function |=====-----------**/
      leftArrow.click(() => {
        this.ImgWidth = imgWidth;
        num--;
        this.Num = num;
        console.log("this.Num: ", this.Num);
        this.NxtPos = imgWidth * this.Num;
        rightArrow.show();
        /**-----{ when it hits the beginning of the image container }-----**/
        if (this.NxtPos <= 0) {
          leftArrow.hide();
        }
        /**-----{ fXSlider: Slides the image container to the right }-----**/
        //anim.fXSlider(this.Kontainer, -(this.NxtPos));
        anim.fXSlider(imgContainer, -(this.ImgWidth * num));
      });
    }



  }


  var NextPreviousClassES5 = function NextPreviousClass() {
    /** Variables **/
    //this.nxtPos;
    var nxtPos;
    var prevPos;
    var ii = 0;
    //this.countNum = 0;
    /** Method **/
    this.fNextPreviousButtons = function fNextPreviousButtons(
      rightArrow, leftArrow, aryImages, sectionChamber) {
      /** Variables **/
      var self = this;
      //this.countNum;
      /** Properties **/
      this.RightArrow = rightArrow;
      this.LeftArrow = leftArrow;
      this.SectionChamber = sectionChamber;
      this.NxtPos;
      this.PrevPos;
      /** Method **/
      /**-------------===========( Right Arrow: Next Click Functions )===========-------------**/
      this.RightArrow.click(function() { //JQuery
        ii++;
        //self.countNum = ii;
        //console.log("self.countNum: ", self.countNum);
        nxtPos = self.NxtPos * ii;
        console.log("nxtPos: ", nxtPos, " ii: ", ii);
        leftArrow.show();
        console.log("aryImages.length: ", aryImages.length);
        if (ii >= (aryImages.length - 1)) { //last image in an array
          ii = aryImages.length - 1;
          rightArrow.hide();
        }
        /**-----{ fXSlider: Slides the image chamber to the right }-----**/
        anim.fXSlider(self.SectionChamber, -(nxtPos)); // +8
        console.log("-nxtPos: ", -nxtPos, " -------------------•");

      /**-----{ sectionChamber }-----**/
      //fContainerMultiplier (self.SectionChamber, ii);
      });

      /**-------------===========( Left Arrow: Previous Click Functions )===========-------------**/
      //this.LeftArrow.bind ("click", function () {
      this.LeftArrow.click(function() {
        ii--;
        //self.countNum = ii;
        prevPos = self.PrevPos * ii;
        console.log("-prevPos:np ", self.PrevPos, " ii: ", ii, " -------------------•");
        rightArrow.show();
        /*if (prevPos <= 0) {
         prevPos = 0;
         }*/
        if (ii <= 0) {
          ii = 0;
          leftArrow.hide();
        }
        /**-----{ fXSlider: Slides the images chamber to the left }-----**/
        anim.fXSlider(self.SectionChamber, -prevPos);
        //console.log ("-prevPos: ", -prevPos, " ii: ", ii);

      /**-----{ sectionChamber }-----**/
      //fContainerMultiplier (sectionChamber, ii);
      })
    };
  };




  /**-----------=====| EXPORTS |=====-----------**/
  /** DESCRIPTIONS:
   ** IMAGE NAVIGATION MODULES
   ** NEXT & PREVIOUS ARROW NAVS
   ** Webpack: module.exports
   **----------------------------------------------------------------**/
  //module.exports.NextPreviousClass = NextPreviousClass;
  module.exports.NextPreviousTwoColumnsClass = NextPreviousTwoColumnsClass;


  /**----------------------------------------------------------------**/
  console.log(`
   Filename: NextPreviousClass.js
   Exports: module.exports.NextPreviousClass = NextPreviousClass `);
  /**----------------------------------------------------------------**/


}());

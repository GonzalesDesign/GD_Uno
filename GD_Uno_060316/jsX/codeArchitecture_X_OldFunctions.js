
/**-----------=====| NextPreviousClass Class |=====-----------**/
/** Description:
 ** Function to navigate the images inside the image container.
 ** Similar to a Carousel.
/**----------------------------------------------------------------**/
class NextPreviousClass {
  constructor() {
    this.NxtPos = 0;
  //this.Num = 0;
  }

  fNextPreviousClass(rightArrow, leftArrow, imgContainer, imgContainerWidth, imgWidth) {
    let num = 0; //this.Num; //0; //closure
    /**-----------=====| Next button function |=====-----------**/
    rightArrow.click(() => {
      num++;
      this.Num = num;
      //this.NxtPos = imgWidth * this.Num;
      this.NxtPos = imgWidth * this.Num; //num;
      leftArrow.show();
      /**-----{ when it hits the end of the image container }-----**/
      if (this.NxtPos >= (imgContainerWidth - (imgWidth * 2))) {
        rightArrow.hide();
      }
      /**-----{ fXSlider: Slides the image container to the left }-----**/
      anim.fXSlider(imgContainer, -(this.NxtPos));
    });

    /**-----------=====| Previous button function |=====-----------**/
    leftArrow.click(() => {
      //num--;
      //this.Num = num;
      this.Num--;
      this.NxtPos = imgWidth * this.Num;
      rightArrow.show();
      /**-----{ when it hits the beginning of the image container }-----**/
      if (this.NxtPos <= 0) {
        leftArrow.hide();
      }
      /**-----{ fXSlider: Slides the image container to the right }-----**/
      anim.fXSlider(imgContainer, -(this.NxtPos));
    });
  }
}



const fRunAjax_Old1 = () => {
  console.log("fRunAjax:===-------------•");
  /*$.ajax ({
   url     : "./src/json/ajaxData2_simple.json",
   type    : "GET",
   dataType: "json",
   cache   : "false",
   success : function (data) {
   console.log ("data: ", data);*/
  //let promise = $.get("./jsX/json/ajaxData2_EvenSimpler.json");
  let promise = $.get("./jsX/json/ajaxData2_simple.json");
  //promise.then ((data) => {
  promise.then(function(data) { //})
    let i = 0;
    let ii = 0;
    let iii = 0;
    //console.log ("Promise:************************************************");
    /**-------------------------------------------------------------------------------------------**/
    /**-------------------------============| SECTIONS LOOP |============-------------------------**/
    /**-------------------------------------------------------------------------------------------**/
    for (let sect of data.GDSite) {
      i++;
      aSectionsCount[aSectionsCount.length] = sect;
      //console.log("sect: ", sect);
      /**----------===| INVOKE SECTION COLUMNS |===----------**/
      /** Description:
      **  Populate the class to get the correct property values
      **-----------------------------------------------------**/
      twoColumnsHeaderSection.fTwoColumns(sect.headerRightColumnPercent, arbitraryNum, arbitraryNum);
      //console.log("sect.headerRightColumnPercent: ", sect.headerRightColumnPercent);
      /**----------===| push to array |===----------**/
      aSectionsRightColumnPercent[aSectionsRightColumnPercent.length] = sect.headerRightColumnPercent;
      //console.log("aSectionsRightColumnPercent: ", aSectionsRightColumnPercent);
      /**----------===| CREATE SECTION HEADER CONTAINER |===----------------------------------------**/
      sectionHeaderContainer.fCreateBasicElement(sect.title, i, "sectionHeaderClass", gdContainer);
      /**----------===| Sections Header: Container Ids |===----------**/
      let sectDivIds = $("#" + sect.title + i);
      /**----------===| Basic CSS: (id, height, width) |===----------**/
      fBasicStyle(sectDivIds, "auto", gdContainerWidth);
      /**----------===| push to array |===----------**/
      aSectionHeaders[aSectionHeaders.length] = sectDivIds;

      /**----------===| CREATE HEADER LEFT COLUMN |===------------------------------------------------------------**/
      sectionHeaderContainer.fCreateBasicElement(sect.title + "_Left", i, "sectionHeaderLeftColmnClass", sectDivIds);
      /**----------===| Left Column: Ids |===----------**/
      let sectLeftIds = $("#" + sect.title + "_Left" + i);
      /**----------===| Left Column: Basic Style |===----------**/
      fBasicStyle(sectLeftIds, "30px", twoColumnsHeaderSection.LeftColumn);
      /**----------===| push to array |===----------**/
      aSectionHeadrLeftColmn[aSectionHeadrLeftColmn.length] = sectLeftIds;

      /**----------===| CREATE HEADER RIGHT COLUMN |===-------------------------------------------------------------**/
      sectionHeaderContainer.fCreateBasicElement(sect.title + "_Right", i, "sectionHeaderRightColmnClass", sectDivIds);
      /**----------===| Sections Header Right Column: Ids |===----------**/
      let sectRightIds = $("#" + sect.title + "_Right" + i);
      /**----------===| Sections Header Right Column: Basic Style |===----------**/
      fBasicStyle(sectRightIds, "auto", twoColumnsHeaderSection.RightColumn);
      /**----------===| push to array use for animation |===----------**/
      aSectionHeadrRightColmn[aSectionHeadrRightColmn.length] = sectRightIds;
      /**----------===| Sections Header Title Text |===----------**/
      sectionHeaderText.fBasicTextContent(sect.title + "_Text", i, "sectionHeaderTxtContentClass", sectRightIds, sect.sectionTitle);
      /**----------===| Sections Header Title Text: Ids |===----------**/
      let sectionTitleIds = $("#" + sect.title + "_Text" + i);
      /**----------===| Sections Header Title Text: Basic Style |===----------**/
      fBasicStyle(sectionTitleIds, "auto", twoColumnsHeaderSection.RightColumn);

      /**-------------------------------------------------------------------------------------------**/
      /**-------------------------============| PROJECTS LOOP |============-------------------------**/
      /**-------------------------------------------------------------------------------------------**/
      for (let proj of sect.projects) {
        ii++;
        /**----------===| Divider tag for DOM and style inspection in the browser dev view for testing |===----------**/
        tagElement.fCreateTag("i", "Divider:-------------------====•", proj.title, ii, gdContainer);
        /**----------===| PUSH TO ARRAY: PROJECT COUNT |===----------**/
        aProjectsCount[aProjectsCount.length] = proj;
        //console.log("aProjectsCount.length: ", aProjectsCount.length);

        /**----------===| SMALLEST SCREEN QUERIE |===----------**/
        /*if (gdContainerWidth <= 500) {
         proj.imgRightColumnPercent = 100;
         } else {
         proj.imgRightColumnPercent = proj.imgRightColumnPercent;
         }*/
        /**----------===| End Smallest Screen Querie |===----------**/

        /**----------===| INVOKE PROJECT COLUMNS |===----------**/
        /** Description:
        **  Populate the class to get the correct property values
        **-----------------------------------------------------**/
        twoColumnsImgProjects.fTwoColumns(proj.imgRightColumnPercent, proj.imagesWidth, proj.imagesHeight);
        /**----------===| PUSH TO ARRAY: PROJECT RIGHT COLUMNS |===----------**/
        aProjectRightColumnPercent[aProjectRightColumnPercent.length] = proj.imgRightColumnPercent;
        aImagesOrigWidth[aImagesOrigWidth.length] = proj.imagesWidth;
        aImagesOrigHeight[aImagesOrigHeight.length] = proj.imagesHeight;
        //console.log("aImagesHeight: ", aImagesHeight);
        //console.log("aProjectRightColumnPercent: ", aProjectRightColumnPercent);
        //console.log("proj.imgRightColumnPercent ii: ", proj.imgRightColumnPercent);

        /**----------===| PROJECT IMAGE CONTAINER |===----------**/
        projectBasicContainer.fCreateBasicElement(proj.title + "_ProjContainer", ii, "projectContainerClass", gdContainer);
        /**----------===| Project Container Ids |===----------**/
        let projContainerIds = $("#" + proj.title + "_ProjContainer" + ii);
        /**----------===| Project Container: Basic Style |===----------**/
        fBasicStyle(projContainerIds, "auto", gdContainerWidth); // ID, HEIGHT, WIDTH
        /**----------===| push to array use for animation |===----------**/
        aProjContainerIds[aProjContainerIds.length] = projContainerIds;

        /**----------===| PROJECT IMAGE CONTAINER: LEFT COLUMN |===----------**/
        projectBasicContainer.fCreateBasicElement(proj.title + "_Left", ii, "projectLeftColmnClass", projContainerIds);
        /**----------===| Left Column Ids |===----------**/
        let projContainrLeftColDivIds = $("#" + proj.title + "_Left" + ii);
        /**----------===| Left Column: Basic Style |===----------**/
        fBasicStyle(projContainrLeftColDivIds, "100px", twoColumnsImgProjects.LeftColumn); // other css properties: ".projectLeftColmnClass" in css file.
        /**----------===| push to array |===----------**/
        aProjLeftDivIds[aProjLeftDivIds.length] = projContainrLeftColDivIds;

        /**----------===| PROJECT IMAGE CONTAINER: RIGHT COLUMN |===----------**/
        /** function parameters:(Id, Class, appendTo)
        **-----------------------------------------------------------------------------------------------------**/
        projectBasicContainer.fCreateBasicElement(proj.title + "_ProjRight", ii, "projectRightColmnClass", projContainerIds);
        /**----------===| Right Column: Ids |===----------**/
        let projRightColDivIds = $("#" + proj.title + "_ProjRight" + ii);
        /**----------===| Right Column: Basic CSS |===------------------------------------------------------------------------**/
        fBasicStyle(projRightColDivIds, twoColumnsImgProjects.NewHeight + additionalHeight, twoColumnsImgProjects.RightColumn);
        //console.log("twoColumnsImgProjects.NewHeight + additionalHeight: ", twoColumnsImgProjects.NewHeight + additionalHeight);
        /**----------===| push ids to array: images display |===----------**/
        aProjRightDivIds[aProjRightDivIds.length] = projRightColDivIds;
        /**----------===| Image Fluid-Container Ids: scope declaration |===----------**/
        let imageContainerIds;

        //let imageFluidContainerWidth;

        /**----------===| PROJECT IMAGE DISPLAY PREFERENCES: IMAGE OR VIDEO |===----------**/
        if (proj.displayType) { //} === "image") {
          additionalHeight = 60;
          /**----------===| Project Right Column Image Fluid-Container Width |===----------**/

          //console.log ("imageFluidContainerWidth: ", imageFluidContainerWidth); //correct
          //columnDiv.fCreateColumnDiv(proj.title + "_FluidContainer_", ii, projRightColDivIds, twoColumnsImgProjects.NewHeight + additionalHeight, imageFluidContainerWidth);
          //imageContainerIds = $("#" + proj.title + "_FluidContainer_" + ii); //"Id_" + ii);
          //let imageContainerIds = $ ("#imageContainerId_" + ii);
          //console.log ("imageContainerIds: ", imageContainerIds);

          /**----------===| Project Container Right Column: Image Fluid-Container |===----------**/
          let imageFluidContainerWidth = twoColumnsImgProjects.RightColumn * (proj.images.length + 1);
          //console.log("proj.images.length + 1: ", proj.images.length + 1);
          aProjImagesCount[aProjImagesCount.length] = proj.images.length + 1;
          projectBasicContainer.fCreateBasicElement(proj.title + "_FluidContainer_", ii, "projectImageFluidContainerClass", projRightColDivIds);

          //aImagesCount[aImagesCount.length] = (proj.images.length);

          /**----------===| Project Container Right Column: Ids |===----------**/
          imageContainerIds = $("#" + proj.title + "_FluidContainer_" + ii);
          //console.log("imageContainerIds: ", imageContainerIds);
          aImageFluidContainerIds[aImageFluidContainerIds.length] = imageContainerIds;
          /**----------===| Project Container Right Column: Basic CSS |===----------**/
          fBasicStyle(imageContainerIds, twoColumnsImgProjects.NewHeight + additionalHeight, imageFluidContainerWidth);
          aImageFluidContainerWidth[aImageFluidContainerWidth.length] = imageFluidContainerWidth;
          aImageFluidContainerHeight[aImageFluidContainerHeight.length] = twoColumnsImgProjects.NewHeight + additionalHeight;
          //console.log("aImageFluidContainerWidth: ", aImageFluidContainerWidth);

          /**----------===| Carousel Control: Left |===----------**/
          tagElement.fCreateTag("a", "carousel-control left", "leftCarousel", ii, projRightColDivIds);
          let leftShaderIds = $("#leftCarouselId_" + ii); //get ids
          //leftShaderIds.css({"height":twoColumnsImgProjects.NewHeight});
          //aLeftShaderIds[aLeftShaderIds.length] = leftShaderIds; //push to array
          tagElement.fCreateTag("i", "glyphicon glyphicon-chevron-left", "leftArrow", ii, leftShaderIds);

          /**----------===| Carousel Control: Right |===----------**/
          tagElement.fCreateTag("a", "carousel-control right", "rightCarousel", ii, projRightColDivIds);
          let rightShaderIds = $("#rightCarouselId_" + ii); //get ids
          //rightShaderIds.css({"height":twoColumnsImgProjects.NewHeight});
          //aRightShaderIds[aRightShaderIds.length] = rightShaderIds; //push to array
          tagElement.fCreateTag("i", "glyphicon glyphicon-chevron-right", "rightArrow", ii, rightShaderIds);

          /**----------===| Instance: Imported NextPreviousClass |===----------**/
          let imgWidth = twoColumnsImgProjects.RightColumn;
          leftShaderIds.hide();
          //console.log ("imageFluidContainerWidth 2: ", imageFluidContainerWidth); //correct

          nextPreviousImage.fNextPreviousClass(rightShaderIds, leftShaderIds, imageContainerIds, twoColumnsImgProjects.RightColumn * (proj.images.length + 1), twoColumnsImgProjects.RightColumn);

        } else { // proj.displayType === "video"
          /**----------===| Project Container Right Column |===----------**/
          //projectBasicContainer.fCreateBasicElement(proj.title + "_RightVideo", ii, "projectRightColmnVideoClass", projContainerIds);
          /**----------===| Project Container Right Column: Ids |===----------**/
          //let projRightColVideoIds = $("#" + proj.title + "_RightVideo" + ii);
          /**----------===| Project Container Right Column: Basic CSS |===----------**/
          fBasicStyle(projRightColDivIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn);
          /**----------===| push ids to array: images display |===----------**/
          //aProjRightDivIds[aProjRightDivIds.length] = projRightColDivIds;
          /**----------===| VIDEO HEIGHT CSS |===----------**/
          projRightColDivIds.css({
            //"background-color": "black",
            "height": twoColumnsImgProjects.NewHeight
          });
        //////TEMP!////// youTubeVideo.fCreateVideoDiv("video-placeholder", projRightColDivIds, twoColumnsImgProjects.NewHeight, twoColumnsImgProjects.RightColumn);
        }

        /**----------==========| PROJECT PARAGRAPHS |==========----------**/
        /**----------===| Project Paragraph Columns |===----------**/
        twoColumnsParagProjects.fTwoColumns(proj.paragraphRightColumnPercent, 0, 0);
        aParagraphRightColumnPercent[aParagraphRightColumnPercent.length] = proj.paragraphRightColumnPercent;
        //console.log("proj.paragraphRightColumnPercent: ", proj.paragraphRightColumnPercent, ii);
        //console.log("aParagraphRightColumnPercent: ", aParagraphRightColumnPercent, ii);
        aParagraphLeftColumnWidth[aParagraphLeftColumnWidth.length] = twoColumnsParagProjects.LeftColumn;
        //console.log("twoColumnsParagProjects.LeftColumn: ", twoColumnsParagProjects.LeftColumn, ii);
        /**----------===| Project Paragraph Container |===----------**/
        projectBasicContainer.fCreateBasicElement(proj.title + "_Paragraph", ii, "paragraphContainerClass", gdContainer);
        /**----------===| Project Paragraph Container: Ids |===----------**/
        let projParagDivIds = $("#" + proj.title + "_Paragraph" + ii);
        /**----------===| Project Paragraph Container: Basic CSS |===----------**/
        fBasicStyle(projParagDivIds, "auto", gdContainerWidth);
        /**----------===| Project Paragraph Container: Push to array |===----------**/
        aParagraphContainer[aParagraphContainer.length] = projParagDivIds;
        /**----------===| Project Paragraph Left Column |===----------**/
        projectBasicContainer.fCreateBasicElement(proj.title + "_ParagLeftColmn", ii, "paragraphLeftColumnClass", projParagDivIds);
        /**----------===| Project Paragraph Left Column: Ids |===----------**/
        let paragLeftColDivIds = $("#" + proj.title + "_ParagLeftColmn" + ii);
        /**----------===| Project Paragraph Left Column: Basic CSS |===----------**/
        fBasicStyle(paragLeftColDivIds, "100px", twoColumnsParagProjects.LeftColumn);
        /**----------===| Project Paragraph Left Column:: Push to array |===----------**/
        aProjParagLeftDivIds[aProjParagLeftDivIds.length] = paragLeftColDivIds;
        //console.log("paragLeftColDivIds, aProjParagLeftDivIds: ", paragLeftColDivIds, aProjParagLeftDivIds);
        /**----------===| Project Paragraph Right Column |===----------**/
        projectBasicContainer.fCreateBasicElement(proj.title + "_ParagRightColmn", ii, "paragraphRightColumnClass", projParagDivIds);
        /**----------===| Project Paragraph Right Column: Ids |===----------**/
        let paragRightColDivIds = $("#" + proj.title + "_ParagRightColmn" + ii);
        aProjParagRightDivIds[aProjParagRightDivIds.length] = paragRightColDivIds;
        /**----------===| Project Paragraph Right Column: Basic CSS |===----------**/
        fBasicStyle(paragRightColDivIds, "auto", twoColumnsParagProjects.RightColumn);
        /**----------===| Project Paragraph Right Column:: Push to array |===----------**/
        aParagraphRightColumnWidth[aParagraphRightColumnWidth.length] = twoColumnsParagProjects.RightColumn;
        //console.log("aParagraphRightColumnWidth: ", aParagraphRightColumnWidth);

        /**----------===| Project Title |===----------**/
        textDiv.fCreateTextDiv("projTitle", ii, paragRightColDivIds, proj.title);

        /**----------===| Project Sub-Title |===----------**/
        textDiv.fCreateTextDiv("projSubTitle", ii, paragRightColDivIds, proj.subTitle);

        /**----------===| Project Descriptions |===----------**/
        textDiv.fCreateTextDiv("projDescription", ii, paragRightColDivIds, proj.projDescription);

        /**-----------------------------------------------------------------------------------------**/
        /**-------------------------============| IMAGES LOOP |============-------------------------**/
        /**-----------------------------------------------------------------------------------------**/
        for (let imgs of proj.images) {
          //console.log ("imgs-------------: ", imgs);
          iii++;
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
            //console.log("proj.imgRightColumnPercent iii: ", proj.imgRightColumnPercent);
            /**----------===| Image Creation |===----------**/
            let myImage = new Image();
            let imagesPath = "./images/" + proj.title + "/";
            myImage.src = imagesPath + imgs.imgName;
            let columnHeight = twoColumnsImages.NewHeight;
            let columnWidth = twoColumnsImages.RightColumn;
            aImagesWidth[aImagesWidth.length] = twoColumnsImages.RightColumn;
            aImagesHeight[aImagesHeight.length] = twoColumnsImages.NewHeight;
            //let imageContainerIds = $("#" + proj.title + "_FluidContainer_" + iii);
            /**----------===| Image Div |===----------**/
            imageBasicDiv.fCreateBasicElement(proj.title + "_Image", iii, "imageDivClass", imageContainerIds);
            /**----------===| Image Div: Ids |===----------**/
            let imageIds = $("#" + proj.title + "_Image" + iii);
            //console.log("imageIds[iii]: ", imageIds);
            /**----------===| Image Div: CSS |===----------**/
            fBasicImageStyle(imageIds, columnHeight, columnWidth, myImage.src);
            /**----------===| push ids to array |===----------**/
            aImageIds[aImageIds.length] = imageIds;
            /**----------===| Images Description |===----------**/
            textDiv.fCreateTextDiv("imgDescription_", iii, imageIds, imgs.imgDescription);
            /*** TEST: Put this outside ajax and into a class **/
            let imageDescriptIds = $("#imgDescription_" + iii); //id = imgDescription_iii
            aImageDescriptIds[aImageDescriptIds.length] = imageDescriptIds;
            let imageDescriptClass = $(".imgDescription_Class"); // + proj.title + "_Class");
            //fImgDescriptIdStyle(imageDescriptIds, twoColumnsImgProjects.NewHeight);
            //.imgDescription_Class
            imageDescriptIds.css({
              "margin-top": twoColumnsImgProjects.NewHeight + "px"
            });
          } //end if
        }
      }
    }
    console.log("************************************************");
  },
    /** promise failure **/
    function(data) {
      console.log("Request Failed!")
    }
  )

} //);





let fOnWindowResize_Old2 = function() {
  gdContainerWidth = (gdContainer.width());
  /***----------=====| SECTIONS ANIMATION |=====----------***/
  console.log("SECTIONS ANIMATION: |-------------------------------•");
  for (let i = 0; i < aSectionsCount.length; i++) {
    //console.log("aSectionsCount.length: ", aSectionsCount.length);
    /**----------===| INVOKE SECTION COLUMNS |===----------**/
    twoColumnsHeaderSection.fTwoColumns(aSectionsRightColumnPercent[i], arbitraryNum, arbitraryNum);
    //console.log("twoColumnsHeaderSection.ResizePercent: ", twoColumnsHeaderSection.ResizePercent);
    /**----------===| ANIMATE HEADERS HEIGHT & WIDTH |===----------**/
    animFunct.fAnimateHeightWidth(aSectionHeaders[i], "auto", gdContainerWidth, animTymSlow);
    animFunct.fAnimateHeightWidth(aSectionHeadrLeftColmn[i], "auto", twoColumnsHeaderSection.LeftColumn, animTymSlow);
    animFunct.fAnimateHeightWidth(aSectionHeadrRightColmn[i], "auto", twoColumnsHeaderSection.RightColumn, animTymSlow);

  }

  /***----------=====| PROJECTS ANIMATION |=====----------***/
  console.log("PROJECTS ANIMATION: |-------------------------------•");
  for (let ii = 0; ii < aProjectsCount.length; ii++) {
    //console.log("aProjectsCount.length: ", aProjectsCount.length);
    /**----------===| INVOKE PROJECTS COLUMNS |===----------**/
    twoColumnsImgProjectsAnim.fTwoColumns(aProjectRightColumnPercent[ii], aImagesOrigWidth[ii], aImagesOrigHeight[ii]);
    //console.log(ii, ": aProjectRightColumnPercent[ii]: ", aProjectRightColumnPercent[ii]);
    /**----------===| ANIMATE PROJECT HEIGHT & WIDTH |===----------**/
    animFunct.fAnimateHeightWidth(aProjContainerIds[ii], "auto", gdContainerWidth, animTymSlow); //projectContainerClass
    animFunct.fAnimateHeightWidth(aProjLeftDivIds[ii], "auto", twoColumnsImgProjectsAnim.LeftColumn, animTymSlow); //projectLeftColmnClass
    animFunct.fAnimateHeightWidth(aProjRightDivIds[ii], twoColumnsImgProjectsAnim.NewHeight + additionalHeight, twoColumnsImgProjectsAnim.RightColumn, animTymSlow);

    animFunct.fAnimateHeightWidth(aImageFluidContainerIds[ii], twoColumnsImgProjectsAnim.NewHeight + additionalHeight, twoColumnsImgProjectsAnim.RightColumn * aProjImagesCount[ii], animTymSlow);
    //console.log(ii, ": aImageFluidContainerIds[ii]x: ", aImageFluidContainerIds[ii]);


    // animFunct.fAnimateHeightWidth(aImageIds[ii], twoColumnsImgProjectsAnim.NewHeight, twoColumnsImgProjectsAnim.RightColumn, animTymSlow);
    // console.log(ii, ": aImageIds[ii]: ", aImageIds[ii]);
    // console.log(ii, ": twoColumnsImgProjectsAnim.NewHeight: ", twoColumnsImgProjectsAnim.NewHeight);
    // console.log(ii, ": twoColumnsImgProjectsAnim.RightColumn: ", twoColumnsImgProjectsAnim.RightColumn);

  //twoColumnsImagesAnim.fTwoColumns(aProjectRightColumnPercent[ii], aImagesOrigWidth[ii], aImagesOrigHeight[ii]);
  //console.log(ii, ": aProjectRightColumnPercent[ii]: ", aProjectRightColumnPercent[ii]);
  }

  /***----------=====| IMAGES ANIMATION |=====----------***/
  console.log("IMAGES ANIMATION: |-------------------------------•");
  for (let iii = 0; iii < aImagesCount.length; iii++) {
    //console.log("aImagesCount.length: ", aImagesCount.length);
    /**----------===| INVOKE PROJECTS IMAGES COLUMNS |===----------**/
    twoColumnsImagesAnim.fTwoColumns(aImagesRightColumnPercent[iii], aImagesWidth[iii], aImagesHeight[iii]);
    // console.log(iii, ": aProjectRightColumnPercent[iii]: ", aProjectRightColumnPercent[iii]);
    // console.log(iii, ": aImagesOrigWidth[iii]: ", aImagesOrigWidth[iii]);

    /***----------=====| Images divs height and width |=====-------------------***/
    animFunct.fAnimateHeightWidth(aImageIds[iii], twoColumnsImagesAnim.NewHeight, twoColumnsImagesAnim.RightColumn, animTymSlow);
    // console.log(iii, ": aImageIds[iii]: ", aImageIds[iii]);
    // console.log(iii, ": twoColumnsImagesAnim.NewHeight: ", twoColumnsImagesAnim.NewHeight);
    // console.log(iii, ": twoColumnsImagesAnim.RightColumn: ", twoColumnsImagesAnim.RightColumn);

  //animFunct.fAnimateHeightWidth(aImageFluidContainer[iii], twoColumnsImagesAnim.NewHeight + additionalHeight, twoColumnsImagesAnim.RightColumn * aImagesCount.length, animTymSlow);
  // console.log(iii, ": aImageFluidContainer[iii]: ", aImageFluidContainer[iii]);
  // console.log(iii, ": twoColumnsImagesAnim.RightColumn * aImagesCount.length: ", twoColumnsImagesAnim.RightColumn * aImagesCount.length);
  // console.log(iii, ": twoColumnsImagesAnim.NewHeight + additionalHeight: ", twoColumnsImagesAnim.NewHeight + additionalHeight);
  } /**----===| END IMAGES ANIMATION: |-------------------------------•**/


  //  } /**----===| END PROJECTS ANIMATION: |-------------------------------•**/

  // console.log("PROJECTS ANIMATION:");
  // for (let ii = 0; ii < aProjectsCount.length; ii++) {
  //   console.log("aProjectsCount.length: ", aProjectsCount.length);
  //   /**----------===| INVOKE PROJECTS COLUMNS |===----------**/
  //   twoColumnsImgProjectsAnim.fTwoColumns(aProjectRightColumnPercent[ii], aImagesOrigWidth[ii], aImagesOrigHeight[ii]);
  //   /**----------===| ANIMATE PROJECT HEIGHT & WIDTH |===----------**/
  //   animFunct.fAnimateHeightWidth(aProjContainerIds[ii], "auto", gdContainerWidth, animTymSlow); //projectContainerClass
  //   animFunct.fAnimateHeightWidth(aProjLeftDivIds[ii], "auto", twoColumnsImgProjectsAnim.LeftColumn, animTymSlow); //projectLeftColmnClass
  //   animFunct.fAnimateHeightWidth(aProjRightDivIds[ii], twoColumnsImgProjectsAnim.NewHeight + additionalHeight, twoColumnsImgProjectsAnim.RightColumn, animTymSlow); //projectRightColmnClass twoColumnsImgProjectsAnim.NewHeight 400
  //   //console.log("twoColumnsImgProjectsAnim.NewHeight + additionalHeight: ", twoColumnsImgProjectsAnim.NewHeight + additionalHeight);
  //   //console.log("twoColumnsImages.NewHeight: ", twoColumnsImages.NewHeight);
  //   // animFunct.fAnimateHeightWidth(aProjParagLeftDivIds[ii], "auto", aParagraphLeftColumnWidth[ii], animTymSlow);
  //   // animFunct.fAnimateHeightWidth(aProjParagRightDivIds[ii], "auto", aParagraphRightColumnWidth[ii], animTymSlow);
  //
  //   /**----------===| INVOKE PROJECTS PARAGRAPH COLUMNS |===----------**/
  //   twoColumnsParagProjects.fTwoColumns(aParagraphRightColumnPercent[ii], arbitraryNum, arbitraryNum);
  //   /**----------===| ANIMATE PROJECT PARAGRAPH HEIGHT & WIDTH |===----------**/
  //   animFunct.fAnimateHeightWidth(aParagraphContainer[ii], "auto", gdContainerWidth, animTymSlow);
  //   animFunct.fAnimateHeightWidth(aProjParagLeftDivIds[ii], "auto", twoColumnsParagProjects.LeftColumn, animTymSlow);
  //   animFunct.fAnimateHeightWidth(aProjParagRightDivIds[ii], "auto", twoColumnsParagProjects.RightColumn, animTymSlow);
  //
  //
  //   /***----------=====| IMAGES ANIMATION |=====----------***/
  //   console.log("IMAGES ANIMATION:");
  //   for (let iii = 0; iii < aImagesCount.length; iii++) {
  //     console.log("aImagesCount.length: ", aImagesCount.length);
  //     console.log(iii, ":•----------------------------------------------------------------------•");
  //     /***----------=====| TwoColumnsClass Instance |=====-------------------***/
  //     /** Description:
  //      ** twoColumnsImages.fTwoColumns: Instance to calculate the percentage of
  //      ** the properties use for left & right columns as well as the height.
  //      **---------------------------------------------------------------------**/
  //     /**----------===| INVOKE PROJECTS IMAGES COLUMNS |===----------**/
  //     twoColumnsImagesAnim.fTwoColumns(aProjectRightColumnPercent[iii], aImagesOrigWidth[iii], aImagesOrigHeight[iii]);
  //     console.log("aProjectRightColumnPercent[iii]: ", aProjectRightColumnPercent[iii]);
  //     console.log("aImagesOrigWidth[iii]: ", aImagesOrigWidth[iii]);
  //     /***----------=====| Images fluid container height and width |=====-------------------***/
  //     //animFunct.fAnimateHeightWidth(aImageFluidContainer[iii], aImageFluidContainerHeight[iii], aImageFluidContainerWidth[iii], animTymSlow);
  //     animFunct.fAnimateHeightWidth(aImageFluidContainer[iii], twoColumnsImagesAnim.NewHeight + additionalHeight, twoColumnsImagesAnim.RightColumn * aImagesCount[iii], animTymSlow);
  //     //console.log("aImageFluidContainer[iii]: ", aImageFluidContainer[iii]);
  //     console.log("aImageFluidContainer NewHeight: ", twoColumnsImagesAnim.NewHeight + additionalHeight);
  //     console.log("aImageFluidContainer RightColumn: ", twoColumnsImagesAnim.RightColumn);
  //     //console.log("twoColumnsImagesAnim.RightColumn * aImagesCount[iii]: ", twoColumnsImagesAnim.RightColumn * aImagesCount[iii]);
  //     /***----------=====| Images divs height and width |=====-------------------***/
  //     animFunct.fAnimateHeightWidth(aImageIds[iii], twoColumnsImagesAnim.NewHeight, twoColumnsImagesAnim.RightColumn, animTymSlow);
  //     console.log("aImageIds NewHeight: ", twoColumnsImagesAnim.NewHeight);
  //     console.log("aImageIds RightColumn: ", twoColumnsImagesAnim.RightColumn);
  //
  //     aImageDescriptIds[iii].css({
  //       "margin-top": twoColumnsImagesAnim.NewHeight + "px"
  //     });
  //   } // END IMAGES ANIMATION //
  // } // END PROJECTS ANIMATION //
  //
  //console.log("•----------------------------------------------------------------------•");

  // } // END SECTION ANIMATION //
  //console.log("•----------------------------------------------------------------------•");

}; // End fOnWindowResize
console.log("•----------------------------------------------------------------------•");

let fOnWindowResize_Old1 = function() {
  gdContainerWidth = (gdContainer.width());
  /***----------=====| SECTIONS ANIMATION |=====----------***/
  console.log("SECTIONS ANIMATION:");
  for (let i = 0; i < aSectionsCount.length; i++) {
    /**----------===| INVOKE SECTION COLUMNS |===----------**/
    twoColumnsHeaderSection.fTwoColumns(aSectionsRightColumnPercent[i], arbitraryNum, arbitraryNum);
    console.log("twoColumnsHeaderSection.ResizePercent: ", twoColumnsHeaderSection.ResizePercent);
    /**----------===| ANIMATE HEADERS HEIGHT & WIDTH |===----------**/
    animFunct.fAnimateHeightWidth(aSectionHeaders[i], "auto", gdContainerWidth, animTymSlow);
    animFunct.fAnimateHeightWidth(aSectionHeadrLeftColmn[i], "auto", twoColumnsHeaderSection.LeftColumn, animTymSlow);
    animFunct.fAnimateHeightWidth(aSectionHeadrRightColmn[i], "auto", twoColumnsHeaderSection.RightColumn, animTymSlow);
  }
  console.log("•----------------------------------------------------------------------•");
  /***----------=====| PROJECTS ANIMATION |=====----------***/
  console.log("PROJECTS ANIMATION:");
  for (let ii = 0; ii < aProjectsCount.length; ii++) {
    console.log("aProjectsCount.length: ", aProjectsCount.length);
    /**----------===| INVOKE PROJECTS COLUMNS |===----------**/
    twoColumnsImgProjectsAnim.fTwoColumns(aProjectRightColumnPercent[ii], aImagesOrigWidth[ii], aImagesOrigHeight[ii]);
    console.log(ii, ": aProjectRightColumnPercent[ii]: ", aProjectRightColumnPercent[ii]);
    // console.log(`
    //   twoColumnsImgProjectsAnim.fTwoColumns: ii: ${ii}
    //   aProjectRightColumnPercent[ii]: ${aProjectRightColumnPercent[ii]}
    //   aImagesOrigWidth[ii]: ${aImagesOrigWidth[ii]}
    //   aImagesOrigHeight[ii]: ${aImagesOrigHeight[ii]}
    //   twoColumnsImgProjectsAnim.ResizePercent: ", ${twoColumnsImgProjectsAnim.ResizePercent}
    // `);

    //aParagraphLeftColumnWidth[aParagraphLeftColumnWidth.length] = twoColumnsParagProjects.LeftColumn;

    /**----------===| ANIMATE PROJECT HEIGHT & WIDTH |===----------**/
    animFunct.fAnimateHeightWidth(aProjContainerIds[ii], "auto", gdContainerWidth, animTymSlow); //projectContainerClass
    animFunct.fAnimateHeightWidth(aProjLeftDivIds[ii], "auto", twoColumnsImgProjectsAnim.LeftColumn, animTymSlow); //projectLeftColmnClass
    animFunct.fAnimateHeightWidth(aProjRightDivIds[ii], twoColumnsImgProjectsAnim.NewHeight + additionalHeight, twoColumnsImgProjectsAnim.RightColumn, animTymSlow); //projectRightColmnClass twoColumnsImgProjectsAnim.NewHeight 400
    //console.log("twoColumnsImgProjectsAnim.NewHeight + additionalHeight: ", twoColumnsImgProjectsAnim.NewHeight + additionalHeight);
    //console.log("twoColumnsImages.NewHeight: ", twoColumnsImages.NewHeight);
    // animFunct.fAnimateHeightWidth(aProjParagLeftDivIds[ii], "auto", aParagraphLeftColumnWidth[ii], animTymSlow);
    // animFunct.fAnimateHeightWidth(aProjParagRightDivIds[ii], "auto", aParagraphRightColumnWidth[ii], animTymSlow);

    /**----------===| INVOKE PROJECTS PARAGRAPH COLUMNS |===----------**/
    twoColumnsParagProjects.fTwoColumns(aParagraphRightColumnPercent[ii], arbitraryNum, arbitraryNum);
    /**----------===| ANIMATE PROJECT PARAGRAPH HEIGHT & WIDTH |===----------**/
    animFunct.fAnimateHeightWidth(aParagraphContainer[ii], "auto", gdContainerWidth, animTymSlow);
    animFunct.fAnimateHeightWidth(aProjParagLeftDivIds[ii], "auto", twoColumnsParagProjects.LeftColumn, animTymSlow);
    animFunct.fAnimateHeightWidth(aProjParagRightDivIds[ii], "auto", twoColumnsParagProjects.RightColumn, animTymSlow);
  }

  console.log("•----------------------------------------------------------------------•");

  /***----------=====| IMAGES ANIMATION |=====----------***/
  console.log("IMAGES ANIMATION:");
  for (let iii = 0; iii < aImagesCount.length; iii++) {
    //for (let iii of aImagesCount) {
    console.log("aImagesCount.length: ", aImagesCount.length);
    console.log(iii, ":•----------------------------------------------------------------------•");
    /***----------=====| TwoColumnsClass Instance |=====-------------------***/
    /** Description:
     ** twoColumnsImages.fTwoColumns: Instance to calculate the percentage of
     ** the properties use for left & right columns as well as the height.
     **---------------------------------------------------------------------**/
    /**----------===| INVOKE PROJECTS IMAGES COLUMNS |===----------**/
    twoColumnsImagesAnim.fTwoColumns(aProjectRightColumnPercent[iii], aImagesOrigWidth[iii], aImagesOrigHeight[iii]);
    console.log("aProjectRightColumnPercent[iii]: ", aProjectRightColumnPercent[iii]);
    console.log("aImagesOrigWidth[iii]: ", aImagesOrigWidth[iii]);
    /***----------=====| Images fluid container height and width |=====-------------------***/
    //animFunct.fAnimateHeightWidth(aImageFluidContainer[iii], aImageFluidContainerHeight[iii], aImageFluidContainerWidth[iii], animTymSlow);
    animFunct.fAnimateHeightWidth(aImageFluidContainer[iii], twoColumnsImagesAnim.NewHeight + additionalHeight, twoColumnsImagesAnim.RightColumn * aImagesCount.length, animTymSlow);
    //console.log("aImageFluidContainer[iii]: ", aImageFluidContainer[iii]);
    console.log("aImageFluidContainer NewHeight: ", twoColumnsImagesAnim.NewHeight + additionalHeight);
    console.log("aImageFluidContainer RightColumn: ", twoColumnsImagesAnim.RightColumn);
    //console.log("twoColumnsImagesAnim.RightColumn * aImagesCount[iii]: ", twoColumnsImagesAnim.RightColumn * aImagesCount[iii]);
    /***----------=====| Images divs height and width |=====-------------------***/
    animFunct.fAnimateHeightWidth(aImageIds[iii], twoColumnsImagesAnim.NewHeight, twoColumnsImagesAnim.RightColumn, animTymSlow);
    console.log("aImageIds NewHeight: ", twoColumnsImagesAnim.NewHeight);
    console.log("aImageIds RightColumn: ", twoColumnsImagesAnim.RightColumn);

    aImageDescriptIds[iii].css({
      "margin-top": twoColumnsImagesAnim.NewHeight + "px"
    }); //twoColumnsImgProjects

  }
  console.log("•----------------------------------------------------------------------•");


  //fBasicStyle(paragLeftColDivIds, "100px", twoColumnsParagProjects.LeftColumn);
  /**----------===| Project Paragraph Left Column:: Push to array |===----------**/


  //twoColumnsParagProjects.fTwoColumns(aParagraphRightColumnPercent, 100, 100);

  //let paragraphLeftColumnClass = $(".paragraphLeftColumnClass");
  //fBasicStyle(paragraphLeftColumnClass, "10px", aParagraphLeftColumnWidth); //paragraphLeftColumnClass aProjParagLeftDivIds
  //fTwoColumnsAnimation(paragraphLeftColumnClass, aParagraphRightColumnPercent, gdContainerWidth);

  //console.log("aParagraphRightColumnPercent: ", aParagraphRightColumnPercent); //constant
  //console.log("aParagraphLeftColumnWidth: ", aParagraphLeftColumnWidth);

  //console.log("twoColumnsParagProjects.LeftColumn: ", twoColumnsParagProjects.LeftColumn);

  //console.log("aParagraphLeftColumnWidth: ", aParagraphLeftColumnWidth);
  //console.log("twoColumnsParagProjects.LeftColumn: ", twoColumnsParagProjects.LeftColumn, ii);

  //animFunct.fAnimateHeightWidth(aSectionHeaders, "auto", gdContainerWidth, animTymSlow);
  // for (let i of aProjParagLeftDivIds) {
  //   //console.log("aProjParagLeftDivIds: ", aProjParagLeftDivIds);
  //   animFunct.fAnimateHeightWidth(aProjParagLeftDivIds, "auto", twoColumnsParagProjects.LeftColumn, animTymSlow);
  // //animFunct.fImageHeightWidth(aProjParagLeftDivIds[i], "20px", twoColumnsParagProjects.LeftColumn);
  // }
  //animFunct.fImageHeightWidth(aProjParagLeftDivIds, "20px", twoColumnsParagProjects.LeftColumn);

  // let paragraphLeftColumnClass = $(".paragraphLeftColumnClass");
  // animFunct.fAnimateHeightWidth(paragraphLeftColumnClass, 100, twoColumnsParagProjects.LeftColumn, animTymSlow);
  // let paragraphRightColumnClass = $(".paragraphRightColumnClass");
  //
  // //animFunct.fAnimateHeightWidth(paragraphRightColumnClass, "auto", twoColumnsParagProjects.RightColumn, animTymSlow);
  // //console.log("twoColumnsParagProjects.RightColumn :", twoColumnsParagProjects.RightColumn);
  // for (let i of aParagraphRightColumnWidth) {
  //   console.log("i: ", i);
  //   animFunct.fAnimateHeightWidth(aProjParagRightDivIds, "auto", i, animTymSlow); //paragraphRightColumnClass
  // }

  //animFunct.fAnimateHeightWidth(aProjRightDivIds, "auto", aProjContainerIds.width, animTymSlow);

  //console.log("aProjParagDivIds: ", aProjParagDivIds);
  //console.log("aProjParagLeftDivIds: ", aProjParagLeftDivIds);

  //fTwoColumnsAnimation(aProjParagLeftDivIds, aParagraphRightColumnPercent, aProjParagDivIds);


  // fAnimateHeightWidth(projDivId, 210, gdContainerWidth, animTymSlow);
  // fAnimateHeightWidth(projDivId2, 210, gdContainerWidth, animTymSlow);
  // /** Project Left Column **/
  // fAnimateHeightWidth(projLeftColDivId, 90, "30%", animTymSlow);
  // /** Project Right Column **/
  // fAnimateHeightWidth(projRightColDivId, 200, "70%", zeroTym);
  //
  // /** Project Right Column Width **/
  // let rightColumnWidth = projRightColDivId.width();
  // //console.log("rightColumnWidth: ",rightColumnWidth);
  //
  // /** Project Image Container **/
  // imgContainerWidth = (rightColumnWidth * 3) + 10;
  // //imgContainer.fCreateColumnDiv ("imgContainer", imgContainerTitolo, counter, projRightColDivId, "100px", imgContainerWidth);
  // fAnimateHeightWidth(imgContainerDivId, "auto", imgContainerWidth, zeroTym);
  //
  // /** Project Images **/
  // for (let count = 0; count < imagesCount; count++) {
  //   //imgDiv.fCreateImgDiv ("imgDiv", imgDivTitolo, count, imgContainerDivId, aMyImgSrc[count], "200px", "200px");
  //   let imgDivId = $("#" + imgDivTitolo + "Id_" + count);
  //   fAnimateHeightWidth(imgDivId, "auto", rightColumnWidth, zeroTym);
  // }

  /** from Ajax **/
  //fAnimateHeightWidth(aProjContainerIds, 100, gdContainerWidth, animTymSlow);
  // animFunct.fAnimateHeightWidth(aProjContainerIds, "auto", gdContainerWidth, animTymSlow);
  // animFunct.fAnimateHeightWidth(aProjParagDivIds, "auto", gdContainerWidth, animTymSlow);
  // animFunct.fAnimateHeightWidth(aProjLeftDivIds, "auto", aProjContainerIds.width, animTymSlow);
  // console.log("aProjContainerIds.width():", aProjContainerIds.width());
  // animFunct.fAnimateHeightWidth(aProjRightDivIds, "auto", aProjContainerIds.width, animTymSlow);
  //
  // animFunct.fAnimateHeightWidth(aSectionHeaders, "auto", gdContainerWidth, animTymSlow);
  // animFunct.fAnimateHeightWidth(aSectionHeadrLeftColmn, "auto", gdContainerWidth, animTymSlow);
  // //fBasicStyle(aSectionHeadrLeftColmn, "auto", twoColumnsHeaderSection.LeftColumn);
  // console.log("aSectionHeadrLeftColmn :", aSectionHeadrLeftColmn);
  // animFunct.fAnimateHeightWidth(aSectionHeadrRightColmn, "auto", gdContainerWidth, animTymSlow);

  //fBasicStyle(aSectionHeadrRightColmn, "auto", twoColumnsHeaderSection.RightColumn);

  /** Project Right Column Width **/
  //let rightColumnWidth = projRightColDivId.width();
  //console.log("rightColumnWidth: ",rightColumnWidth);

  //fRunAjax ();

};

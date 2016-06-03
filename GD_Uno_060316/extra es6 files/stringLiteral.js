
(function() {
  'use strict';

  /**-----===| String template literal for the image description |===-----**/
  let descriptionText = "Some text goes here or pulled from a JSON file."

  let imageDescription = ` <div><h3>${ descriptionText }</h3></div> `;
  let imageDivIds = document.getElementById(proj.title + "_Image" + iii)
  imageDivIds.innerHTML = imageDescription;

}());

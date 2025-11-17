
function upDate(previewPic) {
  console.log("Event triggered!");
  console.log("Source:", previewPic.src);
  console.log("Alt:", previewPic.alt);


  let displayDiv = document.getElementById("image");
  displayDiv.style.backgroundImage = `url('${previewPic.src}')`;

  
  displayDiv.textContent = previewPic.alt;
}

function undo() {
  console.log("Undo triggered!");

  let displayDiv = document.getElementById("image");
  displayDiv.style.backgroundImage = "url('')";
  displayDiv.textContent = "Hover over an image below to display here.";
}

function myFunction(idDot,idSpan,idMyBtn) {
  var dots = document.getElementById(idDot);
  var moreText = document.getElementById(idSpan);
  var btnText = document.getElementById(idMyBtn);
  var experience = document.getElementsByClassName("experience");  
  var tElements = document.getElementsByClassName("title_box");  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    experience[0].style.height = "350px"
    tElements[0].style.height = "231px";

  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    experience[0].style.height = "550px"
    tElements[0].style.height = "500px";

  }
}

 var slideIndex2 = 0;
function showSlides() {
    let slides = document.getElementsByClassName("imageSlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
showSlides();

function showMenu(){
    document.getElementById("ullist").classList.toggle("responsiveNav");
}
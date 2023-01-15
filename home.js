
var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num)
{
    displaySlides(currentIndex+=num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
    setTimeout(displaySlides(num), 1000);
}

// var slideIndex = 0;

// function showSlides() {
//     let slides = document.getElementsByClassName("imageSlides");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 3000); // Change image every 2 seconds
// }
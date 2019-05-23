 // Mobile Navigation

 function myFunction() {
     var x = document.getElementById("myLinks");
     if (x.style.display === "block") {
         x.style.display = "none";
     } else {
         x.style.display = "block";
     }
 }


 $(document).ready(function () {

     // Galeria

     $(document).ready(function () {
         $("#flip").click(function () {
             $("#panel").slideToggle("slow");
         });
     });

     // Main Navigation Bar

     var prevScrollpos = window.pageYOffset;
     window.onscroll = function () {
         var currentScrollPos = window.pageYOffset;
         if (prevScrollpos > currentScrollPos) {
             document.getElementById("navbar").style.top = "0";
             document.getElementById("bar").style.top = "0";
         } else {
             document.getElementById("navbar").style.top = "-75px";
             document.getElementById("bar").style.top = "-75px";
         }
         prevScrollpos = currentScrollPos;
     }

     // Quotes Carousel Below Header

     var slideIndex = 0;
     showSlides();

     function showSlides() {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         var dots = document.getElementsByClassName("dot");
         for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
         }
         slideIndex++;
         if (slideIndex > slides.length) {
             slideIndex = 1
         }
         for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex - 1].style.display = "block";
         dots[slideIndex - 1].className += " active";
         setTimeout(showSlides, 7000);
     }

     // Smooth Scrolling

     $(document).ready(function () {

         var scrollLink = $('.scroll');

         scrollLink.click(function (e) {
             e.preventDefault();
             $('body,html').animate({
                 scrollTop: $(this.hash).offset().top
             }, 1500);
         });

     })

     // Contact Form Carousel Background

     var i = 0;

     function change() {
         var doc = document.getElementById("bgimg");
         var bg = ["url('3333.jpg')", "url('333.jpg')"];
         doc.style.transition = "1s";
         doc.style.backgroundImage = bg[i];
         i = (i + 1) % bg.length;
     }
     setInterval(change, 7000);
 });
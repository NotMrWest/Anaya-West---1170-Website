let dark = document.getElementById("moon");
let button = document.getElementById("bars");
let navlinks = document.querySelector(".nav_links");
let header = document.querySelector("header");
let navbar = document.querySelector(".nav_bar");
let resumeBox = document.querySelector(".Resume");
let moonBoxes = document.querySelector(".moon-border")
let SkillsBoxClr = document.querySelector(".footer");
let Aboutpicture1 = document.querySelector(".picture1")
let Aboutpicture2 = document.querySelector(".picture2")
let WestLogo = document.getElementById("West-Logo");
let noti = document.getElementById("clock");




noti.addEventListener("click",()=>{
let date = new Date();
let hour = date.getHours();
 let min = date.getMinutes();
let print = date.getHours() +":" + date.getMinutes()
window.alert("The time is " + print);
});

var body = document.body;
    WestLogo.addEventListener("click",()=>{
        document.body.classList.toggle('light-mode');
  if(body.classList.contains('dark-mode')){
       document.body.classList.toggle('light-mode');
       body.classList.remove('dark-mode');
    }else if (body.classList.contains('light-mode')){
        document.body.classList.toggle("lightblue-mode");
        body.classList.remove('light-mode');
    }else if (body.classList.contains('lightblue-mode')){
        body.classList.remove('lightblue-mode');
        document.body.classList.toggle('dark-mode');
    }
});

dark.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    if(body.classList.contains('dark-mode')){
        document.body.classList.toggle('light-mode');
        body.classList.remove('dark-mode');
        moonBoxes.classList.toggle("moon-border");
        moonBoxes.classList.toggle("moonBox");
     }
     else if (body.classList.contains('light-mode')){
        body.classList.remove('lightblue-mode');
        document.body.classList.toggle('dark-mode');
        moonBoxes.classList.toggle("moon-border");
        moonBoxes.classList.toggle("moonBox");
    }
     else if (body.classList.contains('lightblue-mode')){
        body.classList.remove('lightblue-mode');
        document.body.classList.toggle('dark-mode');
    }
    });



    //For the Index Page
    /*
if(resumeBox){
dark.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
    resumeBox.classList.toggle("Resume-Light-Mode")
     resumeBox.classList.toggle("Resume");
    moonBoxes.classList.toggle("moon-border");
    moonBoxes.classList.toggle("moonBox");
    });
}
*/

    //For the Menu bar
    button.addEventListener("click", ()=>{
        navbar.classList.toggle("active");
        navlinks.classList.toggle("active1");
        header.classList.toggle("active2");
        
     });
/*
if(!resumeBox){
     dark.addEventListener("click",()=>{
        moonBoxes.classList.toggle("moon-border");
        moonBoxes.classList.toggle("moonBox");
        document.body.classList.toggle("light-mode");
      SkillsBoxClr.classList.toggle("SkillsBoxClr");
      SkillsBoxClr.classList.toggle(".footer");
      Aboutpicture1.classList.toggle("picture1_dark")
      Aboutpicture2.classList.toggle("picture2_dark")
      Aboutpicture1.classList.toggle("picture1")
      Aboutpicture2.classList.toggle("picture2")
    });
};
*/

    //Slider
    previousButton = document.getElementById("prev");
    nextButton = document.getElementById("next");

    
    previousButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    const slides = document.querySelectorAll(".slides img");
    let slideIndex = 0;
    let interValid = null;

initializeSlider();

    function initializeSlider(){

if(slides.length >0){
    slides[slideIndex].classList.add("displaySlide");
}

    }
    function showSlide(index){


        if(index >=slides.length){
slideIndex = 0
        }else if(index < 0){
slideIndex = slides.length-1;
        }
        slides.forEach(slide =>{
            slide.classList.remove("displaySlide");
        });
        slides[slideIndex].classList.add("displaySlide");
    }
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
   
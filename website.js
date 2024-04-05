let dark = document.getElementById("moon");
let button = document.getElementById("bars");
let navlinks = document.querySelector(".nav_links");
let header = document.querySelector("header");
let navbar = document.querySelector(".nav_bar");
let resumeBox = document.querySelector(".Resume");
let moonBoxes = document.querySelector(".moon-border")
let SkillsBoxClr = document.querySelector(".footer");

let noti = document.getElementById("clock");


//Color Switchers
document.addEventListener("DOMContentLoaded",function(){
    const switchClr = document.getElementById("West-Logo");
const themes = ["Dark","Red","Lightblue"];
let currentThemeIndex = 0;
function changeColor(){
document.documentElement.className = themes[currentThemeIndex];
currentThemeIndex = (currentThemeIndex+ 1) % themes.length;
}
switchClr.addEventListener("click",changeColor);
});



document.addEventListener("DOMContentLoaded",function(){
    const switchClr = document.getElementById("moon");
const themes = ["Lightblue","Red","Dark"];
let currentThemeIndex = 0;
function changeTheme(){
document.documentElement.className = themes[currentThemeIndex];
currentThemeIndex = (currentThemeIndex+ 1) % themes.length;
}
dark.addEventListener("click",changeTheme);
});


noti.addEventListener("click", () => {
    let date = new Date();
    let hour = date.getHours();
    let output;
    if (hour >= 5 && hour < 12) {
        output = "Good morning";
    } else if (hour >= 12 && hour < 18) {
       output= "Good afternoon";
    } else {
      output = "Good evening";
    }
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let formattedHour = (hour % 12) || 12; 
    let amORpm = hour >= 12 ? 'PM' : 'AM';
    let timeString = formattedHour + ":" + minutes + " " + amORpm;

    window.alert(output + "! The time is " + timeString);
});



//for Contact Page
document.addEventListener("DOMContentLoaded", function() {
    let submitButton = document.getElementById("submitButton");
    let errorElement = document.getElementById("Error");
    let form = document.querySelector('form');
    // Check if submitButton and errorElement exist before adding event listener
    if (submitButton && errorElement) {
        submitButton.addEventListener("click", function(e) {
            e.preventDefault();
            
            function validate() {
                let firstName = document.getElementById("firstName").value;
                let lastName = document.getElementById("lastName").value;
                let telephoneNumber = document.getElementById("telephoneNumber").value;
                let birthdate = document.getElementById("birthdate").value;
                let message = document.getElementById("message").value;
                
                if (firstName == "") {
                    errorElement.textContent = "Please enter your first name.";
                    return false;
                }
                if (lastName == "") {
                    errorElement.textContent = "Please enter your last name.";
                    return false;
                }
    
                let telephoneRegex = /^\d{10}$/;
                if (!telephoneRegex.test(telephoneNumber)) {
                    errorElement.textContent = "Please enter a valid 10-digit telephone number.";
                    return false;
                }
    
                if (birthdate == "") {
                    errorElement.textContent = "Please enter your date of birth.";
                    return false;
                }
    
                if (message == "") {
                    errorElement.textContent = "Please enter a message.";
                    return false;
                }
    
                errorElement.textContent = "Successfully Sent!"; 
                return true;
            }
    
            if (validate()) {
                form.reset();
            }
        });
    }
});



    //For the Menu bar
    button.addEventListener("click", ()=>{
        navbar.classList.toggle("active");
        navlinks.classList.toggle("active1");
        header.classList.toggle("active2");
        
     });

   
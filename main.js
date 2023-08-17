// HAMBURGER

const menuIcon = document.querySelector(".mobile-nav .menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");


menuIcon.addEventListener("click",()=>{
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", ()=>{
    mobileMenuContainer.classList.remove("active");
});



// DARK-MODE

// const darkSwitch = document.querySelector(".dark-switch");
// const lightSwitch = document.querySelector(".light-switch");
// const body = document.querySelector("body");

// if(localStorage.getItem("darkMode")){
//     body.classList.add("dark-mode");
//     darkSwitch.classList.remove("active");
//     lightSwitch.classList.add("active");
// }
// else{
//     body.classList.remove("dark-mode");
//     darkSwitch.classList.add("active");
//     lightSwitch.classList.remove("active");
// }


// darkSwitch.addEventListener("click", ()=>{
//     body.classList.add("dark-mode");
//     darkSwitch.classList.remove("active");
//     lightSwitch.classList.add("active");
//     localStorage.setItem("darkMode", "true")
    
// });
// lightSwitch.addEventListener("click", ()=>{
//     body.classList.remove("dark-mode");
//     darkSwitch.classList.add("active");
//     lightSwitch.classList.remove("active");
//     localStorage.removeItem("darkMode")

// });


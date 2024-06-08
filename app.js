const sign_in_btn = document.querySelector("#signinbtn");
const sign_up_btn = document.querySelector("#signupbtn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#signinbtn2");
const sign_up_btn2 = document.querySelector("#signupbtn2");

sign_up_btn.addEventListener("click",()=>{
    container.classList.add("sign_up_mode");

});
sign_in_btn.addEventListener("click",()=>{
    container.classList.remove("sign_up_mode");
    
});
sign_up_btn2.addEventListener("click",()=>{
    container.classList.add("sign_up_mode2");

});
sign_in_btn2.addEventListener("click",()=>{
    container.classList.remove("sign_up_mode2");
    
});
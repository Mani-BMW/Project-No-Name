const emailInput = document.getElementById("email-input");
const passInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-btn");
const  mainForm = document.getElementById("main-form");
const checkInput = document.getElementById("checkbox-input");
const mainSection = document.getElementById("main-section");
const innerSection = document.getElementById("inner-section")
const signupForm = document.getElementById("signup-form");
const usernameInput = document.getElementById("username-input");
const emailInput2 = document.getElementById("email-input-2");
const passInput2 = document.getElementById("password-input-2");
const passConfirm = document.getElementById("password-confirm-input");
const headingImage = document.getElementById("img-heading");
const headingText = document.getElementById("h3-heading");
const hr = document.getElementById("hr");
const passFeedback = document.getElementById("pass-confirm-feedback");
const footer = document.getElementById("footer");
// const switchInput = document.getElementById("switch-input");

mainForm.addEventListener('submit',function (e){
    

    if(emailInput.value === ''){
        emailInput.classList.add('is-invalid');
        e.preventDefault();

    }else{
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    }
    if(passInput.value === ''){
        passInput.classList.add('is-invalid');
        e.preventDefault();
    
    }else{
        passInput.classList.remove('is-invalid');
        passInput.classList.add('is-valid');
    
    }
    

});

// function formTransition(){

//     function mainSectionStyleReset(){
//         mainSection.style.maxWidth = "550px";
//         mainSection.style.opacity = "100%";
//         mainSection.style.transition = "0.5s";
//     }

//     if(switchInput.checked == false){
//         mainSection.style.maxWidth = "0px";
//         mainSection.style.opacity = "0%";
//         mainSection.style.transition = "0.5s";
//         setTimeout(mainSectionStyleReset,500);




//     }
//     if(switchInput.checked == true){
//         mainSection.style.maxWidth = "0px";
//         mainSection.style.opacity = "0%";

//         mainSection.style.transition = "0.5s";
//         setTimeout(mainSectionStyleReset,500);




//     }





// }



function signupTransition(){

    function maxWidthNew(){
        mainSection.style.maxWidth = "400px";

    }
    
    mainSection.style.maxWidth = "0%";
    mainSection.style.transition = "0.4s";
    innerSection.style.display = "none";

    setTimeout(maxWidthNew,400);

    function signupStyleReset(){
        hr.style.width = "300px"
        innerSection.style.display ="flex";
        mainForm.style.display ="none";
        signupForm.style.display = "block";
        headingImage.style.display = "none";
        headingText.innerHTML = "ثبت نام ";
        headingText.classList.remove("h3-heading");
        headingText.classList.add("h3-heading-2","mt-2");
        mainSection.classList.add("height-increase");
        innerSection.classList.add("inner-section-2");
        footer.classList.remove("mobile-login-status");
        footer.classList.add("mobile-signup-status");
    }
    setTimeout(signupStyleReset,510);

}

function loginTransition(){

    function maxWidthReset(){;
        mainSection.style.maxWidth = "";
       
    }

    mainSection.style.maxWidth = "0%";
    mainSection.style.transition = "0.4s";
    innerSection.style.display = "none";

    setTimeout(maxWidthReset,400);
    function loginStyleReset(){
        innerSection.style.display ="flex";
        mainForm.style.display = "flex";
        signupForm.style.display = "none";
        headingImage.style.display = "";
        headingText.innerHTML = "ورود به حساب کاربری";
        headingText.classList.add("h3-heading");
        headingText.classList.remove("h3-heading-2","mt-2");
        mainSection.classList.remove("height-increase");
        innerSection.classList.remove("inner-section-2");
        footer.classList.add("mobile-login-status");
        footer.classList.remove("mobile-signup-status");


    }
    setTimeout(loginStyleReset,540);


}
signupForm.addEventListener('submit',function (e){
    
    if(usernameInput.value === ''){
        usernameInput.classList.add('is-invalid');
        e.preventDefault();
    }else{
        usernameInput.classList.remove('is-invalid');
        usernameInput.classList.add('is-valid');
    }
    if(emailInput2.value === ''){
        emailInput2.classList.add('is-invalid');
        e.preventDefault();

    }else{
        emailInput2.classList.remove('is-invalid');
        emailInput2.classList.add('is-valid');
    }
    if(passInput2.value === ''){
        passInput2.classList.add('is-invalid');
        e.preventDefault();
    
    }else{
        passInput2.classList.remove('is-invalid');
        passInput2.classList.add('is-valid');
    
    }
    if(passConfirm.value === ''){
        passConfirm.classList.add('is-invalid');
        e.preventDefault();
    }else{
        passConfirm.classList.remove('is-invalid');
        passConfirm.classList.add('is-valid');


    }

    if(passInput2.value !== '' && passConfirm !== ''){
        if(passInput2.value !== passConfirm.value){
           
            passConfirm.classList.add("is-invalid") ;
            passFeedback.style.display = "block";
            passFeedback.classList.add("invalid-feedback");
            e.preventDefault();       
        }else{
            passConfirm.classList.remove("is-invalid") ;
            passFeedback.classList.remove("invalid-feedback");
            passFeedback.style.display = "";


        }
    }
    

});
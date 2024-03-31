let captchaText=document.getElementById("captchaText")
let captchaEnter=document.getElementById("captchaEnter");
let refreshBtn=document.getElementById("refreshBtn");
let chechBtn=document.getElementById("checkBtn");

let   chars="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let  captcha;
function generateCaptcha(){
     captcha="";
     for(let i=0;i<7;i++){
        let index=Math.floor(Math.random()*chars.length);
        captcha=captcha+chars[index];
        
     }
     captchaText.value=captcha;
}

function validateCaptcha(){
    if(captcha==captchaEnter.value){
        alert("valid Captcha !!! Success ");
    }
    else{
        alert("Invalid Captcha !!!");
        captchaEnter.Value="";
    }
}
generateCaptcha();

refreshBtn.onclick=generateCaptcha;
chechBtn.onclick=validateCaptcha;
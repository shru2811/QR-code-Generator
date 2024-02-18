let inp = document.querySelector(".search input");
let img = document.querySelector(".qr img");
let btn = document.querySelector(".generator");

let input = inp.value;
btn.addEventListener("click",function(input){
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input;
});


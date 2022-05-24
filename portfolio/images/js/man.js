










let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let rivers = document.getElementById('river');
let boat6 = document.getElementById('boat');
let mohamed = document.querySelector('.mohamed');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';;
    moon.style.top = value *4 + 'px' ;
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    rivers.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value *3 + 'px';
    mohamed.style.fontSize = value + 'px'; 
    if(scrollY >= 34){
        mohamed.style.fontSize = 34 + 'px';  
        mohamed.style.position ='fixed';  
        if(scrollY >= 100){
            mohamed.style.display ='noon'; 

        } else{
            mohamed.style.display ='noon'; 
        }

    }
}


















function validation(){
    var mailLable = document.getElementById("mail");
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass");
    var passwordLable = document.getElementById("password").value;
    var valid = true;
    if(email === ""){
        mailLable.innerHTML ="required";
        return valid = false;
    }
    else if(passwordLable === ""){
        pass.innerHTML ="required";
        return valid = false;
    }
}
/*const h2 = document.createElement("h2");
h2.textContent = "";

document.querySelector("body").appendChild(h2);*/



const headshot = document.getElementById('headshot');
const message = document.getElementById('message');

if(headshot != null) {
    headshot.addEventListener('mouseover', function() {
        headshot.style.opacity = '0.5';
        message.style.display='block';
    });
    
    headshot.addEventListener('mouseout', function() {
        headshot.style.opacity = '1'; 
        message.style.display = 'none';
    });
};

const momo = document.getElementById('momo');
const momoButton = document.getElementById('momoButton');
const momo_avatar = document.getElementById('momo_avatar');

if(momo != null) {

    momoButton.addEventListener("click", function() {
        if (momo_avatar.style.display === "inline-block"){
            momo.style.display = "inline-block";
            momo_avatar.style.display = "none";
        } else {
            momo.style.display = "none";
            momo_avatar.style.display = "inline-block"; 
        }
    });

}; 


const simba = document.getElementById('simba');
const simbaButton = document.getElementById('simbaButton');
const lionking = document.getElementById('lionking');

if(simba != null) {

    simbaButton.addEventListener("click", function() {
        if (lionking.style.display === "inline-block"){
            simba.style.display = "inline-block";
            lionking.style.display = "none";
        } else {
            simba.style.display = "none";
            lionking.style.display = "inline-block"; 
        }
    });

}; 


const winnie = document.getElementById('winnie');
const winnieButton = document.getElementById('winnieButton');
const toothless = document.getElementById('toothless');

if(winnie != null) {

    winnieButton.addEventListener("click", function() {
        if (toothless.style.display === "inline-block"){
            winnie.style.display = "inline-block";
            toothless.style.display = "none";
        } else {
            winnie.style.display = "none";
            toothless.style.display = "inline-block"; 
        }
    });

}; 
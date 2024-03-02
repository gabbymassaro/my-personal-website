/*const h2 = document.createElement("h2");
h2.textContent = "";

document.querySelector("body").appendChild(h2);*/

const headshot = document.getElementById('headshot');
const message = document.getElementById('message');

headshot.addEventListener('mouseover', function() {
    headshot.style.opacity = '0.5';
    message.style.display='block';
});

headshot.addEventListener('mouseout', function() {
    headshot.style.opacity = '1'; 
    message.style.display = 'none';
});

const momo = document.getElementById('momo');
const momoButton = document.getElementById('momoButton');

momoButton.addEventListener("click", function() {
    momo.src = "images/momo_avatar.jpg"
});
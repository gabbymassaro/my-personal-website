const h2 = document.createElement("h2");
h2.textContent = "";

document.querySelector("body").appendChild(h2);

const headshot = document.getElementById('headshot');

headshot.addEventListener('mouseover', function() {
    headshot.style.opacity = '0.5';
});

headshot.addEventListener('mouseout', function() {
    headshot.style.opacity = '1'; 
});
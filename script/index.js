function getElement(id){
    const element = document.getElementById(id);
    return element;
}

let count = 0; 

const hearts = document.querySelectorAll('.fa-heart'); 
const likeCount = document.getElementById('like-count'); 

hearts.forEach(heart => {
    heart.addEventListener('click', function () {
        count++; 
        likeCount.innerText = count; 
        console.log("Heart clicked! Count:", count);
    });
});




// copy button 
let counter = 0;

const copyBtn = document.getElementsByClassName('copy-button'); 
const copyCount = document.getElementById('copy-count');

for (let call of copyBtn) {
    call.addEventListener('click', function () {
        alert("Copy koiren na plz!");
        count++; 
        copyCount.innerText = count; 
    });
}




// call button 
const callBtn = document.getElementsByClassName('call-button'); 
for (let call of callBtn) {
    call.addEventListener('click', function () {
        alert("Call deyen na plz!");
    });
}





function getElement(id){
    const element = document.getElementById(id);
    return element;
}

// // id name 
// function getElementId(id){
//     const element = document.getElementById(id);
//     return element;
// }

// // class name
// function getElementClass(id){
//     const element = document.getElementsByClassName(id);
//     return element;
// }


// heart button

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


// call button 
const callBtn = document.getElementsByClassName('call-button'); 
for (let call of callBtn) {
    call.addEventListener('click', function () {
        console.log("Call button clicked!");
    });
}





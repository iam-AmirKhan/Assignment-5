function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
//  heart
let count = 0;

const hearts = document.querySelectorAll(".fa-heart");
const likeCount = document.getElementById("like-count");

hearts.forEach((heart) => {
  heart.addEventListener("click", function () {
    count++;
    likeCount.innerText = count;
    console.log("Heart clicked! Count:", count);
  });
});

// copy button
let counter = 0;
const copyBtn = document.getElementsByClassName("copy-button");
const copyCount = document.getElementById("copy-count");

for (let copy of copyBtn) {
  copy.addEventListener("click", function (e) {
    e.preventDefault;
    const count = parseInt(document.getElementById("copy-count").innerText);
    const numberCount = 1;
    let copyNUmberIncrease = count + numberCount;
    document.getElementById("copy-count").innerText = copyNUmberIncrease;
    let copyCount = copy.parentNode.parentNode.children[2].innerText;
    console.log(copyCount);
    alert("Number has been copied  " + copyCount);
    navigator.clipboard.writeText(copyCount);
    then(() => {
      alert("Text copied to clipboard");
    }).catch((err) => {
      console.error("failed to copy text:", err);
    });
  });
}

// call button
const callBtn = document.getElementsByClassName("call-button");
for (let call of callBtn) {
  call.addEventListener("click", function (e) {
    e.preventDefault;
    const nationalEmText = call.parentNode.parentNode.childNodes[3].innerText;
    const nationalEmNumber = call.parentNode.parentNode.childNodes[5].innerText;
    console.log(nationalEmNumber);
    let coinElement = document.getElementById("coin-count");
    let coinCount = parseInt(coinElement.innerText);
    let number = 20;
    if (coinCount >= number) {
      coinCount -= number;
      coinElement.innerText = coinCount;
      alert("Calling " + nationalEmText + "  " + nationalEmNumber);
    } else {
      alert(
        "You don't have enough coins. You need at least 20 coins to make a call."
      );
    }
  });
}


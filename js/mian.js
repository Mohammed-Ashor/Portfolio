
let upArrow = document.getElementById("upArrow")
let cardTwo = document.getElementById("cardTwo")
let mainCardBtn = document.querySelectorAll("#mainCardBtn")
let mainCardContent = document.getElementById('mainCardContent')
let portfolio = document.getElementById("portfolio")
let cardTwoCloseBtn = document.querySelectorAll("#cardTwoCloseBtn")


// mainCardBtn.forEach(button => {
//     button.onclick = function(e) {
//         e.preventDefault();
//         cardTwo.style.display = "block";
//     };
// });
// cardTwoCloseBtn.forEach(button => {
//     button.onclick = function() {
//         cardTwo.style.display = "none"
//     }
// })

window.addEventListener("scroll", function() {
    if(window.scrollY >= 800) {
        upArrow.style.display = "block"
    } else {
        upArrow.style.display = "none"
    }
})

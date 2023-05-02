let modalBtn = document.querySelector(".read-more");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");
let modal = document.querySelector(".modal");

modalBtn.addEventListener("click", function() {
    modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function() {
    modalBg.classList.remove("bg-active");
});

window.onclick = function(event) {
    if (event.target == modalBg) {
        modalBg.classList.remove("bg-active");
    }
}




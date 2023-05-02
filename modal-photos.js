let modall = document.querySelector(".modal-photos");
let previews = document.querySelectorAll(".photos-section img");
let original = document.querySelector(".full-img");
let imgText = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modall.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and image
        let originalSrc = preview.getAttribute("data-original");
        original.src = `./images/gallery/${originalSrc}`;
        let altText = preview.alt;
        imgText.textContent = altText;
    });
});

modall.addEventListener("click", (e) => {
    if (e.target === modall) {
        if (e.target !== original) {
        modall.classList.remove("open");
        original.classList.remove("open");
        }
    }
});

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.classList.remove("open");  
//         ('original').off('click');
//         // original.classList.remove("open");
//     }
// }
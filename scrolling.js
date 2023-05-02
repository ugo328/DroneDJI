var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

// SCROLL REVEAL - just trying this library
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

    if (width < 500) {
        // scroll MAIN
        sr.reveal(".box h2", {delay: 200})
        sr.reveal(".drone-img", {delay: 400, rotate: {y: 180}})
        sr.reveal(".info", {delay: 200})
        sr.reveal(".read-more", { distance: '0px', opacity: 0, delay: 300})
        // scroll PORTFOLIO
        sr.reveal(".h2-cards", {})
        sr.reveal(".card", {interval: 200})

        // scroll TRAILER
        sr.reveal(".trailer h2", {})
        sr.reveal(".circle", {delay: 200})
        sr.reveal(".iframe-container", {delay: 400})

        // scroll GALLERY
        sr.reveal(".image", {interval: 150})

        // scroll CONTACTS
        sr.reveal("#order h2", {})
        sr.reveal(".card-order", {interval: 400})
        sr.reveal("#contacts h2", {})
        sr.reveal(".contact-card", {delay: 200})
    }
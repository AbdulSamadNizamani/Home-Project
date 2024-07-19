const scroll = new LocomotiveScroll({
    el: document.querySelector('.locomotive'),
    smooth: true,
    lerp:0.02,
});
AOS.init({
    offset: 300,
    duration: 800,
});
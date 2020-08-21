window.addEventListener('load', ()=> {
    const anime = document.querySelector('.anime');
    anime.classList.add('hidden');
});

const btn = document.querySelector('.backtotop');
btn.addEventListener('click', ()=> {
    window.scrollBy(0,100);
});

function togglepopup(){
    document.getElementById("popup1").classList.toggle("active");
}
function scrolldown() {
   window.scrollBy(0,1425);
}
gsap.to(".product", {
    scrollTrigger: {
        trigger: '.product',
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%"
    },    
    y: -100
})
gsap.to(".bus", {
    scrollTrigger: {
        trigger: '.bus',
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%"
    },
    y: -100   
})
gsap.to(".port", {
    scrollTrigger: {
        trigger: '.port',
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%"
    },    
    y: -100
})


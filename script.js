const scrolling = document.querySelector('.product');
const totop = document.querySelector('.brand');

window.addEventListener('load', ()=> {
    const anime = document.querySelector('.anime');
    anime.classList.add('hidden');
});

const btn = document.querySelector('.backtotop');
btn.addEventListener('click', ()=> {
    totop.scrollIntoView();
});

const btn2 = document.querySelector('.services');
btn2.addEventListener('click', ()=> {
    scrolling.scrollIntoView();
});

togglepopup= () => {
    document.getElementById("popup1").classList.toggle("active");
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
/* gsap.to("#html", {
    scrollTrigger: {
        trigger: '#html', 
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%",
    
    },
    y: -10
})
gsap.to("#css", {
    scrollTrigger: {
        trigger: '#css', 
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%"
    },
    y: -10
})
gsap.to("#js", {
    scrollTrigger: {
        trigger: '#js', 
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%"
    },
    y: -10
})
gsap.to("#python", {
    scrollTrigger: {
        trigger: '#python', 
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%"
    },
    y: -10
})
gsap.to("#and", {
    scrollTrigger: {
        trigger: '#and', 
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%"
    },
    y: -10
})
gsap.to("#wordpress", {
    scrollTrigger: {
        trigger: '#wordpress', 
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%"
    },
    y: -10
})
gsap.to("#flutter", {
    scrollTrigger: {
        trigger: '#flutter', 
        toggleActions: "restart none reverse none",
        start: "top bottom",
        end: "top 90%",
    },
    y: -10,
    
}) */



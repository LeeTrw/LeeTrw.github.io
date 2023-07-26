const webimg = document.querySelector(".web-img");
const javaimg = document.querySelector(".java-img");
const gitimg = document.querySelector(".git-img");
const web = document.querySelector(".web");
const java = document.querySelector(".java");
const git = document.querySelector(".git");

webimg.onmouseenter = function(){
    web.classList.add("show"); 
};

webimg.onmouseleave = function() {
    web.classList.remove("show");
};

javaimg.onmouseenter = function(){
    java.classList.add("show"); 
};

javaimg.onmouseleave = function() {
    java.classList.remove("show");
};

gitimg.onmouseenter = function(){
    git.classList.add("show"); 
};

gitimg.onmouseleave = function() {
    git.classList.remove("show");
};


const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft;

//finds number of cards in the carousel
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//infinite scroll on the left
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// infinate on the right
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// scroll left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft= startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    //scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    //scroll at beginning
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

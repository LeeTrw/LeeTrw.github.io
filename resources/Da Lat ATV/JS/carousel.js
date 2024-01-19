const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll("img")[0];
const arrows = document.querySelectorAll(".arrow");


let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

const showHideArrows = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrows[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrows[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += arrow.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideArrows(), 60);
    })
})

const dragStart = (e) => {
    // updatating global variables on mouse down
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scroll left according to mouse
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideArrows()
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

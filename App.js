const leftNavBar = document.querySelector('.left-navBar-container');
const dehazeOne = document.querySelector('.dehaze-one');
const dehazeTwo = document.querySelector('.dehaze-two');

dehazeOne.addEventListener('click', () => {
    leftNavBar.classList.toggle('leftNavigation')
});

dehazeTwo.addEventListener('click', () => {
    leftNavBar.classList.toggle('leftNavigation')
});



const topNavList = document.querySelector(".top-nav-list"),
    allTopNav = document.querySelectorAll(".top-nav"),
    arrowIcons = document.querySelectorAll(".rightBox i");
    

let isDragging = false;

const handleRightBox = () => {
    let scrollVal = Math.round(topNavList.scrollLeft);
    let maxScrollableWidth = topNavList.scrollWidth - topNavList.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";

}

arrowIcons.forEach(rightBox => {
    rightBox.addEventListener("click", () => {
        topNavList.scrollLeft += rightBox.id === "left" ? -350 : 350;
        setTimeout(() => handleRightBox(), 50);
    });
})

// allTabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//         topNavList.querySelector(".active-blue").classList.remove("active-blue");
//         tab.classList.add(".active-blue");
//     });
// })

const dragging = (e) => {
    if (!isDragging) return;
    topNavList.classList.add("dragging");
    topNavList.scrollLeft -= e.movementX;
    handleRightBox();
}

const dragStop = () => {
    isDragging = false;
    topNavList.classList.remove("dragging");
}

topNavList.addEventListener("mousedown", () => isDragging = true)
topNavList.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



const moreRightSide = document.querySelector(".more-right-side"); 
const notification = document.querySelector(".notifications"); 

notification.addEventListener("click", () => {
    moreRightSide.classList.toggle("more-right-side-retrieve");
})

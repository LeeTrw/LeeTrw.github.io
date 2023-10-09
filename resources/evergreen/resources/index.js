function toggleNav() {
    var burgerIcon = document.querySelector('.burger');
    var closeIcon = document.querySelector('.close');

    // Toggle the 'active' class on both icons
    burgerIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');


    // Select the unordered list element inside an element with the class 'nav-con'
    var nav = document.querySelector('.nav-con ul');
    
    // Toggle the 'active' class on the selected unordered list
    nav.classList.toggle('active');
}
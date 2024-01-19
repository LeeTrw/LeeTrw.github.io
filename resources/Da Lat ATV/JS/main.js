// const open = document.getElementById('open');
// const close = document.getElementById('close');
// const mblMenu = document.getElementById('mobile-menu');

// function toggleMenu() {
//     open.classList.toggle('hide');
//     close.classList.toggle('hide');
//     mblMenu.classList.toggle('open-menu');
// }


// document.addEventListener('click', function(event) {
    

//     if (mblMenu.classList.contains('open-menu') && !mblMenu.contains(event.target) && event.target !== open && event.target !== close) {
//         toggleMenu();
//     }
// });


function submitForm(event) {
    event.preventDefault();
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    alert("Thank you, your message has been sent. We will get back to you as soon as we can.");
}
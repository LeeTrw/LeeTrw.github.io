function submitForm(event) {
    event.preventDefault();
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    alert("Thank you, your message has been sent. We will get back to you as soon as we can.");
}
function submitForm(event) {
    event.preventDefault();

    showLoadingIndicator();
   
    var formData = new FormData(event.target);

    fetch(event.target.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("first-name").value = "";
            document.getElementById("last-name").value = "";
            hideLoadingIndicator();
            showModal("Thank you, your message has been sent. We will get back to you as soon as we can.");
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}


function showLoadingIndicator() {
    document.getElementById("loadingIndicator").style.display = "block";
}

function hideLoadingIndicator() {
    document.getElementById("loadingIndicator").style.display = "none";
}




// the modal message
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function showModal(message) {
  document.getElementById("modal-message").innerText = message;
  modal.style.display = "block";
}

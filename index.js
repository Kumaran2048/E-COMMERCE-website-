var side=document.querySelector(".side-navbar")
function shownav(){
    side.style.left="0"
}
function closenav(){
    side.style.left="-60%"
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageStatus = document.getElementById('message-status');

    if (name && email && message) {
       
        messageStatus.textContent = 'Your message has been sent successfully!';
        messageStatus.style.color = 'green';

        
        document.getElementById('contact-form').reset();
    } else {
        messageStatus.textContent = 'Please fill out all fields.';
        messageStatus.style.color = 'red';
    }
});

document.getElementById('submit').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    if (!message) {
        alert('Please type a message before sending!');
        return;
    }

    fetch('sendEmail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
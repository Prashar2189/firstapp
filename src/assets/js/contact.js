(function() {
    emailjs.init("qD8Cffa6BRbYzbV7g");
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const project = document.getElementById('userProject').value;
    const message = document.getElementById('userMessage').value;

    const templateParams = {
        user_name: name,
        user_email: email,
        user_project: project,
        user_message: message
    };

    emailjs.send("service_o8atkxv", "template_bwyjs05", templateParams)
        .then(function(response) {
            // alert("Message sent successfully!");
            Swal.fire("Your query has been shared with Appsimity!", "Our team will reach back to you as soon as possible", "success");
            document.getElementById("contactForm").reset();
        })
        .catch(function(error) {
            // alert("Failed to send message. Please try again.");
            Swal.fire("Failed to send message", "Kindly try again", "error");
            console.error("Error:", error);
        });
});

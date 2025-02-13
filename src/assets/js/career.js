(function() {
    emailjs.init("qD8Cffa6BRbYzbV7g");
})();

document.getElementById('careerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const title = document.getElementById('userTitle').value;
    const exp = document.getElementById('userExp').value;
    const num = document.getElementById('userNum').value;
    const link = document.getElementById('userLink').value;
    const message = document.getElementById('userMessage').value;

    const templateParams = {
        user_name: name,
        user_email: email,
        user_title: title,
        user_exp: exp,
        user_num: num,
        user_link: link,
        user_message: message
    };

    emailjs.send("service_o8atkxv", "template_tmh69rv", templateParams)
        .then(function(response) {
            // alert("Message sent successfully!");
            Swal.fire("Your application has been shared with Appsimity!", "Our team will reach back to you as soon as possible", "success");
            document.getElementById("careerForm").reset();
        })
        .catch(function(error) {
            // alert("Failed to send message. Please try again.");
            Swal.fire("Failed to send message", "Kindly try again", "error");
            console.error("Error:", error);
        });
});

// For contact me
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("6dXidr4pjZTvjN0Tw");
});

function sendEmail(event) {
  event.preventDefault();

  emailjs.sendForm("service_pznuypm", "template_snvbh2y", event.target).then(
    function () {
      alert("Message sent successfully!");
    },
    function (error) {
      alert("Failed to send message. Please try again later.");
    }
  );

  console.log("Success email sending");
}

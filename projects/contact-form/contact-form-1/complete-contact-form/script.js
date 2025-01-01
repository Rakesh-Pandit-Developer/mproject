const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  let formData = new FormData(form);

  fetch('https://script.google.com/macros/s/AKfycbydq1j3guu2fFMRqulF9lHrX-cbpmbAAQZdrkeID22t_zHepy63KWACVdC3HL-FsfTeqQ/exec', {
    method: 'POST',
    body: formData
  })
    .then((response) => response.text())
    .then((result) => {
      // Display the success message
      statusDiv.innerHTML = "Message sent successfully!";
      statusDiv.className = "success visible";

      // Reset the form immediately
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerText = "Submit";

      // After 5 seconds, change to "Thank You" message
      setTimeout(() => {
        statusDiv.innerHTML = "Thank you for contacting us!";
        statusDiv.className = "success visible";
      }, 5000);

      // Hide the message after 15 seconds total
      setTimeout(() => {
        statusDiv.className = ""; // Remove visible class to fade out
      }, 10000);
    })
    .catch((error) => {
      statusDiv.innerHTML = "There was an error, please try again later.";
      statusDiv.className = "error visible";

      // Hide error message after 5 seconds
      setTimeout(() => {
        statusDiv.className = "";
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit";
      }, 5000);
    });
});
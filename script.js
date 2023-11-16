const normBtn = document.getElementById("norm-btn");

normBtn.addEventListener("click", () => {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;

  // Validate the email
  const isValidEmail = validateEmail(emailValue);

  // Display debugging information
  console.log("Email value:", emailValue);
  console.log("isValidEmail:", isValidEmail);

  // Display error message or success message
  const emailError = document.getElementById("errorMessage");
  const successMessage = document.querySelector(".success");
  const startEl = document.getElementById("start1");

  if (isValidEmail) {
    // Hide unnecessary elements
    emailInput.style.display = "none";
    startEl.style.display = "none";

    // Show success message
    successMessage.innerHTML = `
            <img src="assets/images/icon-success.svg" alt="">

    <h1>Thanks for subscribing!</h1>
          <p>
        A confirmation email has been sent to
        <span>ash@loremcompany.com</span> Please open it and click the button
        inside to confirm your subscription.
      </p>
      `;
    successMessage.style.display = "block";

    normBtn.textContent = "Dismiss Message";
  } else {
    emailError.textContent = "Valid email needed";

    // Hide success message if it was previously shown
    successMessage.style.display = "none";
  }
});

function validateEmail(email) {
  // Improved regular expression for email validation
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
  let isValid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const age = document.getElementById("age");
  const gender = document.querySelector('input[name="gender"]:checked');
  const country = document.getElementById("country");


  document.querySelectorAll(".error").forEach((e) => e.remove());


  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

 
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  }

  if (password.value.trim().length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (age.value < 1 || age.value > 120) {
    showError(age, "Age must be between 1 and 120");
    isValid = false;
  }

  
  if (!gender) {
    showError(
      document.querySelector('input[name="gender"]'),
      "Gender is required"
    );
    isValid = false;
  }

  if (country.value === "") {
    showError(country, "Country is required");
    isValid = false;
  }
});

function showError(input, message) {
  const error = document.createElement("div");
  error.className = "error";
  error.textContent = message;
  input.parentElement.insertBefore(error, input.nextSibling);
}

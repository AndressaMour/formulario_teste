const inputs = document.querySelectorAll(".input-group input");

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("success-message").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("success-message").classList.add("hidden");
  }, 3000);
  this.reset();

  inputs.forEach((input) => {
    input.closest('.input-group').classList.remove("preenchido");
  });
});

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== "") {
      input.closest('.input-group').classList.add("preenchido");
    } else {
      input.closest('.input-group').classList.remove("preenchido");
    }
  });
});





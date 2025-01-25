document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("telefone").value.trim();
    const message = document.getElementById("message").value.trim();
    const service = document.getElementById("service").value.trim();
    if (!name || !email || !message || !phone || !service) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    document.getElementById("success-message").classList.remove("hidden");
    this.reset();
   });
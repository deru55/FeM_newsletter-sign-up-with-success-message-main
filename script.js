const card = document.getElementById("card");
const successMsg = document.getElementById("success-state");
const sentToEmail = document.getElementById("sent-to-email");
const dismissBtn = document.getElementById("dismiss-btn");
const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email-input");
const invalidMsg = document.querySelector(".invalid-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!emailInput.validity.valid) {
    invalidMsg.classList.remove("hidden");
    emailInput.classList.add("clr-error");
  } else {
    card.classList.add("hidden");
    successMsg.classList.remove("hidden");
    sentToEmail.textContent = emailInput.value;
  }
});

emailInput.addEventListener("input", () => {
  invalidMsg.classList.add("hidden");
  emailInput.classList.remove("clr-error");
});

dismissBtn.addEventListener("click", () => {
  card.classList.remove("hidden");
  successMsg.classList.add("hidden");
  emailInput.value = "";
});


function showalert() {
  alert("welcome, start shopping now");
}

const addToCartButtons = document.querySelectorAll(".btn-secondary");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {

    alert(" Add item to cart");
  });
});

const newsletterForm = document.querySelector(".newsletter-form");
newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = newsletterForm.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (email) {
    alert(`Thank you for subscribing.: ${email}`);
    emailInput.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});

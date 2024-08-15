// Variables
const burgerIcon = document.querySelector(".burgerIcon");

// Burger Icon
burgerIcon.addEventListener("click", () => {
  if (document.querySelector(".burgerMenu").classList.contains("hide")) {
    document.querySelector(".burgerMenu").classList.remove("hide");
    document.querySelector(".burgerIcon").classList.add("change");
  } else {
    document.querySelector(".burgerMenu").classList.add("hide");
    document.querySelector(".burgerIcon").classList.remove("change");
  }
});

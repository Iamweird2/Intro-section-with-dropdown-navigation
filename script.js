let burger = document.querySelector(".burger");
let dropdown = document.querySelector(".dropdown");
let link = document.querySelectorAll(".link");
let close = document.querySelector(".close");

if (window.innerWidth <= 648) {
  link.forEach((eachlink) => {
    eachlink.addEventListener("click", () => {
      eachlink.parentElement
        .querySelector(".arrow-down")
        .classList.toggle("hidden");
      eachlink.parentElement
        .querySelector(".arrow-up")
        .classList.toggle("hidden");
      eachlink.parentElement
        .querySelector(".content")
        .classList.toggle("hidden");
    });
  });
} else {
  link.forEach((eachlink) => {
    eachlink.parentElement.addEventListener("mouseover", () => {
      eachlink.parentElement
        .querySelector(".arrow-down")
        .classList.add("hidden");
      eachlink.parentElement
        .querySelector(".arrow-up")
        .classList.remove("hidden");
      eachlink.parentElement
        .querySelector(".content")
        .classList.replace("hidden", "md:flex");
    });
    eachlink.parentElement.addEventListener("mouseleave", () => {
      eachlink.parentElement
        .querySelector(".arrow-down")
        .classList.remove("hidden");
      eachlink.parentElement.querySelector(".arrow-up").classList.add("hidden");
      eachlink.parentElement
        .querySelector(".content")
        .classList.replace("md:flex", "hidden");
    });
  });
}

burger.addEventListener("click", () => {
  dropdown.classList.remove("hidden");
  dropdown.classList.add("flex");
  burger.classList.add("hidden");
});

close.addEventListener("click", () => {
  dropdown.classList.add("hidden");
  dropdown.classList.remove("flex");
  burger.classList.remove("hidden");
});

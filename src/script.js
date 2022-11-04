let burger = document.querySelector(".burger");
let dropdown = document.querySelector(".dropdown");
let link = document.querySelectorAll(".link");
let linkContainer = document.querySelectorAll(".linkContainer");
let close = document.querySelector(".close");

if (window.innerWidth <= 648) {
  link.forEach((eachlink) => {
    eachlink.addEventListener("click", () => {
      // console.log(
      //   eachlink.querySelector(".imgContainer").querySelector(".arrow-down")
      // );
      eachlink
        .querySelector(".imgContainer")
        .querySelector(".arrow-up")
        .classList.toggle("hidden");
      eachlink
        .querySelector(".imgContainer")
        .querySelector(".arrow-down")
        .classList.toggle("hidden");
      eachlink.querySelector(".content").classList.toggle("hidden");
      eachlink.querySelector(".content").classList.toggle("flex");
    });
  });
} else {
  linkContainer.forEach((eachlinkContainer) => {
    eachlinkContainer.addEventListener("mouseover", () => {
      console.log(eachlinkContainer);
      eachlinkContainer
        .querySelector(".link")
        .querySelector(".imgContainer")
        .querySelector(".arrow-down")
        .classList.add("hidden");
      eachlinkContainer
        .querySelector(".link")
        .querySelector(".imgContainer")
        .querySelector(".arrow-up")
        .classList.remove("hidden");
    });
    eachlinkContainer.addEventListener("mouseleave", () => {
      eachlinkContainer
        .querySelector(".link")
        .querySelector(".imgContainer")
        .querySelector(".arrow-down")
        .classList.remove("hidden");
      eachlinkContainer
        .querySelector(".link")
        .querySelector(".imgContainer")
        .querySelector(".arrow-up")
        .classList.add("hidden");
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

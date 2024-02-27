/////////////////////////////Cards

document.addEventListener("DOMContentLoaded", async () => {
  const button = document.querySelector(".cards__button");
  let clickCount = 0;

  button.addEventListener("click", async () => {
    try {
      if (clickCount < 4) {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        posts.slice(0, 5).forEach((post) => {
          const card = createCard(post);
          document.querySelector(".cards-grid").appendChild(card);
        });

        clickCount++;

        if (clickCount >= 4) {
          button.style.display = "none";
        }
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  });
});

function createCard(post) {
  const card = document.createElement("div");
  card.classList.add("cards-grid__item");

  const image = document.createElement("img");
  image.classList.add("cards-grid__img");

  image.src = "./img/cards1.png";

  const wrap = document.createElement("div");
  wrap.classList.add("cards-grid__item-wrap");

  const heading = document.createElement("div");
  heading.classList.add("cards-grid__subheading");
  heading.textContent = "HEADING";

  const subheading = document.createElement("div");
  subheading.classList.add("cards-grid__subheading");
  subheading.textContent = post.title;

  const text = document.createElement("div");
  text.classList.add("cards-grid__text");
  text.textContent = post.body;

  const author = document.createElement("div");
  author.classList.add("cards-grid__author");
  author.textContent = "Posted by on July 24, 2019";

  const button = document.createElement("div");
  button.classList.add("cards-grid__button");

  const button_text = document.createElement("div");
  button_text.classList.add("cards-grid__button-text");
  button_text.textContent = "Continue reading";

  wrap.appendChild(heading);
  wrap.appendChild(subheading);
  wrap.appendChild(text);
  wrap.appendChild(author);
  wrap.appendChild(button);
  button.appendChild(button_text);
  card.appendChild(image);
  card.appendChild(wrap);

  return card;
}

///////////////////////////// Burger

document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".header__menu");
  const burger = document.querySelector(".burger");
  const headerApplication = document.querySelector(".header-application");

  burgerMenu.addEventListener("click", function () {
    burger.classList.toggle("active");

    if (
      burger.classList.contains("active") &&
      window.matchMedia("(max-width: 376px)").matches
    ) {
      headerApplication.style.left = "5%";
    } else {
      headerApplication.style.left = "";
    }
  });
});

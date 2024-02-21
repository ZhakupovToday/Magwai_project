/////////////////////////////Cards

document.addEventListener("DOMContentLoaded", async () => {
  const button = document.querySelector(".cards__button");
  let clickCount = 0; // Инициализируем счетчик нажатий

  button.addEventListener("click", async () => {
    try {
      // Проверяем, не превысил ли счетчик максимальное значение
      if (clickCount < 4) {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        posts.slice(0, 5).forEach((post) => {
          const card = createCard(post);
          document.querySelector(".cards-grid").appendChild(card);
        });

        // Увеличиваем счетчик нажатий
        clickCount++;

        // Если достигнуто максимальное значение, скрываем кнопку
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

  // Создаем элемент <img> для изображения
  const image = document.createElement("img");
  image.classList.add("cards-grid__img");

  // Загружаем изображение из URL
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

    // Проверяем, если у burger есть класс active и ширина экрана меньше 376px
    if (
      burger.classList.contains("active") &&
      window.matchMedia("(max-width: 376px)").matches
    ) {
      headerApplication.style.left = "5%"; // Устанавливаем left в 0
    } else {
      headerApplication.style.left = ""; // Возвращаем исходное значение left
    }
  });
});

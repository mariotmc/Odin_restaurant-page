const PageInit = (() => {
  window.addEventListener("load", () => {
    PageDisplay.displayHome();
  });
})();

const PageDisplay = (() => {
  const contentDiv = document.querySelector("#content");

  const clearContent = () => {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
  };

  const displayHome = () => {
    clearContent();

    contentDiv.appendChild(Header.headerContainer);
    contentDiv.appendChild(Home.homeContainer);
    contentDiv.appendChild(Footer.footerContainer);
  };

  const displayMenu = () => {
    clearContent();

    contentDiv.appendChild(Header.headerContainer);
    contentDiv.appendChild(Menu.menuContainer);
    contentDiv.appendChild(Footer.footerContainer);
  };

  const displayContact = () => {
    clearContent();

    contentDiv.appendChild(Header.headerContainer);
    contentDiv.appendChild(Contact.contactContainer);
    contentDiv.appendChild(Footer.footerContainer);
  };

  return { displayHome, displayMenu, displayContact };
})();

const Header = (() => {
  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "Luigi's Trattoria";

  const homeButton = document.createElement("button");
  homeButton.classList.add("home-button");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-button");
  menuButton.textContent = "Menu";

  const contactButton = document.createElement("button");
  contactButton.classList.add("contact-button");
  contactButton.textContent = "Contact";

  headerContainer.appendChild(restaurantName);
  headerContainer.appendChild(homeButton);
  headerContainer.appendChild(menuButton);
  headerContainer.appendChild(contactButton);

  return { headerContainer, homeButton, menuButton, contactButton };
})();

const Footer = (() => {
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer");
  const copyright = document.createElement("span");
  copyright.textContent = " © 2021";
  const footerContent = document.createElement("p");
  footerContent.textContent = "Luigi's Trattoria";

  footerContainer.appendChild(footerContent);
  footerContainer.appendChild(copyright);

  return { footerContainer };
})();

const Home = (() => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home");

  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("review");
  const review = document.createElement("p");
  review.classList.add("review");
  review.textContent = `"Luigi's pizza is like a gateway to heaven"`;
  const reviewAuthor = document.createElement("p");
  reviewAuthor.classList.add("review-author");
  reviewAuthor.textContent = "- A Happy Customer";
  reviewContainer.appendChild(review);
  reviewContainer.appendChild(reviewAuthor);

  const chefImageContainer = document.createElement("div");
  chefImageContainer.classList.add("chef-image");
  chefImage = document.createElement("img");
  chefImage.src =
    "https://www.chef-alps.com/sites/chefalps/files/guests/Massimo%20Bottura1_credits%20CALLO%20ALBANESE%20%26%20SUEO.jpg";
  chefImageContainer.appendChild(chefImage);

  homeContainer.appendChild(reviewContainer);
  homeContainer.appendChild(chefImageContainer);

  return { homeContainer };
})();

const Menu = (() => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");

  const item1 = document.createElement("div");
  item1.classList.add("menu-item");
  item1.classList.add("top");
  item1.classList.add("left");
  const item1Image = document.createElement("img");
  item1Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/salsiccia.png";
  const item1Title = document.createElement("h2");
  item1Title.textContent = "Salsiccia";
  const item1Ingredients = document.createElement("p");
  item1Ingredients.textContent =
    "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil";
  item1.appendChild(item1Image);
  item1.appendChild(item1Title);
  item1.appendChild(item1Ingredients);

  const item2 = document.createElement("div");
  item2.classList.add("menu-item");
  item2.classList.add("top");
  item2.classList.add("right");
  const item2Image = document.createElement("img");
  item2Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/gamberi.png";
  const item2Title = document.createElement("h2");
  item2Title.textContent = "Gamberi";
  const item2Ingredients = document.createElement("p");
  item2Ingredients.textContent =
    "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil";
  item2.appendChild(item2Image);
  item2.appendChild(item2Title);
  item2.appendChild(item2Ingredients);

  const item3 = document.createElement("div");
  item3.classList.add("menu-item");
  item3.classList.add("left");
  const item3Image = document.createElement("img");
  item3Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/pepe.png";
  const item3Title = document.createElement("h2");
  item3Title.textContent = "Pepe";
  const item3Ingredients = document.createElement("p");
  item3Ingredients.textContent =
    "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil";
  item3.appendChild(item3Image);
  item3.appendChild(item3Title);
  item3.appendChild(item3Ingredients);

  const item4 = document.createElement("div");
  item4.classList.add("menu-item");
  item4.classList.add("right");
  const item4Image = document.createElement("img");
  item4Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/carne.png";
  const item4Title = document.createElement("h2");
  item4Title.textContent = "Carne";
  const item4Ingredients = document.createElement("p");
  item4Ingredients.textContent =
    "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli";
  item4.appendChild(item4Image);
  item4.appendChild(item4Title);
  item4.appendChild(item4Ingredients);

  const item5 = document.createElement("div");
  item5.classList.add("menu-item");
  item5.classList.add("left");
  const item5Image = document.createElement("img");
  item5Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/disgustoso.png";
  const item5Title = document.createElement("h2");
  item5Title.textContent = "Disgustoso";
  const item5Ingredients = document.createElement("p");
  item5Ingredients.textContent =
    "Tomato sauce, Bacon, Pineapple, Olives, Basil";
  item5.appendChild(item5Image);
  item5.appendChild(item5Title);
  item5.appendChild(item5Ingredients);

  const item6 = document.createElement("div");
  item6.classList.add("menu-item");
  item6.classList.add("right");
  const item6Image = document.createElement("img");
  item6Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/colorato.png";
  const item6Title = document.createElement("h2");
  item6Title.textContent = "Colorato";
  const item6Ingredients = document.createElement("p");
  item6Ingredients.textContent =
    "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil";
  item6.appendChild(item6Image);
  item6.appendChild(item6Title);
  item6.appendChild(item6Ingredients);

  const item7 = document.createElement("div");
  item7.classList.add("menu-item");
  item7.classList.add("left");
  item7.classList.add("bottom");
  const item7Image = document.createElement("img");
  item7Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/pomodoro.png";
  const item7Title = document.createElement("h2");
  item7Title.textContent = "Pomodoro";
  const item7Ingredients = document.createElement("p");
  item7Ingredients.textContent =
    "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli";
  item7.appendChild(item7Image);
  item7.appendChild(item7Title);
  item7.appendChild(item7Ingredients);

  const item8 = document.createElement("div");
  item8.classList.add("menu-item");
  item8.classList.add("right");
  item8.classList.add("bottom");
  const item8Image = document.createElement("img");
  item8Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/crema.png";
  const item8Title = document.createElement("h2");
  item8Title.textContent = "Crema";
  const item8Ingredients = document.createElement("p");
  item8Ingredients.textContent =
    "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil";
  item8.appendChild(item8Image);
  item8.appendChild(item8Title);
  item8.appendChild(item8Ingredients);

  menuContainer.appendChild(item1);
  menuContainer.appendChild(item2);
  menuContainer.appendChild(item3);
  menuContainer.appendChild(item4);
  menuContainer.appendChild(item5);
  menuContainer.appendChild(item6);
  menuContainer.appendChild(item7);
  menuContainer.appendChild(item8);

  return { menuContainer };
})();

const Contact = (() => {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact");

  const contactInformationContainer = document.createElement("div");

  const phoneContainer = document.createElement("div");
  phoneContainer.classList.add("phone");
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 123 456 789";
  phoneContainer.appendChild(phoneNumber);

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("location");
  const location = document.createElement("p");
  location.textContent = "🏠 123 Legit Street, Real City, CA";
  locationContainer.appendChild(location);

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map");
  const map = document.createElement("img");
  map.src =
    "https://michalosman.github.io/restaurant-page/images/restaurant-location.png";
  mapContainer.appendChild(map);
  contactInformationContainer.appendChild(phoneContainer);
  contactInformationContainer.appendChild(locationContainer);
  contactInformationContainer.appendChild(mapContainer);

  contactContainer.appendChild(contactInformationContainer);

  return { contactContainer };
})();

const handleContentChange = (() => {
  Header.homeButton.addEventListener("click", () => {
    PageDisplay.displayHome();
  });

  Header.menuButton.addEventListener("click", () => {
    PageDisplay.displayMenu();
  });

  Header.contactButton.addEventListener("click", () => {
    PageDisplay.displayContact();
  });
})();

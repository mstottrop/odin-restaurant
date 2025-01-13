import "./styles.css";

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const contentArea = document.getElementById("content");

homeBtn.addEventListener("click", () => {
  contentArea.style.backgroundColor = "black";

  import("./home.js").then((Module) => {
    const newHome = new Module.Home();
    newHome.createHome();
  });
});

menuBtn.addEventListener("click", () => {
  contentArea.style.backgroundColor = "yellow";

  import("./menu.js").then((Module) => {
    const newMenu = new Module.Menu();
    newMenu.createMenu();
  });
});

aboutBtn.addEventListener("click", () => {
  contentArea.style.backgroundColor = "red";

  import("./about.js").then((Module) => {
    const newAbout = new Module.About();
    newAbout.createAbout();
  });
});

window.onload = () => {
  import("./home.js").then((Module) => {
    const newHome = new Module.Home();
    newHome.createHome();
  });
};

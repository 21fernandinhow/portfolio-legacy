import './images/bg-home-light.webp';
import './images/bg-home-dark.webp';

const root = document.querySelector(":root");
const body = document.querySelector("body");

function changeTheme(){
    if (body.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f5f5f5")
        root.style.setProperty("--bg-radical-color", "#ffffff")
        root.style.setProperty("--contrast-color", "#292b2c")
        root.style.setProperty("--bg-image", "url('../../images/bg-home-light.webp')")
        root.style.setProperty("--invert", "invert(0%)");
        body.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#292b2c")
        root.style.setProperty("--bg-radical-color", "#000000")
        root.style.setProperty("--contrast-color", "#f5f5f5")
        root.style.setProperty("--bg-image", "url('../../images/bg-home-dark.webp')")
        root.style.setProperty("--invert", "invert(100%)");
        body.dataset.theme = "dark"
      }
}

export default changeTheme;
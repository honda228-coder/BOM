const timeElement = document.getElementById("time");
const bgColorSelect = document.getElementById("bgColor");
const setBgColorButton = document.getElementById("setBgColor");
const showURLButton = document.getElementById("showURL");
const infoElement = document.getElementById("info");

// !time
setInterval(() => {
  timeElement.textContent = `${new Date().toLocaleTimeString()}`;
}, 1000);

// !ColorBg
setBgColorButton.addEventListener("click", () => {
  let selectedColor = bgColorSelect.value;
  document.body.style.backgroundColor = selectedColor;
});

// !URL
showURLButton.addEventListener("click", () => {
  infoElement.innerHTML += <p>${window.location.href}</p>;
});

// ! размеры
function updateInfo() {
  infoElement.innerHTML = <p> ${screen.width}px x ${screen.height}px</p>;
}
updateInfo();
console.log(updateInfo);
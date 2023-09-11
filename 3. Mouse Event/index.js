const xposEl = document.getElementById("xpos");
const yposEl = document.getElementById("ypos");

window.addEventListener("mousemove", (event) => {
  xposEl.innerText = event.clientX;
  yposEl.innerText = event.clientY;
});

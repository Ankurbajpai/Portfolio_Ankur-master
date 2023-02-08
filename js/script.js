document.getElementById("hamburger").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};

document.getElementById("idBtnResume").onclick = function openResume() {
  window.open("https://drive.google.com/file/d/1roIlULW0GmSRqJ-dxQ_qW3StUXV8F7jN/view", "_blank");
};

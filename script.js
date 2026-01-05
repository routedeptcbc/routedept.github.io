const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwpMenEmPQOvnqbYqoGCWexemYwX1JJO_lFqNzi9YcCbDPvk3jI9pk7ClllJmDxuM6j/exec";

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.left = menu.style.left === "0px" ? "-220px" : "0px";
}

// Monthly color theme
const colors = [
  "#ef4444", "#f97316", "#facc15", "#22c55e",
  "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899",
  "#14b8a6", "#84cc16", "#eab308", "#6366f1"
];

document.documentElement.style.setProperty(
  "--main",
  colors[new Date().getMonth()]
);

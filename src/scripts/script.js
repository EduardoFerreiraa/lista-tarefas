const addTask = document.getElementById("button");
const inputText = document.getElementById("task");
const changeTheme = document.getElementById("theme");

addTask.addEventListener("mouseenter", () => {
  addTask.style.transform = "scale(1.15)";
  addTask.style.transition = "0.5s";
  addTask.style.background = "black";
  addTask.style.color = "white";
});

addTask.addEventListener("mouseleave", () => {
  addTask.style.transform = "scale(1)";
  addTask.style.transition = "0";
  addTask.style.background = "white";
  addTask.style.color = "black";
});


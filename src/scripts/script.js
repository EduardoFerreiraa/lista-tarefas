const addTask = document.getElementById("button");
const inputText = document.getElementById("task");
const changeTheme = document.getElementById("theme");
const body = document.getElementById("body");
const title = document.getElementById("title");

changeTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
});

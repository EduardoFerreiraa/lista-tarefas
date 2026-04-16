const addTask = document.getElementById("button");
const inputText = document.getElementById("task");
const list = document.getElementById("tasks");
const changeTheme = document.getElementById("theme");
const body = document.getElementById("body");

changeTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
});

addTask.addEventListener("click", () => {
  const text = inputText.value;
  const novoItem = document.createElement("li");

  if (text === "") {
    alert("Digite uma tarefa!");
    return;
  }

  novoItem.textContent = text;
  list.appendChild(novoItem);
});

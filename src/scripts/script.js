const addTask = document.getElementById("button");
const inputText = document.getElementById("task");
const list = document.getElementById("tasks");
const changeTheme = document.getElementById("theme");
const body = document.getElementById("body");

changeTheme.addEventListener("click", () => {
  body.classList.toggle("dark");

  const temaAtivo = document.body.classList.contains("dark");
  if (temaAtivo) {
    changeTheme.textContent = "Tema Light";
  } else {
    changeTheme.textContent = "Tema Dark";
  }
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

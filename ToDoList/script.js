const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

function toggleTaskDone(checkbox) {
  const listItem = checkbox.parentNode;
  listItem.classList.toggle("done");
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <input type="checkbox" onclick="toggleTaskDone(this)">
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Hapus</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function deleteTask(button) {
  const listItem = button.parentNode;
  taskList.removeChild(listItem);
}

function editTask(button) {
  const listItem = button.parentNode;
  const span = listItem.querySelector("span");
  const newTaskText = prompt("Edit tugas:", span.textContent);

  if (newTaskText !== null) {
    span.textContent = newTaskText;
  }
}

taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

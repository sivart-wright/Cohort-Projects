let enterButton = document.getElementById("enterButton");
let taskTitle = document.getElementById("taskTitle");
let taskPriority = document.getElementById("taskPriority");
let taskDate = document.getElementById("taskDate");
let taskList = document.getElementById("taskList");

enterButton.addEventListener("click", function () {
  let URL = "http://localhost:3000/todos";
  let newTask = {
    task: taskTitle.value,
    priority: taskPriority.value,
    date: taskDate.value,
  };
  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  }).then(function () {
    getTasks();
  });
});

async function getTasks() {
  let response = await fetch("http://localhost:3000/todos");
  let result = await response.json();
  let tasksToDo = result.tasks.map(function (task) {
    return `<li>
      ${task.task}
      ${task.priority}
      ${task.date}
    </li>`;
  });
  taskList.innerHTML = tasksToDo.join(" ");
}
getTasks();

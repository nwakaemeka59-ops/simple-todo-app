let taskList = [];

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    taskList.push(task);
    taskInput.value = "";
    displayTasks();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    taskList.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = task + 
        ` <button onclick="deleteTask(${index})">Delete</button>`;
        list.appendChild(li);
    });
}

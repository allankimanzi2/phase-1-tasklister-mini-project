index.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the task description from the input field
    const taskDescriptionInput = document.getElementById("new-task-description");
    const taskDescription = taskDescriptionInput.value;

    // Create a new task element with the provided description
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    // Append the new task element to the task list
    const taskList = document.getElementById("tasks");
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskDescriptionInput.value = "";
  });
});

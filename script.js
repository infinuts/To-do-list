document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    taskInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter" && taskInput.value.trim() !== "") {
        addTask(taskInput.value.trim());
        taskInput.value = "";
      }
    });
  
    function addTask(taskContent) {
      const li = document.createElement("li");
      li.textContent = taskContent;
      li.addEventListener("click", function() {
        li.classList.toggle("completed");
      });
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
      });
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    }
  });
  
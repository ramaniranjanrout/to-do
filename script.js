function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;
    
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create a new list item
    let li = document.createElement("li");
    li.textContent = taskValue;
    
    // Add click event to toggle completion
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });
    
    // Create remove button
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", function() {
        li.remove();
    });
    
    // Add remove button to the list item
    li.appendChild(removeBtn);
    
    // Append the list item to the task list
    let taskList = document.getElementById("taskList");
    taskList.appendChild(li);
    
    // Clear the input field
    taskInput.value = "";
}
const inputBox = document.querySelector("#inputbox"); // input field for tasks
const listContainer = document.querySelector("#list-container"); // UL where added tasks are being shown
const completedList = document.querySelector("#completed-tasks"); // UL for completed tasks
const addTask = document.querySelector(".add-task"); // button to add the task
const toggleBtn = document.querySelector("#theme-toggler"); // button to switch theme 
const body = document.querySelector("body"); // to be used for theme switching
const allTasks = [
    {
        title: "Making a list",
        completed: false       
    }
]; // array-list for tasks to be sorted

// a button that toggles between themes 
toggleBtn.addEventListener('click', () =>{
    body.classList.toggle('dark-mode');
    console.log("is this button working?");
    
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerText = "😎";
    } else {
        toggleBtn.innerText = "🌚";
    }
});

const createNewTask = () => {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    let newTask = li + span;
};

const addNewTask = () => {
    const pushNewTask = {
        title: inputBox.value,
        completed: false,
    };

    allTasks.push(newTask);
};

// button to add tasks
addTask.addEventListener('click', (e) => {
    const newTasktitle = inputBox.value;
    
    if(newTasktitle === ''){
        alert("can't add an empty task");
        return;
    } else{
    /* let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span); */
    }

    /* const newTask = {
        title: newTasktitle,
        completed: false,
    }

    allTasks.push(newTask); */

    inputBox.value = "";
    saveData();
});

// clicking the task and either complete or delete
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// function to store tasks in browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("completed", completedList.innerHTML);
}

// function to show the stored tasks
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") || '';
    listContainer.innerHTML = localStorage.getItem("completed") || '';
}

showTask();
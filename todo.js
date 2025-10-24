const inputBox = document.querySelector("#inputbox"); // input field for tasks
const listContainer = document.querySelector("#list-container"); // UL where added tasks are being shown
const addTask = document.querySelector(".add-task"); // button to add the task
const toggleBtn = document.querySelector("#theme-toggler"); // button to switch theme 
const body = document.querySelector("body"); // to be used for theme switching
const allTasks = [
    {
        
    }
]; // array-list for tasks to be sorted

toggleBtn.addEventListener('click', () =>{
    body.classList.toggle('dark-mode');
    console.log("is this button working?");
    
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerText = "😎";
    } else {
        toggleBtn.innerText = "🌚";
    }
});

addTask.addEventListener('click', (e) => {
    if(inputBox.value === ''){
        alert("can't add an empty task");
        return;
    }

    else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
});

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

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
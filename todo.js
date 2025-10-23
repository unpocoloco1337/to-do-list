const inputBox = document.querySelector("#inputbox");
const listContainer = document.querySelector("#list-container");
const addTask = document.querySelector(".add-task");

addTask.addEventListener('click', (e) => {
    if(inputBox.value === ''){
        alert("can't add an empty task");
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
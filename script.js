const inputFieldbox = document.getElementById("field");
const addTaskbtn = document.getElementById("addTask");
const listTask = document.getElementById("list-container");
const errorMsg = document.getElementById("error-msg");

addTaskbtn.addEventListener('click', function(){
    errorMsg.style.display = "none";
    if(inputFieldbox.value == ''){
        errorMsg.style.display = "block"
    } 
    else{
        let li = document.createElement("LI");
        li.innerHTML = inputFieldbox.value[0].toUpperCase() + inputFieldbox.value.slice(1).trim();
        listTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputFieldbox.value = "";
    saveData();
 })

listTask.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


errorMsg.addEventListener('click', function(e){
    if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
    }
}, false)

function saveData(){
    localStorage.setItem("todo", listTask.innerHTML);
}

function showTask(){
    listTask.innerHTML = localStorage.getItem("todo");
}
showTask();
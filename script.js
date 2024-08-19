const button = document.getElementById("addtask");
const input = document.getElementById("taskInput");
const tasklist = document.getElementById("taskList");

loadtasks();
function addtask(){
 const task = input.value.trim();
 if(task){
    createtask(task);
    input.value='';
    savetasks();
 }
else{
    alert("Task not entered!");
}
}
function createtask(task){

 const itemlist = document.createElement('li');
 itemlist.textContent = task;
const deletebtn = document.createElement('button');
deletebtn.textContent = 'Delete';
deletebtn.className = 'deletebtn';
itemlist.appendChild(deletebtn);
 tasklist.appendChild(itemlist);

 deletebtn.addEventListener('click', function(){
    tasklist.removeChild(itemlist);
 });

}
function savetasks(){

    let tasks = [];
    tasklist.querySelectorAll('li').forEach(function(item){
        tasks.push(item.textContent.replace('Delete','').trim());
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));

}
function loadtasks(){

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    //the end part of the above statement includes || [] to show that
    // if there's nothing in the storage array, then it'll be displayed as a blank array
    tasks.forEach(createtask);

}
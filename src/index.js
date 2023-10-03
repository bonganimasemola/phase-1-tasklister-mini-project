document.addEventListener("DOMContentLoaded", () => {
document.querySelector('form').addEventListener('submit', (e) => {
   // Prevent default form submission behavior
  e.preventDefault()

   let task = e.target.querySelector("#new-task-description").value
   // e.target
   //console.log(e.target)
   //document.querySelector("#new-task-description").value
  //console.log(e.target.querySelector("#new-task-description").value)
   handleTasks(task);
   })
  
});


function handleTasks(task) {
let p = document.createElement('p')
p.textContent = task
document.querySelector('#list').appendChild(p)
}



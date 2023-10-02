document.addEventListener("DOMContentLoaded", () => {
document.querySelector('form').addEventListener('submit', (e) => {
   // Prevent default form submission behavior
  e.preventDefault()

//BLOCKER: console log kept asking me to define description and task, but those words are in form id="", working with code along template but there's a connection i'm not making
  let task = ''
  let description = ''
  handleTasks(e.target.new-task-description.value)
   })
  
});

function handleTasks(tasks) {
let p = document.createElement('p')
p.textContent = tasks
document.querySelector('list').appendChild(p)
}



document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createTodoList(e.target.newTaskDescription.value)
    form.reset()
  })  
});

const createTodoList = (task) => {
  const tasks = document.querySelector('#tasks')
  const p = document.createElement('p')
  const btn = document.createElement('button')
  p.textContent = `${task} `
  btn.textContent = 'Delete'
  tasks.appendChild(p).appendChild(btn)
  btn.addEventListener('click', deleteButton)
}

const deleteButton = (e) => {
  e.target.parentNode.remove()
}
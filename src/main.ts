import './style.css'

const inputText = document.getElementsByName("inputText")[0] as HTMLInputElement;
const submitButton = document.getElementById("submitButton") as HTMLButtonElement;

const allTask = document.getElementsByClassName("allTask")[0] as HTMLDivElement;


const creatingElements = () => {
  const oneTask = document.createElement("div")
  oneTask.classList.add("one-task")
  
  const checkBox = document.createElement("input")
  checkBox.type = "checkbox"
  checkBox.id = "checkBox" 
  oneTask.append(checkBox)
  
  const todoText = document.createElement("p")
  todoText.classList.add("todo-task")
  oneTask.append(todoText)
  todoText.innerHTML =  inputText.value   
  
  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = "Del"
  deleteButton.classList.add("deleteButton") 
  oneTask.append(deleteButton)

  allTask.append(oneTask)

  deleteButton.onclick = () => {
    oneTask.remove()
  }

  checkBox.onclick = () => {
   if(checkBox.checked){
    oneTask.style.backgroundColor = "green"
   }
   else{
    oneTask.style.backgroundColor = ""
   } 
  }
}

submitButton.addEventListener("click", ()=>{
 creatingElements() 
 inputText.value = "" 
 
})

//getting all deleteButtons




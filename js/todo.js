const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todolist";

let toDos = [];

function saveToDos(){
  // save the lists to the array
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // console.log(localStorage);
}

function deleteTodo(event){
  // can check who was the clicked
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo){
  // making list with newTodo value
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  
  // create button for delete lists
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo)

  // add to the html
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}



function handleToDoSubmit(event){
  event.preventDefault();
  // save the value
  const newTodo = toDoInput.value;
  // after enter the value should be empty
  toDoInput.value = "";
  
  // add the value to the toDos array
  toDos.push(newTodo);

  // sending the newTodo value to the paintTodo func
  paintTodo(newTodo);

  // save todos
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
// console.log(savedTodos);            // string

if(savedTodos){
  const parsedTodos = JSON.parse(savedTodos);
  // console.log(parsedTodos);         // array

  // if old todos are in the local storage, then restore it
  toDos = parsedTodos;
  
  // execute the func for each item
  parsedTodos.forEach(paintTodo);
}


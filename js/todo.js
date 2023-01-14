const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todolist";

let toDos = [];

function saveToDos(){
  // save the lists to the array
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
  // can check who was the clicked
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  // console.log(li.id);
  
  li.remove();
  
  // remove the li that was clicked
  // remain the array with elements that are not same as li.id (= clicked todos)
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // console.log(typeof li.id);        // li.id -> string, but todo.id -> number => need to use parseInt
  
  // after delete save again
  saveToDos();
}

function paintTodo(newTodo){
  // making list with newTodo value
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  
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
  
  // add the value to the toDos array as a array with object
  const newTodoObj = {
    text:newTodo,
    id: Date.now()       // give us a random number
  }
  toDos.push(newTodoObj);
  // sending the newTodoObj value to the paintTodo func
  paintTodo(newTodoObj);

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


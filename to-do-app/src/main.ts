import './index.css'
interface Todo{
    title: string;
    isCompleted : boolean;
    readonly id : string;
}
const todos:Todo[] = [];
const todosContainer = document.querySelector(".to-do-container") as HTMLDivElement
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement ;
const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e:SubmitEvent) =>{
    e.preventDefault();

    const todo:Todo = {
        title : todoInput.value,
        isCompleted : false,
        id : String(Math.random() * 100)
    };
    todos.push(todo);
    todoInput.value = ""
    console.log(todos);
    renderTodo(todos)
    // todosContainer.innerText = todos[0]
};

const renderTodo = (todos:Todo[])=>{
    todosContainer.innerText = ""
    todos.forEach(item =>{
        generateTodoItem(item.title, item.isCompleted, item.id)
    })
}
const generateTodoItem=(title:string, isCompleted:boolean, id:string)=>{
    const todo:HTMLDivElement = document.createElement("div")
    const checkBox:HTMLInputElement = document.createElement("input")
    checkBox.setAttribute("type", "checkBox")
    checkBox.checked = isCompleted
    checkBox.onchange = () =>{
        paragraph.className = checkBox.checked?"textcut" : "";
    }
    // creating p for title 
    const paragraph:HTMLParagraphElement = document.createElement("p")
    paragraph.innerText = title
    // create delete button
    const btn:HTMLButtonElement = document.createElement("button")
    btn.innerText = "X"
    btn.onclick = () =>{
        deleteTodo(id)
    }
    // appending all to todo item
    todo.append(checkBox,paragraph,btn)
    todosContainer.append(todo)
}
const deleteTodo=(id:string)=>{
    const idx = todos.findIndex(item => item.id === id)
    todos.splice(idx, 1)
    renderTodo(todos)
}
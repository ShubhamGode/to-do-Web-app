let count = 0;
let btcount = 0;
let ctcount = 0;
let todoList = document.getElementById("todoList");
let completedList = document.getElementById("completedList");
let todoInput = document.getElementById("todoInput");

function addTodo() {
	var todoText = todoInput.value;
	if (todoText === '') {
		alert("Please enter a task");
		return;
	}

	var li = document.createElement("li");
	li.id = `${count = count++}`
	li.innerHTML = `<p>${todoText}</p><button  id = bt${btcount} onclick='removeTodo(this.id)'>Remove</button><button  id = ct${ctcount} onclick='completeTodo(this.id)'>Complete</button>`;
	btcount++
	todoList.appendChild(li);
	todoInput.value = "";
}

function removeTodo(id) {
	var li = document.getElementById(id).parentElement.id;
	document.getElementById(li).remove();
}

function completeTodo(id) {
	var li = document.getElementById(id).parentElement.id;
	var text = document.getElementById(li).firstElementChild.innerHTML;
	var ele = document.createElement("li");
	ele.innerHTML = text;
	completedList.appendChild(ele)
	document.getElementById(li).remove();

}

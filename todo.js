let todoList = [
  { item: "Buy Milk", dueDate: "2021-09-01" },
  { item: "Buy Bread", dueDate: "2021-09-02" },
];

function addTodo() {
  let inputElement = document.getElementById("todo-input");
  let todoItem = inputElement.value;
  let dateElement = document.getElementById("todo-date");
  let todoDate = dateElement.value;
  console.log(todoItem);
  console.log(todoDate);
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHTML += `<span>${item}</span><span>${dueDate}</span>
    <button class= "btn-delete" onclick="todoList.splice(${i},1);displayItems();">Delete</button>`;
  }
  containerElement.innerHTML = newHTML;
}

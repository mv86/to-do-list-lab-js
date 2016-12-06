var init = function(){
  //get the todoList from localStorage (if it exists)
  //NOTE You'll have to use JSON.parse
  //bind a handler to the button onclick event
  //get the "todo-list" element from the DOM
  //call the populate function
 

  var todoList = document.querySelector('#todo-list');
  var state = JSON.parse(localStorage.getItem('todo-list')) || [];
  var button = document.querySelector('button');
  button.onclick = handleClick;

  populate(todoList, state);

}

var populate = function(list, state){
  //for each item in the state, invoke addItem
  for (item of state) {
    addItem(list, item);
  }
}

var addItem = function(list, item){
  //add an item to the list
  var thisItem = document.createElement('li');
  thisItem.innerText = item;
  list.append(thisItem);
}

var handleClick = function(){
  //get the value of the input box
  //get the "todo-list" element from the DOM
  //invoke addItem
  //invoke save
  var input = document.querySelector('input');
  var inputValue = input.value;
  var todoList = document.querySelector('#todo-list');
  addItem(todoList, inputValue);
  save(inputValue);
}

var save = function(item){
  //save the item to localStorage 
  //NOTE You'll have to use JSON.stringify
  var state = JSON.parse(localStorage.getItem("todo-list")) || [];
  state.push(item);
  localStorage.setItem('todo-list', JSON.stringify(state));
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)

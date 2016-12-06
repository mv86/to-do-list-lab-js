var init = function(){
  //get the todoList from localStorage (if it exists)
  //NOTE You'll have to use JSON.parse
  //bind a handler to the button onclick event
  //get the "todo-list" element from the DOM
  //call the populate function
}

var populate = function(list, state){
  //for each item in the state, invoke addItem
}

var addItem = function(list, item){
  //add an item to the list
}

var handleClick = function(){
  //get the value of the input box
  //get the "todo-list" element from the DOM
  //invoke addItem
  //invoke save
}

var save = function(item){
  //save the item to localStorage 
  //NOTE You'll have to use JSON.stringify
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)

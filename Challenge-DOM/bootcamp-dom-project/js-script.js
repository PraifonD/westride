const addButton = document.getElementById('add');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const item = document.getElementsByTagName('li');

const ENTER_BUTTON_CODE = 13;

function inputLength() {
  return input.value.length;
}
function listLength() {
  return item.length;
}

function saveListToLocalStorage () {
  localStorage.setItem('todoList', ul.innerHTML );
}
function LoadListFromLocalStorage () {
  let savedInfo = localStorage.getItem('todoList')
  ul.innerHTML = savedInfo;

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function() {
      this.classList.toggle('done');
      saveListToLocalStorage ();
    });
    item[i].querySelector('button').addEventListener('click', function() {
      this.parentNode.classList.add('delete');
      saveListToLocalStorage ();
    });
  }
}

window.onload = () => {
  LoadListFromLocalStorage();
}

function createListElement() {
  const newLiElement = document.createElement('li');
  const inputValue = input.value;

  newLiElement.appendChild(document.createTextNode(inputValue));
  ul.appendChild(newLiElement);
  //Reset text input field
  input.value = ''; 

  // Add DELETE BUTTON
  const deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('X'));
  newLiElement.appendChild(deleteBtn);

  // Add Done State
  function crossOut() {
    newLiElement.classList.toggle('done');
    saveListToLocalStorage ();
  }
  newLiElement.addEventListener('click', crossOut);

   // Add Delete Function
  function deleteListItem() {
    newLiElement.classList.add('delete');
    saveListToLocalStorage ();
  }
  deleteBtn.addEventListener('click', deleteListItem);

  saveListToLocalStorage ();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === ENTER_BUTTON_CODE) {
    createListElement();
  }
}

addButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
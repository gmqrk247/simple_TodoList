const inputElement = document.getElementById('input-element');
const taskBtn = document.getElementById('taskBtn');
const list = document.querySelector('#list');

// create element
function createElement() {
	// new element creations
	const newItem = document.createElement('div');
	const li = document.createElement('li');
	const delBtn = document.createElement('button');
	// adding class for style
	newItem.classList.add('list-item');
	delBtn.innerText = 'X';

	// setting list item value
	li.innerText = inputElement.value;

	// adding button and list item
	newItem.append(delBtn, li);
	list.appendChild(newItem);

	// reset inputfield
	inputElement.value = '';

	// toogle done class on click
	li.addEventListener('click', () => li.classList.toggle('done'));

	// delete item on 'X' button click
    delBtn.addEventListener('click', ()=> newItem.remove(li))
}

// add on button click
const addItemOnClick = function () {
	if (inputElement.value.length > 0) {
		createElement();
	}
};

// add on enter
const addItemOnEnter = function () {
	if (inputElement.value.length > 0 && event.which === 13) {
		createElement();
	}
};

// functions
taskBtn.addEventListener('click', addItemOnClick);
inputElement.addEventListener('keypress', addItemOnEnter);

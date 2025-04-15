const dropDown = document.getElementById('myDropdown');

const createBtn = document.getElementById('myButton');

const buttonContainer = document.getElementById('buttonContainer');

let color = dropDown.value; // default value

dropDown.onchange = function () {
  color = dropDown.value;
  createBtn.innerHTML = `Create ${color} Button`;
}

createBtn.addEventListener('click', () => {
  const newButton = document.createElement('button');
  newButton.innerText = color;
  newButton.style.margin = "5px";
  newButton.style.padding = "10px";
  newButton.style.borderRadius = "8px";

  // Store the color at the time of creation
  const newCreatedBtnColor = color;

  newButton.addEventListener('click', () => {
    document.body.style.backgroundColor = newCreatedBtnColor;
  });

  buttonContainer.appendChild(newButton);
});

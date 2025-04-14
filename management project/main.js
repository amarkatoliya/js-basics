const addTaskbtn = document.getElementById('add-task-btn');

const todoBoard = document.getElementById('todo-board');

function attchDragEvents(target) {
    target.addEventListener('dragstart',() => {
        target.classList.add('flying')
    });
    target.addEventListener('dragend',() => {
        target.classList.remove('flying')
    });
}

addTaskbtn.addEventListener('click', () => {
    const input = prompt('What is the Task')

    if(!input) return
    const taskCard = document.createElement('p');
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable',true)
    taskCard.innerText = input

    attchDragEvents(taskCard);
    todoBoard.appendChild(taskCard);
})

const allBoards = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');

allItems.forEach(attchDragEvents);

allBoards.forEach(board => {
    board.addEventListener('dragover', () => {
    const flyingElement = document.querySelector('.flying')
    board.appendChild(flyingElement)    
        console.log(`jshbdjfkjabjfbeaf`,board);
        
    });
});
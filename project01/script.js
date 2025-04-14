const todoButton = document.getElementById('addBtn');

const todoInput = document.getElementById('inputTodo');

const listContainer = document.getElementById('list-container');

const deleteAll = document.getElementById('delAll');

todoButton.addEventListener('click', () => {
    
    const value = todoInput.value;
    if (!value){
        alert('plese add your acctivity')
        return
    }

    const li = document.createElement('li')
    li.innerHTML = value

    const delButton = document.createElement('button');
    delButton.innerHTML = 'X'
    li.appendChild(delButton)

    listContainer.appendChild(li)
    todoInput.value=''

    delButton.addEventListener('click', () => {
    li.remove();
    })
})

deleteAll.addEventListener('click', ()=> {
    listContainer.innerHTML=''
})
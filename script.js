const add = document.querySelector('.add');
const todo = document.querySelector('.todo');
const input = document.querySelector('#input');
const inputClass = document.getElementsByClassName('inputClass');

add.addEventListener('click', (e)=> {
    const createDiv = document.createElement('div');
    todo.appendChild(createDiv);
    
    createDiv.style.width = '100%';
    createDiv.style.height = '5vh';
    createDiv.style.marginTop = '15px';
    createDiv.style.borderRadius = '5px';

    const createInput = document.createElement('input');
    const createIcon = document.createElement('i');
    
    createIcon.classList.add('fa-solid', 'fa-minus');
    createIcon.id = 'iconId';
    
    createDiv.appendChild(createInput);
    createDiv.appendChild(createIcon);

    createIcon.addEventListener('click', () => {
        createDiv.remove();
    })
});
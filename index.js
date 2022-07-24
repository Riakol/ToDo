const todoNode = document.querySelector('.js-todo');
const inputNode = document.querySelector('.js-input');
const btnNode = document.querySelector('.js-btn');

let todoes = [];

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random}`
    };

    todoes.push(todo);
}

function deleteTodo(id) {
    todoes.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    })
}

function render() {
    console.log(todoes);
    let html = '';

    todoes.forEach(todo => {
        if (todo.done) {
            return;
        };

        html += `
            <div>
            ${todo.text}
            <button data-id='${todo.id}'>Done</button>
            
            </div>
            `;
    })

    todoNode.innerHTML = html;
}

btnNode.addEventListener('click', () => {
    const text = inputNode.value;

    addTodo(text);

    render();
});

todoNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);

    render();
});

render();
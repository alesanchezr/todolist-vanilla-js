let globalTodos = [];
function printTodos(){
    const ul = document.querySelector('.todos');
    let content = "";
    globalTodos.forEach(function(item){
        console.log("Content", content);
        content += `<li>${item} <button onClick='remove("${item}")'>🗑</button></li>`;
    });
    content = content + `<li><input type='text' onfocusout="addTodo(value)" /><li>`;
    ul.innerHTML = content;
}
function add(label){
    globalTodos.push(label);
    printTodos();
}
function remove(label){
    globalTodos = globalTodos.filter(l => l !== label);
    printTodos();
}

window.addTodo = addTodo;
printTodos();


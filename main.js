"use strict"
//Quando si invoca il "Document" è come chiedere al browser web come interpreta l'html
// console.log(document.body)

// //modo per trovare un elemento velocemente
// const pippotag = document.getElementById('pippo');
// console.log(pippotag)

// // 1° passaggio: prendere l'elemento che voglio modificare

// const maindiv = document.getElementById('main-div')

// // 2° passaggio: creo un elemento

// const newP = document.createElement("p")

// // 3° passaggio: creo il text node

// const text = document.createTextNode('Attento! Non premere, è pericoloso! Non rischiare')

// // 4° passaggio: creo la struttura, dal basso verso l'alto

// newP.appendChild(text)
// maindiv.appendChild(newP)


////////////////////////////////////////////////

//ToDo

const ToDos = ['studiare JavaScript', 'esercitarmi su CodeWars', 'ripetere la scacchiera', 'FizzBuzz forever']

function displayList(array) {
    document.getElementById('main-list').innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const mainList = document.getElementById('main-list')
        const newLi = document.createElement('li')
        const text = document.createTextNode(element)
        const doneButton = document.createElement('button')
        const buttonText = document.createTextNode('Done')
        doneButton.appendChild(buttonText)
        doneButton.addEventListener('click', (event) => removeToDo(element))
        newLi.appendChild(text)
        newLi.appendChild(doneButton)
        mainList.appendChild(newLi)
    }
}

displayList(ToDos)

function addButtonPressed() {
    const input = document.getElementById('todo-input')
    if (input.value !== '') {
        const newToDo = input.value
        ToDos.push(newToDo)
        displayList(ToDos)
        input.value = ''
    }
}

function removeToDo(todo) {
    const todoIndex = ToDos.indexOf(todo)
    ToDos.splice(todoIndex, 1)
    displayList(ToDos)
}

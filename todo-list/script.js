


const input = document.getElementById('input');
const list = document.getElementById('list_container');
const add = () => {
    if (input.value === '') {
        alert('you must write something')
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = input.value;
        list.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = ""
    savedata()
}


let button = document.getElementById('button');
button.addEventListener('click', () => {
    add()
})

list.addEventListener('click', (event) => {

    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
        savedata()
    }
    else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove()
        savedata()
    }
}, false)


const savedata = () => {
    localStorage.setItem('data', list.innerHTML)
}

const showdata = () => {
    list.innerHTML = localStorage.getItem('data')
}
showdata()
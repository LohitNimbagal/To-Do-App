const addList = document.querySelector('.addList')
const list = document.querySelector('.list')

const unCheckImg = '/images/uncheck.png'

const addToList = () => {

    if (addList.value !== "") {
        const newList = document.createElement('li')
        let span = document.createElement('span')

        newList.innerHTML = addList.value
        list.appendChild(newList)

        span.innerHTML = '\u00d7'
        newList.appendChild(span);

        addList.value = "";
        saveData();
    } else {
        alert('Enter Valid Input')
    }

}


list.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

document.querySelector('.addBtn').addEventListener('click', () => {
    addToList();
    saveData()
})
addList.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addToList();
        saveData()
    }
})

function saveData() {
    localStorage.setItem('data', list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem('data');
}

showData()
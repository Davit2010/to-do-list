let input = document.querySelector('.input'),
    pushBtn = document.querySelector('.push'),
    listCont = document.querySelector('.list-cont'),
    count = document.querySelector('.count'),
    arr_lists_info = []

pushBtn.addEventListener('click', () => {
    if (input.value) {
        createList()
        saveText()
        input.value = ''
    }
})

input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && input.value) {
        createList()
        saveText()
        input.value = ''
    }
})

function createList() {
    let div = document.createElement('div')

    div.className = 'list-cont-divs'
    div.innerHTML = `
            <div class='list-cont-top'>
                <label for="checkboxx" class='checkbox-cont'></label>
                <input class="checkboxx" type="checkbox" id='checkboxx'/>

                <span class='text' contenteditable="false">${input.value}</span>
            </div>
            <div class='buttons_cont'>
                <button class="redact"><img src="./img/pencil.png" alt=""></button>
                <button class="delet"><img src="./img/bin.png" alt=""></button>
            </div>
            `
    listCont.appendChild(div)
    delList()
    redactList()
    clearAllList()
    checkedss()
    count_el()
}

function delList() {
    let divs = document.querySelectorAll('.list-cont-divs')
    let delBtn = document.querySelectorAll('.delet')

    delBtn.forEach((el, i) => {
        el.addEventListener('click', () => {
            divs[i].remove()
            delete arr_lists_info[i]

            redactList()
            clearAllList()
            checkedss()
            count_el()
        })
    })
}

function redactList() {
    let redactText = document.querySelectorAll('.text')
    let redactBtn = document.querySelectorAll('.redact')
    let x = true
    redactBtn.forEach((el, i) => {
        el.addEventListener('click', () => {
            if (x) {
                redactText[i].setAttribute('contenteditable', true)
                x = false
            }
            else {
                redactText[i].setAttribute('contenteditable', false)
                x = true
            }
            clearAllList()
        })
    })
}

function clearAllList() {
    let divs = document.querySelectorAll('.list-cont-divs')
    let delAllBtn = document.querySelectorAll('.del-all')
    delAllBtn.forEach((el, i) => {
        el.addEventListener('click', () => {
            divs.forEach(el2 => {
                el2.remove()
            })
            checkedss()
            count_el()
        })
    })
}

function checkedss() {
    let checkboxx = document.querySelectorAll('.checkboxx')
    let redactText = document.querySelectorAll('.text')
    let checkbox_cont = document.querySelectorAll('.checkbox-cont')

    checkboxx.forEach((el, i) => {
        el.addEventListener('click', () => {
            redactText[i].classList.toggle('checked')
            checkbox_cont[i].classList.toggle('checkbox-cont-add-class')
        })
    })
}

function count_el() {
    let items = count.innerHTML = document.querySelectorAll('.list-cont-divs').length
}

function saveText() {
    function obj() {
        this.text = input.value
        this.check = document.querySelector('.checkboxx').checked
    }

    let newObj = new obj()
    arr_lists_info.push(newObj)
}




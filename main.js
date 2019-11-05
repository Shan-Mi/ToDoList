const createtodo = document.querySelector('#createtodo') //form
const todoitemField = document.querySelector('#todoitem') //input
const todocategory = document.querySelector('#category') //select

//set date to today as default
const datepickerField = document.querySelector('#datepicker')

function setDefaultDate() {
  Date.prototype.toDateInputValue = (function () {
    let local = new Date(this)
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset())
    return local.toJSON().slice(0, 10)
  })
  datepickerField.value = new Date().toDateInputValue()
}

const addBtn = document.querySelector('#addBtn')
const todoLists = document.querySelector('#todoLists')

setDefaultDate()
//bind event to addBtn to add one assignment to the todo list
addBtn.addEventListener('click', function () {
  event.preventDefault()
  const todo = todoitemField.value
  const date = (datepickerField.value || getDate())
  const type = getType()
  if (todo === '' || todo === 'Other') {
    alert('You need to write something to do first!')
    return
  }
  //create li
  const li = document.createElement('li')
  li.innerHTML = `<span class = 'col1 todoitem'>${todo}</span><span class = 'col2 date'>${date}</span><span class = 'col3 type'>${type}</span><button class="delbtn">🗑️</button><br>`
  li.classList.add(type)
  li.style.display = 'inline'

  todoLists.appendChild(li)
  setDefaultDate()
  todoitemField.value = 'Other'
  document.querySelector('#category').options[0].selected = 'selected'
  //类别恢复原始状态？how？
  dateCheck()
  deleteItem()
})

function getDate() {
  datepickerField.addEventListener('change', function () {
    const input = this.value
    return input
  })
}

function getType() {
  if (todocategory.selectedIndex >= 0 && todocategory.selectedIndex <= 3) {
    return (todocategory.options[todocategory.selectedIndex].value)
  } else {
    return 'all'
  }
}

const chooseall = document.querySelector('#chooseall')
const choosechores = document.querySelector('#choosechores')
const chooseddl = document.querySelector('#chooseddl')
const choosetraining = document.querySelector('#choosetraining')
const choosefun = document.querySelector('#choosefun')
//bind event to 5 radio buttons to show relevant todo list
chooseall.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'inline'
  })
  todocategory.selectedIndex = 4
  //search(document.querySelectorAll('li'))
})

choosechores.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'none'
  })
  document.querySelectorAll('.chores').forEach(item => {
    item.style.display = 'inline'
  })
  todocategory.selectedIndex = 0
  //search(document.querySelectorAll('.chores'))
})

chooseddl.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'none'
  })
  document.querySelectorAll('.ddl').forEach(item => {
    item.style.display = 'inline'
  })
  todocategory.selectedIndex = 1
  //search(document.querySelectorAll('.ddl'))
})

choosetraining.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'none'
  })
  document.querySelectorAll('.training').forEach(item => {
    item.style.display = 'inline'
  })
  todocategory.selectedIndex = 2
  //search(document.querySelectorAll('.training'))
})

choosefun.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'none'
  })
  document.querySelectorAll('.fun').forEach(item => {
    item.style.display = 'inline'
  })
  todocategory.selectedIndex = 3
  //search(document.querySelectorAll('.fun'))
})

//search funtion 问题：delete错误输入后，无法实时监控输入数据
//function search(lis) {
const searchtodoField = document.querySelector('#searchtodo')
searchtodoField.addEventListener('input', function (event) {
  //li => col 1
  let currentType = getType()
  let lis
  if (currentType === 'all') {
    lis = document.querySelectorAll('li')
  } else {
    lis = document.querySelectorAll(`.${currentType}`)
  }

  lis.forEach(li => {
    if (li.children[0].textContent.includes(event.currentTarget.value.toLowerCase())) {
      return li.style.display = 'inline'
    } else {
      li.style.display = 'none'
    }
  })
})
//}

//delete one todo
function deleteItem() {
  const deleteBtns = document.querySelectorAll('.delbtn')
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', function () {
      console.log('opps..')
      this.parentNode.parentNode.removeChild(this.parentNode)
    })
  }
}

//datecheck with reminder
function dateCheck() {
  const dateLists = document.querySelectorAll('.date')
  for (let i = 0; i < dateLists.length; i++) {
    if (dateLists[i].innerHTML < new Date().toDateInputValue()) {
      dateLists[i].parentNode.style.color = 'red'
      reminderShow()
    }
  }
}

const warning = document.querySelector('#warning')
const handleInfo = document.querySelector('#handleInfo')

function reminderShow() {
  warning.style.display = 'inline'
  delAllBtn.style.display = 'inline'
}

//增加点击后增加删除线功能，表示完成。

// todoLists.forEach(todo => {
//   todo.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'li') {
//       ev.target.classList.toggle('checked');
//     }
//   }, false);
// })

const delAllBtn = document.querySelector('.delAllBtn')

delAllBtn.addEventListener('click', function () {
  const todoLi = todoLists.children
  for (let i = 0; i < todoLi.length; i++) {
    while (todoLi[i].outerHTML.includes('red'))
      todoLists.removeChild(todoLi[i])
  }

  delAllBtn.style.display = 'none'
  warning.style.display = 'none'
})

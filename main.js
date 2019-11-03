/* <input name="textfield" type="text"  maxlength="20" value="请输入文字.."
    οnfοcus="if (value =='请输入文字..'){value =''}"
    οnblur="if (value ==''){value='请输入文字..'}" />
<br><br>
textarea:
<textarea cols="50" rows="5" id="textarea" οnfοcus="if(value=='限100字'){value=''}"
    οnblur="if (value ==''){value='限100字'}">限100字</textarea> */
const createtodo = document.querySelector('#createtodo') //form
const todoitemField = document.querySelector('#todoitem') //input
const todocategory = document.querySelector('#category') //select

//todoitemField 增加focus blur
/* todoitemField.addEventListener('click', function () {
  todoitemField.innerHTML = ''
  const input = document.createElement('input')
  input.type = 'text'
  input.value = todoitemField.textContent
  createtodo.removeChild(todoitemField)
  createtodo.appendChild(input)
  input.focus()

  input.addEventListener('blur', function () {
    if (input.value === '') {
      input.value = 'Other'
    }
    todoitemField.textContent = input.value
    createtodo.removeChild(input)
    createtodo.appendChild(todoitemField)
  })
}) */

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
  //创建li
  const li = document.createElement('li')
  li.innerHTML = `<span class = 'col1 todoitem'>${todo}</span><span class = 'col2 date'>${date}</span><span class = 'col3 type'>${type}</span><button class="delbtn">🗑️</button><br>`
  li.classList.add(type)
  li.style.display = 'inline'

  todoLists.appendChild(li)
  setDefaultDate()
  todoitemField.value = 'Other'
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
  return (todocategory.value || todocategory.options[todocategory.selectedIndex].value)
}

const chooseall = document.querySelector('#chooseall')
const choosechores = document.querySelector('#choosechores')
const chooseddl = document.querySelector('#chooseddl')
const choosetraining = document.querySelector('#choosetraining')
const choosetravel = document.querySelector('#choosetravel')

//bind event to 5 radio buttons to show relevant todo list
chooseall.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'inline'
  })
  search()
})

choosechores.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'none'
  })
  document.querySelectorAll('.chores').forEach(item => {
    item.style.display = 'inline'
  })
  search()
})

chooseddl.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'none'
  })
  document.querySelectorAll('.ddl').forEach(item => {
    item.style.display = 'inline'
  })
  search()
})

choosetraining.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'none'
  })
  document.querySelectorAll('.training').forEach(item => {
    item.style.display = 'inline'
  })
  search()
})

choosetravel.addEventListener('click', function () {
  document.querySelectorAll('li').forEach(li => {
    li.style.display = 'none'
  })
  document.querySelectorAll('.travel').forEach(item => {
    item.style.display = 'inline'
  })
  search()
})

//search funtion 问题：delete错误输入后，无法实时监控输入数据
function search() {
  const searchtodoField = document.querySelector('#searchtodo')
  searchtodoField.addEventListener('input', function () {
    //输入的内容变成小写字母
    const input = searchtodoField.value.toLowerCase()
    //创建数组，存放li中的具体内容。
    //backstage compare list
    const lis = document.querySelectorAll('li') //nodelist

    //得到每个li的第一列span里面的内容。
    lis.forEach(li => {
      if (li.children[0].textContent.includes(input) && (li.style.display === 'inline')) {
        return li.style.display = 'inline'
      } else {
        li.style.display = 'none'
      }
    })
  })
}

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

//日期检查提醒
function dateCheck() {
  const dateLists = document.querySelectorAll('.date')
  for (let i = 0; i < dateLists.length; i++) {
    if (dateLists[i].innerHTML < new Date().toDateInputValue()) {
      dateLists[i].parentNode.style.color = 'red'
      examOverdate()
    }
  }
}

//remind user about overdate todo
function examOverdate() {
  const warning = document.createElement('p')
  warning.innerHTML = ''
  warning.textContent = 'Do you want to delete overdate issues?'
  warning.style.color = 'red'
  warning.style.fontStyle = 'italic'
  document.querySelector('#handleInfo p').appendChild(warning)
  if (document.querySelector("#handleInfo>p>p:nth-child(2)").textContent.includes('delete')) {
    document.querySelector("#handleInfo>p>p:nth-child(2)").parentNode.removeChild(document.querySelector("#handleInfo>p>p:nth-child(2)"))
  }
  //deleteAllOverdateReminder()
}

//增加点击后增加删除线功能，表示完成。

// todoLists.forEach(todo => {
//   todo.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'li') {
//       ev.target.classList.toggle('checked');
//     }
//   }, false);
// })

//增加一键删除功能（有问题）
function deleteAllOverdateReminder() {
  const delAllBtn = document.createElement('button')
  delAllBtn.innerHTML = `❌ Remove all`
  document.querySelector('handleInfo>p').appendChild(delAllBtn)
  delAllBtn.addEventListener('click', () => {
    document.querySelectorAll('li').forEach(li => {
      if (li.style.color === 'red') {
        li.parentNode.parentNode.removeChild(li.parentNode)
      }
    })
  })
}
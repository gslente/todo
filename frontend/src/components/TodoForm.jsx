import { React, useState } from 'react'
import axios from 'axios'

const URL = 'http://127.0.0.1:8000/api/todo/'

const TodoForm = ({ get_todo_list }) => {
  const [todo, set_todo] = useState({
    title: '',
    body: ''
  })

  const text_onChange = (e) => {
    set_todo({
      ...todo,
      title: e.target.value,
      body: e.target.value
    })
  }

  const add_todo = async () => {
    await axios.post(URL, todo)
      .then(response => {
        get_todo_list()
      })
      .catch(error => { console.log(error) })
  }

  return (
    <>
      <input type="text" id="name" placeholder='Add new To Do item' onChange={text_onChange} value={todo.body} />
      <input type="submit" value="Submit" onClick={add_todo} />
    </>
  )
}

export default TodoForm

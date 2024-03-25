import { React, useEffect } from 'react'
import useState from 'react-usestateref'
import axios from 'axios'

var URL = 'http://127.0.0.1:8000/api/todo/'

const TodoRow = ({ item, get_todo_list }) => {
  const [todo, set_todo, todo_ref] = useState({
    id: item.id,
    title: item.title,
    body: item.body,
    is_complete: item.is_complete,
  })

  const a_onClick = (event) => {
    event.preventDefault()
    delete_todo(item.id)
  }

  const input_checkbox_onClick = (event) => {
    set_todo({
      ...todo,
      is_complete: event.target.checked
    })

    update_todo(item.id)
  }

  const input_text_onChange = (event) => {
    set_todo({
      ...todo,
      body: event.target.value
    })

    update_todo(item.id)
  }

  const input_text_onBlur = () => {
    update_todo(item.id)
  }

  const update_todo = async (id) => {
    let update_url = URL.concat(id, '/')
    await axios.put(update_url, todo_ref.current)
      .then(response => {
        const data = response.data
      })
      .catch(error => console.log(error))

    get_todo_list()
  }

  const delete_todo = async (id) => {
    let delete_url = URL.concat(id, '/')

    await axios.delete(delete_url)
      .then(response => {
        console.log(response)
      })
      .catch(event => {
        console.log(event)
      })

    get_todo_list()
  }

  /*useEffect(() => {
    console.log(todo_ref.current)

    return () => {
      console.log(todo_ref.current)
    }
  }, [])*/

  return (
    <td>
      <input type='checkbox' defaultChecked={item.is_complete} onChange={input_checkbox_onClick} />
      <input type='text' defaultValue={item.body} onChange={input_text_onChange} onBlur={input_text_onBlur} />
      <a href="#" onClick={a_onClick}>delete</a>
    </td>
  )
}

export default TodoRow

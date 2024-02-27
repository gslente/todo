import { useState, useEffect, React } from 'react'
import TodoRow from './TodoRow'
import axios from 'axios'
import TodoForm from './TodoForm'

const URL = 'http://127.0.0.1:8000/api/todo/'

const Table = () => {
  const [query, setQuery] = useState([])

  useEffect(() => {

    async function get_todo_list(){       
      await axios.get(URL)
      .then(response => {
        const data = response.data
        setQuery(data)
        console.log(query)
      })
      .catch(error => console.log(error))
    }
    get_todo_list()

  }, [])

  return (
    <>
      <table>
        <tbody>

          {
            query.map((item, index)=>(
              <tr>
                <TodoRow key={index} body={item.body} />
              </tr>
            ))
          }

        </tbody>
      </table>

      <TodoForm />
    </>
  )
}

export default Table

import { useState, useEffect, React } from 'react'
import TodoRow from './TodoRow'
import axios from 'axios'

const URL = 'http://127.0.0.1:8000/api/todo'

const Table = ({ todo_list, get_todo_list }) => {
  return (
    <>
      <table>
        <tbody>

          {
            todo_list.map((item, index) => (
              <tr key={index} >
                <TodoRow item={item} get_todo_list={get_todo_list} />
              </tr>
            ))
          }

        </tbody>
      </table>
    </>
  )
}

export default Table

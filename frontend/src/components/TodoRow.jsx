import React from 'react'
import TodoCheckbox from './TodoCheckbox'

const TodoRow = ({ body, index }) => {
  return (
    <td>
      <TodoCheckbox /> <input type='text' defaultValue={ body } />
    </td>
  )
}

export default TodoRow

import React from 'react'

const TodoForm = () => {
  return (
    <>
      <form action='/' method='POST'>
        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default TodoForm

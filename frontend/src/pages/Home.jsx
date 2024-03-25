// CONTRIB
import { React, useEffect, useState } from 'react'
import axios from 'axios'

// CUSTOM
import Header from '../components/Header'
import Table from '../components/Table'
import TodoForm from '../components/TodoForm'

const URL = 'http://127.0.0.1:8000/api/todo/'

const Home = () => {
  const [todo_list, set_todo_list] = useState([])

  const get_todo_list = async () => {
    await axios.get(URL)
      .then(response => {
        const data = response.data
        set_todo_list(data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    get_todo_list()
  }, [])

  return (
    <>
      <Header />
      <main>
        <TodoForm get_todo_list={get_todo_list} />
        <Table todo_list={todo_list} get_todo_list={get_todo_list} />
      </main>
    </>
  )
}

export default Home

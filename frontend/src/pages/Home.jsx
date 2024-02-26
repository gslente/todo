import { useState, useEffect, React } from 'react'
import Header from '../components/Header'
import Table from '../components/Table'

const URL = 'http://127.0.0.1:8000/api/todo/'

const Home = () => {
  const [query, setQuery] = useState('test')

  useEffect(() => {
    async function test_api(){
      const res = await fetch(`${URL}`)
      const data = await res.json()

      console.log(data)
    }

    test_api()
  }, query)

  return (
    <>
      <Header />
      <main>
        <Table name='test' message='test'/>
      </main>
    </>
  )
}

export default Home

import { React } from 'react'
import TodoRow from './TodoRow'

const Table = ({ name, message }) => {
  const items = [
    {body: 'item_1_updated'},
    {body: 'item_2_updated'}
  ];

  return (
    <table>
      {
        items.map((item, index)=>(
          <tr>
            <TodoRow body={item.body} index={index} />
          </tr>
        ))
      }
    </table>
  )
}

export default Table

import React from 'react'
import { Link } from 'react-router-dom'

function OrderList() {
  return (
    <div>
      List
      <Link to="add" className='btn btn-danger'>Add order</Link>
    </div>
  )
}

export default OrderList

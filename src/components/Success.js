import React from 'react'
import {useParams} from 'react-router-dom'

function Success() {
  let params = useParams()
  return (
    <div>Success Your Ticket is {params.id}</div>
  )
}

export default Success
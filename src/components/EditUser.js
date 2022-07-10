import React from 'react'
import {useParams} from 'react-router-dom'
import {useSearchParams} from 'react-router-dom';

function EditUser() {
  let params = useParams();
  const [searchParams,setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"),searchParams.get("class"))
  console.log(params)
  return (
    <h1>EditUser</h1>
  )
}

export default EditUser
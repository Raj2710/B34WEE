import React,{useContext} from 'react'
import {BaseContext} from '../App'

function SignUp() {
    let baseContext = useContext(BaseContext)
    console.log(baseContext)
  return (
    <div>SignUp</div>
  )
}

export default SignUp
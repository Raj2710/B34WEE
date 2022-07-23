import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import {url} from './../App'
import axios from 'axios'

function CreateUser() {

  // window.localStorage.setItem('localData',"I am Local Storage")


  // useEffect(()=>{
  //   console.log("Use effect called!")
  // })//it will be called as many times as the component re-renders

  // useEffect(()=>{
  //   console.log("Use effect called!")
  // },[])//use effect will be called only when the component is redering for the first time

  

  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [dob,setDOB] = useState("")
  let [mobile,setMobile] = useState("")
  let [location,setLocation] = useState("")
  let navigate = useNavigate()

  
  let handleSubmit = async()=>{
    let data = {
      firstName,
      lastName,
      email,
      dob,
      mobile,
      location
    }
    let res = await axios.post(url,data)
    if(res.status===201)
      navigate('/dashboard')
    
  }
  return<div>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=>setFName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" onChange={(e)=>setLName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" placeholder="dd-mm-yy" onChange={(e)=>setDOB(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Location" onChange={(e)=>setLocation(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </div>
}

export default CreateUser
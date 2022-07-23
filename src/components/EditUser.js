import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {url} from './../App'

function EditUser() {
  let params = useParams();

  // window.sessionStorage.setItem('data',"I am Session Storage")

  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [dob,setDOB] = useState("")
  let [mobile,setMobile] = useState("")
  let [location,setLocation] = useState("")

  useEffect(()=>{
    getData();
  },[])

  let getData = async() =>{
    let res = await axios.get(`${url}/${params.id}`)
    setFName(res.data.firstName)
    setLName(res.data.lastName)
    setEmail(res.data.email)
    setDOB(res.data.dob)
    setMobile(res.data.mobile)
    setLocation(res.data.location)
  }

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
   
    let res = await axios.put(`${url}/${params.id}`,data)
    
    if(res.status===200)
      navigate('/dashboard')
    
  }
  return<div>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>setFName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setLName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" placeholder="dd-mm-yy" value={dob} onChange={(e)=>setDOB(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </div>
}

export default EditUser
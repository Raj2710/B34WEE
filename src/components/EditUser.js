import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'

function EditUser(props) {
  let params = useParams();
  let [firstName,setFName] = useState(props.data.user[params.id].firstName)
  let [lastName,setLName] = useState(props.data.user[params.id].lastName)
  let [email,setEmail] = useState(props.data.user[params.id].email)
  let [dob,setDOB] = useState(props.data.user[params.id].dob)
  let [mobile,setMobile] = useState(props.data.user[params.id].mobile)
  let [location,setLocation] = useState(props.data.user[params.id].location)

  let navigate = useNavigate()
  let handleSubmit = ()=>{
    let data = {
      firstName,
      lastName,
      email,
      dob,
      mobile,
      location
    }
    let user = [...props.data.user]

    user.splice(params.id,1,data)

    props.data.setUser(user)
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
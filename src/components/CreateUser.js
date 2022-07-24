import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {url} from './../App'
import axios from 'axios'
import { useFormik } from 'formik';
 import * as Yup from 'yup';

function CreateUser() {

  
  let params = useParams();
  let [firstName,setFName] = useState("")
  let [lastName,setLName] = useState("")
  let [email,setEmail] = useState("")
  let [dob,setDOB] = useState("")
  let [mobile,setMobile] = useState("")
  let [location,setLocation] = useState("")

  let getData = async()=>{
    let res = await axios.get(`${url}/${params.id}`)
    setFName(res.data.firstName)
    setLName(res.data.lastName)
    setEmail(res.data.email)
    setDOB(res.data.dob)
    setMobile(res.data.mobile)
    setLocation(res.data.location)
    
  }

  useEffect(()=>{
    if(params.id)
      getData()
  },[])

  let navigate = useNavigate()
  let handleSubmit = async(data)=>{
    console.log(data)
    let res
    if(params.id) {
      res = await axios.put(`${url}/${params.id}`,data)
    }
    else
    {
      res = await axios.post(url,data)
    }
    if(res.status===201 || res.status===200)
      navigate('/dashboard')
    
  }

  const UserForm = useFormik({
    initialValues:{
      firstName:firstName,
      lastName:lastName,
      email:email,
      dob:dob,
      mobile:mobile,
      location:location
    },
    enableReinitialize:true,
    validationSchema:Yup.object({
      firstName:Yup.string().required("*Required").min(2,"First Name can not be less then 2 characters"),
      lastName:Yup.string().required("*Required").min(2,"Last Name can not be less then 2 characters"),
      email:Yup.string().email("Enter an Valid Email").required("*Required"),
      dob:Yup.string(),
      mobile:Yup.string().max(10,"Mobile number can not exceed 10 numbers").matches(/^\d{10}$/,"Enter a vaild mobile number").required("*Required"),
      location:Yup.string()
    }),
    onSubmit:values=>handleSubmit(values)
  }) 
  return<div>
    <form onSubmit={UserForm.handleSubmit}>
      <div className='form-group'>
        <label>First Name</label>
        <input
          name='firstName'
          type='text'
          className='form-control'
          placeholder='First Name'
          onChange={UserForm.handleChange}
          onBlur={UserForm.handleBlur}
          value={UserForm.values.firstName}
        />
        {UserForm.touched.firstName && UserForm.errors.firstName?<div style={{"color":"red"}}>{UserForm.errors.firstName}</div>:<></>}
      </div>

      <div className='form-group'>
        <label>First Name</label>
        <input
          name='lastName'
          type='text'
          className='form-control'
          placeholder='Last Name'
          onChange={UserForm.handleChange}
          onBlur={UserForm.handleBlur}
          value={UserForm.values.lastName}
        />
        {UserForm.touched.lastName && UserForm.errors.lastName?<div style={{"color":"red"}}>{UserForm.errors.lastName}</div>:<></>}
      </div>

      <div className='form-group'>
        <label>Email</label>
        <input
          name='email'
          type='email'
          className='form-control'
          placeholder='Email'
          onChange={UserForm.handleChange}
          onBlur={UserForm.handleBlur}
          value={UserForm.values.email}
        />
        {UserForm.touched.email && UserForm.errors.email?<div style={{"color":"red"}}>{UserForm.errors.email}</div>:<></>}
      </div>

      <div className='form-group'>
        <label>DOB</label>
        <input
          name='dob'
          type='date'
          className='form-control'
          placeholder='Date of Birth'
          onChange={UserForm.handleChange}
          onBlur={UserForm.handleBlur}
          value={UserForm.values.dob}
        />
        {UserForm.touched.dob && UserForm.errors.dob?<div style={{"color":"red"}}>{UserForm.errors.dob}</div>:<></>}
      </div>

      <div className='form-group'>
        <label>Mobile</label>
        <input
          name='mobile'
          type='text'
          className='form-control'
          placeholder='Mobile'
          onChange={UserForm.handleChange}
          onBlur={UserForm.handleBlur}
          value={UserForm.values.mobile}
        />
        {UserForm.touched.mobile && UserForm.errors.mobile?<div style={{"color":"red"}}>{UserForm.errors.mobile}</div>:<></>}
      </div>

      <div className='form-group'>
        <label>Location</label>
        <input
          name='location'
          type='text'
          className='form-control'
          placeholder='Location'
          onChange={UserForm.handleChange}
          onBlur={UserForm.handleBlur}
          value={UserForm.values.location}
        />
        {UserForm.touched.location&& UserForm.errors.location?<div style={{"color":"red"}}>{UserForm.errors.location}</div>:<></>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
}

export default CreateUser
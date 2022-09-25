import React,{useContext,useState} from 'react'
import axios from 'axios'
import {BaseContext} from '../App'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import {useNavigate} from 'react-router-dom';


function SignIn() {
    let baseContext = useContext(BaseContext)
    let[email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [spinner,setSpinner] = useState(false);
    let [message,setMessage] = useState("")

    let navigate = useNavigate()

    let handleLogin = async()=>{
        setSpinner(true)
        let res = await axios.post(`${baseContext.apiurl}/users/signin`,{
            email,
            password
        });
        if(res.data.statusCode===200)
        {
            setSpinner(false)
            sessionStorage.setItem('token',res.data.token)
            navigate('/dashboard')
        }
        else
        {
            setSpinner(false)
            setMessage(res.data.message)
            setTimeout(() => {
                setMessage("")
            }, 3000);
        }
    }

  return <>
    <div style={{"textAlign":"center","alignItems":"center","marginLeft":"40%","marginRight":"40%"}}>
        <h1>Sign In</h1>
        <p>You are one step away! <br></br>Sign In to continue!!!</p>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" onClick={()=>handleLogin()}>
            Submit
        </Button>
    </Form>
    <br>
    </br>
    {
        spinner?<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>:<></>
    }
    {
        message?<div style={{"color":"red"}}>{message}</div>:<></>
    }
    </div>
  </>
}

export default SignIn
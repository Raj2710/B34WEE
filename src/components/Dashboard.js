import axios from 'axios'
import React,{useContext,useEffect,useState} from 'react'
import {BaseContext} from '../App'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Dashboard() {
    let baseContext = useContext(BaseContext)
    let navigate = useNavigate();
    let [data,setData] = useState([])
    
    let loadData = async()=>{
        let token = sessionStorage.getItem('token');
        if(token)
        {
          let res = await axios.get(`${baseContext.apiurl}/users/all`,{
            headers:{
              'Authorization': `Basic ${token}` 
            }})
            if(res.data.statusCode===200)
            {
                setData(res.data.users)
            }
            else
            {
              alert(res.data.message)
              navigate('/signin')
            }
        }
        else
        {
          navigate('signin')
        }
    }

    useEffect(()=>{
      loadData()
    },[])

    let logout = ()=>{
      sessionStorage.clear();
      navigate('/signin')
    }

  return <>
    <h1 style={{"textAlign":"center"}}>Welcome to Dashboard</h1>
      <Button onClick={()=>loadData()}>Refresh List</Button>
      &nbsp;
      <Button variant='danger' onClick={()=>logout()}> Logout</Button>
      <br></br>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.role}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
      </>
}

export default Dashboard
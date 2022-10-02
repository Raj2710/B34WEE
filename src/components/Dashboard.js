import React,{useState,useEffect,useContext} from 'react'
import Card from 'react-bootstrap/Card';
import {CommonContext} from '../App'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom';

function Dashboard() {

    let [count,setCount] = useState({"open": 0,"inProgrogres": 0,"clossed": 0})
    let commonContext = useContext(CommonContext)

    let [data,setData] = useState([]);
    let [stage,setStage] = useState("");

    let navigate = useNavigate();

    let loadCount = async()=>{
        let res = await axios.get(`${commonContext.apiurl}/issues-count`)
        if(res.data.statusCode===200)
            setCount(res.data)
    }

    useEffect(()=>{
       loadCount()
    },[])

    let loadStage = async(stage)=>{
        let res = await axios.get(`${commonContext.apiurl}/issues-by-status/${stage}`)
        console.log(res.data)
        if(res.data.statusCode===200){
            setStage(stage)
            setData(res.data.issues)
        }
    }
  return <div className='dashboard-wrapper'>
    <div className='head-wrapper'>
        
        <Card  className='cards'>
        <Card.Body onClick={()=>loadStage("Open")}>
            <Card.Title>Open Issues {count.open}</Card.Title>
        </Card.Body>
        </Card>

        <Card  className='cards'>
        <Card.Body onClick={()=>loadStage("In-Progress")}>
            <Card.Title>In-Progress Issues {count.inProgrogres}</Card.Title>
        </Card.Body>
        </Card>

        <Card className='cards'>
        <Card.Body onClick={()=>loadStage("Clossed")}>
            <Card.Title>Clossed Issues {count.clossed}</Card.Title>
        </Card.Body>
        </Card>
    </div>
    <div className='main-wrapper'>
        {
            stage!==""?<h1>List of {stage} Issues</h1>:<></>
        }
        {
            data.length?<Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Issue Title</th>
                <th>Issue Type</th>
                <th>Created At</th>
                <th>Name</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
             {
                data.map((e,i)=>{
                    return <tr key={i} style={{"cursor":"pointer"}} onClick={()=>{navigate(`/issue/${e._id}`)}}>
                            <td>{i+1}</td>
                            <td>{e.issueTitle}</td>
                            <td>{e.issueType}</td>
                            <td>{e.createdAt}</td>
                            <td>{e.name}</td>
                            <td>{e.mobile}</td>
                    </tr>
                })
             }
            </tbody>
          </Table>:<></>
        }
    </div>
  </div>
}

export default Dashboard
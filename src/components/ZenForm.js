import React,{useState,useEffect,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {CommonContext} from '../App'
import {useNavigate} from 'react-router-dom'

function ZenForm() {

    let commonContext = useContext(CommonContext)
    let [issueTypes,setIssueTypes] = useState([])

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [mobile,setMobile] = useState("")
    let [issueType,setIssueType]= useState("")
    let [issueTitle,setIssueTitle] = useState("")
    let [issueDescription,setIssueDescription] = useState("")

    let navigate = useNavigate();


    let loadIssueTypes = async()=>{
       let res = await axios.get(`${commonContext.apiurl}/issue-types`)
       if(res.data.statusCode===200)
       {
            setIssueTypes(res.data.issueTypes)
       }
       else
       {
         
       }
    }

    useEffect(()=>{
        loadIssueTypes()
    },[])


    let handleSubmit = async()=>{
        let res = await axios.post(`${commonContext.apiurl}/issues`,{
            name,
            email,
            mobile,
            issueType,
            issueTitle,
            issueDescription
        })
        if(res.data.statusCode===200)
        {
            console.log(res.data)
            navigate(`/success/${res.data.issue_id}`)
        }
        else
        {

        }
    }
  return <>
    <div className='wrapper-title'>
        <h1>Zen Desk</h1>
        <p>We hear what you say! and Do what you think!</p>
    </div>
    <div className='wrapper-main mt-3'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name<sup>*</sup></Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name"  onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address<sup>*</sup></Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile<sup>*</sup></Form.Label>
        <Form.Control type="text" placeholder="Your Mobile"  onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Issue Type</Form.Label>
        <Form.Select onChange={(e)=>{setIssueType(e.target.value)}}>
            {
                issueTypes.map((e,i)=>{
                    return <option value={e} key={i}>{e}</option>
                })
            }
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Issue Title</Form.Label>
        <Form.Control type="text" placeholder="Title"  onChange={(e)=>setIssueTitle(e.target.value)}/>
      </Form.Group>

     
        <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }} onChange={(e)=>setIssueDescription(e.target.value)}
            />
        </FloatingLabel>
      
        <div className='mt-3' style={{"textAlign":"center"}}>
            <Button variant="primary" onClick={()=>handleSubmit()}>
                Submit
            </Button>
        </div>
      <div style={{"textAlign":"center"}}>
            <Form.Text className="text-muted">
                <sup>*</sup>We'll never share your Personal Information with anyone else.
            </Form.Text>
        </div>
    </Form>
    </div>
  </>
}

export default ZenForm
import React,{useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Success() {
  
  let params = useParams()

  let [toggle,setToggle] = useState(false)

  let handleCopy= ()=>{
    setToggle(true)
    navigator.clipboard.writeText(params.id)
    setTimeout(()=>{
      setToggle(false)
    },2000)
  }
  return <>
   <div className='success-wrapper'>
      <CheckCircleOutlineIcon sx={{ fontSize: 100 }}/>
      <h1>Success</h1> 
      <p>Your Ticket is {params.id} 
        <span onClick={()=>handleCopy()} className='copy'>
            <ContentCopyIcon/>
            {
              toggle?<span style={{"color":"black"}}>Coppied!</span>:<></>
            }
        </span></p>
      <p>Visit <Link to='/track-issue'>here</Link> to find the status of the ticket</p>
   </div>
    </>
}

export default Success  
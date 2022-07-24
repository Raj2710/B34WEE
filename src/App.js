import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import CreateUser from './components/CreateUser'
import Profile from './components/Profile'
import Account from './components/Account'
import React from 'react'
import HooksDemo from './components/HooksDemo';
export const url = 'https://61ee1f7ed593d20017dbac50.mockapi.io/students'
export const UserContext = React.createContext();


function App() {

  let data = {
    monthly:40000,
    yearly:480000,
    task:100,
    pending:10
  }


  // useEffect(()=>{
  //   fetch('https://61ee1f7ed593d20017dbac50.mockapi.io/students')
  //   .then(response => response.json())
  //   .then(res=>console.log(res))
  //   .catch(err=>console.log(err))
  // },[])
  
  return <>
  <div id="wrapper">
    <BrowserRouter>
   
      <SideBar/>  
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Routes>
              <Route path='/dashboard' element = {<Dashboard data={{data}}/>}>
                  <Route path='profile' element = {<Profile/>}/>
                  <Route path='account' element = {<Account/>}/>
              </Route>
              <Route path='/add-user' element  = {<CreateUser/>}/>
              <Route path='/edit-user/:id' element = {<CreateUser/>}/>
              <Route path='/hooks-demo' element={<HooksDemo/>}/>
              <Route path="*" element={<Navigate to='/dashboard'/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  </div>
  </>
}

export default App;

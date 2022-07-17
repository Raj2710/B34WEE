import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import Profile from './components/Profile'
import Account from './components/Account'
import React, {useState} from 'react'
export const UserContext = React.createContext();

function App() {

  let data = {
    monthly:40000,
    yearly:480000,
    task:100,
    pending:10
  }

  let [user,setUser] = useState([
    {
      firstName:"Adhiban",
      lastName:"Madhav",
      email:"adhiban.madhav@gmail.com",
      mobile:"1234564789",
      dob:"12-09-2010",
      location:"Chennai"
    },
    {
      firstName:"Srikanth",
      lastName:"Kureshi",
      email:"srikanth.kureshi@gmail.com",
      mobile:"5689237415",
      dob:"12-09-2010",
      location:"Bangalore"
    },
    {
      firstName:"Nelson",
      lastName:"Manikam",
      email:"nelson.manikam@gmail.com",
      mobile:"4578126935",
      dob:"12-09-2005",
      location:"Hyedrabad"
    }
  ])

  return <>
  <div id="wrapper">
    <BrowserRouter>
   
      <SideBar/>
      <UserContext.Provider value={{user,setUser}}>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Routes>
              <Route path='/dashboard' element = {<Dashboard data={{data}}/>}>
                  <Route path='profile' element = {<Profile/>}/>
                  <Route path='account' element = {<Account/>}/>
              </Route>
              <Route path='/add-user' element  = {<CreateUser/>}/>
              <Route path='/edit-user/:id' element = {<EditUser data={{user,setUser}}/>}/>
              <Route path="*" element={<Navigate to='/dashboard'/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  </div>
  </>
}

export default App;

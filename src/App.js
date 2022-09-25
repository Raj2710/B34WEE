import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
const apiurl = 'https://b34we-express.herokuapp.com'
export const BaseContext = React.createContext()

function App() {
  return <>
    <div>
        <Router>
          <BaseContext.Provider value={{apiurl}}>
            <Routes>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='*' element={<Navigate to='/signin'/>}/>
            </Routes>
            </BaseContext.Provider>
        </Router>
    </div>
  </>
}

export default App;
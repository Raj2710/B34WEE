import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ZenForm from './components/ZenForm';
import Success from './components/Success';
import Status from './components/Status';
import Dashboard from './components/Dashboard';
import Issues from './components/Issues';
export const CommonContext = React.createContext();
const apiurl = 'https://zendesk-be.herokuapp.com'
function App() {
  return <>
    <BrowserRouter>
    <CommonContext.Provider value={{apiurl}}>
        <Routes>
          <Route path='/new-issue' element={<ZenForm/>}/>
          <Route path='/success/:id' element={<Success/>}/>
          <Route path='/track-issue' element={<Status/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/issue/:id' element={<Issues/>}/>
          <Route path='*' element={<Navigate to='/new-issue'/>}/>
        </Routes>
      </CommonContext.Provider>
    </BrowserRouter>
  </>
}

export default App;

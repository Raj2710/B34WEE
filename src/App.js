import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ZenForm from './components/ZenForm';
import Success from './components/Success';
import Status from './components/Status';
export const CommonContext = React.createContext();
const apiurl = 'http://localhost:8000'
function App() {
  return <>
    <BrowserRouter>
    <CommonContext.Provider value={{apiurl}}>
        <Routes>
          <Route path='/new-issue' element={<ZenForm/>}/>
          <Route path='/success/:id' element={<Success/>}/>
          <Route path='/ticket/:id' element={<Status/>}/>
          <Route path='*' element={<Navigate to='/new-issue'/>}/>
        </Routes>
      </CommonContext.Provider>
    </BrowserRouter>
  </>
}

export default App;

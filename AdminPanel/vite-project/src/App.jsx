import React from 'react'
import SignUp from './Component/SignUp'
import Login from './Component/Login';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
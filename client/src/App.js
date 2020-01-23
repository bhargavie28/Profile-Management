import React from 'react';
import './App.css';
import Form1 from './Views/Form';
import Navbar from './Views/Navbar';
import Dashboard from './Views/Dashboard';
import ProfileList from './Views/ProfileList';

function App() {
  return (
    <div >
    <Navbar /> 
   {/* <Form1 /> */}
    <Dashboard /> 
    
   {/* <ProfileList /> */}
    </div>
  );
}

export default App;

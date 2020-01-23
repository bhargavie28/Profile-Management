import React from 'react';
import './App.css';
import Form1 from './Components/Form';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import ProfileList from './Components/ProfileList';

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

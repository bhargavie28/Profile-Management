import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form1 from './Views/Form';
import Navbar1 from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/DashBoard';

import ProfileList from './Views/ProfileList';
import SignIn from './Components/auth/SignIn';
import CreateJobPost from './Components/jobposting/CreateJobPost';
import JobPostList from './Components/jobposting/JobPostList';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar1 />
      <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route path='/signin' component={SignIn} />
         <Route path= '/form' component= {Form1} />
         <Route path= '/profilelist' component= {ProfileList} />
         <Route path= '/createjob' component={CreateJobPost} />
         <Route path= '/jobpostlist' component={JobPostList} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

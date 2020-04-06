import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form1 from './Views/Form';
import Navbar1 from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/DashBoard';
import ProfileList from './Views/ProfileList';
import SignIn from './Components/auth/SignIn';
import CreateJobPost from './Components/jobposting/CreateJobPost';
import JobPostList from './Components/jobposting/JobPostList';
import EditApplication from './Views/EditApplication';
import TestTable from './Views/TestTable';
import Success from './Components/Alerts/Success';
import Error from './Components/Alerts/Error';
import Uploadfile from './Views/Uploadfile';



export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar1 />
      <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route exact path='/success' component={Success} />
         <Route exact path='/error' component={Error} />
         <Route exact path='/uploadfile' component={Uploadfile} />


         <Route path='/table' component={TestTable} />
         <Route path='/signin' component={SignIn} />
         <Route path= '/form' component= {Form1} />
         <Route path= '/editProfile' component= {EditApplication} />

         <Route path= '/profilelist' component= {ProfileList} />
         <Route path= '/createjob' component={CreateJobPost} />
         <Route path= '/jobpostlist' component={JobPostList} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

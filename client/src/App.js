import React from 'react';
import './App.css';
import Form1 from './Views/Form';
import Navbar from './Views/Navbar';
import ProfileList from './Views/ProfileList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
<div>
  <Navbar />
<Router>
<Switch>
  <Route path= "/form" component= {Form1} />
  <Route path= "/profilelist" component= {ProfileList} />
  </Switch>
</Router>
</div>

  );
}

export default App;

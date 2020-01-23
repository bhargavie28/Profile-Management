import React, {Component,Fragment} from 'react';
import { Route, Switch, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Form1 from './Form';
import ProfileList from './ProfileList';


class Dashboard extends Component {
    render(){

        return(
<Router>
        <Fragment>
          <section className="container">
            <Switch>
              <Route exact path='/' component={Form1} />
              <Route exact path='/createProfile' component={Form1} />
              <Route exact path ='/viewProfiles' component = {ProfileList} />
            </Switch>
          </section>
        </Fragment>
      </Router>
);
    }
}

export default Dashboard;
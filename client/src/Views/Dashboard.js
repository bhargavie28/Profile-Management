import React, {Component,Fragment} from 'react';
import { Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import Form1 from './Form';
import ProfileList from './ProfileList';
import EditApplication from './EditApplication';


class Dashboard extends Component {
    render(){

        return(
<Router>
        <Fragment>
          <section className="container">
            <Switch>
              <Route exact path='/' component={ProfileList} />
              <Route exact path='/createProfile' component={Form1} />
              <Route exact path ='/viewProfiles' component = {ProfileList} />
              <Route exact path ='/editProfile' component = {EditApplication} />

              
            </Switch>
          </section>
        </Fragment>
      </Router>
);
    }
}

export default Dashboard;
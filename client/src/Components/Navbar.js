import React , {Component, Fragment} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
class Navbar1 extends Component {
    render() {
        return(
            <Fragment>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand > <i className='fas fa-user' /> Profile Management</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/createProfile">Create Profile</Nav.Link>
              <Nav.Link href="/viewProfiles">View Profile</Nav.Link>
             
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
          </Navbar>
          <br />
          </Fragment>
  
        
    
      );
    }
}
export default Navbar1;

import React , {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignedInLinks from '../layout/SignedInLinks';

class Navbar1 extends Component {
    render() {
        return(
          <Navbar collapseOnSelect className="color-nav" expand="lg" variant="dark">
          <Navbar.Brand href="/">
          <img
        alt=""
        src="/assets/jss/images/icon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}ProfileManagement</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <SignedInLinks/>
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-secondary">Search</Button>
    </Form> */}
          </Navbar.Collapse>
            </Navbar>        
    
      );
    }
}
export default Navbar1;

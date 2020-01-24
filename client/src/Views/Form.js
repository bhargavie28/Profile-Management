import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Grid from "@material-ui/core/Grid";
import GridItem from "../Components/Grid/GridItem";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



import axios from "axios";
import "../App.css";
import UploadImage from "./UploadImage";
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeCandidateName = this.onChangeCandidateName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeClientName = this.onChangeClientName.bind(this);
    this.onChangeCurrentLocation = this.onChangeCurrentLocation.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      candidatename: "",
      email: "",
      clientname: "",
      currentlocation: ""
    };
  }
  onChangeCandidateName(e) {
    this.setState({ candidatename: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeClientName(e) {
    this.setState({ clientname: e.target.value });
  }
  onChangeCurrentLocation(e) {
    this.setState({ currentlocation: e.target.value });
  }
  onSubmit(e) {
    alert("User Saved");
    e.preventDefault();
    const profileObject = {
      candidatename: this.state.candidatename,
      email: this.state.email,
      clientname: this.state.clientname,
      currentlocation: this.state.currentlocation
    };
    axios
      .post("http://localhost:5000/api/user", profileObject)
      .then(res => console.log(res.data));
    this.setState({
      candidatename: "",
      email: "",
      clientname: "",
      currentlocation: ""
    });
  }

  render() {
    return (
      <Container>
         <Fragment >
            <Navbar >
            <Navbar.Brand > Personal Details</Navbar.Brand>
            <Nav className = "tab_container_heading" >
              <Nav.Link href="/Save">Save</Nav.Link>
              <Nav.Link href="/Reset">Reset</Nav.Link>
             
            </Nav>
           
          </Navbar>
          <br />
          </Fragment>

     
      <Container className="container">
      <div class="row">
    
      <div className= "col-sm-12">
         <Form>
        <div class="row">
          <div className= "col-sm-6">
      
              <Form.Group
                controlId="candidatename"
              >
                <Form.Label >First Name</Form.Label>
                <Form.Control
                  placeholder="Enter Full Name"
                  type="text"
                  value={this.state.candidatename}
                  onChange={this.onChangeCandidateName}
                />
                </Form.Group>
                <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="Enter Full Name"
                  type="text"
                  value={this.state.candidatename}
                  onChange={this.onChangeCandidateName}
                />
              </Form.Group>
            <Form.Group controlId="worknumber" className="textField">
              <Form.Label>Work Phone number</Form.Label>
              <Form.Control
                value={this.state.candidatename}
                onChange={this.onChangeCandidateName}
              />
            </Form.Group>
            <Form.Group controlId="homenumber">
              <Form.Label>Home Phone Number</Form.Label>
              <Form.Control
                value={this.state.candidatename}
                onChange={this.onChangeCandidateName}
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                placeholder="abc@gmail.com"
              />
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Work Permit</Form.Label>
              <Form.Control as="select">
                <option></option>
                <option>H1</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Current Location</Form.Label>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Hyderabad</option>
              </Form.Control>
              <Form.Label>City</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Hyderabad</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Preferred Location</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Hyderabad</option>
              </Form.Control>
            </Form.Group>
            </div>
            <div className= "col-sm-6">
            <Form.Group controlId="formGridState">
              <Form.Label>Address</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Role</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Primary skills</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Employer/optional</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>LinkedIn Profile URL</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Skype ID:</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Current Applicant Status: </Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Relocation: Yes/No </Form.Label>
              <Form.Row>
                <Col>
                  <Form.Check type="radio" label="Yes" />
                </Col>
                <Col>
                  <Form.Check type="radio" label="No" />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Tax terms: </Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Gender: </Form.Label>
              <Form.Row>
                <Col>
                  <Form.Check type="radio" label="Male" />
                </Col>
                <Col>
                  <Form.Check type="radio" label="Female" />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label>Source: </Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridUpload">
              <Form.Label>Upload Resume</Form.Label>
              <div className="file-upload">
                <input
                  type="file"
                  id="input-file-now-custom-2"
                  className="file-upload"
                  data-height="500"
                />
              </div>
            </Form.Group>
        
        </div>
        </div>
        </Form>
        <div >
          <Button className="btn-primary" type="submit" id="submit">
            Save
          </Button>
          <div>
          <Button className="btn-primary" type="submit" id="Reset">
            Reset
          </Button>
          </div>
          </div>
         </div>
         </div>
          </Container>
          </Container>
     
    );
  }
}

export default Form1;

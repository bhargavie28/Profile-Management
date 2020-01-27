import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Grid from "@material-ui/core/Grid";
import GridItem from "../Components/Grid/GridItem";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



import axios from "axios";
import "../App.css";
import UploadImage from "./UploadImage";
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeWorkPhoneNumber = this.onChangeWorkPhoneNumber.bind(this);
    this.onChangeHomePhoneNumber = this.onChangeHomePhoneNumber.bind(this);
    this.onChangeWorkPermit = this.onChangeWorkPermit.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangePreferredLocation = this.onChangePreferredLocation.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeEmployer = this.onChangeEmployer.bind(this);
    this.onChangeLinkedInUrl = this.onChangeLinkedInUrl.bind(this);
    this.onChangeSkypeID = this.onChangeSkypeID.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeRelocation = this.onChangeRelocation.bind(this);
    this.onChangeTaxterms = this.onChangeTaxterms.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangeResume = this.onChangeResume.bind(this);
    this.onChangeCurrentLocation = this.onChangeCurrentLocation.bind(this);



    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
     
      email: "",
      workphonenumber: "",
      homephonenumber: "",
      workpermit: "",
      dob: "",
      preferredlocation: "",
      address: "",
      role: "",
      employer: "",
      linkedinurl: "",
      skypeid: "",
      status: "",
      relocation: "",
      taxterms: "",
      gender: "",
      source: "",
      resume: "",
      currentlocation: ""
    };
  }

  
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
 
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeWorkPhoneNumber(e) {
    this.setState({ workphonenumber: e.target.value });
  }
  onChangeHomePhoneNumber(e) {
    this.setState({ homephonenumber: e.target.value });
  }
  onChangeWorkPermit(e) {
    this.setState({ workpermit: e.target.value });
  }
  onChangeDOB(e) {
    this.setState({ dob: e.target.value });
  }
  onChangePreferredLocation(e) {
    this.setState({ preferredlocation: e.target.value });
  }
  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }
  onChangeRole(e) {
    this.setState({ role: e.target.value });
  }
  onChangeEmployer(e) {
    this.setState({ employer: e.target.value });
  }
  onChangeLinkedInUrl(e) {
    this.setState({ linkedinurl: e.target.value });
  }
  onChangeSkypeID(e) {
    this.setState({ skypeid: e.target.value });
  }
  onChangeStatus(e) {
    this.setState({ status: e.target.value });
  }
  onChangeRelocation(e) {
    this.setState({ relocation: e.target.value });
  }
  onChangeTaxterms(e) {
    this.setState({ taxterms: e.target.value });
  }
  onChangeGender(e) {
    this.setState({ gender: e.target.value });
  }
  onChangeSource(e) {
    this.setState({ source: e.target.value });
  }
  onChangeResume(e) {
    this.setState({ resume: e.target.value });
  }
  onChangeCurrentLocation(e) {
    this.setState({ currentlocation: e.target.value });
  }
  onSubmit(e) {
    alert("User Saved");
    e.preventDefault();
    const profileObject = {
      name: this.state.name,
    
      workphonenumber: this.state.workphonenumber,
      homephonenumber: this.state.homephonenumber,
      email: this.state.email,
      workpermit: this.state.workpermit,
      dob: this.state.dob,
      preferredlocation: this.state.preferredlocation,
      currentlocation: this.state.currentlocation,
      address: this.state.address,
      role: this.state.role,
      primaryskills: this.state.primaryskills,
      employer: this.state.employer,
      linkedinurl: this.state.linkedinurl,
      skypeid: this.state.skypeid,
      status: this.state.status,
      relocation: this.state.relocation,
      taxterms: this.state.taxterms,
      gender: this.state.gender,
      source: this.state.source,
      resume: this.state.resume
    };
    axios
      .post("http://localhost:5000/api/user", profileObject)
      .then(res => console.log(res.data));
      

    
    this.setState({
      name: "",
      email: "",
      workphonenumber: "",
      homephonenumber: "",
      workpermit: "",
      dob: "",
      preferredlocation: "",
      address: "",
      role: "",
      employer: "",
      linkedinurl: "",
      skypeid: "",
      status: "",
      relocation: "",
      taxterms: "",
      gender: "",
      source: "",
      resume: "",
      currentlocation: ""
    });
  }

  state = {
    dob: ""
  };
  getDate() {
    var dob = { currentTime: new Date().toLocaleString() };

    this.setState({
      dob: dob
    });
  }


  render() {
    return (
      
      <Container>
        <Card>
        <Fragment>
          <Card>
          <h3 className="color">Personal Details</h3>
          </Card>
          {/* <Navbar >
            <Navbar.Brand > Personal Details</Navbar.Brand>
            <Nav className = "tab_container_heading" >
              <Nav.Link href="/Save">Save</Nav.Link>
              <Nav.Link href="/Reset">Reset</Nav.Link>
             
            </Nav>
           
          </Navbar>
          <br /> */}
        </Fragment>

        <Container className="container">
          <div class="form-group form-group-sm">
            <div class="row">
              <div className="col-sm-12">
                <Form>
                  <div class="row">
                    <div className="col-sm-6">
                      <Form.Group controlId="firstname">
                        <Form.Label>Applicant Name</Form.Label>
                        <Form.Control
                          placeholder="Full Name As Per Passport"
                          type="text"
                          value={this.state.name}
                          onChange={this.onChangeName}
                          className="form-control form-control-sm"
                        />
                      </Form.Group>
                    
                  
                      <Form.Group controlId="worknumber" className="textField">
                        <Form.Label>Work Phone number</Form.Label>
                        <Form.Control
                          value={this.state.workphonenumber}
                          onChange={this.onChangeWorkPhoneNumber}
                          className="form-control form-control-sm"
                        />
                      </Form.Group>
                      <Form.Group controlId="homenumber">
                        <Form.Label>Home Phone Number</Form.Label>
                        <Form.Control
                          value={this.state.homephonenumber}
                          onChange={this.onChangeHomePhoneNumber}
                          className="form-control form-control-sm"
                        />
                      </Form.Group>
                      <Form.Group controlId="formGridAddress1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          placeholder="abc@gmail.com"
                          className="form-control form-control-sm"
                        />
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Work Permit</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.workpermit}
                          onSelect={this.onChangeWorkPermit}


                        >
                          <option></option>
                          <option>H1</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Current Location</Form.Label>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"

                        >
                          <option>Choose...</option>
                          <option>Hyderabad</option>
                        </Form.Control>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                        >
                          <option>Choose...</option>
                          <option>Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Date of Birth</Form.Label>
                        <DatePicker
              selected={ this.state.dob }
              onChange={ this.onChangeDOB }
              name="startDate"
              dateFormat="MM/DD/YYYY"
            />
                   
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Preferred Location</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                        >
                          <option>Choose...</option>
                          <option>Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-sm-6">
                      <Form.Group controlId="formGridState">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className="form-control form-control-sm"></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Role</Form.Label>
                        <Form.Control className="form-control form-control-sm"></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Primary skills</Form.Label>
                        <Form.Control className="form-control form-control-sm"></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Employer/optional</Form.Label>
                        <Form.Control className="form-control form-control-sm"></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>LinkedIn Profile URL</Form.Label>
                        <Form.Control className="form-control form-control-sm"></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Skype ID:</Form.Label>
                        <Form.Control className="form-control form-control-sm"></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Current Applicant Status: </Form.Label>
                        <Form.Control className="form-control form-control-sm"></Form.Control>
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
                        <Form.Control className="form-control form-control-sm"></Form.Control>
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
                        <Form.Control className="form-control form-control-sm"></Form.Control>
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
                <div>
                  <Button className="btn-primary" type="submit" id="submit" onClick = {this.onSubmit}>
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
          </div>
        </Container>
        </Card>
      </Container>
      
    );
  }
}

export default Form1;

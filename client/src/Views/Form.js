import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import DatePicker from '../Components/Grid/DatePicker'




import axios from "axios";
import "../App.css";
import { Divider } from "@material-ui/core";
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeWorkPhoneNumber = this.onChangeWorkPhoneNumber.bind(this);
    this.onChangeHomePhoneNumber = this.onChangeHomePhoneNumber.bind(this);
    this.onChangeWorkPermit = this.onChangeWorkPermit.bind(this);
    this.onChangePreferredLocation = this.onChangePreferredLocation.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangePrimarySkills = this.onChangePrimarySkills.bind(this);
    this.onChangeEmployer = this.onChangeEmployer.bind(this);
    this.onChangeLinkedInUrl = this.onChangeLinkedInUrl.bind(this);
    this.onChangeSkypeID = this.onChangeSkypeID.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeRelocation = this.onChangeRelocation.bind(this);
    this.onChangeTaxterms = this.onChangeTaxterms.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangeResume = this.onChangeResume.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);



    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
     
      email: "",
      workphonenumber: "",
      homephonenumber: "",
      workpermit: "",
      preferredlocation: "",
      state: '',
      city: '',
      address:'',
      role: "",
      primaryskills: [''],
      employer: "",
      linkedinurl: "",
      skypeid: "",
      status: "",
      relocation: "",
      taxterms: "",
      gender: "",
      source: "",
      resume: "",
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
 
  onChangePreferredLocation(e) {
    this.setState({ preferredlocation: e.target.value });
  }
  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }
  onChangeRole(e) {
    this.setState({ role: e.target.value });
  }
  onChangePrimarySkills(e) {
    console.log(e.target.value);
    this.setState({ primaryskills: e.target.value });
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
    e.preventDefault();
    this.setState({ relocation: e.target.value });
  }
  onChangeTaxterms(e) {
    this.setState({ taxterms: e.target.value });
  }
  onChangeGender(e) {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({ gender: e.target.value });
  }
  onChangeSource(e) {
    this.setState({ source: e.target.value });
  }
  onChangeResume(e) {
    this.setState({ resume:  e.target.files[0],
      loaded: 0,
    });
  }
  onChangeState(e) {
    this.setState({ state: e.target.value });
  }
  onChangeCity(e) {
    this.setState({ city: e.target.value });
  }
  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
  
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
      preferredlocation: this.state.preferredlocation,
      state: this.state.state,
      city: this.state.city,
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
    console.log({profileObject});
    axios
      .post("http://localhost:5000/api/user", profileObject)
      .then(res => console.log(res.data));
      console.log('axios connected')
    
    
    this.setState({
      name: "",
      email: "",
      workphonenumber: "",
      homephonenumber: "",
      workpermit: "",
      preferredlocation: "",
      address: "",
      role: "",
      primaryskills:[''],
      employer: "",
      linkedinurl: "",
      skypeid: "",
      status: "",
      relocation: "",
      taxterms: "",
      gender: "",
      source: "",
      resume: "",
      state: '',
      city: ''
    });
  }

 
  

  render() {
    return (
      
      <Container>
        <Fragment>
          <h3 className="color">Personal Details</h3>
          <Divider />
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
                          onChange={this.onChangeWorkPermit}>
                          <option></option>
                          <option>H1</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Current Location</Form.Label>
                     
                      <Form.Group controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.state}
                          onChange= {this.onChangeState}
                        >
                          <option>Choose...</option>
                          <option>Telangana</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGridState">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          vlaue = {this.state.city}
                          onChange= {this.onChangeCity}
                        >
                          <option>Choose...</option>
                          <option>Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Date of Birth</Form.Label>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Preferred Location</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value= {this.state.preferredlocation}
                          onChange= {this.onChangePreferredLocation}
                        >
                          <option>Choose...</option>
                          <option>Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                        className="form-control form-control-sm"
                        value= {this.state.address}
                        onChange= {this.onChangeAddress}
                        ></Form.Control>
                      </Form.Group>
                     
                    </div>
                    <div className="col-sm-6">
                    <Form.Group controlId="formGridState">
                        <Form.Label>Role</Form.Label>
                        <Form.Control 
                         as="select"
                        className="form-control form-control-sm"
                        value = {this.state.role}
                        onChange= {this.onChangeRole}
                        >
                           <option>Select</option>
                          <option>Software Developer</option>
                          <option>Quality Analyst</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Primary skills</Form.Label>
                        <Form.Control className="form-control form-control-sm"
                        value= {this.state.primaryskills}
                        onChange= {this.onChangePrimarySkills}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control className="form-control form-control-sm"
                        value= {this.state.employer}
                        onChange= {this.onChangeEmployer}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>LinkedIn Profile URL</Form.Label>
                        <Form.Control 
                        
                        className="form-control form-control-sm"
                        value= {this.state.linkedinurl}
                        onChange= {this.onChangeLinkedInUrl}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Skype ID</Form.Label>
                        <Form.Control className="form-control form-control-sm"
                          value= {this.state.skypeid}
                          onChange= {this.onChangeSkypeID}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Current Applicant Status </Form.Label>
                        <Form.Control 
                        as= "select"
                        className="form-control form-control-sm"
                        value= {this.state.status}
                        onChange= {this.onChangeStatus}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Relocation</Form.Label>
                       
                        <Form.Row>
                          <Col>
                            <Form.Check type="radio" value ="Yes" checked={this.state.relocation === "Yes"} onChange= {this.onChangeRelocation}  />
                            Yes
                          </Col>
                          <Col>
                            <Form.Check type="radio" value ="No" checked={this.state.relocation === "No"} onChange= {this.onChangeRelocation} />
                            No
                          </Col>
                        </Form.Row>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Tax terms </Form.Label>
                        <Form.Control className="form-control form-control-sm"></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Gender </Form.Label>
                        <Form.Row>
                          <Col>
                            <Form.Check type="radio" value ="Female" checked={this.state.gender === "Female"}    onChange= {this.onChangeGender}/>
                            Female
                          </Col>
                          <Col>
                            <Form.Check type="radio" value ="Male" checked={this.state.gender === "Male"}  onChange= {this.onChangeGender}/>
                            Male
                          </Col>
                        </Form.Row>
                      </Form.Group>
                      <Form.Group controlId="formGridState">
                        <Form.Label>Source </Form.Label>
                        <Form.Control 
                        as = "select"
                        className="form-control form-control-sm"
                        value= {this.state.source}
                        onChange = {this.onChangeSource}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridUpload">
                        <Form.Label>Upload Resume</Form.Label>
                        <div className="file-upload">
                        <Button onClick= {this.onClickHandler}>Upload</Button>
                          <input
                            type="file"
                            id="input-file-now-custom-2"
                            className="file-upload"
                            data-height="500"
                            value = {this.state.resume}
                            onChange={this.onChangeResume}
                           
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
      </Container>
      
    );
  }
}

export default Form1;

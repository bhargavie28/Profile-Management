import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import DatePicker from 'react-datepicker';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Spinner from './Spinner';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {NavLink} from 'react-router-dom';
import UploadImage from './UploadImage';
import SimpleReactValidator from 'simple-react-validator';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';




import axios from "axios";
import "../App.css";
import { Divider } from "@material-ui/core";
class Form1 extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDOB= this.onChangeDOB.bind(this);
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
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
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
      profileImg: "",
      dob: moment(),
      isLoading: false
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
  onFileChange(e) {
    this.setState({ resume:  e.target.files[0],
    });
  }
  onChangeState(e) {
    this.setState({ state: e.target.value });
  }
  onChangeCity(e) {
    this.setState({ city: e.target.value });
  }
  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] })
}

onChangeDOB(date) {
  this.setState({
    dob: date
  })
}
onNameChange(e) {
    this.setState({ name: e.target.value })
}
  
  
  onSubmit(e) {
    alert("User Saved");
    e.preventDefault();
    // const profileObject = {
    //   name: this.state.name,
    //   workphonenumber: this.state.workphonenumber,
    //   homephonenumber: this.state.homephonenumber,
    //   email: this.state.email,
    //   workpermit: this.state.workpermit,
    //   preferredlocation: this.state.preferredlocation,
    //   state: this.state.state,
    //   city: this.state.city,
    //   address: this.state.address,
    //   role: this.state.role,
    //   primaryskills: this.state.primaryskills,
    //   employer: this.state.employer,
    //   linkedinurl: this.state.linkedinurl,
    //   skypeid: this.state.skypeid,
    //   status: this.state.status,
    //   relocation: this.state.relocation,
    //   taxterms: this.state.taxterms,
    //   gender: this.state.gender,
    //   source: this.state.source,
    //   profileImg: this.state.resume
    // };
    // console.log({profileObject});

    const data = new FormData() 
    data.append('profileImg', this.state.profileImg)
    data.append('name', this.state.name)
    data.append('email', this.state.email)
    data.append('workphonenumber', this.state.workphonenumber)
    data.append('homephonenumber', this.state.homephonenumber)
    data.append('workpermit', this.state.workpermit)
    data.append('preferredlocation', this.state.preferredlocation)
    data.append('state', this.state.state)
    data.append('city', this.state.city)
    data.append('address', this.state.address)
    data.append('role', this.state.role)
    data.append('primaryskills', this.state.primaryskills)
    data.append('employer', this.state.employer)
    data.append('linkedinurl', this.state.linkedinurl)
    data.append('skypeid', this.state.skypeid)
    data.append('status', this.state.status)
    data.append('relocation', this.state.relocation)
    data.append('taxterms', this.state.taxterms)
    data.append('gender', this.state.gender)
    data.append('source', this.state.source)
    data.append('dob', this.state.dob)


    axios
      .post(`http://localhost:5000/api/user`, data)
      .then(res => console.log(res));
    
  }
  onSubmit() {
    if (this.validator.allValid()) {
      alert('You submitted the form and stuff!');
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  render() {
    return (
      this.state.isLoading ?( <Spinner />) : 
      
     ( <Container>
        <Fragment  className= "back">
        <NavLink to = "/profilelist"><KeyboardBackspaceIcon /></NavLink>
          <h3 className="color">Personal Details</h3>
          <Divider />
        
        </Fragment>

        <Container className="container">
          <div class="form-group form-group-sm">
            <div class="row">
              <div className="col-sm-12">
                <Form >
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
                            required                         
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
                      <Form.Group>
                      <div className="form-group">
            <label> Date of Birth</label>
            <DatePicker
              selected={ this.state.dob }
              onChange={ this.onChangeDOB }
              name="startDate"
              dateFormat="MM/DD/YYYY"
            />
          </div>
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
                      <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>                    
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
      </Container>)
      
    );
  }
}

export default Form1;
import React, { Component, Fragment } from "react";
import {NavLink} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import DatePicker from '../Components/Grid/DatePicker';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import UploadImage from './UploadImage';
import SimpleReactValidator from 'simple-react-validator';



import axios from "axios";
import "../App.css";
import { Divider } from "@material-ui/core";
class EditApplication extends Component {
  

  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();

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
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onFileChange = this.onFileChange.bind(this);



    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      _id: 0,
      name: "",
      profileImg: '',
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
  componentDidMount(){
    var id = this.props.location.pathname.split('/').pop();
    axios.get(`http://localhost:5000/api/user/` + id)
    .then(res=> {
      
      this.setState({
        _id:id,
        name: res.data.name,
        email: res.data.email,
        workphonenumber: res.data.workphonenumber,
        homephonenumber: res.data.homephonenumber,
        workpermit: res.data.workpermit,
        preferredlocation: res.data.preferredlocation,
        address: res.data.address,
        role: res.data.role,
        primaryskills: res.data.primaryskills,
        employer: res.data.employer,
        linkedinurl: res.data.linkedinurl,
        skypeid: res.data.skypeid,
        status: res.data.status,
        relocation: res.data.relocation,
        taxterms: res.data.taxterms,
        gender: res.data.gender,
        source: res.data.source,
        resume: res.data.resume,
        state: res.data.state,
        city: res.data.city,
        profileImg: res.data.profileImg

      });
     
    })
    .catch((error)=> {
      console.log(error);
    })

    
  };

  
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
  
  onChangeState(e) {
    this.setState({ state: e.target.value });
  }
  onChangeCity(e) {
    this.setState({ city: e.target.value });
  }
  onClickHandler(e) {

    alert('File Uploaded')
    }
    onFileChange(e) {
      this.setState({ profileImg: e.target.files[0] })
  }
  onSubmit(e) {
    console.log(this.state._id)
    alert("User Updated");
    e.preventDefault();
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
    axios.post('http://localhost:5000/api/user/'+ this.state._id, data)
      .then((res) => {
        
        console.log('Profile successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/profilelist')
  }
    



 
  

  render() {
    
    return (
      
      <Container>
        <Fragment className= "back" >
        <NavLink to = "/profilelist"><KeyboardBackspaceIcon /></NavLink>
          <h3 className="color">Personal Details</h3>
          <Divider />
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
                            required                         
                        />

                      </Form.Group>
                    
                  
                      <Form.Group controlId="worknumber" className="textField">
                        <Form.Label>Work Phone number</Form.Label>
                        <Form.Control
                          value={this.state.workphonenumber}
                          onChange={this.onChangeWorkPhoneNumber}
                          className="form-control form-control-sm"
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="homenumber">
                        <Form.Label>Home Phone Number</Form.Label>
                        <Form.Control
                          value={this.state.homephonenumber}
                          onChange={this.onChangeHomePhoneNumber}
                          className="form-control form-control-sm"
                          required
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
                          required
                        />
                      </Form.Group>
                      {/* <Form.Group>
                      <div className="form-group">
            <label> Date of Birth</label>
            <DatePicker
              selected={ this.state.dob }
              onChange={ this.onChangeDOB }
              name="startDate"
              dateFormat="MM/DD/YYYY"
            />
          </div>
                      </Form.Group> */}
                      <Form.Group controlId="formGridWorkPermit">
                        <Form.Label>Work Permit</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.workpermit}
                          onChange={this.onChangeWorkPermit}
                          required>

                          <option>Select</option>
                          <option>H1-B</option>
                          <option>B1</option>
                          <option>Citizen</option>
                          <option>GC</option>
                          <option>GC-EAD</option>
                          <option>L1-A</option>
                          <option>L1-B</option>
                          <option>L2-EAD</option>
                          <option>OPT-EAD</option>
                          <option>TN Visa</option>

                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridCurrentLocation">
                        <Form.Label>Current Location</Form.Label>
                     
                      <Form.Group controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.state}
                          onChange= {this.onChangeState}
                          required
                        >
                          <option>Choose...</option>
                          <option>Telangana</option>
                        </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          vlaue = {this.state.city}
                          onChange= {this.onChangeCity}
                          required
                        >
                          <option>Choose...</option>
                          <option>Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                      </Form.Group>
                      {/* <Form.Group controlId="formGridState">
                        <Form.Label>Date of Birth</Form.Label>
                      </Form.Group> */}
                      <Form.Group controlId="formGridPreferredLocation">
                        <Form.Label>Preferred Location</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value= {this.state.preferredlocation}
                          onChange= {this.onChangePreferredLocation}
                          required
                        >
                          <option>Choose...</option>
                          <option>Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                        className="form-control form-control-sm"
                        value= {this.state.address}
                        onChange= {this.onChangeAddress}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control 
                         as="select"
                        className="form-control form-control-sm"
                        value = {this.state.role}
                        onChange= {this.onChangeRole}
                        required
                        >
                           <option>Select</option>
                          <option>Software Developer</option>
                          <option>Quality Analyst</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridPrimarySkills">
                        <Form.Label>Primary skills</Form.Label>
                        <Form.Control className="form-control form-control-sm"
                        value= {this.state.primaryskills}
                        onChange= {this.onChangePrimarySkills}
                        required
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridEmployer">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control className="form-control form-control-sm"
                        value= {this.state.employer}
                        onChange= {this.onChangeEmployer}
                        ></Form.Control>
                      </Form.Group>
                     
                    </div>
                    <div className="col-sm-6">
                   
                      <Form.Group controlId="formGridLinkedIn">
                        <Form.Label>LinkedIn Profile URL</Form.Label>
                        <Form.Control 
                        
                        className="form-control form-control-sm"
                        value= {this.state.linkedinurl}
                        onChange= {this.onChangeLinkedInUrl}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridSkypeId">
                        <Form.Label>Skype ID</Form.Label>
                        <Form.Control className="form-control form-control-sm"
                          value= {this.state.skypeid}
                          onChange= {this.onChangeSkypeID}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridStatus">
                        <Form.Label>Current Applicant Status </Form.Label>
                        <Form.Control 
                        as= "select"
                        className="form-control form-control-sm"
                        value= {this.state.status}
                        onChange= {this.onChangeStatus}
                        required
                        >
                           <option>Select</option>
                          <option>Available</option>
                          <option>In Project</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridRelocation">
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
                      <Form.Group controlId="formGridTaxTerms">
                        <Form.Label>Tax terms </Form.Label>
                        <Form.Control
                         as = "select"
                        className="form-control form-control-sm"
                        value= {this.state.taxterms}
                        onChange = {this.onChangeTaxterms}
                        required
                        >
                          <option>Select</option>
                           <option>1099</option>
                          <option>C2C</option>
                          <option>C2H</option>
                          <option>Full Time</option>
                          <option>Intern</option>
                          <option>Part Time</option>
                          <option>Seasonal</option>
                          <option>W-2</option>
                          <option>Other</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridGender">
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
                      <Form.Group controlId="formGridSource">
                        <Form.Label>Source </Form.Label>
                        <Form.Control 
                        as = "select"
                        className="form-control form-control-sm"
                        value= {this.state.source}
                        onChange = {this.onChangeSource}
                        required
                        >
                           <option>Select</option>
                          <option>Dice</option>
                          <option>Monster</option>
                          <option>Career Builder</option>
                          <option>LinkedIn</option>
                          <option>Indeed</option>
                          <option>Referral</option>
                          <option>Other</option>

                        </Form.Control>
                      </Form.Group>
                      <Form.Label>Documents</Form.Label>
                      <Form.Group> 
                       
                        <Form.Label>Resume</Form.Label>
                      <div className="form-group" required>
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        {/* <div className="form-group">
                            <button className="btn btn-primary" >Upload</button>
                        </div>   */}

                        {/* <Form.Label>Education</Form.Label>    
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>    
                        <Form.Label>Visa</Form.Label>    
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>    */}
                        </Form.Group>           
                          </div>
                  </div>
                 
                </Form>
                <div>
                <Button variant="danger" size="lg" block="block" type="submit" onClick={this.onSubmit}>
          Update
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

export default EditApplication;

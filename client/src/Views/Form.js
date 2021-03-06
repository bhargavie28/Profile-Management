import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Spinner from "./Spinner";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { NavLink, Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../App.css";
import { Divider } from "@material-ui/core";
import ProfileList from "./ProfileList";
import SelectUSState from "react-select-us-states";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Button } from "react-bootstrap";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeWorkPhoneNumber = this.onChangeWorkPhoneNumber.bind(this);
    this.onChangeHomePhoneNumber = this.onChangeHomePhoneNumber.bind(this);
    this.onChangeWorkPermit = this.onChangeWorkPermit.bind(this);
    this.onChangePreferredLocation = this.onChangePreferredLocation.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangePrimarySkills = this.onChangePrimarySkills.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
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
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeadd = this.handleChangeadd.bind(this);
    this.handleSelect = this.handleSelect.bind(this);



    this.state = {
      name: "",
      email: "",
      workphonenumber: "",
      homephonenumber: "",
      workpermit: "",
      preferredlocation: "",
      state: "",
      city: "",
      address: "",
      role: "",
      primaryskills: [],
      rating: "",
      employer: "",
      linkedinurl: "",
      skypeid: "",
      status: "",
      relocation: "",
      taxterms: "",
      gender: "",
      source: "",
      profileImg: "",
      dob: "",
      isLoading: false,
      success: false,
      error: false,
      tags: [],
      tag: "",
      country: "",
      region: ""
    };
  }

  handleChangeadd = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
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
  onChangeRating(e) {
    this.setState({ rating: e.target.value });
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
    this.setState(Date.now);
    console.log(Date.now);
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
    this.setState({ resume: e.target.files[0] });
  }
  // onChangeState(e) {
  //   this.setState({ state: e.target.value });
  // }

  onChangeState(newValue) {
    console.log("this is the State code:" + newValue);
  }
  onChangeCity(e) {
    this.setState({ city: e.target.value });
  }
  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] });
  }
  onChangeDOB(e) {
    this.setState({ dob: e.target.value });
  }
  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onClickHandler(e) {
    alert("File Uploaded");
  }
  handleChange(tags) {
    this.setState({ tags });
    console.log("Tags", tags);
  }

  handleChangeInput(tag) {
    this.setState({ tag });
    console.log("Tag", tag);
  }

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("profileImg", this.state.profileImg);
    data.append("name", this.state.name);
    data.append("email", this.state.email);
    data.append("workphonenumber", this.state.workphonenumber);
    data.append("homephonenumber", this.state.homephonenumber);
    data.append("workpermit", this.state.workpermit);
    data.append("preferredlocation", this.state.preferredlocation);
    data.append("state", this.state.state);
    data.append("city", this.state.city);
    data.append("address", this.state.address);
    data.append("role", this.state.role);
    data.append("primaryskills", this.state.primaryskills);
    data.append("rating", this.state.rating);
    data.append("employer", this.state.employer);
    data.append("linkedinurl", this.state.linkedinurl);
    data.append("skypeid", this.state.skypeid);
    data.append("status", this.state.status);
    data.append("relocation", this.state.relocation);
    data.append("taxterms", this.state.taxterms);
    data.append("gender", this.state.gender);
    data.append("source", this.state.source);
    data.append("dob", this.state.dob);
    data.append("tags", this.state.tags);
    data.append("tag", this.state.tag);
    axios
      .post(`http://localhost:5000/api/user`, data)
      .then(this.onSuccess())
      .catch(error => {
        console.log(error);
      });
  }
  onSuccess() {
    console.log("INSUCCEss");
    this.props.history.push("/success");
  }
  onFailure() {
    console.log("INSUCCEss");
    this.props.history.push("/error");
  }

  render() {
    const { country, region } = this.state;

    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <Container>
        <Fragment className="back">
          <NavLink to="/table">
            <KeyboardBackspaceIcon />
          </NavLink>
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

                      <Form.Group controlId="formGridWorkPermit">
                        <Form.Label>Work Permit</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.workpermit}
                          onChange={this.onChangeWorkPermit}
                          required
                        >
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
                        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChangeadd}
        onSelect={this.handleSelect}
        //  googleCallbackName="initMap"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
                      </Form.Group>
                      {/* <Form.Group controlId="formGridState">
                        <Form.Label>Date of Birth</Form.Label>
                      </Form.Group> */}
                      <Form.Group controlId="formGridPreferredLocation">
                        <Form.Label>Preferred Location</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.preferredlocation}
                          onChange={this.onChangePreferredLocation}
                          required
                        >
                          <option>Choose...</option>
                          <option>Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGriddob">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          className="form-control form-control-sm"
                          placeholder="DD/MM/YYYY"
                          value={this.state.dob}
                          onChange={this.onChangeDOB}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          className="form-control form-control-sm"
                          value={this.state.address}
                          onChange={this.onChangeAddress}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.role}
                          onChange={this.onChangeRole}
                          required
                        >
                          <option>Select</option>
                          <option>Software Developer</option>
                          <option>Quality Analyst</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="col-sm-6">
                      <Form.Group controlId="formGridEmployer">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control
                          className="form-control form-control-sm"
                          value={this.state.employer}
                          onChange={this.onChangeEmployer}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridLinkedIn">
                        <Form.Label>LinkedIn Profile URL</Form.Label>
                        <Form.Control
                          className="form-control form-control-sm"
                          value={this.state.linkedinurl}
                          onChange={this.onChangeLinkedInUrl}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridSkypeId">
                        <Form.Label>Skype ID</Form.Label>
                        <Form.Control
                          className="form-control form-control-sm"
                          value={this.state.skypeid}
                          onChange={this.onChangeSkypeID}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGridStatus">
                        <Form.Label>Current Applicant Status </Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.status}
                          onChange={this.onChangeStatus}
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
                            <Form.Check
                              type="radio"
                              value="Yes"
                              checked={this.state.relocation === "Yes"}
                              onChange={this.onChangeRelocation}
                            />
                            Yes
                          </Col>
                          <Col>
                            <Form.Check
                              type="radio"
                              value="No"
                              checked={this.state.relocation === "No"}
                              onChange={this.onChangeRelocation}
                            />
                            No
                          </Col>
                        </Form.Row>
                      </Form.Group>

                      <Form.Group controlId="formGridTaxTerms">
                        <Form.Label>Tax terms </Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.taxterms}
                          onChange={this.onChangeTaxterms}
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
                            <Form.Check
                              type="radio"
                              value="Female"
                              checked={this.state.gender === "Female"}
                              onChange={this.onChangeGender}
                            />
                            Female
                          </Col>
                          <Col>
                            <Form.Check
                              type="radio"
                              value="Male"
                              checked={this.state.gender === "Male"}
                              onChange={this.onChangeGender}
                            />
                            Male
                          </Col>
                        </Form.Row>
                      </Form.Group>
                      <Form.Group controlId="formGridSource">
                        <Form.Label>Source </Form.Label>
                        <Form.Control
                          as="select"
                          className="form-control form-control-sm"
                          value={this.state.source}
                          onChange={this.onChangeSource}
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
                      <Form.Group controlId="formGridPrimarySkills">
                        <Form.Label>
                          <h6>SkillSet</h6>
                        </Form.Label>

                        <Form.Row>
                          <TagsInput
                            value={this.state.tags}
                            onChange={this.handleChange}
                            inputValue={this.state.tag}
                            onChangeInput={this.handleChangeInput}
                          />
                          <Col>
                            {/* <Form.Label>Rating</Form.Label>
                          <Form.Control 
                           className="form-control form-control-sm"
                           controlId="formGridRating"
                           value= {this.state.rating}
                           onChange= {this.onChangeRating}
                           placeholder= "on a scale of 5"
                           required
                           ></Form.Control> */}
                          </Col>
                        </Form.Row>
                      </Form.Group>
                      <Form.Label>
                        <h6>Documents</h6>
                      </Form.Label>
                      <Form.Group>
                        <Form.Label>Resume</Form.Label>
                        <div className="form-group" required>
                          <input type="file" onChange={this.onFileChange} />
                        </div>

                        {/* <Form.Label>Education</Form.Label>    
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <Form.Label>Visa</Form.Label>    
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div> */}
                      </Form.Group>
                    </div>
                  </div>
                  {/* <div className="form-group" style= {{justifyContent: "center"}}>
                            <button className="btn btn-primary" type="submit" alignSelf="center" onSubmit={this.onSubmit}>Submit</button>
                        </div>
   */}
                </Form>
                <div>
                  {/* <div className="form-group">
                            <button className="btn btn-primary" type="submit" >Submit</button>
                        </div> */}
                  {/* <div>
                    <Button className="btn-primary" type="submit" id="Reset">
                      Reset
                    </Button>
                  </div> */}
                  <Button
                    variant="success"
                    size="lg"
                    block="block"
                    type="submit"
                    onClick={this.onSubmit}
                  >
                    Submit
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
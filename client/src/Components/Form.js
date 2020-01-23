import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import '../App.css';
class Form1 extends Component {
  constructor (props){
   super(props);
   this.onChangeCandidateName = this.onChangeCandidateName.bind(this);
   this.onChangeEmail = this.onChangeEmail.bind(this);
   this.onChangeClientName = this.onChangeClientName.bind(this);
   this.onChangeCurrentLocation = this.onChangeCurrentLocation.bind(this);
 

   this.onSubmit = this.onSubmit.bind(this);
   this.state = {
     candidatename: '',
     email: '',
     clientname: '',
     currentlocation: ''
 


   }
  }
  onChangeCandidateName(e) {
    this.setState({ candidatename: e.target.value })
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeClientName(e) {
    this.setState({ clientname: e.target.value })
  }
  onChangeCurrentLocation(e) {
    this.setState({ currentlocation: e.target.value })
  }
  onSubmit(e) {
    alert('User Saved');
    e.preventDefault()
    const profileObject = {
      candidatename: this.state.candidatename,
      email: this.state.email,
      clientname: this.state.clientname,
      currentlocation: this.state.currentlocation

    };
    axios.post('http://localhost:5000/api/user', profileObject)
      .then(res => console.log(res.data));
      this.setState({ candidatename: '', email: '', clientname:'', currentlocation:''  })
  }

  
  render() {
  return (
        <Container>
<Form className= "form" onSubmit={this.onSubmit}>
<Form.Group controlId="candidatename">
    <Form.Label>Candidate Name</Form.Label>
    <Form.Control placeholder="Enter Full Name" 
    type="text"
    value={this.state.candidatename}
    onChange={this.onChangeCandidateName} />
  </Form.Group>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control
     type="email"
     value={this.state.email}
     onChange={this.onChangeEmail}
     placeholder="abc@gmail.com" />
  </Form.Group>
  <Form.Group controlId="formGridAddress2">
    <Form.Label>Client Name</Form.Label>
    <Form.Control
     type="text"
     value={this.state.clientname}
     onChange={this.onChangeClientName}
    placeholder="Client Name" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Current Location</Form.Label>
      <Form.Control
      value={this.state.currentlocation}
     onChange={this.onChangeCurrentLocation}
     >
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Preferred Location</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>Hyderabad</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
<Form.Group controlId="formGridZip">
    <Form.Label>Billing</Form.Label>
    <Form.Control placeholder="In Rupees"

    />
    </Form.Group>
   
 
    <Form.Row>
    <Form.Group as={Col} controlId="formGridSkill">
      <Form.Label>Skill Set</Form.Label>
      <Form.Control as="select">
        <option>Java</option>
        <option>Angular</option>
        <option>Node Js</option>
      </Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridExperience">
      <Form.Label>Years of Experience</Form.Label>
      <Form.Control as="select">
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridProficiency">
      <Form.Label>Profiency</Form.Label>
      <Form.Control as="select">
        <option>Advanced</option>
        <option>Intermediate</option>
        <option>Novice</option>
      </Form.Control>
    </Form.Group>
    </Form.Row>
    <Form.Group controlId="formGridUpload">
    <Form.Label>Upload Resume</Form.Label>
   <div className="file-upload">
   <input type="file" id="input-file-now-custom-2" className="file-upload"
  data-height="500" />
  </div>
  </Form.Group>
  <div className = "wrapper"> 
<Button className = "btn-primary" type="submit" id= "submit" >
    Submit
  </Button>
  </div>
</Form>

</Container>
    );
}
}
    
export default Form1;







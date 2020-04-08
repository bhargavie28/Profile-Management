import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import DatePicker from "react-date-picker";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import UploadImage from "./UploadImage";
import SimpleReactValidator from "simple-react-validator";
import SelectUSState from "react-select-us-states";

import axios from "axios";
import "../App.css";
import { Divider } from "@material-ui/core";

export default class View extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     _id: 0,
  //     name: "",
  //     profileImg: "",
  //     email: "",
  //     workphonenumber: "",
  //     homephonenumber: "",
  //     workpermit: "",
  //     preferredlocation: "",
  //     state: "",
  //     city: "",
  //     address: "",
  //     role: "",
  //     primaryskills: [""],
  //     employer: "",
  //     linkedinurl: "",
  //     skypeid: "",
  //     status: "",
  //     relocation: "",
  //     taxterms: "",
  //     gender: "",
  //     source: "",
  //     resume: "",
  //     dob: "",
  //   };
  // }
  // componentDidMount() {
  //   console.log('TADAAA', this.props.id)
  //  // var id = this.props.location.pathname.split("/").pop();
  //   axios
  //     .get(`http://localhost:5000/api/user/${this.props.id}`)

  //     .then((res) => {
  //       this.setState({
  //         _id: res.data._id,
  //         name: res.data.name,
  //         dob: res.data.dob,
  //         email: res.data.email,
  //         workphonenumber: res.data.workphonenumber,
  //         homephonenumber: res.data.homephonenumber,
  //         workpermit: res.data.workpermit,
  //         preferredlocation: res.data.preferredlocation,
  //         address: res.data.address,
  //         role: res.data.role,
  //         primaryskills: res.data.primaryskills,
  //         employer: res.data.employer,
  //         linkedinurl: res.data.linkedinurl,
  //         skypeid: res.data.skypeid,
  //         status: res.data.status,
  //         relocation: res.data.relocation,
  //         taxterms: res.data.taxterms,
  //         gender: res.data.gender,
  //         source: res.data.source,
  //         resume: res.data.resume,
  //         state: res.data.state,
  //         city: res.data.city,
  //         profileImg: res.data.profileImg,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (<>
    <div className = "container">
        <div className="back">
          <NavLink to="/table">
            <KeyboardBackspaceIcon />
          </NavLink>
          <h3 className="color">Personal Details</h3>
          <Divider />
        </div>

            <div className = "container">
              <div className="col-sm-12">
                  <div class="row">
                    <div className="col-sm-6">
                      <div>Name : </div>
                      <div>Email : </div>
                      <div>Work Phone Number : </div>
                      <div>Home Phone Number : </div>
                      <div>Work Permit : </div>
                      <div>Current Location </div>
                      <div>Preferred Location : </div>
                      <div>Date Of Birth : </div>
                      <div>Address : </div>
                      <div>Role : </div>
                    </div>
                    <div className="col-sm-6">
                    <div>Skills : </div>
                    <div>Employer : </div>
                    <div>Linked In Profile Url : </div>
                    <div>Skype ID : </div> 
                    <div>Current Status : </div>
                    <div>Relocation : </div>
                    <div>Tax Terms : </div>
                    <div>Gender : </div>
                    <div>Source : </div>
                    <div>Resume : </div>
                    </div>
                  </div>
              </div>
            </div>
            </div>
        </>
    );
  }
}


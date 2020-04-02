import React, { Component, Button } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProfileTableRow from './ProfileTableRow';
import AddIcon from '../Components/Grid/AddIcon';
import Form1 from './Form';
import { MDBDataTable } from 'mdbreact';
import Spinner from './Spinner';
import CustomDropdown from "./DropDown";



class ProfileList extends Component 
{

    constructor(props) {
      super(props)
      this.state = {
        profiles: [],
        currentState: [],
        loading: true
      };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/user/')
          .then(res => {
            console.log(res.data)
            this.setState({
              profiles: res.data,
              loading: false,
              currentState: res.data

            });

          })
          .catch((error) => {
            console.log(error);
          })
      }

      workpermit = [];
      DataTable() {
        return this.state.currentState.map((res, i) => {
         this.workpermit = this.state.currentState.map(res=>{
           console.log('Workpermiit', res.workpermit)
           return res.workpermit
         })
          return <ProfileTableRow obj={res} key={i} />;
        });
      }

      WorkPermit() {
       return this.state.profiles.map(res=>res.workpermit)
      }

    
      handleOnClick = async (val) => {
        console.log('Val on click in profileList', val)
        const res = await axios.get(`http://localhost:5000/api/user/?workpermit=${val}`)
        console.log('Rs on clikc', res.data)
        this.setState({
          currentState: res.data,
          loading: false
        });
        
      }

      render() {


        {console.log('Profiules', this.state.profiles, this.workpermit)}
        return (
         
        <div className= "table">
          
        <AddIcon />
        {this.state.loading === true? <Spinner /> : 
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Applicant Name</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th><CustomDropdown name="Work Permit" values={this.WorkPermit()} handleOnClick={(val, key)=>this.handleOnClick(val)} /></th>
                <th>City</th>
                <th>Resume</th>
        <th>Skillset</th>
              


              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>}
        </div>
     
       );
      }
    }

    export default ProfileList;
import React, { Component, Button } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProfileTableRow from './ProfileTableRow';
import AddIcon from '../Components/Grid/AddIcon';
import Form1 from './Form';

class ProfileList extends Component 
{

    constructor(props) {
      super(props)
      this.state = {
        profiles: []
      };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/user/')
          .then(res => {
            console.log(res.data)
            this.setState({
              profiles: res.data
            });

          })
          .catch((error) => {
            console.log(error);
          })
      }
      DataTable() {
        return this.state.profiles.map((res, i) => {

          return <ProfileTableRow obj={res} key={i} />;
        });
      }

      render() {
        return (
         
        <div className= "table">
        <AddIcon />
          <Table striped bordered hover>
            <thead>
              <tr>
               
                <th>Applicant Name</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Work Authorization</th>
                <th>City</th>
              


              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
        </div>
     
       );
      }
    }

    export default ProfileList;
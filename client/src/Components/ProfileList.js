import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProfileTableRow from './ProfileTableRow';

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
        return (<div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Email</th>
                <th>Client Name</th>
                <th>Current Location</th>
              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
        </div>);
      }
    }

    export default ProfileList;
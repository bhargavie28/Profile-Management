import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProfileTableRow from './ProfileTableRow';
import AddIcon from '../Components/Grid/AddIcon';

class EditApplication extends Component 
{

    constructor(props) {
      super(props)
      this.state = {
        profiles: []
      };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/user/:id')
          .then(res => {
            this.setState({
              profiles: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
     

      render() {
        return (
         
       <Form1 />
     
       );
      }
    }

    export default DeleteApplication;
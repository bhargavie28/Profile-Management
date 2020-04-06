import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ProfileList from './ProfileList';



 class ProfileTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteProfile = this.deleteProfile.bind(this);

    }

    deleteProfile() {
        axios.delete('http://localhost:5000/api/user/' + this.props.obj._id)
            .then((res) => {
                console.log('Profile successfully deleted!')
                this.props.history.push('/profilelist')
                
                
            }).catch((error) => {
                console.log(error)
                alert(error)
            })
    }
    render() {
       
        return (
            
            <tr> 
                <td>{Math.round}</td>
                <td>{this.props.obj.name}</td>  
                <td>{this.props.obj.homephonenumber}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.workpermit}</td>
                <td>{this.props.obj.city}</td>
                <td> <a href= {this.props.obj.profileImg}>Download Profile</a>  
               
                </td>
                <td>{this.props.obj.primaryskills}</td>
                <td>
                    
             <Link to={"/editProfile/" + this.props.obj._id}>Edit</Link>
             

                </td>   
                <td>
                <Button onClick={this.deleteProfile} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}

export default ProfileTableRow;
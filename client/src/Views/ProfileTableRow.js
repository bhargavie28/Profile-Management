import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'



 class ProfileTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>  
                <td>{this.props.obj.homephonenumber}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.workpermit}</td>
                <td>{this.props.obj.city}</td>
                <td>
                <Link to="/editProfile">Edit</Link>

                </td>   
                <td>
                    
                </td>
            </tr>
        );
    }
}

export default ProfileTableRow;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

 class ProfileTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.candidatename}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.clientname}</td>
                <td>{this.props.obj.currentlocation}</td>

            </tr>
        );
    }
}

export default ProfileTableRow;
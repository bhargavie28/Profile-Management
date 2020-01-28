import React, { Component } from 'react';


 class ProfileTableRow extends Component {
    render() {
        return (
            <tr>
                 <td>1.</td>
                <td>{this.props.obj.name}</td>
               
                <td>{this.props.obj.homephonenumber}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.workpermit}</td>
                <td>{this.props.obj.dob}</td>
                <td>{this.props.obj.preferredlocation}</td>

            </tr>
        );
    }
}

export default ProfileTableRow;
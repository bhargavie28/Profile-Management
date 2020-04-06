import React, { Component, Fragment } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";



export default class Uploadfile extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);

        this.state = {
            profileImg: "",
            text: ''
        }
    }
    onFileChange(e) {
        this.setState({ resume:  e.target.files[0],
        });
    }
        onsubmit(e) {
            e.preventDefault();
            const data = new FormData() 
            data.append('profileImg', this.state.profileImg)

            axios
      .post(`http://localhost:5000/api/fileupload`, data)
      .then(res => {
          console.log('DATA', res)
          this.setState({text: res})
      })
      .catch(error => {console.log(error)})

        }

render(){
    return(
        <Form>
<Form.Label>Upload File</Form.Label>
                      <div className="form-group" required>
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" onSubmit={this.onSubmit}>Submit</button>
                        </div>
                        </Form>

    )
}

}
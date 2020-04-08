import React, { Component, Fragment } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Spinner from "./Spinner";



export default class UploadResume extends Component {
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            profileImg: "",
            loading: true
           
        }
    }
    onFileChange(e) {
        this.setState({ profileImg:  e.target.files[0],
        });
    }
    onSubmit(e) {
        const onSuccess =()=>{
            axios
            .get("http://localhost:5000/api/user/")
            .then((res) => {
              console.log('Data',res.data);
              this.setState({
                profiles: res.data,
                loading: false,
              });
            })
            .catch((error) => {
              console.log(error);
            });
            this.props.history.push('/resumetable')
        
        }
            console.log('entered')
            e.preventDefault();
            const data = new FormData() 
            data.append('profileImg', this.state.profileImg)
            console.log("DATA1",data)

            axios
      .post(`http://localhost:5000/api/user/fileupload`, data)
      .then(onSuccess)
      .catch(error => {console.log(error)})
     
        }
        onSucces(){
            axios
            .get("http://localhost:5000/api/user/")
            .then((res) => {
              console.log('Data',res.data);
              this.setState({
                profiles: res.data,
                loading: false,
              });
            })
            .catch((error) => {
              console.log(error);
            });
            this.props.history.push('/resumetable')
        
        }
        


render(){
    return(
       
        <Form onSubmit= {this.onSubmit}>
         
             <div>
<Form.Label><h5>Upload Resume </h5></Form.Label>
                      <div className="form-group" required>
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" onSubmit={this.onSubmit}>Submit</button>
                        </div>
                        </div>
                        </Form>

    )
}

}
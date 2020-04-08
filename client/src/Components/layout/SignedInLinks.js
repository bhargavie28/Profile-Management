import React from 'react'
import Nav from 'react-bootstrap/Nav';
import PrimarySearchAppBar from '../../Views/Search';


const SignedInLinks =() =>{
    return(
        <Nav  className = "mr-auto">
     <Nav.Link href="jobpostlist">JobPosting</Nav.Link>
     <Nav.Link href="table">Profiles</Nav.Link>
     {/* <Nav.Link href="signin"> SignOut </Nav.Link> */}
     {/* <Nav.Link> <PrimarySearchAppBar /> </Nav.Link> */}
     <Nav.Link href="form">AddProfile</Nav.Link>
     <Nav.Link href="uploadfile">BulkUpload</Nav.Link>
     <Nav.Link href="uploadResume">Xtractor</Nav.Link>
     <Nav.Link href="ResumeTable">Resumes</Nav.Link>




    </Nav>
    )
}

export default SignedInLinks ;
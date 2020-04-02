import React from 'react'
import Nav from 'react-bootstrap/Nav';


const SignedInLinks =() =>{
    return(
        <Nav  className = "mr-auto">
     <Nav.Link href="jobpostlist">JobPosting</Nav.Link>
     <Nav.Link href="profilelist">Applicants</Nav.Link>
     <Nav.Link href="signin"> SignOut </Nav.Link>
    </Nav>
    )
}

export default SignedInLinks ;
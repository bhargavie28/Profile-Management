
import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function Delete(props) {

 
   //  console.log('Delte props', props)
    return(
    <>
    <div style={{ flexDirection: "row" }}>
       <Link to = {`/view/${props.id}`}>
    <button style = {{color: 'green'}} >
      <i class="fas fa-eye"></i>
    </button>
    </Link> 

    <Link to={`/editProfile/${props.id}`}>
    <button style = {{color: 'blue'}}>
      <i class="fas fa-edit"></i>
    </button>
    </Link>

 
    <button style = {{color: 'red'}} onClick={()=>props.deleteProfile(props.id)}>
      <i class="fas fa-trash-alt"></i>
    </button>{" "}
  </div>
  </>
)
}


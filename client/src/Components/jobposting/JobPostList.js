import React, { Component, Fragment } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {NavLink} from 'react-router-dom';


class JobPostList extends Component {
    
    

   render() {
       return (
          <Fragment>
             <div align="right">  
             <NavLink to = "/createjob"><AddCircleIcon /></NavLink>
             </div>
             <div align='left'><p>job queue</p></div> 
            <div align='left'><p>closed job positions</p></div> 
        </Fragment>
       ) 
   }
}

export default JobPostList
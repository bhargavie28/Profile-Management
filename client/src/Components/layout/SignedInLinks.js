import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks =() =>{
    return(
     <ul className="right">
         <li> <NavLink to='/jobpostlist'></NavLink></li>
         <li> <NavLink to='/profilelist'></NavLink></li>
         <li> <NavLink to='/'>B</NavLink></li>
     </ul>
    )
}

export default SignedInLinks ;
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from "../../store/actions/authActions"


const SignedInLinks = (props) => {
    return (
        <ul className="navbar-nav">
            <li><NavLink to='/create' className="nav-link">New Project</NavLink></li>
            <li className="nav-link"><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="nav-link" id="logoIn">
                {props.profile.initials}
            </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
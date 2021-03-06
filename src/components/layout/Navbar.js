import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const  { auth, profile } = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
    return (
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
                <Link to='/' className="navbar-brand js-scroll-trigger">Project Tools </Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile

    }
}

export default connect(mapStateToProps)(Navbar);
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp} from "../../store/actions/authActions"

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return(
            <div className="container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <div className="group2">
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="group2">
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="group2">
                        <input type="email" id="email" onChange={this.handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="group2">
                        <input type="password" id="password" onChange={this.handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="group2">
                        <button className="button"> Sign Up</button>
                        <div className="center">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
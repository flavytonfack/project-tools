import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from "../../store/actions/authActions"
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return(
            <div className="container">
                    <form className="signin-form" onSubmit={this.handleSubmit}>
                        <h3>Sign In</h3>
                        <div className="group">
                            <input type="email" id="email" onChange={this.handleChange}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="group">
                            <input type="password" id="password" onChange={this.handleChange}/>
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="group">
                            <button className="button"> Login</button>
                            <div className="div-error-signIn">
                                { authError ? <p>{authError}</p> : null }

                            </div>
                        </div>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
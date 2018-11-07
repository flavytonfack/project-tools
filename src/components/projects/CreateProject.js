import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject} from "../../store/actions/projectActions";
import {Redirect} from "react-router-dom";

class CreateProject extends Component {
    state = {
        title: '',
        content: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="container">
                <form className="createproject-form" onSubmit={this.handleSubmit}>
                    <h3>Create new project</h3>
                    <div className="group">
                        <input type="text" id="title" onChange={this.handleChange}/>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="group">
                        <textarea id="content" rows="8" cols="64" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Project Content</label>
                    </div>

                    <div className="group">
                        <button className="button"> Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
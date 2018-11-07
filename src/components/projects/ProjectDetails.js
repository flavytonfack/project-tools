import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return (
        <div className="container">
            <div className="project-details">
                <h4>{ project.title }</h4>
                <p>{ project.content }</p>
                <span>Posted by { project.authorFirstName } { project.authorLastName}</span> <br/>
                <span>{moment(project.createdAt.toDate()).calendar()}</span>
            </div>
        </div>

        )
    } else {
        return (
            <div className="container">
                <p>Loading project ... </p>
            </div>

        )
    }
}


const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id]: null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);
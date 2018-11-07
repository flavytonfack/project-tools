import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose} from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const { projects, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col-md-8 dashboard-project">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col-md-4 dashboard-project-notification">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>

            </div>
        )
    }
}


const mapsStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }

}

export default compose(
    connect(mapsStateToProps),
    firestoreConnect([
        { collection: 'projects', orderedBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 6, orderedBy: ['time', 'desc']}
    ])
)(Dashboard);
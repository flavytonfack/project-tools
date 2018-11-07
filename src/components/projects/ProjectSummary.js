import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <div className="container">
            <div className="projectSummary">
                <h4>{project.title}</h4>
                <p>{project.content}</p>
                <span>Posted by {project.authorFirstName} {project.authorLastName}</span> <br/>
                <span>{moment(project.createdAt.toDate()).calendar()}</span> <br/>
                <br/>
            </div>
        </div>


    )
}

export default ProjectSummary;
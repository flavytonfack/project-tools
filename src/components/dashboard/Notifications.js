import React from 'react'
import moment from 'moment'


const Notifications = (props) => {
    const {notifications} = props;
    return(
        <div className="container">
            <ul className="notifications">
                <h2>Notifications</h2>
                { notifications && notifications.map(item => {
                    return (
                        <li key={item.id}>
                            <span>{item.user} </span>
                            <span>{item.content} </span>
                            <span>{moment(item.time.toDate()).fromNow()}</span>
                            <br/> <br/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Notifications;
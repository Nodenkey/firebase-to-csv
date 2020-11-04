import React from 'react';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from 'react-redux';
import DashboardItem from "./dashboard-item";
import {v4} from "uuid";



const DashboardList = ({details}) => {
    return (
        details ?
        details.slice().sort((a, b) => b.createdAt.seconds - a.createdAt.seconds).map((user, index) =>
            <DashboardItem key={v4()} name={user.fullName} email={user.email} interests={user.interest} social={user.social} profession={user.profession} num={index + 1}/>
        ) : <h2>Loading...</h2>
    );
}

const mapStateToProps = (state) => {
    // state refers to the general state of the rootReducer
    return {
        details: state.firestore.ordered.details,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
    {collection: 'details'}
    ])
)(DashboardList);

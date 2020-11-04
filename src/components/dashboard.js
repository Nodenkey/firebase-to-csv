import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFileCsv,
    faUserAlt,
    faEnvelopeOpen,
    faCode,
    faSuitcase,
    faLongArrowAltLeft,
    faDoorOpen,
} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import DashboardList from './dashboard-list';
import {Link, Redirect} from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from 'react-redux';
import {csvConverter} from "../utils/csvConverter";
import {download} from "../utils/dowloader";
import {signOut} from "../redux/actions/authActions";


function Dashboard({details, logout, auth}) {

    const makeExcel = (details) => {
        const csvData = csvConverter(details);
        download(csvData);
    }

    if(!auth.uid)  return <Redirect to="/admin"/>

    return (
        <div id="dashboard">
            <div className="buttons">
                <Link to="/">
                    <div style={{display: "flex", alignItems: "center", cursor: "pointer"}}>
                        <div style={{marginRight: "10px"}}>
                            <FontAwesomeIcon icon={faLongArrowAltLeft}/>
                        </div>
                        <p>Go home</p>
                    </div>
                </Link>
                <div onClick={logout}>
                    <div style={{display: "flex", alignItems: "center", cursor: "pointer"}}>
                        <div style={{marginRight: "10px"}}>
                            <FontAwesomeIcon icon={faDoorOpen}/>
                        </div>
                        <p>Log out</p>
                    </div>
                </div>
                <button onClick={() => makeExcel(details)}>
                    <FontAwesomeIcon icon={faFileCsv}/>
                    Download as csv
                </button>
            </div>
            <div className="dash-header">
                <div className="header-item">
                    <FontAwesomeIcon icon={faUserAlt}/>
                    <p>Name</p>
                </div>
                <div className="header-item">
                    <FontAwesomeIcon icon={faEnvelopeOpen}/>
                    <p>Email</p>
                </div>
                <div className="header-item">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                    <p>LinkedIn</p>
                </div>
                <div className="header-item">
                    <FontAwesomeIcon icon={faCode}/>
                    <p>Interest</p>
                </div>
                <div className="header-item">
                    <FontAwesomeIcon icon={faSuitcase}/>
                    <p>Profession</p>
                </div>
            </div>
            <DashboardList/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        details: state.firestore.ordered.details,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(signOut())
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'details'
    }])
)(Dashboard);

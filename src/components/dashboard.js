import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCsv, faUserAlt, faEnvelopeOpen, faCode, faSuitcase, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import DashboardList from './dashboard-list';
import {Link} from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {connect} from 'react-redux';
import {csvConverter} from "../utils/csvConverter";
import {download} from "../utils/dowloader";


function Dashboard({details}) {

    const makeExcel = (details) => {
       const csvData = csvConverter(details);
       download(csvData);
    }

    return (
        <div id="dashboard">
            <div className="buttons">
                <Link to="/">
                <div style={{display: "flex", alignItems: "center", cursor: "pointer"}} >
                    <div style={{marginRight: "10px"}}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft}/>
                    </div>
                    <p>Go home</p>
               </div>
               </Link>
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
        details: state.firebase.ordered.details,
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
      collection: 'details'
  }])
)(Dashboard);

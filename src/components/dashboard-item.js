import React, {useEffect, useState} from 'react';
import Modal from "./modal";
import {v4} from "uuid";

const DashboardItem = ({name, email, social, interests, profession, num}) => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const html = document.querySelector('html');
        showModal ? html.classList.add('fix-doc'): html.classList.remove('fix-doc');
    }, [showModal]);

    return (
        <>
            {
                showModal && <Modal key={v4()} setShowModal={setShowModal} name={name} email={email} social={social} profession={profession} interests={interests}/>
            }
            <div id="info" onClick={() => setShowModal(!showModal)}>
                <div>
                    <div>
                        <span style={{marginRight: 5}}>{num}. </span>
                        {name}
                    </div>
                    <div className="bar"/>
                </div>
                <div>
                    {email}
                    <div className="bar"/>
                </div>
                <div>
                    {social}
                    <div className="bar"/>
                </div>
                <div>
                    <div>
                    {
                        interests[0]
                    }
                    {
                        interests.length > 1 && <span>...</span>
                    }
                    </div>
                    <div className="bar"/>
                </div>
                <div>
                    <div>
                    {
                        profession[0]
                    }
                    {
                        profession.length > 1 && <span>...</span>
                    }
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardItem;

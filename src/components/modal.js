import React from 'react';
import {v4} from "uuid";

const Modal = ({setShowModal, name, email, social, interests, profession}) => {

    const closeModal = (e) => {
        e.target.id === "modal" && setShowModal(false);
    }

    return (
        <div id="modal" onClick={closeModal}>
            <div className="modal-main">
                <div className="modal-grid">
                    <p>Name</p>
                    <p>{name}</p>
                </div>
                <div className="modal-grid">
                    <p>Email</p>
                    <p>{email}</p>
                </div>
                <div className="modal-grid">
                    <p>LinkedIn</p>
                    <p>{social}</p>
                </div>
                <div className="modal-grid">
                    <p>Interest</p>
                    <div className="list">
                        {
                            interests.map(interest =>
                                <p key={v4()}>{interest}</p>
                            )
                        }
                    </div>
                </div>
                <div className="modal-grid">
                    <p>Profession</p>
                    <div className="list">
                    {
                        profession.map(pro =>
                            <p key={v4()}>{pro}</p>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

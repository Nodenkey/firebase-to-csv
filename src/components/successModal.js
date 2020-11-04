import React from 'react';

const SuccessModal = ({setShowSuccessModal}) => {
    const closeModal = (e) => {
        e.target.id === "success-modal" && setShowSuccessModal(false);
    }
    return (
        <div id="success-modal" onClick={closeModal}>
            <div className="modal-main">
                <p>Successful Registration</p>
                <p>Thanks</p>
            </div>
        </div>
    );
};

export default SuccessModal;

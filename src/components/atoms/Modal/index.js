import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ActionButton from "../ActionButton";

import useRequest from '../../../hooks/useRequest';

import './styles.scss';

const InputText = ({ className, show, title, body, footer, handleClose, action, legend, error }) => {

    const {
        success, message
    } = useRequest();

    return <Modal className={className} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="modal-text">
                {body}
            </div>
            <div className="modal-error">
                {(success === false && message) &&
                    <p className="error-messages">{message}</p>
                }
            </div>
            <div className="modal-accion">
                <ActionButton legend={legend} handleClick={() => action()}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            {footer}
        </Modal.Footer>
    </Modal>
}

export default InputText;
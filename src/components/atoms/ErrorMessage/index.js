import React from 'react'

import './styles.scss';

const ErrorMessage = ({errors, message, correct}) => {

return <div className="error-messages">
        {correct && <p>Creado Correctamente</p>}
        <p>{(errors && Object.keys(errors).length !== 0) && Object.values(errors).map( (error) => error ) }</p>
        <p>{message}</p>
    </div> 
}

export default ErrorMessage;
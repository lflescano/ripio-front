import React, { useState } from "react";

import useRequest from 'hooks/useRequest';

import { Spinner as SpinnerBootstrap } from 'react-bootstrap/Spinner';

import "./styles.scss";

const Spinner = ({ children }) => {
    const {
        loadingSpinner
    } = useRequest();
    
    return <div id="spinner-container" className={loadingSpinner ? 'spinner-container show' : 'spinner-container hide'}>
        <SpinnerBootstrap animation="border" role="status">
        </SpinnerBootstrap>
        <embed width="68px" className='yourClassForCss' src="https://ripio-cms-us.s3.amazonaws.com/filer_public/55/8e/558e23db-b6ad-43ce-9bcd-3a67e07b0244/logo_ripio.svg" />
    </div>
}

export default Spinner;















import React from 'react'
import './styles.scss';
import { isMobile } from '../../../helpers/Mobile';
import { NavLink } from 'react-router-dom';

const LoginHeader = () => {

return <div className="login-header-container">
   <div className="login-header-logo">
            <NavLink to="/home">
                <embed width="68px" className='yourClassForCss' src="https://ripio-cms-us.s3.amazonaws.com/filer_public/55/8e/558e23db-b6ad-43ce-9bcd-3a67e07b0244/logo_ripio.svg" />
            </NavLink>
   </div>
   {!isMobile &&
   <div className="login-header-title">
       <h1 className="login-header-title-text">Datos</h1>
        <div className="login-header-title-line"></div>
   </div>
    }
    {!isMobile && 
    <div className="login-header-contact-info">

    </div>
    }
</div>
}

export default LoginHeader;
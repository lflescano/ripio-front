import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthService } from 'services/AuthService';
import useRequest from 'hooks/useRequest';

import LoginForm from 'components/molecules/LoginForm';
import MainLayout from 'components/organisms/MainLayout';
import ErrorMessage from 'components/atoms/ErrorMessage';

import './styles.scss';

const SignInView = (props) => {
    const history = useHistory();

    const {
        beforeSubmit, afterSubmit, showError,
        dealWithError, errors, message
    } = useRequest();

    const [correct, setCorrect] = useState(false);

    const handleSubmit = (username, password) => {
        beforeSubmit();
        AuthService.login(username, password)
            .then(data => {
                console.log('login')
                AuthService.loadUser().then(data => {
                    afterSubmit();
                    setCorrect(true);
                    history.push('/balances');
                }).catch(error => {
                    console.log(error);
                    showError('El usuario no existe');
                });
            }).catch((error) => {
                console.log('error login');
                setCorrect(false);
                dealWithError(error, '');
            });
    }
    return <MainLayout showMenu={false} className="login">
        <div className="list-header">
            <h1>Iniciar Sesión</h1>
        </div>
        <ErrorMessage errors={errors} message={message} correct={correct}/>
        <LoginForm submit={handleSubmit} />
    </MainLayout>
    ;
}

export default (SignInView);
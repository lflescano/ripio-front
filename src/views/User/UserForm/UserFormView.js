import React, { useState, useEffect } from 'react';

import { UserService } from 'services/UserService';
import { AuthService } from 'services/AuthService';
import useRequest from 'hooks/useRequest';

import './styles.scss';
import MainLayout from 'components/organisms/MainLayout';
import UserForm from 'components/molecules/UserForm';
import ErrorMessage from 'components/atoms/ErrorMessage';

const UserFormView = () => {
    const {
        beforeSubmit, afterSubmit, errors, message,
        dealWithError
    } = useRequest();

    const [user, setUser] = useState(null);
    const [correct, setCorrect] = useState(false);
    
     const handleSubmit = (values) => {
        beforeSubmit();
        UserService.putUser(values)
            .then(data => {
            setCorrect(true);
            afterSubmit();
        }).catch((error) => {
            console.log('error');
            console.log(error);
            dealWithError(error, '');
        });
    }

    useEffect(() => {
        beforeSubmit();
        AuthService.loadUser()
            .then(user => {
                setUser(user);
                afterSubmit();
            }).catch(error => {
                afterSubmit();
                console.log('loadUser')
                console.log(error)
            }
        );
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <MainLayout>
        <div className="list-header">
            <h1>Agregar Moneda</h1>
        </div>
        <ErrorMessage errors={errors} message={message} correct={correct}/>
        {user && <UserForm submit={handleSubmit} username={user.username} email={user.email}/>}
    </MainLayout>;
}

export default UserFormView;
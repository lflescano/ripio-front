import React, { useState, useEffect } from 'react';

import { WalletService } from 'services/WalletService';
import { TransactionService } from 'services/TransactionService';
import useRequest from 'hooks/useRequest';

import './styles.scss';
import MainLayout from 'components/organisms/MainLayout';
import TransactionForm from 'components/molecules/TransactionForm';
import ErrorMessage from 'components/atoms/ErrorMessage';

const TransactionFormView = () => {
    const {
        beforeSubmit, afterSubmit, errors, message,
        dealWithError
    } = useRequest();

    const [correct, setCorrect] = useState(false);
    const [origins, setOrigins] = useState([]);
    const [destinations, setDestinations] = useState([]);
    
     const handleSubmit = (values) => {
        beforeSubmit();
        TransactionService.postTransaction(values)
            .then(data => {
            setCorrect(true);
            afterSubmit();
        }).catch((error) => {
            console.log('error');
            dealWithError(error, '');
        });
    }

    const loadOriginsDestinations = () => {
        WalletService.usersWallets()
            .then(data => {
                setOrigins(data);
                let idOrigins = data.map(function(item) {
                    return item.id
                });
                WalletService.wallets()
                    .then(data => {
                        setDestinations(data.filter(function(element) {
                            return !idOrigins.includes(element.id);
                        }));
                        afterSubmit();
                }).catch((error) => {
                    console.log('error');
                    dealWithError(error, '');
                });
                afterSubmit();
            }).catch((error) => {
                console.log('error');
                dealWithError(error, '');
            });
    }

    useEffect(() => {
        beforeSubmit();
        loadOriginsDestinations();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <MainLayout>
        <div className="list-header">
            <h1>Agregar Transacción</h1>
        </div>
        <ErrorMessage errors={errors} message={message} correct={correct}/>
        <TransactionForm submit={handleSubmit} origins={origins} destinations={destinations}/>
    </MainLayout>;
}

export default TransactionFormView;
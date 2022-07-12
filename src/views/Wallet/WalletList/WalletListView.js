import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { WalletService } from 'services/WalletService';
import useRequest from 'hooks/useRequest';

import List from 'components/templates/List';

import './styles.scss';

const WalletListView = () => {
    const {
        beforeSubmit, afterSubmit,
        dealWithError
    } = useRequest();
    
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [currentSizePerPage, setCurrentSizePerPage] = useState(15);

    const columns = [{
            dataField: 'alias',
            text: 'Alias'
        }, {
            dataField: 'balance',
            text: 'Balance'
        }, {
            dataField: 'currency',
            formatter: (cellContent, row) => {
                return cellContent.code + ' - ' + cellContent.name
            },
            text: 'Moneda'
        }, { 
            text: 'Acciones',
            dataField: "id",
            formatter: (cellContent, row) => {
                return <NavLink to={`/balances/${cellContent}/transacciones`} >Ver Transacciones</NavLink>
            },
        }
    ];
    
    function loadData(page, sizePerPage){
        const currentIndex = (page - 1) * sizePerPage;
        setCurrentPage(page);
        setCurrentSizePerPage(parseInt(sizePerPage));
        WalletService.usersWallets(sizePerPage, currentIndex).then(res => {
            setData(res.results);
            setCount(res.count);
            afterSubmit();
        }).catch((error) => {
            afterSubmit();
            console.log(error);
            dealWithError(error, '');
        });
    }

    const onTableChange = (type, { page, sizePerPage }) => {
        loadData(page, sizePerPage);
    }

    useEffect(() => {
        beforeSubmit();
        loadData(currentPage, currentSizePerPage);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return <List title={"Balances"} data={data} columns={columns} page={currentPage} sizePerPage={currentSizePerPage} onTableChange={onTableChange} totalSize={count} ></List>;
}

export default WalletListView;
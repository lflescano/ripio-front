import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { UserService } from 'services/UserService';
import useRequest from 'hooks/useRequest';

import List from 'components/templates/List';

import './styles.scss';

const UserListView = () => {
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
            dataField: 'currency.code',
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
        UserService.users(sizePerPage, currentIndex).then(res => {
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

    return <List title={"Usuarios"} data={data} columns={columns} page={currentPage} sizePerPage={currentSizePerPage} onTableChange={onTableChange} totalSize={count} ></List>;
}

export default withTranslation()(UserListView);
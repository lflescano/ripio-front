import React, { useState, useEffect } from 'react';

import { CurrencyService } from 'services/CurrencyService';
import useRequest from 'hooks/useRequest';

import List from 'components/templates/List';

import './styles.scss';

const TransactionListView = (props) => {
    const {
        beforeSubmit, afterSubmit,
        dealWithError
    } = useRequest();

    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [currentSizePerPage, setCurrentSizePerPage] = useState(15);

    const columns = [{
        dataField: 'code',
        text: 'Código'
        }, {
        dataField: 'name',
        text: 'Nombre'
        }, {
        dataField: 'symbol',
        text: 'Símbolo'
        },
    ];
    
    function loadData(page, sizePerPage){
        const currentIndex = (page - 1) * sizePerPage;
        setCurrentPage(page);
        setCurrentSizePerPage(parseInt(sizePerPage));
        CurrencyService.currencies(sizePerPage, currentIndex).then(res => {
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

    return <List title={"Monedas"} data={data} columns={columns} page={currentPage} sizePerPage={currentSizePerPage} onTableChange={onTableChange} totalSize={count} add={`/monedas/agregar`}/>;
}

export default TransactionListView;
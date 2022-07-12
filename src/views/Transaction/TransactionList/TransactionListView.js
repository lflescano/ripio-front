import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { TransactionService } from 'services/TransactionService';
import useRequest from 'hooks/useRequest';

import List from 'components/templates/List';

import './styles.scss';
import { formatDateCell } from 'helpers/date';

const TransactionListView = (props) => {
    const {
        beforeSubmit, afterSubmit,
        dealWithError
    } = useRequest();

    const { walletId } = useParams();
    
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [currentSizePerPage, setCurrentSizePerPage] = useState(15);

    const columns = [{
            dataField: 'origin',
            text: 'Cuenta Origen',
            formatter: (cellContent, row) => {
            return cellContent.alias + ' - ' + cellContent.owner.username
            },
        }, {
            dataField: 'destination',
            text: 'Cuenta Destino',
            formatter: (cellContent, row) => {
            return cellContent.alias + ' - ' + cellContent.owner.username
            },
        }, {
            dataField: 'origin.currency',
            formatter: (cellContent, row) => {
                return cellContent.code + ' - ' + cellContent.name
            },
            text: 'Moneda'
        }, {
            dataField: 'amount',
            text: 'Monto'
        }, {
            dataField: 'created_at',
            text: 'Creado',
            formatter: (cellContent, row) => {
            return formatDateCell(cellContent);
        },
    }];
    
    function loadData(page, sizePerPage){
        const currentIndex = (page - 1) * sizePerPage;
        setCurrentPage(page);
        setCurrentSizePerPage(parseInt(sizePerPage));
        TransactionService.usersTransactions(walletId, sizePerPage, currentIndex).then(res => {
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

    return <List title={"Transacciones"} data={data} columns={columns} page={currentPage} sizePerPage={currentSizePerPage} onTableChange={onTableChange} totalSize={count} add={`/transacciones/agregar`}/>;
}

export default TransactionListView;
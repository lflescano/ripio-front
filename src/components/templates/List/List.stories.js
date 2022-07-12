import React, { useState } from 'react';

import List from '.';

export default {
    title: 'Templates/List'
}

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const products = [
      { id: '1', name: 'Book 1', price: '10' },
      { id: '2', name: 'Book 2', price: '10' },
      { id: '3', name: 'Book 3', price: '10' },
      { id: '4', name: 'Book 4', price: '10' },
      { id: '5', name: 'Book 5', price: '10' },
      { id: '6', name: 'Book 6', price: '10' },
      { id: '7', name: 'Book 3', price: '10' },
      { id: '8', name: 'Book 4', price: '10' },
      { id: '9', name: 'Book 5', price: '10' },
      { id: '10', name: 'Book 5', price: '101' },
      { id: '11', name: 'Book 1', price: '210' },
      { id: '12', name: 'Book 2', price: '210' },
      { id: '13', name: 'Book 3', price: '210' },
      { id: '14', name: 'Book 4', price: '210' },
      { id: '15', name: 'Book 5', price: '210' },
      { id: '16', name: 'Book 6', price: '210' },
      { id: '17', name: 'Book 3', price: '210' },
      { id: '18', name: 'Book 4', price: '210' },
      { id: '19', name: 'Book 5', price: '210' },
      { id: '20', name: 'Book 5', price: '2101' },
];

export const Default = () => {
    const [data, setData] = useState([
        { id: '1', name: 'Book 1', price: '10' },
        { id: '2', name: 'Book 2', price: '10' },
        { id: '3', name: 'Book 3', price: '10' },
        { id: '4', name: 'Book 4', price: '10' },
        { id: '5', name: 'Book 5', price: '10' },
        { id: '6', name: 'Book 6', price: '10' },
        { id: '7', name: 'Book 3', price: '10' },
        { id: '8', name: 'Book 4', price: '10' },
        { id: '9', name: 'Book 5', price: '10' },
        { id: '10', name: 'Book 5', price: '101' },
    ]);

    const [page, setPage] = useState(1);
    const [sizePerPage, setSizePerPage] = useState(15);

    const handleTableChange = (type, { page, sizePerPage }) => {
        const currentIndex = (page - 1) * sizePerPage;
        setPage(page);
        setData(products.slice(currentIndex, currentIndex + sizePerPage));
        setSizePerPage(sizePerPage);

    }
    return <List title="Listado" columns={columns} page={page} data={data} sizePerPage={sizePerPage} onTableChange={handleTableChange} totalSize={ products.length }/>
}
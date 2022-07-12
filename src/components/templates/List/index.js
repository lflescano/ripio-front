import React from "react";

import MainLayout from 'components/organisms/MainLayout';
import Table from 'components/molecules/Table';

import "./styles.scss";
import CreateButton from "components/atoms/CreateButton";

const List = ({ title, data, columns, page, sizePerPage, onTableChange, totalSize, add }) => {
    return <MainLayout>
        <div className="list-header">
            <h1>{title}</h1>
            {add && <CreateButton url={add} title={'Crear '+title}/>}
        </div>
        {data && <Table columns={columns} page={page} data={data} sizePerPage={sizePerPage} onTableChange={onTableChange} totalSize={ totalSize } />}
    </MainLayout>
}

export default List;






import React from "react";

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';

import "./styles.scss";

const Table = ({ data, columns, page, sizePerPage, onTableChange, totalSize }) => {
  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange
  }) => (
    <div className="btn-group" role="group">
      {
        options.map((option) => {
          const isSelect = currSizePerPage === `${option.page}`;
          return (
            <button
              key={ option.text }
              type="button"
              onClick={ () => onSizePerPageChange(option.page) }
              className={ `btn ${isSelect ? 'btn-secondary' : 'btn-warning'}` }
            >
              { option.text }
            </button>
          );
        })
      }
    </div>
  );

  return <div>
    <PaginationProvider
      pagination={
        paginationFactory({
          sizePerPageRenderer,
          custom: true,
          page,
          sizePerPage,
          totalSize,
          paginationSize: 15,
          pageStartIndex: 1,
          // alwaysShowAllBtns: true, // Always show next and previous button
          // withFirstAndLast: false, // Hide the going to First and Last page button
          hideSizePerPage: false, // Hide the sizePerPage dropdown always
          hidePageListOnlyOnePage: false, // Hide the pagination list when only one page
          firstPageText: 'First',
          prePageText: 'Back',
          nextPageText: 'Next',
          lastPageText: 'Last',
          nextPageTitle: 'First page',
          prePageTitle: 'Pre page',
          firstPageTitle: 'Next page',
          lastPageTitle: 'Last page',
          showTotal: true,
          disablePageTitle: true,
          sizePerPageList: [{
            text: '5', value: 5
          }, {
            text: '10', value: 10
          }, {
            text: '15', value: 15
          }]
        })
      }
    >
      {
        ({
          paginationProps,
          paginationTableProps
        }) => (
          <div className="table-container">
              <BootstrapTable
                remote
                keyField="id"
                data={ data }
                columns={ columns }
                onTableChange={ onTableChange }
                { ...paginationTableProps }
                />
            <div className="table-footer">
              <SizePerPageDropdownStandalone
                { ...paginationProps }
              />
              <PaginationListStandalone
                { ...paginationProps }
              />
            </div>
          </div>
        )
      }
    </PaginationProvider>
  </div>
};

export default Table;

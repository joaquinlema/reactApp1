import MUIDataTable from 'mui-datatables';
import React from 'react';

const TableList = ({titulo,lista, columns, options}) => {
    return (
        <React.Fragment>

            <MUIDataTable
                title={titulo}
                data={lista.map(e=>{
                    return [
                        e.id,
                        e.name,
                        e.year
                    ]
                })}
                columns={columns}
                options={options}
            />
        </React.Fragment>
    );
}

export default TableList;

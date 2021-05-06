import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../../actions/UsuarioActions';
import {  useEffect } from 'react';
import MUIDataTable from "mui-datatables";

const UserTable = () => {

    const {users} = useSelector(state => state.UsuarioReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const columns = ["Id", "Name"];

    const options = {
        filter: true,
        filterType: "dropdown",
    };

    return (
        <div style={{    width: '100%', margin: '4%'}}>

            <MUIDataTable
                title={"Listado Usuarios"}
                data={users.map(e=>{
                    return [
                        e.id,
                        e.name
                    ]
                })}
                columns={columns}
                options={options}
            />
        </div>
    );
}

export default UserTable;
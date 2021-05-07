import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../actions/TaskActions';
import {  useEffect } from 'react';
import MUIDataTable from "mui-datatables";

const TareaTable = () => {

    const {users} = useSelector(state => state.TaskReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const columns = ["Id", "Codigo","Descripcion","Duracion Planificada","Usuario Asignado"];
    const options = {
        filter: true,
        filterType: "dropdown",
    };

    return (
        <div style={{  width: '100%', margin: '4%'}}>

            <MUIDataTable
                title={"Listado Tarea"}
                data={users.map(e=>{
                    return [
                        e.id,
                        e.codigo,
                        e.descripcion,
                        e.duracionPlanificada,
                        e.usuarioAsignado
                    ]
                })}
                columns={columns}
                options={options}
            />
        </div>
    );
}

export default TareaTable;
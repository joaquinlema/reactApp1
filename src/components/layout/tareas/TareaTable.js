import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../../actions/TaskActions';
import {  useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import { Button } from "@material-ui/core";

const TareaTable = () => {

    const {tasks} = useSelector(state => state.TaskReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const columns = ["Id", "Codigo","Descripcion","Duracion Planificada","Usuario Asignado",
    {
        name: "Delete",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button onClick={() => {
               //dispatch(deleteUser(tableMeta.rowData[0]))
              }}>
                Delete
              </Button>
            );
          }
        }
      },
      {
        name: "Edit",
        options: {
          filter: true,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Button onClick={() =>{}}>
                Edit
              </Button>
            );
          }
        }
      }];
    const options = {
        filter: true,
        filterType: "dropdown",
        selectableRows: false,
    };

    return (
        <div style={{  width: '100%', margin: '4%'}}>

            <MUIDataTable
                title={"Listado Tarea"}
                data={tasks.map(e=>{
                    return [
                        e.id,
                        e.codigo,
                        e.descripcion,
                        e.duracionPlanificada,
                        e.usuarioId
                    ]
                })}
                columns={columns}
                options={options}
            />
        </div>
    );
}

export default TareaTable;
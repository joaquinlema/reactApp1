import { Grid } from '@material-ui/core';
import React from 'react';
import NewButtonTask from '../layout/tareas/nuevoTaskButton/NewButtonTask';
import TareaTable from '../layout/tareas/TareaTable';

const TareaPage = () => {
    return (
        <Grid
        container
        direction="row"
        >
            <Grid container item xs={12} sm={12} md={8} lg={8}>
                <NewButtonTask />
                <TareaTable />
            </Grid>

            {/* <Grid container item xs={12} sm={12} md={4} lg={4}>
                <UserFormDialog open={abrirFormularioStatus} />
            </Grid> */}
        </Grid>
    );
}

export default TareaPage;

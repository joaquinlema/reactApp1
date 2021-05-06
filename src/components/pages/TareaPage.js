import { Grid } from '@material-ui/core';
import React from 'react';
import TareaTable from '../layout/tareas/TareaTable';

const TareaPage = () => {
    return (
        <Grid
            container
            direction="row"
        >
            <TareaTable />
        </Grid>
    );
}

export default TareaPage;

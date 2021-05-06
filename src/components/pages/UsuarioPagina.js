import { Grid } from '@material-ui/core';
import React from 'react';
import UserTable from '../layout/usuarios/userTable/UserTable';
import FormularioUsuario from '../layout/usuarios/form/FormularioUsuario';
import NewButton from '../layout/usuarios/userTable/nuevoUserButton/NewButton';
import { useSelector } from 'react-redux';

const UsuarioPagina = () => {
    const {abrirFormulario} = useSelector(state => state.UsuarioReducer);
    return (
        <Grid
        container
        direction="row"
    >
        <Grid container item xs={12} sm={12} md={8} lg={8}>
            <NewButton />
            <UserTable />
        </Grid>

        <Grid container item xs={12} sm={12} md={4} lg={4}>
            {abrirFormulario && <FormularioUsuario /> }
        </Grid>
        
    </Grid>
    );
}

export default UsuarioPagina;

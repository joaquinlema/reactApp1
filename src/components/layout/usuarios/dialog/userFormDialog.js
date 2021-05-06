import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import FormularioUsuario from '../form/FormularioUsuario';
import {abrirFormulario} from '../../../../actions/UsuarioActions';
import { useDispatch } from 'react-redux';

export default function UserFormDialog({open,onClose}) {
const dispatch = useDispatch();

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => dispatch(abrirFormulario(false))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <FormularioUsuario />
      </Dialog>
    </div>
  );
}
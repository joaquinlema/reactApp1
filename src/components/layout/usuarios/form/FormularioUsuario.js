import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createUser,editUser} from '../../../../actions/FormularioActions';
import {abrirFormulario} from '../../../../actions/UsuarioActions';
import { Formik, Form} from 'formik';
import { Button, LinearProgress, Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MyTextField from './textField/MyTextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as Yup from "yup";

const FormularioUsuario = () => {
    const dispatch = useDispatch();
    const {userEdit, editStatus}  = useSelector(state => state.UsuarioReducer);
    
    const SignupSchema = Yup.object().shape({
        nombre: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid Name only letters").required('Required'),
        apellido: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').matches(/^[a-zA-Z ]+$/,"Invalid SurName only letters").required('Required'),
        email: Yup.string().email('Invalid Mail Format').required('Required'),
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Formik
                initialValues={{
                    nombre: (userEdit.name !== '') ? userEdit.name : '',
                    apellido: (userEdit.apellido !== '') ? userEdit.apellido : '',
                    email: (userEdit.email !== '') ? userEdit.email : '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    setTimeout(() => {
                        if(editStatus){
                            dispatch(editUser(values,userEdit.id));
                        }else{
                            dispatch(createUser(values));
                        }
                        setSubmitting(false);
                        dispatch(abrirFormulario(false));
                        resetForm();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting}) => (
                    <Form>
                        <Grid container>

                            <Grid item xs={12} md={6} lg={6}>

                                <MyTextField name="nombre" type="text" label="Nombre" placeholder="Nombre" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}/>

                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                                <MyTextField name="apellido" type="text" label="Apellido" placeholder="Apellido" InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}/>

                            </Grid>

                            <Grid item xs={12} md={6} lg={6}>
                                <MyTextField name="email" type="Email" label="Email" placeholder="Email"  InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <ContactMailRoundedIcon />
                                            </InputAdornment>
                                        ),
                                    }}/>

                            </Grid>
  

                            <Grid item xs={12} md={12} lg={12}>
                                {isSubmitting && <LinearProgress />}
                            </Grid>

                            <Grid item xs={12} md={12} lg={12} className='botonesForm'>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                     {editStatus ? 'Actualizar' : 'Guardar'}
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disabled={isSubmitting}
                                    onClick={() => { alert('cancelado') }}
                                >
                                    Cancelar
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </MuiPickersUtilsProvider>
    );
}

export default FormularioUsuario;
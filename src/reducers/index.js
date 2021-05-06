import {combineReducers} from 'redux';
import FormularioUsuarioReducer from './FormularioUsuarioReducer';
import UsuarioReducer from './UsuarioReducer';

const rootReducer =  combineReducers({
     FormularioUsuarioReducer,
     UsuarioReducer
});

export default rootReducer;
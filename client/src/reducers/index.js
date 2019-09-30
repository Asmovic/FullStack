import { combineReducers } from 'redux';
import auth from './authReducer';
import surveys from './surveysReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    auth,
    surveys,
    form: reduxForm
})
import React from 'react';
import { connect } from 'react-redux';
import Fields from './formField';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom'


const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {


    const renderContent = Fields.map(({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })

    return (
        <div>
            <h5>Please confirm your entries!!!</h5>
            {renderContent}
            <button onClick={onCancel} className='yellow btn-flat left white-text darken-3'>Back</button>
            <button onClick={() => submitSurvey(formValues, history)} className='green btn-flat white-text right'>Send Survey <i className='material-icons right'>email</i></button>
        </div>
    )
}

function mapStateToProps({ form: { surveyForm: { values } } }) {

    return {
        formValues: values
    }
}




export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
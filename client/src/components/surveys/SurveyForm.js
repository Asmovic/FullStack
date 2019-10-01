import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
import Fields from './formField';


class SurveyForm extends Component {
    renderFields() {
        return (
            <div>
                {
                    Fields.map(({ label, name }, index) => {
                        return <Field key={index} type='text' label={label} name={name} component={SurveyField} />
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to='/surveys' className='red btn-flat left white-text'>Cancel</Link>
                    <button type='submit' className='teal btn-flat right white-text'>Next
                    <i className='material-icons right'>done</i></button>
                </form>
            </div>
        )
    }
}

function validate(values) {

    const error = {};
    error.recipients = validateEmails(values.recipients || '');
    error.from = validateEmails(values.from || '');
    const vowels = ['a', 'e', 'i', 'o', 'u']
    _.each(Fields, ({ name }) => {

        if (!values[name]) {
            error[name] = `You must provide ${(vowels.includes(name.substring(0, 1))) ? '' : 'a'} ${name}`
        }
    })


    return error;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../actions/authActions';
import RenderField from './RenderField';

class LoginForm extends Component {
    handleFormSubmit = values => {
        const { username, password } = values;
        this.props.login(username, password);
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                    <Field
                        id="login-username-input"
                        label="Username"
                        name="username"
                        type="text"
                        component={RenderField}
                    />
                    <Field
                        id="login-password-input"
                        label="Password"
                        name="password"
                        type="password"
                        component={RenderField}
                    />
                    <button
                        id="login-submit-button"
                        type="submit"
                        className="btn btn-primary"
                        disabled={this.props.submitting}>
                        Sign In
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Username is required';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    }
    return errors
}

const form = reduxForm({
    form: 'login',
    validate
})(withRouter(LoginForm));

export default connect(mapStateToProps, { login })(form);
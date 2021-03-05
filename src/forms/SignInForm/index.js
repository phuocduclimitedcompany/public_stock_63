/**
 *
 * SignInForm form file
 *
 */

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import { reduxForm } from 'redux-form/immutable';
import { Form } from 'native-base';

import Group from '../formFields';
import validate from '../formFields/validate';

import styles from './styles';

// Add your formField in this object
const formFieldsObject = {
  email: {
    // icon: 'person',
    placeholder: 'emailAddress',
    type: 'textInput',
    autoCapitalize: 'none',
    keyboardType: 'default',
    maxLength: 30,
    validation: { required: true },
  },
  password: {
    // icon: 'lock',
    placeholder: 'password',
    type: 'textInput',
    secureTextEntry: true,
    autoCapitalize: 'none',
    validation: { required: true, minLength: 4 },
  },
};

const SignInForm = (props) => {
  const {
    initialValues, handleSubmit, setRef, ...otherProps
  } = props;

  const formFields = [
    pick(formFieldsObject, 'email', 'password'),
  ];

  const data = initialValues ? initialValues.toJS() : {};

  return (
    <Form style={styles.form} ref={setRef} onSubmit={handleSubmit}>
      {formFields.map((formField) => (
        <Group data={data} fieldsObject={formField} key={formField} {...otherProps}/>
      ))}
    </Form>
  );
};

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  initialValid: PropTypes.object,
};

SignInForm.defaultProps = {
  initialValues: null,
  initialValid: PropTypes.object,
};

export default reduxForm({
  form: 'signInForm',
  touchOnChange: true,
  touchOnBlur: true,
  validate: (value, values, form, key) => validate(value, key, formFieldsObject, values, form),
})(SignInForm);

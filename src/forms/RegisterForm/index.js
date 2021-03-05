/**
 *
 * RegisterForm form file
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
  id: {
    placeholder: 'ID',
    type: 'textInput',
    autoCapitalize: 'none',
    keyboardType: 'numeric',
    maxLength: 30,
    validation: { required: true },
  },
  firstName: {
    placeholder: 'firstName',
    type: 'textInput',
    autoCapitalize: 'none',
    keyboardType: 'default',
    maxLength: 30,
    validation: { required: true },
  },
  lastName: {
    placeholder: 'lastName',
    type: 'textInput',
    autoCapitalize: 'none',
    keyboardType: 'default',
    maxLength: 30,
    validation: { required: true },
  },
  email: {
    placeholder: 'emailAddress',
    type: 'textInput',
    autoCapitalize: 'none',
    keyboardType: 'default',
    maxLength: 30,
    validation: { required: true },
  },
  phone: {
    placeholder: 'phoneNumber',
    type: 'textInput',
    autoCapitalize: 'none',
    keyboardType: 'numeric',
    maxLength: 30,
    validation: { required: true },
  },
  address: {
    placeholder: 'address',
    type: 'textInput',
    autoCapitalize: 'none',
    keyboardType: 'default',
    maxLength: 30
  },
};

const RegisterForm = (props) => {
  const {
    initialValues, handleSubmit, setRef, ...otherProps
  } = props;

  const formFields = [
    pick(formFieldsObject, 'id', 'firstName', 'lastName','email', 'phone', 'address'),
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

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  initialValid: PropTypes.object,
};

RegisterForm.defaultProps = {
  initialValues: null,
  initialValid: PropTypes.object,
};

export default reduxForm({
  form: 'registerForm',
  touchOnChange: true,
  touchOnBlur: true,
  validate: (value, values, form, key) => validate(value, key, formFieldsObject, values, form),
})(RegisterForm);

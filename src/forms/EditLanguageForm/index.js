/**
 *
 * EditLanguageForm form file
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
  radio1: {
    type: 'radioInput',
    data: [
      {label: 'english', value: 'lv1' },
      {label: 'vietnamese', value: 'lv2' },
      {label: 'advanced', value: 'lv3' }
    ],
    hasLabel: false,
    trans: true,
  },
};

const EditLanguageForm = (props) => {
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

EditLanguageForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  initialValid: PropTypes.object,
};

EditLanguageForm.defaultProps = {
  initialValues: null,
  initialValid: PropTypes.object,
};

export default reduxForm({
  form: 'editLanguageForm',
  touchOnChange: true,
  touchOnBlur: true,
  validate: (value, values, form, key) => validate(value, key, formFieldsObject, values, form),
})(EditLanguageForm);

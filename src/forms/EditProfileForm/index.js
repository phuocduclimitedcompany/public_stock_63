/**
 *
 * EditProfileForm form file
 *
 */

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import {reduxForm} from 'redux-form/immutable';
import {Form} from 'native-base';

import Group from '../formFields';
import validate from '../formFields/validate';

import styles from './styles';

// Add your formField in this object
const formFieldsObject = {
  username: {
    label: 'username',
    type: 'textInputEdit',
    autoCapitalize: 'none',
    keyboardType: 'default',
    maxLength: 11,
  },
  gender: {
    label: 'gender',
    placeholder: 'genderPlaceholder',
    type: 'selectInput',
    data: [{label: 'Female', value: 'a'}, {label: 'Male', value: 'b'}],
  },
  birthday: {
    placeholder: 'birthday',
    type: 'dateInput',
    autoCapitalize: 'none',
    keyboardType: 'default',
  },
  phoneNumber: {
    label: 'phoneNumberEdit',
    type: 'textInputEdit',
    autoCapitalize: 'none',
    keyboardType: 'default',
  },
  email: {
    label: 'emailEdit',
    type: 'textInputEdit',
    autoCapitalize: 'none',
    keyboardType: 'default',
  },
  oldPassword: {
    label: 'enterOldPass',
    type: 'textInputEdit',
    secureTextEntry: true,
    autoCapitalize: 'none',
    validation: {required: true, minLength: 4},
  },
  newPassword: {
    label: 'enterNewPass',
    type: 'textInputEdit',
    secureTextEntry: true,
    autoCapitalize: 'none',
    validation: {required: true, minLength: 4},
  },
};

const EditProfileForm = props => {
  const {initialValues, handleSubmit, setRef, ...otherProps} = props;

  const formFields = [
    pick(
      formFieldsObject,
      'username',
      'gender',
      'birthday',
      'phoneNumber',
      'email',
      'oldPassword',
      'newPassword',
    ),
  ];

  const data = initialValues ? initialValues.toJS() : {};

  return (
    <Form style={styles.form} ref={setRef} onSubmit={handleSubmit}>
      {formFields.map(formField => (
        <Group
          data={data}
          fieldsObject={formField}
          key={formField}
          {...otherProps}
        />
      ))}
    </Form>
  );
};

EditProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  initialValid: PropTypes.object,
};

EditProfileForm.defaultProps = {
  initialValues: null,
  initialValid: PropTypes.object,
};

export default reduxForm({
  form: 'editProfileForm',
  touchOnChange: true,
  touchOnBlur: true,
  validate: (value, values, form, key) =>
    validate(value, key, formFieldsObject, values, form),
})(EditProfileForm);

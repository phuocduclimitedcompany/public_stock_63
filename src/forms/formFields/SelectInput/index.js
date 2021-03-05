/**
 *
 * SelectInput formField file
 *
 */

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Picker, Icon} from 'native-base';
import {Dropdown} from 'react-native-material-dropdown';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import {
  white,
  black,
  colorInput,
  blueMain10,
} from '../../../theme/variables/commonColor';
import styles from '../styles';
import icoMoonConfig from '../../../assets/fonts/icomoon';
const Icomoon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'Icomoon',
  'icomoon.ttf',
);

const SelectInput = props => {
  const {
    placeholder,
    input,
    label,
    data,
    setValue,
    meta: {error, touched},
    trans,
  } = props;
  let dataSelect = [];

  if (trans) {
    data.map(item =>
      dataSelect.push({
        label: translate(item.label),
        value: item.value,
      }),
    );
  } else {
    dataSelect = data;
  }
  const labelText = label || input.name;
  const placeholderText = translate(placeholder);
  // if (data) {
  //
  // }

  return (
    <View>
      <View style={styles.viewSelect}>
        <View>
          <Text style={styles.labelDefaultDate}>{translate(labelText)}</Text>
        </View>
        <Dropdown
          style={styles.select}
          containerStyle={styles.viewSelectContainer}
          labelTextStyle={styles.viewSelectLabel}
          inputContainerStyle={[
            styles.viewSelectLabel,
            styles.viewSelectLabelBorder,
            touched && error && styles.borderColorError,
          ]}
          renderAccessory={() => (
            <Icomoon name="arrow-down" style={styles.viewSelectIcon} />
          )}
          placeholder={translate(placeholderText)}
          placeholderTextColor="rgba(0, 8, 51, 0.2)"
          placeHolderTextStyle={styles.labelDefaultDate3}
          fontSize={11}
          labelFontSize={11}
          baseColor={blueMain10}
          textColor={colorInput}
          selectedItemColor={black}
          data={dataSelect}
          onChangeText={input.onChange}
          value={setValue}
        />
      </View>
      {touched && error && !!error.trim() && (
        <Text style={styles.labelError}>{error}</Text>
      )}
    </View>
  );
};

SelectInput.defaultProps = {
  placeholder: '',
  setValue: '',
  meta: {},
  trans: false,
};

SelectInput.propTypes = {
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setValue: PropTypes.string,
  meta: PropTypes.object,
  trans: PropTypes.bool,
};

export default SelectInput;

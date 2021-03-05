/**
 *
 * RadioInput formField file
 *
 */

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Label,Text } from 'native-base';

import styles from '../styles';
import { bgBorrow } from '../../../theme/variables/commonColor';
import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button';

const RadioInput = props => {
  const {
    input,
    trans,
    label,
    hasLabel,
    layout,
    itemSettings,
    itemstyle,
    labelStyle,
    data,
  } = props;
  let dataSelect = [];

  const itemLayout = [styles.defaultItem, itemstyle];
  const labelVertical = [labelStyle];
  if (layout === 'vertical') {
    itemLayout.push(styles.fieldVertical);
    labelVertical.push(styles.labelVertical);
  }

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

  return (
    <View style={styles.fieldHorizontal}>
      {hasLabel && <Label style={labelVertical}>{translate(labelText)}</Label>}
        <RadioGroup color={bgBorrow} style={styles.viewRadio3}>
          {dataSelect.map((item, index) => (
            <RadioButton key={index}  value={item.value} style={styles.widthRadio3}>
              <Text style={[styles.textRadio1]}>{item.label}</Text>
            </RadioButton>
          ))}
        </RadioGroup>
    </View>
  );
};

RadioInput.defaultProps = {
  input: {
    value: false,
    onChange: () => null,
  },
  label: '',
  layout: '',
  itemSettings: {},
  itemstyle: {},
  labelStyle: {},
  hasLabel: true,
  trans: false,
};

RadioInput.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func,
  }),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string,
  layout: PropTypes.string,
  itemSettings: PropTypes.object,
  itemstyle: PropTypes.object,
  labelStyle: PropTypes.object,
  hasLabel: PropTypes.bool,
  trans: PropTypes.bool,
};

export default RadioInput;

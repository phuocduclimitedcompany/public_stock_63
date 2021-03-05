/**
 *
 * TextInput
 *
 */

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, DatePicker} from 'native-base';
import {
  // Animated,
   Easing} from 'react-native';
// import { inputPlaceholder } from '../../../theme/variables/commonColor';

import styles from '../styles';
import {Dropdown} from 'react-native-material-dropdown';
// import CustomIcon from '../../../assets/fonts/CustomIcon.js';
const InputFloatingLabel = props => {
  const {
    input,
    placeholder,
    label,
    // icon,
    layout,
    itemSettings,
    itemstyle,
    labelStyle,
    setValue,
    meta: {error, touched},
  } = props;

  let {value} = props;

  if (setValue) {
    value = setValue;
  }

  const cleanStyle = {top: styles.input.height / 1.2};
  const dirtyStyle = {top: styles.input.height / 2.2};
  let dirty = value || placeholder;
  const style = dirty ? dirtyStyle : cleanStyle;
  // const labelAnimated = {
    // fontSize: new Animated.Value(style.fontSize),
    // top: new Animated.Value(style.top),
  // };

  const animate = check => {
    dirty = check;
    const nextStyle = check ? dirtyStyle : cleanStyle;
    // const anims = Object.keys(nextStyle).map(prop =>
    //   Animated.timing(
    //     labelAnimated[prop],
    //     {
    //       toValue: nextStyle[prop],
    //       duration: 200,
    //     },
    //     Easing.ease,
    //   ),
    // );
    // Animated.parallel(anims).start();
  };

  const itemLayout = [styles.defaultItem, itemstyle];
  const labelVertical = [styles.labelDefault, labelStyle,
    //  labelAnimated
    ];
  if (layout === 'vertical') {
    itemLayout.push(styles.fieldVertical);
    labelVertical.push(styles.labelVertical);
  }

  const labelText = label || input.name;
  const placeholderText =
    itemSettings && itemSettings.floatingLabel === true
      ? null
      : translate(placeholder);

  return (
    <View>
      <View
        style={[
          styles.fieldInput,
          styles.fieldHorizontal,
          touched && error && styles.borderColorError,
        ]}>
        {/*{icon && <CustomIcon name={icon} style={styles.icon} />}*/}
        <View style={styles.defaultItem}>
          {/*<Text style={styles.labelDefault2}>{translate(labelText)}</Text>*/}
          <DatePicker
            // placeholderTextColor={inputPlaceholder}
            underlineColorAndroid="transparent"
            defaultDate={value}
            locale="en"
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType="fade"
            androidMode="default"
            placeHolderText={placeholderText}
            placeHolderTextStyle={styles.labelDefaultDate2}
            textStyle={styles.input}
            onDateChange={input.onChange}
            disabled={false}
          />
        </View>
      </View>
      {touched && error && !!error.trim() && (
        <Text style={styles.labelError2}>{error}</Text>
      )}
    </View>
  );
};

InputFloatingLabel.defaultProps = {
  input: {},
  placeholder: '',
  value: '',
  setValue: '',
  icon: null,
  label: '',
  layout: '',
  itemSettings: {},
  itemstyle: {},
  labelStyle: {},
  meta: {},
};

InputFloatingLabel.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  layout: PropTypes.string,
  itemSettings: PropTypes.object,
  itemstyle: PropTypes.object,
  labelStyle: PropTypes.object,
  meta: PropTypes.object,
};

export default InputFloatingLabel;

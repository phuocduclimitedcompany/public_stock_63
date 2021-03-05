/**
 *
 * AppHeaderSignIn Stateless Component
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import {Header} from 'native-base';

import styles from './styles';
import headerStyle from "../../theme/variables/headerStyle";

const AppHeaderSignIn = (props) => {
  return (
      <Header
          style={headerStyle.headerStatusBar}
          iosBarStyle="dark-content"
          androidStatusBarColor="#fff"
      />
  );
};

AppHeaderSignIn.defaultProps = {
};

AppHeaderSignIn.propTypes = {
};

export default AppHeaderSignIn;

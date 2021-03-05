/**
 *
 * RewardsScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Container, Content, Text,
} from 'native-base';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';

export class RewardsScene extends React.Component { // eslint-disable-line
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  // componentDidMount() {
  // }

  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={styles.contentContainer}
          style={styles.content}
        >
          <Text style={styles.generateText}>{translate('generatorMessage')}</Text>
        </Content>
      </Container>
    );
  }
}

RewardsScene.defaultProps = {
};

RewardsScene.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(RewardsScene);

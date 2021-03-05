/**
 *
 * SettingScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Container, List, ListItem, Text} from 'native-base';
import {ScrollView} from 'react-native';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';
import AppHeader from '../../components/AppHeader';

// ./
import styles from './styles';
const list = [
  {item: 'My Account'},
  {item: 'My Profile'},
  {item: 'My Address'},
  {item: 'Settings'},
  {item: 'Notification Settings'},
  {item: 'Language'},
  {item: 'Support'},
  {item: 'Community Rules'},
];
export class SettingScene extends React.Component { // eslint-disable-line
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
        <AppHeader
          title="setting"
          hasRightSet={false}
          hasRightSearch={false}
          hasRightCart={false}
        />

        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.content}>
          <List>
            <ListItem style={styles.listView} itemDivider>
              <Text style={styles.textDivider}>My Account</Text>
            </ListItem>
            <ListItem style={styles.listView} button onPress={() => Actions.push('editProfile')}>
              <Text style={styles.textItem}>My Profile</Text>
            </ListItem>
            <ListItem style={styles.listView} button onPress={() => Actions.push('editAddress')}>
              <Text style={styles.textItem}>My Address</Text>
            </ListItem>
            <ListItem style={styles.listView} itemDivider>
              <Text style={styles.textDivider}>Settings</Text>
            </ListItem>
            <ListItem style={styles.listView}>
              <Text style={styles.textItem}>Notification Settings</Text>
            </ListItem>
            <ListItem style={styles.listView}>
              <Text style={styles.textItem}>Language</Text>
            </ListItem>
            <ListItem style={styles.listView} itemDivider>
              <Text style={styles.textDivider}>Support</Text>
            </ListItem>
            <ListItem style={styles.listView}>
              <Text style={styles.textItem}>Community Rules</Text>
            </ListItem>
          </List>
        </ScrollView>
      </Container>
    );
  }
}

SettingScene.defaultProps = {};

SettingScene.propTypes = {};

const mapDispatchToProps = dispatch => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(SettingScene);

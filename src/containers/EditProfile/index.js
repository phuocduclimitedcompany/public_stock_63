/**
 *
 * EditProfile Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Container, Button, Text, View, Thumbnail, Icon} from 'native-base';
import {ScrollView} from 'react-native';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import AppHeader from '../../components/AppHeader';
import styles from './styles';
import EditProfileForm from '../../forms/EditProfileForm';
import LoginForm from '../../forms/LoginForm';
import {values} from 'redux-form';
const userAvt = require('../../assets/images/user.jpg');
export class EditProfile extends React.Component { // eslint-disable-line
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
          title={'editAccount'}
          hasLeft={true}
          hasRightSearch={false}
          hasRightSet={false}
          hasRightCart={false}
        />
        <ScrollView style={styles.content}>
          <View style={{marginBottom: 20}}>
            <View style={styles.avtView}>
              {/*<Thumbnail square source={userAvt} style={styles.avtStyle} />*/}
              {/*<View style={styles.avtBg} />*/}
              {/*<Button transparent style={styles.cameraBtn}>*/}
              {/*  <Icon*/}
              {/*    name="camera"*/}
              {/*    type="FontAwesome"*/}
              {/*    style={styles.cameraIcon}*/}
              {/*  />*/}
              {/*</Button>*/}
            </View>
            <EditProfileForm
              initialValues={{
                username: 'Cassie Donk',
                phoneNumber: '083225666',
              }}
            />
            <Button block style={styles.saveBtn}>
              <Text style={styles.saveText}>{translate('saveChange')}</Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

EditProfile.defaultProps = {};

EditProfile.propTypes = {};

const mapDispatchToProps = dispatch => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(EditProfile);

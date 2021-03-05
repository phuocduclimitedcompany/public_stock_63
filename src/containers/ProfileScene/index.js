/**
 *
 * ProfileScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  Container,
  Content,
  Left,
  Text,
  Thumbnail,
  View,
  Button,
  ListItem,
  List,
  Right,
  Icon,
  Body,
} from 'native-base';
import {ScrollView} from 'react-native';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import headerStyle from '../../theme/variables/headerStyle';
const userAvt = require('../../assets/images/user.jpg');
const listData = [
  {
    title: 'My Shop',
    text: 'Start Selling',
    action: 'myShop',
  },
  {
    title: 'WishList',
    text: 'View your wishlist',
    action: '',
  },
  {
    title: 'My Purchases',
    text: 'View purchases history',
    action: '',
  },
  {
    title: 'Payment Method',
    text: 'Visa **34',
    action: '',
  },
  {
    title: 'Gift Cards & Vouchers',
    text: 'You have special gift. See now!',
    action: '',
  },
  {
    title: 'Contact Preferences',
    text: '',
    action: '',
  },
  {
    title: 'Settings',
    text: '',
    action: 'setting',
  },
];
export class ProfileScene extends React.Component { // eslint-disable-line
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
          title={'myAccount'}
          hasLeft={true}
          hasRightSearch={false}
          hasRightSet={false}
        />
        <ScrollView style={styles.content}>
          <View style={styles.profileView}>
            <View style={{position: 'relative'}}>
              <Thumbnail square source={userAvt} style={styles.avtStyle} />
              <Button transparent style={styles.cameraBtn}>
                <Icon
                  name="camera"
                  type="FontAwesome"
                  style={styles.cameraIcon}
                />
              </Button>
            </View>
            <View style={styles.nameView}>
              <Text style={styles.nameStyle} >Cassie Donk</Text>
              <Text style={styles.subName}>Member since 2019</Text>
              <Button
                bordered
                style={styles.editBtn}
                onPress={() => Actions.push('editProfile')}>
                <Text style={styles.editText}>{translate('editAccount')}</Text>
              </Button>
            </View>
          </View>
          <List style={styles.listView}>
            {listData.map((item, key) => (
              <ListItem
                button
                hey={key}
                thumbnail
                style={styles.mL0}
                onPress={() => Actions.push(item.action)}
              >
                <Body style={styles.textListView}>
                  <Text style={styles.listTitle}>{item.title}</Text>
                  {item.text ? (
                    <Text style={styles.listText}>{item.text}</Text>
                  ) : null}
                </Body>
                <Right>
                  <Icon name="angle-right" type="FontAwesome" />
                </Right>
              </ListItem>
            ))}
          </List>
        </ScrollView>
      </Container>
    );
  }
}

ProfileScene.defaultProps = {};

ProfileScene.propTypes = {};

const mapDispatchToProps = dispatch => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfileScene);

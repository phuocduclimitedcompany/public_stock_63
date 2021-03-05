/**
 *
 * HomePublicScene Container
 *
 */

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  Container,
  Header,
  Text,
  View,
  Button,
  Left,
  Body,
  Right,
  Icon,
  Drawer,
  Row,
  ListItem,
  Thumbnail,
  Badge,
} from 'native-base';
import {Image, ScrollView, TouchableHighlight} from 'react-native';
import {createPropsSelector} from 'reselect-immutable-helpers';
// utils => ... => containers => components => form
import {selectMenus} from '../../selectors';
const root = '_root';
// import xxx from 'components/xxx';

// ./
import styles from './styles';
import headerStyle from '../../theme/variables/headerStyle';
import styleSignIn from '../../theme/variables/styleSignIn';
import CustomIcon from '../../assets/fonts/CustomIcon.js';
const screen1 = require('../../assets/images/Animal-Supplies.jpg');
const screen2 = require('../../assets/images/Appliances.jpg');
const screen3 = require('../../assets/images/Automotive-Accessories.jpg');
const screen4 = require('../../assets/images/Clothing.jpg');
const screen5 = require('../../assets/images/Electronics.jpg');
// const screen6 = require('../../assets/images/Equipment.jpg');
const screen6 = require('../../assets/images/Food.png');
const screen7 = require('../../assets/images/Food.png');
const screen8 = require('../../assets/images/Furnitures.jpg');
const screen9 = require('../../assets/images/Health--Beauty.jpg');
const screen10 = require('../../assets/images/Household-Supplies.jpg');
const userAvt = require('../../assets/images/user.jpg');
const dataImg = [
  {
    img1: screen1,
    img2: screen2,
    text1: 'animal supplies',
    text2: 'appliances',
  },
  {
    img1: screen3,
    img2: screen4,
    text1: 'clothing uniforms',
    text2: 'automotive',
  },
  {
    img1: screen5,
    img2: screen6,
    text1: 'electronics',
    text2: 'equipment, tools',
  },
  {
    img1: screen7,
    img2: screen8,
    text1: 'food',
    text2: 'furniture',
  },
  {
    img1: screen9,
    img2: screen10,
    text1: 'healthy, beauty',
    text2: 'household, cleaning',
  },
];

export class HomePublicScene extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      drawer: null,
    };
  }

  // componentDidMount() {
  // }
  closeDrawer(page) {
    const {drawer} = this.state;
    if (page) {
      if (page == 'signIn') {
        Actions.reset(page);
      } else {
        drawer[root].close();
        Actions.push(page);
      }
    } else {
      drawer[root].close();
    }
  }
  openDrawer() {
    const {drawer} = this.state;
    drawer[root].open();
  }
  render() {
    const {menus} = this.props;
    return (
      <Drawer
        ref={ref => {
          this.state.drawer = ref;
        }}
        content={
          <ScrollView style={headerStyle.menuBg}>
            <View style={headerStyle.topView}>
              <Button
                transparent
                full
                style={headerStyle.buttonBack}
                onPress={() => this.closeDrawer()}>
                <Icon name="close" style={headerStyle.iconBack} />
              </Button>
            </View>
            <ListItem
              style={headerStyle.profileDrawView}
              button
              onPress={() => {
                this.closeDrawer('profile');
              }}>
              <Thumbnail
                square
                source={userAvt}
                style={headerStyle.avtDrawStyle}
              />
              <View style={{alignSelf: 'center'}}>
                <Text style={headerStyle.nameDrawStyle}>Cassie Donk</Text>
                <Text style={headerStyle.subNameDraw}>Member since 2019</Text>
              </View>
            </ListItem>
            <View style={headerStyle.listMenuView}>
              {menus.map((item, index) => (
                <ListItem
                  key={index}
                  noIndent
                  noBorder
                  onPress={() => {
                    this.closeDrawer(item.action);
                  }}>
                  <Text>{translate(item.title)}</Text>
                  {item.badge ? (
                    <Badge warning style={headerStyle.badgeStyle}>
                      <Text style={headerStyle.badgeText}>{item.badge}</Text>
                    </Badge>
                  ) : null}
                </ListItem>
              ))}
            </View>
            <View style={headerStyle.listBtnView}>
              <Button
                rounded
                style={headerStyle.settingBtn}
                onPress={() => {
                  this.closeDrawer('setting');
                }}>
                <Text style={headerStyle.settingText}>
                  {translate('setting')}
                </Text>
              </Button>
              <Button
                rounded
                bordered
                style={headerStyle.signOutBtn}
                onPress={() => {
                  this.closeDrawer('signIn');
                }}>
                <Text style={headerStyle.signOutText}>
                  {translate('signOut')}
                </Text>
              </Button>
            </View>
            {/*<View style={headerStyle.mT20}>*/}
            {/*  <ListItem*/}
            {/*    noIndent*/}
            {/*    noBorder*/}
            {/*    onPress={() => {*/}
            {/*      this.closeDrawer('signIn');*/}
            {/*    }}>*/}
            {/*    <View style={headerStyle.logoutIconView}>*/}
            {/*      <Icon*/}
            {/*        name="logout"*/}
            {/*        type="AntDesign"*/}
            {/*        style={headerStyle.logoutIcon}*/}
            {/*      />*/}
            {/*    </View>*/}
            {/*    <Text>Logout</Text>*/}
            {/*  </ListItem>*/}
            {/*</View>*/}
          </ScrollView>
        }
        onClose={() => this.closeDrawer()}
        tweenDuration={180}
        side="left"
        panOpenMask={0.25}>
        <Container>
          <Header
            style={headerStyle.headerBackground}
            iosBarStyle="dark-content"
            androidStatusBarColor="#ffffff">
            <Left
              style={headerStyle.leftView}
              button
              onPress={() => this.openDrawer()}>
              <Button
                transparent
                style={headerStyle.pL0}
                onPress={() => this.openDrawer()}>
                <Icon name="menu" type="Feather" style={headerStyle.iconLeft} />
              </Button>
            </Left>
            <Body style={headerStyle.bodyView}>
              <Row style={styleSignIn.rowCenter}>
                {/* <CustomIcon name='logo' size={27} style={headerStyle.logo}/> */}
                <Text style={headerStyle.homeTitle}>Public Stock</Text>
              </Row>
            </Body>
            <Right style={headerStyle.rightView}>
              <Button transparent style={headerStyle.pR5}
                onPress={() => {
                  Actions.push('search');
                }}
              >
                <Icon
                  name="search"
                  type="Feather"
                  style={headerStyle.iconRight}
                />
              </Button>
              <Button
                transparent
                style={headerStyle.pR0}
                onPress={() => Actions.push('profile')}>
                <Icon
                  name="user-circle-o"
                  type="FontAwesome"
                  style={headerStyle.iconRight}
                />
              </Button>
            </Right>
          </Header>
          <ScrollView style={styles.content}>
            <View style={styles.mb20}>
              {dataImg.map((item, index) => (
                <View key={index} style={styles.gridView}>
                  <View style={styles.colView}>
                    <TouchableHighlight
                      onPress={() => Actions.push('category')}>
                      <View>
                        <Image source={item.img1} style={styles.imgStyle} />
                        <View style={styles.btnView}>
                          <Text style={styles.textStyle}>{item.text1}</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={styles.colView}>
                    <TouchableHighlight
                      onPress={() => Actions.push('listings')}>
                      <View>
                        <Image source={item.img2} style={styles.imgStyle} />
                        <View style={styles.btnView}>
                          <Text style={styles.textStyle}>{item.text2}</Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </Container>
      </Drawer>
    );
  }
}

HomePublicScene.defaultProps = {};

HomePublicScene.propTypes = {
  menus: PropTypes.array.isRequired,
};
const mapStateToProps = createPropsSelector({
  menus: selectMenus,
});
const mapDispatchToProps = dispatch => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePublicScene);

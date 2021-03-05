/**
 *
 * MyShopScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    ActionSheet,
    Button, Card, CardItem, Col, Left, Right,
    Container, Content, Header, Icon, Row, Text, Thumbnail, View, Fab,
} from 'native-base';
import {ImageBackground, ScrollView} from 'react-native';
// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import AppHeaderSignIn from "../../components/AppHeaderSignIn";
import styleSignIn from "../../theme/variables/styleSignIn";
import {Actions} from "react-native-router-flux";
import {blueGrey500} from "../../theme/variables/commonColor";
const bg = require('../../assets/images/Health--Beauty.jpg');
const avatar = require('../../assets/images/Food.png');
const search1 = require('../../assets/images/Appliances.jpg');
const c1 = require('../../assets/images/c1.jpg');
const c2 = require('../../assets/images/c2.jpg');
const c3 = require('../../assets/images/c3.jpg');
const c4 = require('../../assets/images/c4.jpg');
const c5 = require('../../assets/images/c5.jpg');
const c6 = require('../../assets/images/c6.png');
var BUTTONS = [
    { text: "Edit Profile", icon: "md-create"},
    { text: "Verify", icon: "ios-cash"},
    { text: "Logout", icon: "md-log-out"},
    { text: "Cancel", icon: "close"}
];
var BUTTONSORT = [
    { text: "Price is increasing", icon: "ios-arrow-up"},
    { text: "Price descending", icon: "ios-arrow-down"},
    { text: "Bestseller", icon: "ios-flash"},
    { text: "New products", icon: "ios-color-wand"},
    { text: "Default", icon: "ios-filing"},
    { text: "Cancel", icon: "close"}
];
export class MyShopScene extends React.Component { // eslint-disable-line
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
          <AppHeaderSignIn />
          <ScrollView>
              <View>
                  <View style={styles.viewBg}>
                      <ImageBackground source={bg} style={styles.imgBg}>
                          <View style={styles.bgBlackOpacity}>
                              <View>
                                  <Button
                                      transparent
                                      onPress={() => Actions.pop()}>
                                      <Icon
                                          style={[styleSignIn.iconClose, styleSignIn.colorWhite]}
                                          name="left"
                                          type="AntDesign"
                                      />
                                  </Button>
                              </View>
                              <View style={styles.viewDot}>
                                  <Button
                                      transparent
                                      onPress={() =>
                                          ActionSheet.show(
                                              {
                                                  options: BUTTONS,
                                                  cancelButtonIndex: 3,
                                              },
                                              buttonIndex => {
                                                  if( buttonIndex === 0 ) {
                                                      Actions.push('editProfile');
                                                  }
                                                  if( buttonIndex === 1 ) {
                                                      Actions.push('verify');
                                                  }
                                                  if( buttonIndex === 2 ) {
                                                      Storage.delete('currentUser');
                                                      Actions.reset('signIn');
                                                  }
                                                  this.setState({ clicked: BUTTONS[buttonIndex] })
                                              },
                                          )}
                                  >
                                      <Icon
                                      style={styleSignIn.colorWhite}
                                      name="dots-horizontal"
                                      type="MaterialCommunityIcons"
                                      />
                                  </Button>
                              </View>
                              <View style={styles.cameraBg}>
                                  <Button style={styles.btnEditBg}>
                                      <Icon
                                          name="photo-camera"
                                          type="MaterialIcons"
                                          style={styles.iconCamera}
                                      />
                                  </Button>
                              </View>
                              <View>
                                  <View>
                                      <Text style={styles.nameShop}>Some By Me Cosmetic</Text>
                                      <View style={styles.viewThumbnail}>
                                          <Thumbnail source={avatar} style={styles.avatar}/>
                                          <Button
                                              style={styles.btnEdit}
                                          >
                                              <Icon
                                                  style={styles.iconCamera}
                                                  name="photo-camera"
                                                  type="MaterialIcons"
                                              />
                                          </Button>
                                      </View>
                                      <View style={styles.viewRow}>
                                          <Row style={styles.rowStyle}>
                                              <Col>
                                                  <View>
                                                      <Text style={styles.nameShop}>12</Text>
                                                      <Text style={[styles.nameShop,styles.followStyle]}>Follow</Text>
                                                  </View>
                                              </Col>
                                              <Col>
                                                  <View>
                                                      <Text style={styles.nameShop}>82</Text>
                                                      <Text style={[styles.nameShop,styles.followStyle]}>Follow</Text>
                                                  </View>
                                              </Col>
                                              <Col>
                                                  <View>
                                                      <Text style={styles.nameShop}>34</Text>
                                                      <Text style={[styles.nameShop,styles.followStyle]}>Follow</Text>
                                                  </View>
                                              </Col>
                                          </Row>
                                      </View>
                                  </View>
                              </View>
                          </View>
                      </ImageBackground>
                  </View>
                  {/*<View padder>*/}
                  {/*    <View style={[styleSignIn.pV5]}>*/}
                  {/*        <Row style={[styleSignIn.rowCenter, styleSignIn.mb5]}>*/}
                  {/*            <Icon name="staro" type="AntDesign" style={styles.iconStar}/>*/}
                  {/*            <Text style={styles.textStar}>*/}
                  {/*                Rating:*/}
                  {/*            </Text>*/}
                  {/*            <Text style={styles.textMain}>N/A </Text>*/}
                  {/*            <Text style={styles.textExtra}> (1 Ratings)</Text>*/}
                  {/*        </Row>*/}
                  {/*        <Row style={[styleSignIn.rowCenter, styleSignIn.mb5]}>*/}
                  {/*            <Icon name="dingding" type="AntDesign" style={styles.iconStar}/>*/}
                  {/*            <Text style={styles.textStar}>*/}
                  {/*                Ship out time:*/}
                  {/*            </Text>*/}
                  {/*            <Text style={styles.textMain}>Very Fast </Text>*/}
                  {/*            <Text style={styles.textExtra}> (Within 12 hours)</Text>*/}
                  {/*        </Row>*/}
                  {/*        <Row style={[styleSignIn.rowCenter, styleSignIn.mb5]}>*/}
                  {/*            <Icon name="isv" type="AntDesign" style={styles.iconStar}/>*/}
                  {/*            <Text style={styles.textStar}>*/}
                  {/*                Products:*/}
                  {/*            </Text>*/}
                  {/*            <Text style={styles.textMain}>14520 </Text>*/}
                  {/*        </Row>*/}
                  {/*    </View>*/}
                  {/*</View>*/}

                  <View style={styleSignIn.pH15}>
                      <View>
                          <CardItem style={styles.titleCard}>
                              <Left>
                                  <Text style={[styles.titleCategory, styleSignIn.ml0]}>All Products</Text>
                              </Left>
                              <Right>
                                  <Button
                                      transparent
                                      onPress={() =>
                                          ActionSheet.show(
                                              {
                                                  options: BUTTONSORT,
                                                  cancelButtonIndex: 5,
                                              },
                                              buttonIndex => {
                                                  this.setState({ clicked: BUTTONSORT[buttonIndex] })
                                              },
                                          )}
                                  >
                                      <Icon
                                          style={{ color: blueGrey500 }}
                                          name="dots-horizontal"
                                          type="MaterialCommunityIcons"
                                      />
                                  </Button>
                              </Right>

                          </CardItem>
                      </View>
                      <View>
                         <Row>
                             <Col
                                 style={styleSignIn.p3}
                                  button
                                  onPress={() => Actions.push('productDetail')}>
                                 <ImageBackground source={c1} style={styleSignIn.imgShop}/>
                                 <Text style={styles.titleContent} numberOfLines={2}>
                                     Quality Soccer Jerseys Wholesale Personalized Uniform Kits Custom
                                 </Text>
                                 <Row style={styleSignIn.rowCenter}>
                                     <Text style={styles.textPrice}>$120</Text>
                                     <Text style={styles.textPriceSale}>
                                         $42
                                     </Text>
                                 </Row>
                             </Col>
                             <Col
                                 style={styleSignIn.p3}
                                 button
                                 onPress={() => Actions.push('productDetail')}
                             >
                                 <ImageBackground source={c2} style={styleSignIn.imgShop}/>
                                 <Text style={styles.titleContent} numberOfLines={2}>
                                     Quality Soccer Jerseys Wholesale Personalized Uniform Kits Custom
                                 </Text>
                                 <Row style={styleSignIn.rowCenter}>
                                     <Text style={styles.textPrice}>$120</Text>
                                     <Text style={styles.textPriceSale}>
                                         $42
                                     </Text>
                                 </Row>
                             </Col>
                         </Row>
                          <Row>
                              <Col
                                  style={styleSignIn.p3}
                                  button
                                  onPress={() => Actions.push('productDetail')}
                              >
                                  <ImageBackground source={c3} style={styleSignIn.imgShop}/>
                                  <Text style={styles.titleContent} numberOfLines={2}>
                                      Quality Soccer Jerseys Wholesale Personalized Uniform Kits Custom
                                  </Text>
                                  <Row style={styleSignIn.rowCenter}>
                                      <Text style={styles.textPrice}>$120</Text>
                                      <Text style={styles.textPriceSale}>
                                          $42
                                      </Text>
                                  </Row>
                              </Col>
                              <Col
                                  style={styleSignIn.p3}
                                  button
                                  onPress={() => Actions.push('productDetail')}
                              >
                                  <ImageBackground source={c4} style={styleSignIn.imgShop}/>
                                  <Text style={styles.titleContent} numberOfLines={2}>
                                      Quality Soccer Jerseys Wholesale Personalized Uniform Kits Custom
                                  </Text>
                                  <Row style={styleSignIn.rowCenter}>
                                      <Text style={styles.textPrice}>$120</Text>
                                      <Text style={styles.textPriceSale}>
                                          $42
                                      </Text>
                                  </Row>
                              </Col>
                          </Row>
                          <Row>
                              <Col
                                  style={styleSignIn.p3}
                                  button
                                  onPress={() => Actions.push('productDetail')}
                              >
                                  <ImageBackground source={c5} style={styleSignIn.imgShop}/>
                                  <Text style={styles.titleContent} numberOfLines={2}>
                                      Quality Soccer Jerseys Wholesale Personalized Uniform Kits Custom
                                  </Text>
                                  <Row style={styleSignIn.rowCenter}>
                                      <Text style={styles.textPrice}>$120</Text>
                                      <Text style={styles.textPriceSale}>
                                          $42
                                      </Text>
                                  </Row>
                              </Col>
                              <Col
                                  style={styleSignIn.p3}
                                  button
                                  onPress={() => Actions.push('productDetail')}
                              >
                                  <ImageBackground source={c6} style={styleSignIn.imgShop}/>
                                  <Text style={styles.titleContent} numberOfLines={2}>
                                      Quality Soccer Jerseys Wholesale Personalized Uniform Kits Custom
                                  </Text>
                                  <Row style={styleSignIn.rowCenter}>
                                      <Text style={styles.textPrice}>$120</Text>
                                      <Text style={styles.textPriceSale}>
                                          $42
                                      </Text>
                                  </Row>
                              </Col>
                          </Row>
                      </View>
                      {/*<View style={generalStyle.viewB}>*/}
                      {/*    <Button style={generalStyle.buttonShow}>*/}
                      {/*        <Text style={generalStyle.signText}>*/}
                      {/*            {translate('showAll')}*/}
                      {/*        </Text>*/}
                      {/*    </Button>*/}
                      {/*</View>*/}
                  </View>
              </View>
          </ScrollView>
          <Fab
              direction="up"
              position="bottomRight"
              style={styleSignIn.fabStyle}
              onPress={() => {
                  Actions.push('chat');
              }}>
              <Icon name="chat" type="Entypo" />
          </Fab>
      </Container>
    );
  }
}

MyShopScene.defaultProps = {
};

MyShopScene.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(MyShopScene);

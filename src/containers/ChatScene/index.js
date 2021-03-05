/**
 *
 * ChatScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Body,
    Button, CardItem,
    Container, Content, Footer, Header, Icon, Left, Right, Row, Text, Textarea, Thumbnail, View,
} from 'native-base';
import { ScrollView, Image } from 'react-native';
// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import { iconBack, blueMain, brandSuccess } from '../../theme/variables/commonColor';
import headerStyle from "../../theme/variables/headerStyle";
import styleSignIn from "../../theme/variables/styleSignIn";
export class ChatScene extends React.Component { // eslint-disable-line
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
          <Header
              iosBarStyle="dark-content"
              androidStatusBarColor="#fff"
              transparent
              style={styles.headerEven}
          >
              <Body style={[styles.headerEven, styles.flexStartBran]}>
                  <CardItem style={[styles.cardItemHeader, styleSignIn.pt0,styleSignIn.pb0]}>
                      <Left style={styles.leftFeedDetail}>
                          <Button
                              transparent
                              onPress={() => {
                                  Actions.pop();
                              }}
                              style={styles.leftBtnFeedDetail}
                          >
                              <Icon
                                  name="angle-left" type="FontAwesome"
                                  style={styles.iconBackFeedDetail}
                              />
                          </Button>
                      </Left>
                      <Body style={styles.flex}>
                          <View style={styles.viewPositionDetail}>
                              <Thumbnail
                                  small
                                  source={require('../../assets/images/user.jpg')}
                                  style={styles.avtHeader}
                              />
                          </View>
                          <View>
                              <Text
                                  style={[
                                      styles.titleStyleFeedDetail,
                                      styles.titleStyleFeedLine2,
                                  ]}
                              >
                                  SOME BY ME
                              </Text>
                              <View style={styles.flex}>
                                  <Text
                                      style={[
                                          styles.subTitleFeedDetail,
                                          { color: brandSuccess },
                                      ]}
                                  >
                                     Online
                                  </Text>
                              </View>
                          </View>
                      </Body>
                  </CardItem>
              </Body>
          </Header>
          <ScrollView
              style={styles.contentStyle}
          >
              <View style={styles.viewCard}>
                  {/*<View style={styles.viewText}>*/}
                  {/*    <Text style={styles.todayStyle}>Today</Text>*/}
                  {/*</View>*/}
                  {/* Left */}
                  <View>
                      <Left style={styles.textLeft}>
                          <CardItem style={styles.cardT}>
                              <Left style={styles.thumbT}>
                                  <Thumbnail
                                      style={styles.thumbnailImage}
                                      small
                                      source={require('../../assets/images/c1.jpg')}
                                  />
                              </Left>
                              <Body style={[styles.bodyT, styles.bodyLeft]}>
                                  <View style={styles.viewTextLeft}>
                                      <Text style={styles.textMessFirst}>
                                          Hey when are you going?
                                      </Text>
                                      <Text style={styles.time}>9:45AM</Text>
                                  </View>
                              </Body>
                          </CardItem>
                      </Left>
                  </View>
                  {/* Right */}
                  <View>
                      <Right style={[styles.textLeft, styles.textRight]}>
                          <CardItem style={styles.cardT}>
                              <Body style={styles.bodyT}>
                                  <View style={[styles.viewTextLeft, styles.viewTextRight]}>
                                      <Text style={styles.textMessFirst}>
                                          Wednesday, Next week
                                      </Text>
                                      <Text style={styles.time}>9:45AM</Text>
                                  </View>
                              </Body>
                          </CardItem>
                      </Right>
                  </View>
                  {/* Left */}
                  <View>
                      <Left style={styles.textLeft}>
                          <CardItem style={styles.cardT}>
                              <Left style={styles.thumbT}>
                                  <Thumbnail
                                      style={styles.thumbnailImage}
                                      small
                                      source={require('../../assets/images/c1.jpg')}
                                  />
                              </Left>
                              <Body style={[styles.bodyT, styles.bodyLeft]}>
                                  <View style={styles.viewTextLeft}>
                                      <Text style={[styles.textMessFirst, styles.textMessLong]}>
                                          Sounds perfect. I have to go through a few things, then
                                          I am ready.
                                      </Text>
                                      <Text style={styles.time}>9:45AM</Text>
                                  </View>
                                  <View style={styles.viewImage}>
                                      <Image
                                          style={styles.styleImage}
                                          source={require('../../assets/images/c1.jpg')}
                                      />
                                      <View style={styles.Opp}>
                                          <Text style={styles.textOpp}>
                                              www.business.club/123456
                                          </Text>
                                      </View>
                                  </View>
                                  <View style={[styles.viewTextLeft, styles.viewTextImage]}>
                                      <Text style={[styles.textMessFirst, styles.textMessLong]}>
                                          Sounds perfect. I have to go through a few things, then
                                          I am ready.
                                      </Text>
                                      <Text style={styles.time}>9:45AM</Text>
                                  </View>
                              </Body>
                          </CardItem>
                      </Left>
                  </View>
                  {/* Left */}
                  {/* Right */}
                  <View>
                      <Right style={[styles.textLeft, styles.textRight]}>
                          <CardItem style={styles.cardT}>
                              <Body style={styles.bodyT}>
                                  <View style={[styles.viewTextLeft, styles.viewTextRight]}>
                                      <Text style={styles.textMessFirst}>
                                          Wednesday, Next week
                                      </Text>
                                      <Text style={styles.time}>9:45AM</Text>
                                  </View>
                                  <View style={[styles.viewTextLeft, styles.viewTextRight]}>
                                      <Text style={styles.textMessFirst}>Hello</Text>
                                      <Text style={styles.time}>9:45AM</Text>
                                  </View>
                              </Body>
                          </CardItem>
                      </Right>
                  </View>
                  {/* Left */}
                  <View>
                      <Left style={styles.textLeft}>
                          <CardItem style={styles.cardT}>
                              <Left style={styles.thumbT}>
                                  <Thumbnail
                                      style={styles.thumbnailImage}
                                      small
                                      source={require('../../assets/images/c1.jpg')}
                                  />
                              </Left>
                              <Body style={[styles.bodyT, styles.bodyLeft]}>
                                  <View style={[styles.viewTextLeft, styles.dotStyle]}>
                                      <Row>
                                          <Icon
                                              type="Entypo"
                                              name="controller-record"
                                              style={styles.iconDot}
                                          />
                                          <Icon
                                              type="Entypo"
                                              name="controller-record"
                                              style={[styles.iconDot, styles.iconDotSecond]}
                                          />
                                          <Icon
                                              type="Entypo"
                                              name="controller-record"
                                              style={[styles.iconDot, styles.iconDotThirst]}
                                          />
                                      </Row>
                                  </View>
                              </Body>
                          </CardItem>
                      </Left>
                  </View>
              </View>
          </ScrollView>
          <Footer style={styles.footerMess}>
              <Left style={styles.leftFooter}>
                  <Button transparent>
                      <Icon style={styles.iconAdd} type="MaterialIcons" name="add" />
                  </Button>
              </Left>
              <Body style={styles.bodyFooter}>
                  <Textarea
                      multiline={true}
                      style={styles.textareaMess}
                      placeholder={translate('writeMessage')}
                      placeholderTextColor={iconBack}
                  />
              </Body>
              <Right style={styles.iconMicroRight}>
                  <Button transparent>
                      {/*<Icon*/}
                      {/*    style={styles.iconMicro}*/}
                      {/*    type="MaterialCommunityIcons"*/}
                      {/*    name="microphone"*/}
                      {/*/>*/}
                       <Icon
                       style={styles.iconMicro}
                       type="MaterialIcons"
                       name="send"
                       />
                  </Button>
              </Right>
          </Footer>
      </Container>
    );
  }
}

ChatScene.defaultProps = {
};

ChatScene.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(ChatScene);

/**
 *
 * ShoppingCartScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    Button, CardItem, Col, Card,
    Container, Content, Icon, Row, Text, View, Item, Input, Footer
} from 'native-base';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import AppHeaderSignIn from "../../components/AppHeaderSignIn";
import {ImageBackground, ScrollView} from "react-native";
import styleSignIn from "../../theme/variables/styleSignIn";
import {Actions} from "react-native-router-flux";
import FooterView from "../../../storybook/FooterView";
import {blueGrey200} from "../../theme/variables/commonColor";
const search1 = require('../../assets/images/Appliances.jpg');
const search2 = require('../../assets/images/Automotive-Accessories.jpg');
const search3 = require('../../assets/images/Cars.jpg');
const search4 = require('../../assets/images/Children.jpg');
const search5 = require('../../assets/images/Clothing.jpg');
const Search = [
    {
        img: search1,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text,',
        price: 40,
        priceSale: 20,
    },
    {
        img: search2,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text,',
        price: 40,
        priceSale: 20,
    },
    {
        img: search3,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text,',
        price: 40,
        priceSale: 20,
    },
    {
        img: search4,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text,',
        price: 40,
        priceSale: 20,
    },
    {
        img: search5,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text,',
        price: 40,
        priceSale: 10,
    },
];
export class ShoppingCartScene extends React.Component { // eslint-disable-line
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
              <View padder>
                  <View style={styleSignIn.mtA5}>
                      <Button
                          transparent
                          onPress={() => Actions.pop()}>
                          <Icon
                              name="close"
                              type="AntDesign"
                              style={styles.iconClose}
                          />
                      </Button>
                      <Text style={[styleSignIn.textTitleSearch, styleSignIn.mb5]}>
                          My Cart
                      </Text>
                  </View>
                  <View>
                      {Search.map((value, key) => {
                          return (
                          <Card style={[styleSignIn.mb10, styles.myCard]} key={key}>
                              <Row>
                                  <CardItem
                                      button
                                      onPress={() => Actions.push('productDetail')}
                                      style={[styleSignIn.pl0, styleSignIn.pr0, styleSignIn.pt0, styleSignIn.pb0]}>
                                      <View style={styles.viewImg}>
                                          <ImageBackground source={value.img} style={styles.imgContent}/>
                                      </View>
                                  </CardItem>
                                  <CardItem
                                      button
                                      onPress={() => Actions.push('productDetail')}
                                      style={[styleSignIn.pl5, styleSignIn.pr5, styleSignIn.pt0, styleSignIn.pb0]}>
                                      <View style={styleSignIn.pt7}>
                                          <Text style={styles.titleContent}>{value.title}</Text>
                                          <Text style={styles.textContent}>
                                              {value.content}
                                          </Text>
                                          <Row style={styles.rowCenter}>
                                              <Text style={styles.textPrice}>${value.price}</Text>
                                              <Text style={styles.textPriceSale}>${value.priceSale}</Text>
                                          </Row>
                                          <Row style={[styleSignIn.pl5, styleSignIn.pt7]}>
                                              <Button
                                                  style={[
                                                      styleSignIn.pt0,
                                                      styleSignIn.pb0,
                                                      styles.btnPlus
                                                      ]}
                                              >
                                                  <Icon name='minus' type="AntDesign" style={[styleSignIn.ml0, styleSignIn.mr0, styles.iconPlus]}/>
                                              </Button>
                                              <Text style={[styles.titleContent, styleSignIn.pr12, styleSignIn.pl12]}>2</Text>
                                              <Button
                                                  style={[
                                                      styleSignIn.pt0,
                                                      styleSignIn.pb0,
                                                      styles.btnPlus
                                                  ]}
                                              >
                                                  <Icon name='plus' type="AntDesign" style={[styleSignIn.ml0, styleSignIn.mr0, styles.iconPlus]}/>
                                              </Button>
                                          </Row>
                                      </View>
                                  </CardItem>
                              </Row>
                          </Card>
                      );
                      })}
                  </View>
              </View>
          </ScrollView>
          <Footer style={styles.footerCart}>
              <View padder>
                  <Row style={[styles.rowCenter, {height: 40}]}>
                      <Item regular style={styles.searchItem}>
                          <Input
                              style={styles.inputSearch}
                              placeholder="Enter your promo code"
                              placeholderTextColor={blueGrey200}
                          />
                      </Item>
                      <View>
                          <Button
                              style={[
                                  styleSignIn.pt0,
                                  styleSignIn.pb0,
                                  styles.btnPromo
                              ]}
                          >
                              <Icon
                                  style={[
                                      styleSignIn.ml0,
                                      styleSignIn.mr0,
                                      styles.btnIconPromo
                                  ]}
                                  name='arrowright' type='AntDesign'/>
                          </Button>
                      </View>
                  </Row>
                  <Row style={[styles.rowCenter, styleSignIn.mt5, {height: 40}]}>
                      <Col>
                          <Text style={styles.titlePrice}>
                              Total amount:
                          </Text>
                      </Col>
                      <Col>
                          <Text style={[styles.textPriceSale, styles.textTotal]}>$254</Text>
                      </Col>
                  </Row>
                  <Button
                      style={styles.btnNext}
                      primary
                      block
                  >
                      <Text
                          style={styles.textNext}
                          onPress={() => {
                              Actions.reset('homePublic');
                          }}
                      >CHECK OUT</Text>
                  </Button>
              </View>
          </Footer>
      </Container>
    );
  }
}

ShoppingCartScene.defaultProps = {
};

ShoppingCartScene.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(ShoppingCartScene);

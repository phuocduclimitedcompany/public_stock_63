/**
 *
 * ProductDetailScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
// import { Actions } from 'react-native-router-flux';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Text,
  View,
  Thumbnail,
  Footer,
  Row,
  Col,
  Card,
  CardItem,
  Badge,
  Grid,
} from 'native-base';
import {
  Image,
  Dimensions,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import headerStyle from '../../theme/variables/headerStyle';
import generalStyle from '../../theme/variables/generalStyle';
import {Actions} from 'react-native-router-flux';
import styleSignIn from '../../theme/variables/styleSignIn';
let {height} = Dimensions.get('window');

if (Platform.OS !== 'ios') {
  height -= 25;
}

const sl1 = require('../../assets/images/Electronics.jpg');
const avatar = require('../../assets/images/Food.png');
const user = require('../../assets/images/user_default.png');
const c1 = require('../../assets/images/c1.jpg');
const c2 = require('../../assets/images/c2.jpg');
const c3 = require('../../assets/images/c3.jpg');
const c4 = require('../../assets/images/c4.jpg');
const c5 = require('../../assets/images/c5.jpg');
const c6 = require('../../assets/images/c6.png');
const slide = [{img: sl1}, {img: sl1}, {img: sl1}];
const listDetail = [
  {
    title: 'stock',
    main: '11',
  },
  {
    title: 'trademark',
    main: 'Apple Company',
  },
  {
    title: 'color',
    main: 'black/white/grey',
  },
  {
    title: 'guarantee',
    main: '3 months',
  },
  {
    title: 'origin',
    main: 'California, USA',
  },
];
// const listReview = [
//   {
//     name: 'KimSine',
//     date: 'October 10, 2019',
//   },
//   {
//     name: 'Matilda Brown',
//     date: 'October 05, 2019',
//   },
//   {
//     name: 'Edward Kelly',
//     date: 'October 01, 2019',
//   },
//   {
//     name: 'Mattie Benson',
//     date: 'September 28, 2019',
//   },
// ];
const listSameShop = [
  {img: c1, price: '24', priceOld: '32'},
  {img: c2, price: '44', priceOld: ''},
  {img: c3, price: '60', priceOld: ''},
  {img: c4, price: '58', priceOld: '66'},
  {img: c5, price: '98', priceOld: '100'},
];
const listRecommendShop = [
  {img: c1, price: '100', sale: '50%', priceOld: '200', sold: 3},
  {img: c2, price: '112', sale: '30%', priceOld: '160', sold: 1},
  {img: c3, price: '96.8', sale: '56%', priceOld: '220', sold: 22},
  {img: c4, price: '104.3', sale: '45%', priceOld: '189.5', sold: 15},
  {img: c5, price: '144', sale: '20%', priceOld: '180', sold: 8},
];
const MAX_ITEMS = 1;
export class ProductDetailScene extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      iconHeart: 'hearto',
      iconLike: 'like2',
      checked: false,
      liked: false,
      add: null,
      badgeShow: false,
      isOpen: false,
    };
    this.listReview = [
      {
        name: 'KimSine',
        date: 'October 10, 2019',
      },
      {
        name: 'Matilda Brown',
        date: 'October 05, 2019',
      },
      {
        name: 'Edward Kelly',
        date: 'October 01, 2019',
      },
      {
        name: 'Mattie Benson',
        date: 'September 28, 2019',
      },
    ];
  }

  _checkValue = () => {
    this.setState(likeState => {
      return {
        iconHeart: 'heart',
        checked: true,
      };
    });
  };

  _unCheckValue = () => {
    this.setState(likeState => {
      return {
        iconHeart: 'hearto',
        checked: false,
      };
    });
  };

  _addCard = () => {
    this.setState(addState => {
      return {
        add: 1,
        badge: true,
      };
    });
  };

  goToTop = () => {
    this.scroll.scrollTo({x: 0, y: 0, animated: true});
  };

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  getRenderedItems() {
    if (this.state.isOpen) {
      return this.listReview;
    }
    return this.listReview.slice(0, MAX_ITEMS);
  }

  render() {
    return (
      <Container>
        <Header
          style={headerStyle.headerBackground}
          iosBarStyle="dark-content"
          androidStatusBarColor="#ffffff">
          <Left style={headerStyle.leftView} button>
            <Button
              style={headerStyle.btnLeft}
              transparent
              onPress={() => Actions.pop()}>
              <Icon
                name="angle-left"
                type="FontAwesome"
                style={headerStyle.iconLeft}
              />
              <Text style={headerStyle.textLeft}>{translate('back')}</Text>
            </Button>
          </Left>
          <Body style={headerStyle.bodyView}>
            <Text style={headerStyle.pageTitle}>Apple iPad</Text>
          </Body>
          <Right style={headerStyle.rightView}>
            <Button
              transparent
              style={{paddingRight: 8}}
              onPress={() => Actions.push('shoppingCart')}>
              <Icon
                name="shopping-cart"
                type="MaterialIcons"
                style={headerStyle.iconRight}
              />
              {this.state.add ? (
                <Badge warning style={headerStyle.badgeCartStyle}>
                  <Text style={headerStyle.badgeText}>{this.state.add}</Text>
                </Badge>
              ) : null}
            </Button>
            <Button transparent style={{paddingRight: 5}}>
              <Icon name="dots-horizontal" type="MaterialCommunityIcons" style={headerStyle.iconRight} />
            </Button>
          </Right>
        </Header>
        <ScrollView
          style={styles.content}
          ref={c => {
            this.scroll = c;
          }}>
          <Carousel
            style={styles.carousel}
            leftArrowText=""
            leftArrowStyle={styles.arrowStyle}
            rightArrowText=""
            rightArrowStyle={styles.arrowStyle}
            // arrows
            bullets
            bulletsContainerStyle={styles.bulletContainerStyle}
            bulletStyle={styles.bulletsStyle}
            chosenBulletStyle={styles.chosenStyle}
            isLooped={true}
            autoplay={true}>
            {slide.map((value, key) => (
              <View key={key}>
                <ImageBackground source={value.img} style={styles.imgSlide} />
              </View>
            ))}
          </Carousel>
          <View style={styles.nameProductView}>
            <View style={styles.nameProductTop}>
              <Text style={styles.nameProduct}>
                Apple iPad 2 32GB, Wi-Fi, 9.7in - Black (CA)
              </Text>
              <Button
                transparent
                onPress={() => {
                  this.state.checked === false
                    ? this._checkValue()
                    : this._unCheckValue();
                }}>
                <Icon
                  name={this.state.iconHeart}
                  type="AntDesign"
                  style={styles.heartStyle}
                />
              </Button>
            </View>
            <View style={styles.nameProductBottom}>
              <Text style={styles.priceStyle}>$75.99</Text>
              <View style={generalStyle.starView}>
                <Icon
                  name="star"
                  type="FontAwesome"
                  style={generalStyle.starFull}
                />
                <Icon
                  name="star"
                  type="FontAwesome"
                  style={generalStyle.starFull}
                />
                <Icon
                  name="star"
                  type="FontAwesome"
                  style={generalStyle.starFull}
                />
                <Icon
                  name="star-half-full"
                  type="FontAwesome"
                  style={generalStyle.starHalf}
                />
                <Icon
                  name="star-o"
                  type="FontAwesome"
                  style={generalStyle.starOutLine}
                />
              </View>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 6}}>
            {/*<Grid style={{justifyContent: 'space-around', display: 'flex'}}>*/}
            <View style={styles.itemView}>
              <Icon name="truck" type="Feather" style={styles.itemIcon} />
              <Text style={styles.itemText}>Free Shipping</Text>
            </View>
            <View style={styles.itemView}>
              <Icon name="clock" type="Feather" style={styles.itemIcon} />
              <Text style={styles.itemText}>24 hours delivery</Text>
            </View>
            <View style={styles.itemView}>
              <Icon
                name="creditcard"
                type="AntDesign"
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>Payment with card</Text>
            </View>
            {/*</Grid>*/}
          </ScrollView>
          <View style={styles.nameProductView}>
            <Text style={styles.descritionStyle}>Product Details</Text>
            <Text style={styles.descritionText}>
              Duis dolor est, tincidunt vel enim sit amet
            </Text>
            <Text style={styles.descritionText}>
              Venenatis euismod neque. Duis eleifend ligula id tortor finibus
              faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin
              mauris. Donec orci enim, bibendum a augue quis, aliquet cursus
              quam. Pellentesque pulvinar, elit at condimentum dictum, sapien
              nibh auctor tortor, vel vulputate sapien tortor et velit. Sed
              nulla nisi, congue eu quam vel, molestie gravida.
            </Text>
            <Text style={styles.descritionText}>
              Duis dolor est, tincidunt vel enim sit amet, venenatis euismod
              neque. Duis eleifend ligula id tortor finibus faucibus. Donec et
              quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci
              enim, bibendum a augue quis, aliquet cursus quam. Pellentesque
              pulvinar, elit at condimentum dictum, sapien nibh auctor tortor
            </Text>
            <List style={styles.listView}>
              {listDetail.map((item, key) => (
                <ListItem noBorder style={styles.listItemView}>
                  <Left style={{flex: 0, width: 130}}>
                    <Text style={styles.productDetailTitle}>{item.title}</Text>
                  </Left>
                  <Body style={{flex: 1}}>
                    <Text style={styles.productDetailMain}>{item.main}</Text>
                  </Body>
                </ListItem>
              ))}
            </List>
          </View>
          <View style={styles.nameProductView}>
            <View style={generalStyle.flexRowBetween}>
              <View style={generalStyle.flexRow}>
                <Text style={styles.descritionStyle}>Product Review</Text>
                <Text style={styles.numReview}>(5 Reviews)</Text>
              </View>
              <View>
                <Button transparent style={styles.moreBtn}>
                  <Icon
                    name="dots-horizontal"
                    type="MaterialCommunityIcons"
                    style={styles.moreIcon}
                  />
                </Button>
              </View>
            </View>
            <View>
              {this.getRenderedItems().map((value, id) => (
                <Card key={id}>
                  <CardItem style={generalStyle.pB0}>
                    <Thumbnail source={user} style={styles.avtReview} />
                    <View>
                      <Text style={styles.userName}>{value.name}</Text>
                      <View style={generalStyle.starView}>
                        <Icon
                          name="star"
                          type="FontAwesome"
                          style={generalStyle.starFull}
                        />
                        <Icon
                          name="star"
                          type="FontAwesome"
                          style={generalStyle.starFull}
                        />
                        <Icon
                          name="star"
                          type="FontAwesome"
                          style={generalStyle.starFull}
                        />
                        <Icon
                          name="star-half-full"
                          type="FontAwesome"
                          style={generalStyle.starHalf}
                        />
                        <Icon
                          name="star-o"
                          type="FontAwesome"
                          style={generalStyle.starOutLine}
                        />
                      </View>
                    </View>
                    <View style={generalStyle.leftAuto}>
                      <Text style={styles.dateReview}>{value.date}</Text>
                    </View>
                  </CardItem>
                  <CardItem style={generalStyle.pB0}>
                    <Text style={styles.descritionText}>
                      Pellentesque pulvinar, sapien nibh auctor tortor, vel
                      vulputate sapien tortor et velit. Sed nulla nisi, c`ongue
                      eu quam vel, molestie gravida.
                    </Text>
                  </CardItem>
                  <CardItem style={generalStyle.pT0}>
                    <Button transparent style={styles.likeBtn}>
                      <Text style={[styles.dateReview, headerStyle.pR5]}>
                        Helpful
                      </Text>
                      <Icon
                        name={this.state.iconLike}
                        type="AntDesign"
                        style={styles.likeIcon}
                      />
                    </Button>
                  </CardItem>
                </Card>
              ))}
              <Button block transparent onPress={this.toggle} style={styles.moreBtn}>
                <Text style={generalStyle.moreText}>{this.state.isOpen ? 'less' : 'more'}</Text>
              </Button>
            </View>
          </View>
          <Card transparent style={styles.shopView}>
            <CardItem
              button
              style={styles.profileView}
              noBorder
              onPress={() => Actions.push('myShop')}>
              <Thumbnail source={avatar} style={styles.avtStyle} />
              <View style={styles.nameView}>
                <Text style={styles.nameStyle}>Some By Me</Text>
                <Text style={styles.subName}>since 2019</Text>
              </View>
              <Button
                bordered
                style={styles.viewShopBtn}
                onPress={() => Actions.push('myShop')}>
                <Text style={styles.viewShopText}>View Shop</Text>
              </Button>
            </CardItem>
            <CardItem
              button
              style={{paddingTop: 5}}
              onPress={() => Actions.push('myShop')}>
              <Row>
                <Col>
                  <Text style={styles.itemNum}>12</Text>
                  <Text style={styles.itemNumText}>Products</Text>
                </Col>
                <Col style={styles.border}>
                  <Text style={styles.itemNum}>4.5</Text>
                  <Text style={styles.itemNumText}>Rating</Text>
                </Col>
                <Col>
                  <Text style={styles.itemNum}>95%</Text>
                  <Text style={styles.itemNumText}>Response</Text>
                </Col>
              </Row>
            </CardItem>
          </Card>
          <View style={styles.nameProductView}>
            <Text style={styles.descritionStyle}>From the same shop</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {listSameShop.map((value, key) => (
                <Card key={key} transparent style={[styles.itemSameShop]}>
                  <CardItem cardBody>
                    <Image source={value.img} style={styles.itemSameImg} />
                  </CardItem>
                  <CardItem style={styles.itemSameTitle}>
                    <Text style={styles.titleItem} numberOfLines={2}>
                      Quality Soccer Jerseys Wholesale Personalized Uniform Kits
                      Custom
                    </Text>
                  </CardItem>
                  <CardItem style={styles.itemSameTitle}>
                    {value.priceOld ? (
                      <Text style={styles.textPriceItem}>
                        ${value.priceOld}
                      </Text>
                    ) : null}
                    <Text style={styles.textPriceSale}>${value.price}</Text>
                  </CardItem>
                </Card>
              ))}
            </ScrollView>
          </View>
          <View style={styles.nameProductView2}>
            <Text style={styles.descritionStyle2}>Recommend for you</Text>
            <Grid style={styles.gridRecommend}>
              {listRecommendShop.map((item, key) => (
                <Col key={key} style={styles.colRecommend}>
                  <ImageBackground
                    source={item.img}
                    style={styles.imgRecommend}
                  />
                  <Text style={styles.titleItem} numberOfLines={2}>
                    Quality Soccer Jerseys Wholesale Personalized Uniform Kits
                    Custom
                  </Text>
                  <View style={[generalStyle.flexRowBetween, generalStyle.mT5]}>
                    <Text style={styles.textPriceSale}>${item.price}</Text>
                    <View style={generalStyle.starView}>
                      <Icon
                        name="star"
                        type="FontAwesome"
                        style={generalStyle.starFull}
                      />
                      <Icon
                        name="star"
                        type="FontAwesome"
                        style={generalStyle.starFull}
                      />
                      <Icon
                        name="star"
                        type="FontAwesome"
                        style={generalStyle.starFull}
                      />
                      <Icon
                        name="star-half-full"
                        type="FontAwesome"
                        style={generalStyle.starHalf}
                      />
                      <Icon
                        name="star-o"
                        type="FontAwesome"
                        style={generalStyle.starOutLine}
                      />
                    </View>
                  </View>
                  <View style={generalStyle.flexRowBetween}>
                    <View style={generalStyle.flexRow}>
                      <Text style={styles.textPriceItem}>${item.priceOld}</Text>
                      <Text style={styles.saleItem}>{item.sale}</Text>
                    </View>
                    <View>
                      <Text style={styles.soldItem}>({item.sold} sold)</Text>
                    </View>
                  </View>
                </Col>
              ))}
            </Grid>
          </View>
        </ScrollView>
        {/*<Button*/}
        {/*    title="Go To Top"*/}
        {/*    onPress={this.goToTop}*/}
        {/*    style={generalStyle.btnTop}*/}
        {/*    rounded>*/}
        {/*  <Icon*/}
        {/*      name="chevron-small-up"*/}
        {/*      type="Entypo"*/}
        {/*      style={generalStyle.iconTop}*/}
        {/*  />*/}
        {/*</Button>*/}
        <Footer style={styles.footerStyle}>
          <Left style={styles.buyBtnView}>
            <Button block style={styles.buyBtn}>
              <Text style={styles.buyText}>buy now</Text>
            </Button>
          </Left>
          <Body style={styles.chatBtnView}>
            <Button
              block
              transparent
              style={styles.chatBtn}
              onPress={() => Actions.push('chat')}>
              <Icon style={styles.chatIcon} name="message1" type="AntDesign" />
              <Text style={styles.chatText}>chat</Text>
            </Button>
          </Body>
          <Right style={styles.addCartBtnView}>
            <Button
              block
              transparent
              style={styles.addCartBtn}
              onPress={() => {
                this.state.badgeShow === false ? this._addCard() : null;
              }}>
              <Icon
                style={styles.cartIcon}
                name="shoppingcart"
                type="AntDesign"
              />
              <Text style={styles.chatText}>Add cart</Text>
            </Button>
          </Right>
        </Footer>
      </Container>
    );
  }
}

ProductDetailScene.defaultProps = {};

ProductDetailScene.propTypes = {};

const mapDispatchToProps = dispatch => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ProductDetailScene);

/**
 *
 * SearchScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    ActionSheet,
    Body,
    Button, CardItem, Col,
    Container, Content, Header, Icon, Input, Item, Left, Right, Row, Text, View,
} from 'native-base';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import AppHeaderSignIn from "../../components/AppHeaderSignIn";
import {ScrollView, ImageBackground, Modal} from "react-native";
import {
    white,
    blueGrey200,
    blueGrey400,
    blueGrey100, blueMain,
} from '../../theme/variables/commonColor';
import styleSignIn from "../../theme/variables/styleSignIn";
const img1 = require('../../assets/images/Animal-Supplies.jpg');
const search1 = require('../../assets/images/Appliances.jpg');
const search2 = require('../../assets/images/Automotive-Accessories.jpg');
const search3 = require('../../assets/images/Cars.jpg');
const search4 = require('../../assets/images/Children.jpg');
const search5 = require('../../assets/images/Clothing.jpg');
const Search = [
    {
        img: search1,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text, printing and typesetting industry,',
    },
    {
        img: search2,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text, printing and typesetting industry,',
    },
    {
        img: search3,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text, printing and typesetting industry,',
    },
    {
        img: search4,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text, printing and typesetting industry,',
    },
    {
        img: search5,
        title: 'San Francisco',
        content: 'Lorem Ipsum is simply dummy text, printing and typesetting industry,',
    },
];
var BUTTONS = [
    { text: "Price is increasing", icon: "ios-arrow-up"},
    { text: "Price descending", icon: "ios-arrow-down"},
    { text: "Bestseller", icon: "ios-flash"},
    { text: "New products", icon: "ios-color-wand"},
    { text: "Default", icon: "ios-filing"},
    { text: "Cancel", icon: "close"}
];
export class SearchScene extends React.Component { // eslint-disable-line
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            all: true,
            backgroundAll: blueMain,
            backgroundTravel: blueGrey100,
            travel: false,
            hotel: false,
            transport: false,
            news: false,
            promotion: false,
            modalFilter: false,
            email: '',
            searchResults: false,
        };
    }

    componentDidMount() {}
    _onPressAll = () => {
        this.setState(prevState => {
            return {
                backgroundAll: blueMain,
                all: true,
                travel: false,
                backgroundTravel: blueGrey100,
                hotel: false,
                backgroundHotel: blueGrey100,
                transport: false,
                backgroundTransport: blueGrey100,
                news: false,
                backgroundNews: blueGrey100,
                promotion: false,
                backgroundPromotion: blueGrey100,
            };
        });
    };

    _UnOnPressAll = () => {
        this.setState(prevState => {
            return {
                backgroundAll: blueGrey100,
                all: false,
            };
        });
    };

    _onPressTravel = () => {
        this.setState(prevState => {
            return {
                backgroundTravel: blueMain,
                travel: true,
                all: false,
                backgroundAll: blueGrey100,
            };
        });
    };

    _UnOnPressTravel = () => {
        this.setState(prevState => {
            return {
                backgroundTravel: blueGrey100,
                travel: false,
            };
        });
    };

    _onPressHotel = () => {
        this.setState(prevState => {
            return {
                backgroundHotel: blueMain,
                hotel: true,
                all: false,
                backgroundAll: blueGrey100,
            };
        });
    };

    _UnOnPressHotel = () => {
        this.setState(prevState => {
            return {
                backgroundHotel: blueGrey100,
                hotel: false,
            };
        });
    };

    _onPressTransport = () => {
        this.setState(prevState => {
            return {
                backgroundTransport: blueMain,
                transport: true,
                all: false,
                backgroundAll: blueGrey100,
            };
        });
    };

    _UnOnPressTransport = () => {
        this.setState(prevState => {
            return {
                backgroundTransport: blueGrey100,
                transport: false,
            };
        });
    };

    _onPressNews = () => {
        this.setState(prevState => {
            return {
                backgroundNews: blueMain,
                news: true,
                all: false,
                backgroundAll: blueGrey100,
            };
        });
    };

    _UnOnPressNews = () => {
        this.setState(prevState => {
            return {
                backgroundNews: blueGrey100,
                news: false,
            };
        });
    };

    _onPressPromotion = () => {
        this.setState(prevState => {
            return {
                backgroundPromotion: blueMain,
                promotion: true,
                all: false,
                backgroundAll: blueGrey100,
            };
        });
    };

    _UnOnPressPromotion = () => {
        this.setState(prevState => {
            return {
                backgroundPromotion: blueGrey100,
                promotion: false,
            };
        });
    };

    setModalFilter(visible) {
        this.setState({modalFilter: visible});
    }

    handleEmail = (text) => {
        this.setState({email: text});
        var Value = text.length.toString() ;
        this.setState({TextValue : Value}) ;
        if( Value > 0) {
            this.setState({searchResults: true});
        } else {
            this.setState({searchResults: false});
        }
    }

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
                            style={styleSignIn.iconClose}
                        />
                    </Button>
                </View>
                <View style={styleSignIn.pV5}>
                    <Item regular style={styles.searchItem}>
                        <Icon name="ios-search" style={styles.iconSearch}/>
                        <Input
                            style={styles.inputSearch}
                            placeholder="Search"
                            placeholderTextColor={blueGrey200}
                            onChangeText = {this.handleEmail}
                        />
                    </Item>
                </View>
            </View>
              <View>
                {!this.state.searchResults &&
                  <View>
                      <View style={styleSignIn.ml10}>
                          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                              <Row>
                                  <Button
                                      style={[
                                          styles.scrollBtn,
                                          styles.activeBg,
                                          {backgroundColor: this.state.backgroundAll},
                                      ]}
                                      onPress={() => {
                                          this.state.all === false
                                              ? this._onPressAll()
                                              : this._UnOnPressAll();
                                      }}>
                                      <Text style={styles.scrollText}>All</Text>
                                  </Button>
                                  <Button
                                      style={[
                                          styles.scrollBtn,
                                          styles.noActiveBg,
                                          {backgroundColor: this.state.backgroundTravel},
                                      ]}
                                      onPress={() => {
                                          this.state.travel === false
                                              ? this._onPressTravel()
                                              : this._UnOnPressTravel();
                                      }}>
                                      <Text style={styles.scrollText}>Electronics</Text>
                                  </Button>
                                  <Button
                                      style={[
                                          styles.scrollBtn,
                                          styles.noActiveBg,
                                          {backgroundColor: this.state.backgroundHotel},
                                      ]}
                                      onPress={() => {
                                          this.state.hotel === false
                                              ? this._onPressHotel()
                                              : this._UnOnPressHotel();
                                      }}>
                                      <Text style={styles.scrollText}>Health & Beauty</Text>
                                  </Button>
                                  <Button
                                      style={[
                                          styles.scrollBtn,
                                          styles.noActiveBg,
                                          {backgroundColor: this.state.backgroundTransport},
                                      ]}
                                      onPress={() => {
                                          this.state.transport === false
                                              ? this._onPressTransport()
                                              : this._UnOnPressTransport();
                                      }}>
                                      <Text style={styles.scrollText}>
                                          Home, lights & construction
                                      </Text>
                                  </Button>
                                  <Button
                                      style={[
                                          styles.scrollBtn,
                                          styles.noActiveBg,
                                          {backgroundColor: this.state.backgroundNews},
                                      ]}
                                      onPress={() => {
                                          this.state.news === false
                                              ? this._onPressNews()
                                              : this._UnOnPressNews();
                                      }}>
                                      <Text style={styles.scrollText}>Gifts, sports & hobbies</Text>
                                  </Button>
                                  <Button
                                      style={[
                                          styles.scrollBtn,
                                          styles.noActiveBg,
                                          {backgroundColor: this.state.backgroundPromotion},
                                      ]}
                                      onPress={() => {
                                          this.state.promotion === false
                                              ? this._onPressPromotion()
                                              : this._UnOnPressPromotion();
                                      }}>
                                      <Text style={styles.scrollText}>
                                          Auto & transportation
                                      </Text>
                                  </Button>
                              </Row>
                          </ScrollView>
                      </View>
                      <View>
                          <CardItem style={[styleSignIn.pt0, styleSignIn.pb0]}>
                              <Left>
                                  <Text style={styles.titleRecent}>
                                      Recent search
                                  </Text>
                              </Left>
                              <Right>
                                  <Button transparent>
                                      <Text style={styles.showAllText}>
                                          Show all
                                      </Text>
                                  </Button>
                              </Right>
                          </CardItem>
                      </View>
                  </View>
                }
              {this.state.searchResults &&
                  <View>
                      <Row style={[styleSignIn.ml10, styleSignIn.mr10]}>
                          <Col style={[styles.colTab,styleSignIn.mr10]}>
                              <Button transparent block
                                      style={styles.btnTab}
                                      onPress={() =>
                                          ActionSheet.show(
                                              {
                                                  options: BUTTONS,
                                                  cancelButtonIndex: 5,
                                              },
                                              buttonIndex => {
                                                  this.setState({ clicked: BUTTONS[buttonIndex] })
                                              },
                                          )}
                              >
                                  <Icon name='sort' type="FontAwesome" style={styles.iconTab}/>
                                  <Text style={styles.textTab}>Sort</Text>
                              </Button>
                          </Col>
                          <Col style={styles.colTab}>
                              <Button transparent block
                                      style={styles.btnTab}
                                      onPress={() => {
                                          this.setModalFilter(true);
                                      }}
                              >
                                  <Icon name='filter' type="AntDesign" style={styles.iconTab}/>
                                  <Text style={styles.textTab}>Filter</Text>
                              </Button>
                          </Col>
                      </Row>
                      <View>
                          <CardItem style={[styleSignIn.pt0, styleSignIn.pb0]}>
                              <Left>
                                  <Text style={styles.titleRecent}>
                                      Results
                                  </Text>
                              </Left>
                              <Right>
                                  <Button transparent>
                                      <Text style={styles.showAllText}>
                                          Show all
                                      </Text>
                                  </Button>
                              </Right>
                          </CardItem>
                      </View>
                  </View>
              }
                  <View>
                      {Search.map((value, key) => {
                          return (
                              <CardItem
                                  button
                                  onPress={() => Actions.push('productDetail')}
                                  key={key}
                                  style={[styleSignIn.pt7, styleSignIn.pb7]}
                              >
                                  <Row>
                                      <Col>
                                          <View style={styles.viewImg}>
                                              <ImageBackground source={value.img} style={styles.imgContent}/>
                                          </View>
                                      </Col>
                                      <Col >
                                          <Text style={styles.titleContent}>{value.title}</Text>
                                          <Text style={styles.textContent}>
                                              {value.content}
                                          </Text>
                                          <Text style={styles.textContent}>C $14.99 shipping</Text>
                                          <Text style={styles.textContent}>49 sold</Text>
                                      </Col>
                                  </Row>
                              </CardItem>
                          );
                      })}
                  </View>
              </View>
              <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalFilter}
                  onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                  }}>
                  <AppHeaderSignIn />
                  <ScrollView>
                      <View>
                          <View style={styles.viewModal}>
                              <Left style={{flex: 1}}>
                                  <Button
                                      transparent
                                      onPress={() => {
                                          this.setModalFilter(!this.state.modalFilter);
                                      }}
                                  >
                                      <Icon name="close" type="AntDesign" style={styles.iconClose}/>
                                  </Button>
                              </Left>
                              <Body style={{flex: 0, paddingTop: 4}}>
                                  <Text style={styles.textFilter}>
                                     Filter
                                  </Text>
                              </Body>
                              <Right style={{flex: 1}}>
                              </Right>
                          </View>
                          <View padder>
                              <View style={styleSignIn.mb15}>
                                  <Text style={styles.titleFilter}>
                                      Price
                                  </Text>
                                  <View>
                                      <Row>
                                          <Button full style={[styles.btnTab, styles.btnFilterActive, styles.btnColFilter]}>
                                              <Text style={[styles.textTab, styleSignIn.colorWhite]}>$0 - $54</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>$54 - $100</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>$100 - $160</Text>
                                          </Button>
                                      </Row>
                                      <Row style={styleSignIn.mt10}>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>$160 - $210</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>$200 - $250</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>$250 +</Text>
                                          </Button>
                                      </Row>
                                  </View>
                              </View>
                              <View style={styleSignIn.mb15}>
                                  <Text style={styles.titleFilter}>
                                      Category
                                  </Text>
                                  <View>
                                      <Row>
                                          <Button full style={[styles.btnTab, styles.btnFilterActive, styles.btnColFilter]}>
                                              <Text style={[styles.textTab, styleSignIn.colorWhite]}>Mobiles</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Mobile Phone Cases</Text>
                                          </Button>
                                      </Row>
                                  </View>
                              </View>
                              <View style={styleSignIn.mb15}>
                                  <Text style={styles.titleFilter}>
                                      Color Family
                                  </Text>
                                  <View>
                                      <Row>
                                          <Button full style={[styles.btnTab, styles.btnFilterActive, styles.btnColFilter]}>
                                              <Text style={[styles.textTab, styleSignIn.colorWhite]}>Black</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Gold</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>White</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Yellow</Text>
                                          </Button>
                                      </Row>
                                      <Row style={styleSignIn.mt10}>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Green</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Red</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Brown</Text>
                                          </Button>
                                      </Row>
                                  </View>
                              </View>
                              <View style={styleSignIn.mb15}>
                                  <Text style={styles.titleFilter}>
                                      Service
                                  </Text>
                                  <View>
                                      <Row>
                                          <Button full style={[styles.btnTab, styles.btnFilterActive, styles.btnColFilter]}>
                                              <Text style={[styles.textTab, styleSignIn.colorWhite]}>Global Collection</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Cash On Delivery</Text>
                                          </Button>
                                      </Row>
                                  </View>
                              </View>
                              <View style={styleSignIn.mb15}>
                                  <Text style={styles.titleFilter}>
                                      Location
                                  </Text>
                                  <View>
                                      <Row>
                                          <Button full style={[styles.btnTab, styles.btnFilterActive, styles.btnColFilter]}>
                                              <Text style={[styles.textTab, styleSignIn.colorWhite]}>Local</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Overseas</Text>
                                          </Button>
                                      </Row>
                                  </View>
                              </View>
                              <View style={styleSignIn.mb15}>
                                  <Text style={styles.titleFilter}>
                                      Storage Capacity
                                  </Text>
                                  <View>
                                      <Row>
                                          <Button full style={[styles.btnTab, styles.btnFilterActive, styles.btnColFilter]}>
                                              <Text style={[styles.textTab, styleSignIn.colorWhite]}>4GB</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>Below 1GB</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>64GB</Text>
                                          </Button>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>$8GB</Text>
                                          </Button>
                                      </Row>
                                      <Row style={styleSignIn.mt10}>
                                          <Button bordered style={[styles.btnTab, styles.btnFilter, styles.btnColFilter]}>
                                              <Text style={styles.textTab}>16GB</Text>
                                          </Button>
                                      </Row>
                                  </View>
                              </View>
                          </View>
                      </View>
                      <View style={[styleSignIn.mr20, styleSignIn.ml20]}>
                          <Button
                              style={styles.btnShow}
                                  onPress={() => {
                                      this.setModalFilter(!this.state.modalFilter);
                                  }}
                          >
                              <Text>
                                  {translate('showResults')}
                              </Text>
                          </Button>
                      </View>
                  </ScrollView>
              </Modal>
          </ScrollView>
      </Container>
    );
  }
}

SearchScene.defaultProps = {
};

SearchScene.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(SearchScene);

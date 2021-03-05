/**
 *
 * ListingsScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  Accordion,
  Body,
  Button,
  Container,
  Content,
  Drawer,
  Header,
  Icon,
  Left,
  Right,
  Text,
  View,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';

// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import headerStyle from '../../theme/variables/headerStyle';
import {ImageBackground, ScrollView} from 'react-native';
import AppHeader from '../../components/AppHeader';
import generalStyle from '../../theme/variables/generalStyle';
const imgItem = require('../../assets/images/Electronics.jpg');
const root = '_root';
export class ListingsScene extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      drawer: null,
      status: true,
    };
  }

  // componentDidMount() {
  // }
  closeDrawer(page) {
    const {drawer} = this.state;
    if (page) {
      if (page == 'login') {
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
    return (
      <Container>
        {/*<Header*/}
        {/*  style={headerStyle.headerBackground}*/}
        {/*  iosBarStyle="dark-content"*/}
        {/*  androidStatusBarColor="#ffffff">*/}
        {/*  <Left*/}
        {/*    style={headerStyle.leftView}*/}
        {/*    button*/}
        {/*    onPress={() => this.openDrawer()}>*/}
        {/*    <Button*/}
        {/*      transparent*/}
        {/*      style={headerStyle.pL0}*/}
        {/*      onPress={() => this.openDrawer()}>*/}
        {/*      <Icon name="menu" type="Feather" style={headerStyle.iconLeft} />*/}
        {/*    </Button>*/}
        {/*  </Left>*/}
        {/*  <Body style={headerStyle.bodyView}>*/}
        {/*    <Text style={headerStyle.pageTitle}>Electronics</Text>*/}
        {/*  </Body>*/}
        {/*  <Right style={headerStyle.rightView}>*/}
        {/*    <Button transparent style={headerStyle.pR5}>*/}
        {/*      <Icon*/}
        {/*        name="search"*/}
        {/*        type="Feather"*/}
        {/*        style={headerStyle.iconRight}*/}
        {/*      />*/}
        {/*    </Button>*/}
        {/*    <Button transparent style={headerStyle.pR0}>*/}
        {/*      <Icon*/}
        {/*        name="shopping-cart"*/}
        {/*        type="MaterialIcons"*/}
        {/*        style={headerStyle.iconRight}*/}
        {/*      />*/}
        {/*    </Button>*/}
        {/*  </Right>*/}
        {/*</Header>*/}
        <AppHeader title={'Electronics'} hasLeft={true} hasRightSet={false} />
        <ScrollView style={styles.content}>
          <View style={styles.resultsView}>
            <View>
              <Text style={styles.resultsText}>{translate('result')}</Text>
              <Text style={styles.textMoreItem}>1-12 of 30,756 {translate('result')}</Text>
            </View>
            <View>
              <Button transparent>
                <Text style={styles.filterText}>{translate('filter')}</Text>
              </Button>
            </View>
          </View>
          <List>
            {[1, 2, 3, 4, 5].map(key => (
              <ListItem
                key={key}
                thumbnail
                noBorder
                style={styles.listItemView}
                onPress={() => Actions.push('productDetail')}
              >
                <Left>
                  <Thumbnail square source={imgItem} style={styles.imgItem} />
                </Left>
                <Body style={styles.alignTop}>
                  <Text style={styles.titleItem}>
                    Apple iPad 2 32GB, Wi-Fi, 9.7in - Black (CA)
                  </Text>
                  <Text style={styles.subTitleItem}>Refurbished</Text>
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
                    <Text style={styles.textMoreItem}>(277)</Text>
                  </View>
                  <Text style={styles.titleItem}>C $75.99</Text>
                  <Text style={styles.textMoreItem}>or Best Offer</Text>
                  <Text style={styles.textMoreItem}>C $14.99 shipping</Text>
                  <Text style={styles.textMoreItem}>49 sold</Text>
                  {/*<Text>14 new & refurbished from us $50.00</Text>*/}
                </Body>
                <Right style={styles.alignTop}>
                  <Button transparent style={styles.pT0}>
                    <Icon
                      type="Ionicons"
                      name="md-more"
                      style={styles.moreIcon}
                    />
                  </Button>
                </Right>
              </ListItem>
            ))}
          </List>
        </ScrollView>
      </Container>
    );
  }
}

ListingsScene.defaultProps = {};

ListingsScene.propTypes = {};

const mapDispatchToProps = dispatch => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ListingsScene);

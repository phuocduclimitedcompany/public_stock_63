/**
 *
 * CategoryScene Container
 *
 */

/* global translate */

import React from 'react';
// import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
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
  Accordion,
} from 'native-base';
// utils => ... => containers => components => form

// import xxx from 'components/xxx';

// ./
import styles from './styles';
import headerStyle from '../../theme/variables/headerStyle';
import {
  Image,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
const imgBg = require('../../assets/images/Highway-Trucks.jpg');
const root = '_root';

const dataArray = [
  {title: 'Cars & Trucks', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Motorcycles', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Other Vehicles & Trailers', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Boats', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Powersports', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Parts & Accessories', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Automotive Tools & Supplies', content: 'Lorem ipsum dolor sit amet'},
];
export class CategoryScene extends React.Component { // eslint-disable-line
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

  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({status: false});
    } else {
      this.setState({status: true});
    }
  };

  // componentDidMount() {
  // }

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
        {/*    <Text style={headerStyle.pageTitle}>Categories</Text>*/}
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
        <AppHeader title={'Categories'} hasLeft={true} hasRightSet={false} />
        <ScrollView style={styles.content}>
          <View>
            <ImageBackground
              source={imgBg}
              style={{width: '100%', height: 200}}
            />
            <View style={{paddingHorizontal: 20}}>
              <Button
                transparent
                block
                style={styles.dropdownView}
                onPress={this.ShowHideTextComponentView}>
                {this.state.status ? (
                  <Icon name="down" type="AntDesign" style={styles.downIcon} />
                ) : (
                  <Icon name="up" type="AntDesign" style={styles.downIcon} />
                )}
                <Text style={styles.dropText}>Automotive</Text>
              </Button>
              {this.state.status ? null : (
                <Accordion
                  style={styles.accordionStyle}
                  dataArray={dataArray}
                  headerStyle={styles.accordionHeader}
                  contentStyle={styles.accordionContent}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

CategoryScene.defaultProps = {};

CategoryScene.propTypes = {};

const mapDispatchToProps = dispatch => ({
  // Use your actions here
  dispatch,
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(CategoryScene);

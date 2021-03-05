/**
 *
 * AppHeader Stateless Component
 *
 */

/* global translate */

import React from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
  Text,
} from 'native-base';

import styles from './styles';
import {statusBarColor, iosBarColor} from '../../theme/variables/commonColor';
import headerStyle from '../../theme/variables/headerStyle';

const AppHeader = props => {
  const {
    title,
    hasLeft,
    hasRightSearch,
    hasRightCart,
    hasRightSet,
    hasTitle,
    backMessage,
    leftPress,
    rightPress,
  } = props;

  const leftButton = (
    <Button onPress={leftPress} style={headerStyle.btnLeft} transparent>
      <Icon name="angle-left" type="FontAwesome" style={headerStyle.iconLeft} />
      <Text style={headerStyle.textLeft}>{translate('back')}</Text>
    </Button>
  );
  const rightButton1 = (
    <Button transparent style={headerStyle.pR5} onPress={() => Actions.push('search')}>
      <Icon name="search" type="Feather" style={headerStyle.iconRight} />
    </Button>
  );
  const rightButton2 = (
    <Button transparent style={headerStyle.pR0} onPress={() => Actions.push('shoppingCart')}>
      <Icon
        name="shopping-cart"
        type="MaterialIcons"
        style={headerStyle.iconRight}
      />
    </Button>
  );
  const rightButton3 = (
    <Button transparent style={headerStyle.pR0}>
      <Icon
        name="settings"
        type="MaterialIcons"
        style={headerStyle.iconRight}
      />
    </Button>
  );
  const titleBody = <Title style={headerStyle.pageTitle}>{translate(title)}</Title>;

  return (
    <Header
      style={headerStyle.headerBackground}
      iosBarStyle="dark-content"
      androidStatusBarColor="#ffffff">
      <Left style={headerStyle.leftView}>{hasLeft && leftButton}</Left>
      <Body style={headerStyle.bodyView}>{hasTitle && titleBody}</Body>
      <Right style={headerStyle.rightView}>{hasRightSearch && rightButton1}{hasRightSet && rightButton3}{hasRightCart && rightButton2}</Right>
    </Header>
  );
};

AppHeader.defaultProps = {
  title: 'homeTitle',
  hasLeft: true,
  hasTitle: true,
  hasRightSearch: true,
  hasRightCart: true,
  hasRightSet: true,
  backMessage: '',
  leftPress: () => Actions.pop(),
  rightPress: () => null,
};

AppHeader.propTypes = {
  title: PropTypes.string,
  hasLeft: PropTypes.bool,
  hasTitle: PropTypes.bool,
  hasRightSearch: PropTypes.bool,
  hasRightCart: PropTypes.bool,
  hasRightSet: PropTypes.bool,
  backMessage: PropTypes.string,
  leftPress: PropTypes.func,
  rightPress: PropTypes.func,
};

export default AppHeader;

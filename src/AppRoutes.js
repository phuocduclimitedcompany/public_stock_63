/**
 *
 * app routes file
 *
 */

import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

// import page container
import HomeScene from './containers/HomeScene';
import LoginScene from './containers/LoginScene';
import SplashScene from './containers/SplashScene';
import FirstOpenScene from './containers/FirstOpenScene';
import HomePublicScene from './containers/HomePublicScene';
import CategoryScene from './containers/CategoryScene';
import ListingsScene from './containers/ListingsScene';
import RegisterScene from './containers/RegisterScene';
import PhoneVerification from './containers/PhoneVerification';
import SMs from './containers/SMs';
import SignInScene from './containers/SignInScene';
import SearchScene from './containers/SearchScene';

import ProfileScene from './containers/ProfileScene';
import EditProfile from './containers/EditProfile';
import SettingScene from './containers/SettingScene';
import ShoppingCartScene from './containers/ShoppingCartScene';
import EditAddressScene from './containers/EditAddressScene';
import RewardsScene from './containers/RewardsScene';
import MyShopScene from './containers/MyShopScene';

import ProductDetailScene from './containers/ProductDetailScene';
import ChatScene from './containers/ChatScene';

export default function AppRoutes() {
  return (
    <Router>
      <Stack hideNavBar>
        <Scene key="splash" component={SplashScene} initial />
        <Scene key="firstOpen" component={FirstOpenScene} />
        <Scene key="login" component={LoginScene} />
        <Scene key="home" component={HomeScene} />
        <Scene key="homePublic" component={HomePublicScene} />
        <Scene key="category" component={CategoryScene} />
        <Scene key="listings" component={ListingsScene} />
        <Scene key="register" component={RegisterScene} />
        <Scene key="phoneVerification" component={PhoneVerification} />
        <Scene key="sMS" component={SMs} />
        <Scene key="signIn" component={SignInScene} />
        <Scene key="search" component={SearchScene} />
        <Scene key="profile" component={ProfileScene} />
        <Scene key="editProfile" component={EditProfile} />
        <Scene key="setting" component={SettingScene} />
        <Scene key="shoppingCart" component={ShoppingCartScene} />
        <Scene key="editAddress" component={EditAddressScene} />
        <Scene key="rewards" component={RewardsScene} />
        <Scene key="productDetail" component={ProductDetailScene} />
        <Scene key="myShop" component={MyShopScene} />
        <Scene key="chat" component={ChatScene} />
      </Stack>
    </Router>
  );
}

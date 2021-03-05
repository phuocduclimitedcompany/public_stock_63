/**
 *
 * AppHeaderSignIn storybook file
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import HeaderView from 'storybook/HeaderView';

import AppHeaderSignIn from '..';

storiesOf('components/AppHeaderSignIn', module)
  .addDecorator((getStory) => <HeaderView>{getStory()}</HeaderView>)
  .add('AppHeaderSignIn', () => (
    <AppHeaderSignIn />
  ));

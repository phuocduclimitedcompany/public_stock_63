/**
 *
 * SignInForm storybook file
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ContentView from 'storybook/ContentView';

import SignInForm from '..';

storiesOf('forms/SignInForm', module)
  .addDecorator((getStory) => <ContentView>{getStory()}</ContentView>)
  .add('SignInForm', () => (
    <SignInForm onSubmit={action('submit signInForm data')} />
  ));

/**
 *
 * RegisterForm storybook file
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ContentView from 'storybook/ContentView';

import RegisterForm from '..';

storiesOf('forms/RegisterForm', module)
  .addDecorator((getStory) => <ContentView>{getStory()}</ContentView>)
  .add('RegisterForm', () => (
    <RegisterForm onSubmit={action('submit registerForm data')} />
  ));

/**
 *
 * DateInput storybook file
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import ContentView from 'storybook/ContentView';

import DateInput from '..';

storiesOf('formFields/DateInput', module)
  .addDecorator(getStory => <ContentView>{getStory()}</ContentView>)
  .add('DateInput', () => <DateInput />);

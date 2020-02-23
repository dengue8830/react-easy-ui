import React from 'react';
import { Text } from './Text';
import { ExampleThemedProvider } from '../utils';

export default {
  title: 'Text'
};

export const toStorybook = () => (
  <ExampleThemedProvider>
    <Text>hello im a test</Text>
  </ExampleThemedProvider>
);

toStorybook.story = {
  name: 'Simple text'
};

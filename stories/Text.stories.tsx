import React from 'react';
import { Text } from '../src/Text';
import { ExampleThemedProvider } from './utils/exampleThemedProvider';

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

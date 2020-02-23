import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { ExampleThemedProvider } from '../utils';
import { Spinner } from '../spinner';

export default {
  title: 'Button'
};

export const defaultStyle = () => (
  <ExampleThemedProvider>
    <Button onClick={action('onClick')}>lorem ipsum</Button>
  </ExampleThemedProvider>
);
export const primary = () => (
  <ExampleThemedProvider>
    <Button onClick={action('onClick')} isPrimary>
      lorem ipsum
    </Button>
  </ExampleThemedProvider>
);

export const outlinePrimary = () => (
  <ExampleThemedProvider>
    <Button onClick={action('onClick')} isOutline isPrimary>
      lorem ipsum
    </Button>
  </ExampleThemedProvider>
);
export const disabled = () => (
  <ExampleThemedProvider>
    <Button onClick={action('onClick')} isDisabled>
      lorem ipsum
    </Button>
  </ExampleThemedProvider>
);
export const outlineDisabled = () => (
  <ExampleThemedProvider>
    <Button onClick={action('onClick')} isOutline isDisabled>
      lorem ipsum
    </Button>
  </ExampleThemedProvider>
);
export const withIconRight = () => (
  <ExampleThemedProvider>
    <Button style={{ width: '50%' }} onClick={action('onClick')}>
      <label>lorem</label>
      <label style={{ position: 'absolute', right: '10%' }}>X</label>
    </Button>
  </ExampleThemedProvider>
);
export const withIconLeft = () => (
  <ExampleThemedProvider>
    <Button style={{ width: '50%' }} onClick={action('onClick')}>
      <Button.Left>X</Button.Left>
      <label>lorem</label>
    </Button>
  </ExampleThemedProvider>
);
export const withIconLeftAndRight = () => (
  <ExampleThemedProvider>
    <Button style={{ width: '50%' }} onClick={action('onClick')}>
      <Button.Left>X</Button.Left>
      <label>lorem</label>
      <Button.Right>X</Button.Right>
    </Button>
  </ExampleThemedProvider>
);
export const withLoadingOnSide = () => (
  <ExampleThemedProvider>
    <Button style={{ width: '20%' }} isPrimary onClick={action('onClick')}>
      <Button.Content>lorem</Button.Content>
      <Button.Right>
        <Spinner />
      </Button.Right>
    </Button>
  </ExampleThemedProvider>
);
export const withLoading = () => (
  <ExampleThemedProvider>
    <Button
      style={{ width: '20%' }}
      isOutline
      isPrimary
      onClick={action('onClick')}
    >
      <Button.Content>
        <Spinner />
      </Button.Content>
    </Button>
  </ExampleThemedProvider>
);

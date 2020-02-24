import * as React from 'react';
import { ExampleThemedProvider } from '../utils';
import { StyledInput, InputContainer } from './Input';
import { Spinner } from '../spinner';
import styled from 'styled-components';

export default {
  title: 'Input'
};

export const defaultStyle = () => (
  <ExampleThemedProvider>
    <SmallInputContainer>
      <StyledInput placeholder='this is a placeholder......' />
    </SmallInputContainer>
  </ExampleThemedProvider>
);

export const WithIconAndLoader = () => (
  <ExampleThemedProvider>
    <SmallInputContainer>
      <label>X</label>
      <StyledInput
        placeholder='this is a placeholder......'
        value='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      />
      {/* <Spinner.Container> */}
      <div>
        <Spinner />
      </div>
      {/* </Spinner.Container> */}
    </SmallInputContainer>
  </ExampleThemedProvider>
);

const SmallInputContainer = styled(InputContainer)`
  width: 20%;
`;

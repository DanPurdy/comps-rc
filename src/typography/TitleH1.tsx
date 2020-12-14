import React, { FC } from 'react';

import { TitleH1Props } from './index';

import styled from 'styled-components';

const TitleH1Element = styled.h1`
  color: ${(props: TitleH1Props): string => props.color ? `${props.color}` : '#000000'};
  font-size: 2.4rem;
`;

// interface TitleH1Props {
//   color: string;
//   text: string;
// }

const TitleH1: FC<TitleH1Props> = ({ color, text }): JSX.Element => {
// const TitleH1: FC<TitleH1Props> = ({ text }): JSX.Element => {

  return (
    <TitleH1Element
      color={color}
      text={text}
    >
      {text}
    </TitleH1Element>
  );

  // return (
  //   <h1>hello</h1>
  // )
};

export default TitleH1;

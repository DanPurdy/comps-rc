import React, { FC } from 'react';

import styled from 'styled-components';

import { FormSectionTitleProps } from './index';

const FormSectionTitleElement = styled.h3`
  color: ${(props: FormSectionTitleProps): string => props.color ? `${props.color}` : '#000000'};
  font-size: 2rem;
`;

const FormSectionTitle: FC<FormSectionTitleProps> = ({ color, text, }): JSX.Element => {

  return (
    <FormSectionTitleElement
      color={color}
      text={text}
    >
      {text}
    </FormSectionTitleElement>
  );
};

export default FormSectionTitle;

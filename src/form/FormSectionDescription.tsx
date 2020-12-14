import React, { FC } from 'react';

import styled from 'styled-components';

import { FormSectionDescriptionProps } from './index';

const FormSectionDescriptionElement = styled.p`
  color: ${(props: FormSectionDescriptionProps): string => props.color ? `${props.color}` : '#000000'};
  font-size: ${(props: FormSectionDescriptionProps): string => props.fontSize ? `${props.fontSize}` : '1.4rem'};
`;

const FormSectionDescription: FC<FormSectionDescriptionProps> = ({ color, fontSize, text, }): JSX.Element => {

  return (
    <FormSectionDescriptionElement
      color={color}
      fontSize={fontSize}
      text={text}
    >
      {text}
    </FormSectionDescriptionElement>
  );
};

export default FormSectionDescription;

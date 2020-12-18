import * as React from 'react';

export interface FormSectionTitleProps {
  color: string;
  text: string;
}

export const FormSectionTitle: FC<FormSectionTitleProps>;

export interface FormSectionDescriptionProps {
  color: string;
  fontSize?: string;
  text: string;
}

export const FormSectionDescription: FC<FormSectionDescriptionProps>;

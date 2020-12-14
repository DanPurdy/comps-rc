import * as React from 'react';

export interface FormSectionTitleProps {
  color: string;
  text: string;
}

declare const FormSectionTitle: FC<FormSectionTitleProps>;

export default FormSectionTitle;

export interface FormSectionDescriptionProps {
  color: string;
  fontSize?: string;
  text: string;
}

declare const FormSectionDescription: FC<FormSectionDescriptionProps>;

export default FormSectionDescription;

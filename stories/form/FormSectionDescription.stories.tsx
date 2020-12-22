import React from 'react';

// import FormSectionDescription from '../../src/form/FormSectionDescription';

import FormSectionDescription from '../../lib/form/FormSectionDescription';

export default {
  component: FormSectionDescription,
  title: 'Form Section Description',
};

const Template = (args) => <FormSectionDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is the description for a form section',
};

export const Red = Template.bind({});
Red.args = {
  text: 'This is the description for a form section in red',
  color: '#ff0000',
};

export const Bigger = Template.bind({});
Bigger.args = {
  fontSize: '3rem',
  text: 'This is the description for a form section with bigger font size',
};

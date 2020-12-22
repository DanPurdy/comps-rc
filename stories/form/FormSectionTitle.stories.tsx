import React from 'react';

// import FormSectionTitle from '../../src/form/FormSectionTitle';

import FormSectionTitle from '../../lib/form/FormSectionTitle';

export default {
  component: FormSectionTitle,
  title: 'Form Section Title',
};

const Template = (args) => <FormSectionTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a form section title',
};

export const Red = Template.bind({});
Red.args = {
  text: 'This is a form section title in red',
  color: '#ff0000',
};

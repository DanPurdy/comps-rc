import React from 'react';

// import TitleH1 from '../../src/typography/TitleH1';

import TitleH1 from '../../lib/typography/TitleH1';

export default {
  component: TitleH1,
  title: 'Title',
};

const Template = (args) => <TitleH1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Welcome to the page',
};

export const Red = Template.bind({});
Red.args = {
  text: 'Welcome to the page in red',
  color: '#ff0000',
};

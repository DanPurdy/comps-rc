import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { GlobalStyle } from '../../lib/theme';
import WideTextBanner from '../../lib/banners/WideTextBanner';

export default {
  argTypes: { onClick: { action: 'clicked link' } },
  component: WideTextBanner,
  decorators: [(Story) => <BrowserRouter><GlobalStyle /><Story/></BrowserRouter>],
  title: 'Wide text banner',
};

const Template = (args) => <WideTextBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Book today for 10% discount',
};

export const WithLink = Template.bind({});
WithLink.args = {
  text: 'Book today for 10% discount',
};

export const WithExternalLink = Template.bind({});
WithExternalLink.args = {
  text: 'Book today for 10% discount',
  link: 'http://google.com',
};

import React from 'react';

import { GlobalStyle } from '../../lib/theme';
import Link from '../../lib/link/Link';

export default {
  argTypes: { onClick: { action: 'clicked link' } },
  component: Link,
  decorators: [(Story) => <React.Fragment><GlobalStyle /><Story/></React.Fragment>],
  title: 'Link',
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Testing the link',
};

export const WithExternalLink = Template.bind({});
WithExternalLink.args = {
  text: 'Testing the external link',
  to: 'http://google.com',
};

export const WithExternalBlankHrefLink = Template.bind({});
WithExternalBlankHrefLink.args = {
  target: '_blank',
  text: 'Testing the external link woth target blank',
  to: 'http://google.com',
};

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

// const testFunc = (event) => {
//   event.preventDefault();

//   console.log('CLICKING THE LINK FUNCTION');

// };

export const Default = Template.bind({});
Default.args = {
  // to: 'http://google.com',
  text: 'Testing the link',
};


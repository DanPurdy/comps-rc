import React, { FC } from 'react';

export interface LinkTypeProps<P = {}, D extends React.ElementType = 'a'> {
  onClick: Function;
  text: string;
  to: string;
}

declare const Link: FC<LinkTypeProps>;

export default Link;

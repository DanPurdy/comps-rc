import React, { FC } from 'react';

export interface LinkTypeProps<P = {}, D extends React.ElementType = 'a'> {
  className?: string;
  dangerouslySetInnerHTML?: Object;
  onClick?: Function | undefined;
  target?: string;
  text?: string;
  to?: string;
}

declare const Link: FC<LinkTypeProps>;

export default Link;

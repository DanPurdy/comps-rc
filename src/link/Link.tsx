import React , { FC } from 'react';
import styled from 'styled-components';

import { LinkTypeProps } from './index';
import { colors, fonts } from '../theme';

const LinkElement = styled.a`
  color: ${(): string => colors.primaryFontColor};
  text-decoration: none;

  &:hover {
    color: ${(): string => colors.primaryFontColor};
    text-decoration: none;
  }

  &:active {
    color: ${(): string => colors.primaryFontColor};
  }
`;

const Link: FC<LinkTypeProps> = React.forwardRef<HTMLAnchorElement & HTMLDivElement, LinkTypeProps>(function Link(props, ref) {
  const {
    onClick,
    text,
    to,
  } = props;

  return (
    <LinkElement
      href={to}
      onClick={(event) => onClick(event)}
      ref={ref}
    >
      {text}
    </LinkElement>
  )
});

export default Link;

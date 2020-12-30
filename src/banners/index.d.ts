import * as React from 'react';

export interface WideTextBannerProps {
  link?: string | undefined;
  onClickBanner?: React.MouseEventHandler<HTMLDivElement>;
  onClickLink?: React.MouseEventHandler<HTMLAnchorElement>;
  text: string;
}

declare const WideTextBanner: FC<WideTextBannerProps>;

export default WideTextBanner;

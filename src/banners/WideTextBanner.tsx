import React, { FC } from 'react';
// import { Link } from 'react-router-dom';

import { WideTextBannerProps } from './index';
import { LinkTypeProps } from '../link/index';
import Link from '../link/Link';

import styled from 'styled-components';

import { colors, fonts } from '../theme';

const WideTextBannerElement = styled.div`
  background-color: ${(): string => colors.primaryColor};
  text-align: center;
  padding: 2.5rem 1rem 2.2rem;
  font-family: "${(): string => fonts.defaultMedium}";
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const WideTextBannerParagraph = styled.p`
  color: ${(): string => colors.primaryFontColor};
  margin: 0;
`;

const WideTextBannerAnchor = styled.a`
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

const WideTextBannerLink = styled(Link)<LinkTypeProps>`
  color: #000000;
  text-decoration: none;

  &:hover {
    color: ${(): string => colors.primaryFontColor};
    text-decoration: none;
  }

  &:active {
    color: ${(): string => colors.primaryFontColor};
  }
`;

const WideTextBanner: FC<WideTextBannerProps> = ({ onClickBanner, onClickLink, link, text }): JSX.Element | null => {
  const isExternalUrl = (url: string | undefined) => {
    if (!url) return false;
    return /^(http|https):/.test(url);
  }

  if (text) {
    if (!link && !onClickLink) {
      return (
        <WideTextBannerElement
          className="referral-banner"
        >
          <WideTextBannerParagraph
            className="referral-banner__text"
            onClick={onClickBanner}
            dangerouslySetInnerHTML={{ __html: text}}
          />
        </WideTextBannerElement>
      );
    }
    // if (isExternalUrl(link)) {
    //   return (
    //     <WideTextBannerElement
    //       className="referral-banner"
    //     >
    //       <WideTextBannerAnchor
    //         dangerouslySetInnerHTML={{ __html: text}}
    //         className="referral-banner__link"
    //         data-qa="referral-banner"
    //         href={link}
    //         onClick={onClickLink}
    //         target="_blank" // eslint-disable-line react/jsx-no-target-blank
    //         rel="noopener"
    //       />
    //     </WideTextBannerElement>
    //   );
    // }
    if (onClickLink) {
      return (
        <WideTextBannerElement
          className="referral-banner"
        >
          <WideTextBannerLink
            className="referral-banner__link"
            data-qa="referral-banner"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => onClickLink(event)}
            to={link}
            text={text}
          />
        </WideTextBannerElement>
      );
    }
    if (!onClickLink && link) {
      return (
        <WideTextBannerElement
          className="referral-banner"
        >
          <WideTextBannerLink
            className="referral-banner__link"
            data-qa="referral-banner"
            to={link}
            text={text}
          />
        </WideTextBannerElement>
      );
    }
  }

  return null;
};

export default WideTextBanner;

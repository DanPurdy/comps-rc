import { createGlobalStyle } from 'styled-components';

export const colors = {
  activeMenuButtonBackgroundColor: '#F5F5F5',
  alabasterColor: '#F9F9F9',
  boxShadowColor: '#3A464C',
  buttonActiveBackgroundColor: '#FEDA66',
  buttonHoverBackgroundColor: '#EAC30D',
  callBackgroundColor: '#0D0221',
  canvasBgColor: '#F4F5F7',
  canvasLightColor: '#F1F1F1',
  darkTitleFontColor: '#404040',
  dividerColor: '#E7E9EE',
  dividerDarkerColor: '#D8D8D8',
  dividerOnDarkColor: '#E1E1E1',
  heroColor: '#4BC8FF',
  heroPrimaryColor: '#08CCCD',
  lightBackgroundColor: '#F6F6F8',
  primaryColor: '#F4CB0B',
  primaryFontColor: '#3C3C3C',
  primaryLightFontColor: '#8C8C8C',
  videoControlOffColor: '#F36450',
  videoControlHoverColor: '#DDDDDD',
  attentionColor: '#FFA500',
  warningColor: '#FF0000',
  permissionsBannerBackground: '#C03552',
  successGreen: '#41c07d',
};

export const fonts = {
  heading: 'Berlingske Serif',
  default: 'Campton-Book',
  defaultMedium: 'Campton-Medium',
  defaultBold: 'Campton-Bold',
  defaultSemibold: 'Campton-SemiBold',
};

export const main = {
  sidebarWith: '64px',
};

export const GlobalStyle = createGlobalStyle`
  @font-face{font-family:'Berlingske Serif';font-display:swap;src:url(https://static-gcp.urbanmassage.com/fonts/Berlingske/BerlingskeSerif-Bd.eot);src:url(https://static-gcp.urbanmassage.com/fonts/Berlingske/BerlingskeSerif-Bd.eot?#iefix) format('embedded-opentype'),url(https://static-gcp.urbanmassage.com/fonts/Berlingske/BerlingskeSerif-Bd.woff2) format('woff2'),url(https://static-gcp.urbanmassage.com/fonts/Berlingske/BerlingskeSerif-Bd.woff) format('woff');font-weight:700;font-style:normal}@font-face{font-family:'Berlingske Serif';font-display:swap;src:url(https://static-gcp.urbanmassage.com/fonts/Berlingske/BerlingskeSerif-Blk.eot);src:url(https://static-gcp.urbanmassage.com/fonts/Berlingske/BerlingskeSerif-Blk.eot?#iefix) format('embedded-opentype'),url(https://static-gcp.urbanmassage.com/fonts/Berlingske/BerlingskeSerif-Blk.woff2) format('woff2'),url(https://static-gcp.urbanmassage.com/fonts/Berlingske/BerlingskeSerif-Blk.woff) format('woff');font-weight:900;font-style:normal}

  @font-face{font-family:Campton-Bold;font-display:swap;src:url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_0_0.eot);src:url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_0_0.eot?#iefix) format('embedded-opentype'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_0_0.woff2) format('woff2'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_0_0.woff) format('woff'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_0_0.ttf) format('truetype')}@font-face{font-family:Campton-Book;font-display:swap;src:url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_1_0.eot);src:url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_1_0.eot?#iefix) format('embedded-opentype'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_1_0.woff2) format('woff2'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_1_0.woff) format('woff'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_1_0.ttf) format('truetype')}@font-face{font-family:Campton-Medium;font-display:swap;src:url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_2_0.eot);src:url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_2_0.eot?#iefix) format('embedded-opentype'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_2_0.woff2) format('woff2'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_2_0.woff) format('woff'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_2_0.ttf) format('truetype')}@font-face{font-family:Campton-SemiBold;font-display:swap;src:url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_3_0.eot);src:url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_3_0.eot?#iefix) format('embedded-opentype'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_3_0.woff2) format('woff2'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_3_0.woff) format('woff'),url(https://static-gcp.urbanmassage.com/fonts/Campton/webfonts/37A0A7_3_0.ttf) format('truetype')}

  *, :after, :before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothin: anti-aliased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "${fonts.default}";
    font-size: 1.4rem;
    font-weight: 300;
    padding: 0;
    margin: 0;
    color: ${colors.primaryFontColor};
  }

  html, body {
    min-height: 100vh;
    min-width: 320px
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  h1, h2, h3 {
    font-family: "${fonts.heading}";
    font-weight: 700;
  }

  h1 {
    display: inline-block;
    font-size: 6.6rem;

    @media(max-width: 400px) {
      font-size: 3.0rem;
    }
  }

  h2 {
    font-size: 3.8rem;
  }

  h3 {
    font-size: 3rem;
    line-height: 4.1rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
      line-height: 2.5rem;
    }
  }

  h4 {
    margin: 2rem 0 1rem;
    font-size: 1.8rem;
    line-height: 2.1rem;

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  b, strong {
    font-weight: 500;
  }

  a {
    color: ${colors.heroColor};
    cursor: pointer;
    text-decoration: none;
  }

  a:hover {
    color: ${colors.heroColor};
    text-decoration: underline;
  }

  a:focus, a:active {
    color: ${colors.heroColor};
  }

  p a {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  button {
    outline-color: ${colors.primaryColor}
  }

  select {
    background-color: #FFFFFF;
    color: ${colors.primaryFontColor};
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }

  .container {
    pointer-events: auto;
  }

  .text-center {
    text-align: center;
  }
`;

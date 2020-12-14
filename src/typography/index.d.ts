import * as React from 'react';

export interface TitleH1Props {
  color: string;
  text: string;
}

// export interface HelloWorldProps extends React.Props<HelloWorld> {
//   color: string;
// }

// declare class TitleH1Props extends React.Component<TitleH1Props, any> {
// }

// declare module 'title-h1' {
// }

declare const TitleH1: FC<TitleH1Props>;

export default TitleH1;



// mport { FC } from 'react';
// interface TitleH1Props {
//     text: string;
// }
// declare const TitleH1: FC<TitleH1Props>;
// export default TitleH1;

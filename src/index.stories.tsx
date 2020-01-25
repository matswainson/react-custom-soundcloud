import React, { FunctionComponent } from 'react';
import SoundCloud from '.';

const fontStack = 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif';

const StyleWrapper: FunctionComponent = (props) => {
  return <div style={{fontFamily: fontStack}}>{props.children}</div>
};

export default { title: 'SoundCloud' };

export const playlist: FunctionComponent= () => (
  <StyleWrapper>
    <SoundCloud
      playlist="73448639" />
  </StyleWrapper>
);

export const standard: FunctionComponent = () => (
  <StyleWrapper>
    <SoundCloud
      track="370226924" />
    </StyleWrapper>
);

export const mini: FunctionComponent = () => (
  <StyleWrapper>
    <SoundCloud
      track="194881641"
      mini={true}
    />
  </StyleWrapper>
);

export const lightTheme: FunctionComponent = () => (
  <StyleWrapper>
    <SoundCloud
      playlist="73448639"
      theme="light"
    />
  </StyleWrapper>
);
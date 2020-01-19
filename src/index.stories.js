import React from 'react';
import SoundCloud from './';

const fontStack = 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif';

const StyleWrapper = (props) => {
  return <div style={{fontFamily: fontStack}}>{props.children}</div>
};

export default { title: 'SoundCloud' };

export const playlist = () => (
  <StyleWrapper>
    <SoundCloud
      playlist="73448639" />
  </StyleWrapper>
);

export const standard = () => (
  <StyleWrapper>
    <SoundCloud
      track="370226924" />
  </StyleWrapper>
);

export const mini = () => (
  <StyleWrapper>
    <SoundCloud
      track="194881641"
      mini="true"
    />
  </StyleWrapper>
);

export const lightTheme = () => (
  <StyleWrapper>
    <SoundCloud
      playlist="73448639"
      theme="light"
    />
  </StyleWrapper>
);
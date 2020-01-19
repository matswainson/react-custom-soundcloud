import React from 'react';

const BackgroundArt = (props) => {
  const { background } = props;
  const getBackgroundImage = () => {
    return { backgroundImage: `url(${background})` };
  }
  return <div
    className="sc-player__background"
    style={getBackgroundImage()}
  />;
};

export default BackgroundArt;
import React from 'react';

interface Props {
  background: string;
}

const BackgroundArt: React.FC<Props> = (props) => {
  const { background } = props;
  const getBackgroundImage = (): object => {
    return { backgroundImage: `url(${background})` };
  }
  return <div
    className="sc-player__background"
    style={getBackgroundImage()}
  />;
};

export default BackgroundArt;
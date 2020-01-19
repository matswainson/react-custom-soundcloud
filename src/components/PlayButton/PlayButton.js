import React from 'react';
import classnames from 'classnames';

const PlayButton = (props) => {
  const { soundcloud, trackPlaying } = props;
  const playPause = () => {
    soundcloud.isPaused((paused) => {
      if (paused) {
        soundcloud.play();
      } else {
        soundcloud.pause();
      }
    });
  };
  return <button
    className={classnames('sc-player__play', {'sc-player--pause': trackPlaying})}
    onClick={playPause}
    type='button'
  />;
};

export default PlayButton;
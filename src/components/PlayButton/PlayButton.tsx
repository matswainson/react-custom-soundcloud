import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Soundcloud } from '../../types';

interface Props {
  soundcloud: Soundcloud;
  trackPlaying: boolean;
}

const PlayButton: FunctionComponent<Props> = (props) => {
  const { soundcloud, trackPlaying } = props;
  const playPause = (): void => {
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
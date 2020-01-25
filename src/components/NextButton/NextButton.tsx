import React from 'react';
import {
  SetCurrentTrack,
  Soundcloud,
  Track
} from '../../types';

interface Props {
  setCurrentTrack: SetCurrentTrack;
  soundcloud: Soundcloud;
  sounds: Track[];
  trackIndex: number;
}

const NextButton: React.FC<Props> = (props) => {
  const { setCurrentTrack, soundcloud, sounds, trackIndex } = props;
  const nextTrack = (): void => {
    console.log('nextTrack', trackIndex);
    soundcloud.isPaused((paused) => {
      if (paused) {
        soundcloud.next().pause();
      } else {
        soundcloud.next();
      }
    });
    setCurrentTrack(sounds[trackIndex+1], trackIndex+1);
  };
  return <button
    className='sc-player__next'
    onClick={nextTrack}
    type='button'
  />;
};

export default NextButton;
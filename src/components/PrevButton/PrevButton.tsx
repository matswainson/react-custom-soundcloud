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

const PrevButton: React.FC<Props> = (props) => {
  const { setCurrentTrack, soundcloud, sounds, trackIndex } = props;
  const prevTrack = (): void => {
    soundcloud.isPaused(function(paused){
      if (paused) {
        soundcloud.prev().pause();
      } else {
        soundcloud.prev();
      }
    });
    setCurrentTrack(sounds[trackIndex-1], trackIndex-1);
  };
  return <button
    className='sc-player__prev'
    onClick={prevTrack}
    type='button'
  />;
};

export default PrevButton;
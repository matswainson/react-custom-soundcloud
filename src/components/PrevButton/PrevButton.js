import React from 'react';

const PrevButton = (props) => {
  const { setCurrentTrack, soundcloud, sounds, trackIndex } = props;
  const prevTrack = () => {
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
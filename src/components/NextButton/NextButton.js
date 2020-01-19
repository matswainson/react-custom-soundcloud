import React from 'react';

const NextButton = (props) => {
  const { setCurrentTrack, soundcloud, sounds, trackIndex } = props;
  const nextTrack = () => {
    console.log('nextTrack', trackIndex);
    soundcloud.isPaused(function(paused){
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
import React from 'react';
import NextButton from './../NextButton';
import PlayButton from './../PlayButton';
import PrevButton from './../PrevButton';

const Buttons = (props) => {
  const { setCurrentTrack, soundcloud, sounds, trackIndex, trackPlaying } = props;
  const hasPlaylist = sounds && sounds.length > 1;
  return (
    <div className="sc-player__buttons">
      {hasPlaylist && trackIndex !== 0 && <PrevButton setCurrentTrack={setCurrentTrack} soundcloud={soundcloud} sounds={sounds} trackIndex={trackIndex} />}
      <PlayButton soundcloud={soundcloud} trackPlaying={trackPlaying} />
      {hasPlaylist && trackIndex !== sounds.length-1 && <NextButton setCurrentTrack={setCurrentTrack} soundcloud={soundcloud} sounds={sounds} trackIndex={trackIndex} />}
    </div>
  );
};

export default Buttons;
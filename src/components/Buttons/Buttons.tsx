import React from 'react';
import NextButton from './../NextButton';
import PlayButton from './../PlayButton';
import PrevButton from './../PrevButton';
import {
  SetCurrentTrack,
  Soundcloud,
  Track
} from '../../types';

interface Props {
  setCurrentTrack: SetCurrentTrack;
  soundcloud?: Soundcloud | null;
  sounds: Track[];
  trackIndex: number;
  trackPlaying: boolean;
}

const Buttons: React.FC<Props> = (props) => {
  const { setCurrentTrack, soundcloud, sounds, trackIndex, trackPlaying } = props;
  if (!soundcloud) {
    return null;
  }
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
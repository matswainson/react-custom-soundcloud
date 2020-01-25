import React from 'react';
import classnames from 'classnames';
import {
  SetCurrentTrack,
  Soundcloud,
  Track
} from '../../types';

interface Props {
  setCurrentTrack: SetCurrentTrack;
  soundcloud?: Soundcloud | null;
  sounds: Track[];
  theme: string;
}

interface Sound {
  artwork_url: string;
  user: {
    avatar_url: string;
  };
  title: string;
}

const Playlist: React.FC<Props> = (props) => {
  const { setCurrentTrack, soundcloud, sounds, theme } = props;
  if (!soundcloud || !sounds || (sounds && sounds.length < 2)) {
    return null;
  }
  const selectTrack = (idx: number): void => {
    setCurrentTrack(sounds[idx], idx);
    soundcloud.skip(idx);
  };
  return (
    <ul className={classnames('sc-player__playlist', {'sc-player--dark': theme!=='light'})}>
      {sounds.map((sound: Sound, idx) => {
        if (!sound.title) {
          return null;
        }
        const bg = sound.artwork_url || (sound.user && sound.user.avatar_url) || '';
        return (
          <li
            className="sc-player__playlist__item"
            key={idx}
            onClick={(): void => selectTrack(idx)}
          >
            <span className="sc-player__playlist__thumb" style={{backgroundImage: `url(${bg})`}} />
            <span className="sc-player__playlist__title">
              {sound.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Playlist;
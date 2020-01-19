import React from 'react';
import classnames from 'classnames';

const Playlist = (props) => {
  const { setCurrentTrack, soundcloud, sounds, theme } = props;
  if (!sounds || (sounds && sounds.length < 2)) {
    return '';
  }
  const selectTrack = (idx) => {
    setCurrentTrack(sounds[idx], idx);
    soundcloud.skip(idx);
  };
  return (
    <ul className={classnames('sc-player__playlist', {'sc-player--dark': theme!=='light'})}>
      {sounds.map((sound, idx) => {
        if (!sound.title) {
          return null;
        }
        const bg = sound.artwork_url || (sound.user && sound.user.avatar_url) || '';
        return (
          <li
            className="sc-player__playlist__item"
            key={idx}
            onClick={() => selectTrack(idx)}
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
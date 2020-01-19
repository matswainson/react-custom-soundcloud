import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { soundcloudApi } from './utils/consts';
import loadScript from './utils/loadScript';
import BackgroundArt from './components/BackgroundArt';
import Buttons from './components/Buttons';
import Iframe from './components/Iframe';
import Playlist from './components/Playlist';
import Title from './components/Title';
import Shade from './components/Shade';
import Wave from './components/Wave';
import './index.css';

const SoundCloud = (props) => {

  const { mini, track, playlist, theme } = props;

  if (!track && !playlist) {
    throw new Error('Prop track or playlist required.');
  }

  let [sounds, setSounds] = useState([]),
      [playProgress, setPlayProgress] = useState(0),
      [percentPlayed, setPercentPlayed] = useState(0),
      [currentTrack, setTrack] = useState(null),
      [trackPlaying, setTrackPlaying] = useState(false),
      [trackIndex, setTrackIndex] = useState(0),
      [soundcloud, setSoundcloud] = useState(null);
  const iframeRef = useRef(null);

  const setCurrentTrack = (track, index) => {
    setTrack({
      artist: track.user.username,
      artist_url: track.user.permalink_url,
      background: track.artwork_url || (track.user && track.user.avatar_url) || '',
      duration: track.duration,
      permalink_url: track.permalink_url,
      title: track.title
    });
    setTrackIndex(index);
  };

  useEffect(() => {
    if (!currentTrack) return;
    var position = Number(((playProgress.currentPosition / currentTrack.duration) * 100).toFixed(1));
    setPercentPlayed(position);
  }, [currentTrack, playProgress]);

  useEffect(() => {
    loadScript(soundcloudApi, () => {
      // eslint-disable-next-line no-undef
      setSoundcloud(SC.Widget(iframeRef.current));
    })
  }, []);

  useEffect(() => {
    if (!soundcloud) {
      return;
    }
    soundcloud.bind('ready', () => {
      soundcloud.getSounds((sounds) => {
        const tracks = sounds.filter(sound => sound.hasOwnProperty('title'));
        setSounds(tracks);
        setCurrentTrack(tracks[0], 0);
      });
    });
    // eslint-disable-next-line no-undef
    soundcloud.bind(SC.Widget.Events.PAUSE, () => {
      setTrackPlaying(false);
    });
    // eslint-disable-next-line no-undef
    soundcloud.bind(SC.Widget.Events.PLAY, setTrackPlaying, true);
    // eslint-disable-next-line no-undef
    soundcloud.bind(SC.Widget.Events.PLAY_PROGRESS, function(progress) {
      setPlayProgress(progress);
    });
  }, [soundcloud]);

  return (
    <div className='sc-player'>
      {currentTrack && (
        <div className={classnames('sc-player__current', {'sc-player--mini': mini})}>
          <Title
            artist={currentTrack.artist}
            artist_url={currentTrack.artist_url}
            permalink={currentTrack.permalink_url}
            title={currentTrack.title}
          />
          <Buttons
            setCurrentTrack={setCurrentTrack}
            soundcloud={soundcloud}
            sounds={sounds}
            trackIndex={trackIndex}
            trackPlaying={trackPlaying}
          />
          <BackgroundArt background={currentTrack.background} />
		    	<Shade />
          <Wave percentPlayed={percentPlayed} />
        </div>
      )}
      <Playlist
        setCurrentTrack={setCurrentTrack}
        soundcloud={soundcloud}
        sounds={sounds}
        theme={theme}
      />
      <Iframe
        ref={iframeRef}
        playlist={playlist}
        track={track}
      />
    </div>
  );

};

export default SoundCloud;
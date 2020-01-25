import React, {
  FunctionComponent,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  WidgetInitialiser,
  SoundCloudEvents,
  SoundCloudProps,
  SetCurrentTrack,
  Soundcloud,
  Track,
  Progress,
  CurrentTrack
} from './types';
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

const SoundCloud: FunctionComponent<SoundCloudProps> = (props) => {

  const { mini, track, playlist } = props;
  let { theme } = props;

  if (!track && !playlist) {
    throw new Error('Prop track or playlist required.');
  }

  if (theme !== 'light') {
    theme = 'dark';
  }

  const [sounds, setSounds] = useState<Track[]>([]),
        [playProgress, setPlayProgress] = useState<Progress>({ currentPosition: 0 }),
        [percentPlayed, setPercentPlayed] = useState<number>(0),
        [currentTrack, setTrack] = useState<CurrentTrack | null>(null),
        [trackPlaying, setTrackPlaying] = useState<boolean>(false),
        [trackIndex, setTrackIndex] = useState<number>(0),
        [soundcloud, setSoundcloud] = useState<Soundcloud | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const setCurrentTrack: SetCurrentTrack = (track, index): void => {
    setTrack({
      artist: track.user.username,
      artistUrl: track.user.permalink_url,
      background: track.artwork_url || (track.user && track.user.avatar_url) || '',
      duration: track.duration,
      permalinkUrl: track.permalink_url,
      title: track.title
    });
    setTrackIndex(index);
  };

  useEffect(() => {
    if (!currentTrack) return;
    const position = Number(((playProgress.currentPosition / currentTrack.duration) * 100).toFixed(1));
    setPercentPlayed(position);
  }, [currentTrack, playProgress]);

  useEffect(() => {
    loadScript(soundcloudApi, () => {
      if (iframeRef.current) {
        const soundcloudIframe = (window.SC.Widget as WidgetInitialiser)(iframeRef.current);
        setSoundcloud(soundcloudIframe);
      }
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
    soundcloud.bind((window.SC.Widget as SoundCloudEvents).Events.PAUSE, () => {
      setTrackPlaying(false);
    });
    soundcloud.bind((window.SC.Widget as SoundCloudEvents).Events.PLAY, () => {
      setTrackPlaying(true);
    });
    soundcloud.bind((window.SC.Widget as SoundCloudEvents).Events.PLAY_PROGRESS, (progress: Progress) => {
      setPlayProgress(progress);
    });
  }, [soundcloud]);

  return (
    <div className='sc-player'>
      {currentTrack && (
        <div className={classnames('sc-player__current', {'sc-player--mini': mini})}>
          <Title
            artist={currentTrack.artist}
            artistUrl={currentTrack.artistUrl}
            permalink={currentTrack.permalinkUrl}
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
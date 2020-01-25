export type SetCurrentTrack = (track: Track, index: number) => void;

export type WidgetInitialiser = (iframeRef: HTMLIFrameElement) => Soundcloud;

export type SoundCloudEvents = {
  Events: {
    PLAY: string;
    PLAY_PROGRESS: string;
    PAUSE: string;
  };
};

export type SoundCloudWidget = WidgetInitialiser | SoundCloudEvents;

declare global {
  interface Window {
    SC: {
      Widget: SoundCloudWidget;
    };
  }
}

export interface SoundCloudProps {
  mini?: boolean;
  track?: string;
  playlist?: string;
  theme?: string;
}

export interface Track {
  artist: string;
  artist_url: string;
  artwork_url: string;
  background: string;
  duration: number;
  permalink_url: string;
  title: string;
  user: {
    avatar_url: string;
    permalink_url: string;
    username: string;
  };
}

export interface Soundcloud {
  bind: (event: string, callback: (progress: Progress) => void) => void;
  getSounds: (callback: (sounds: Track[]) => void) => void;
  isPaused: (callback: (paused: boolean) => void) => void;
  next: () => {
    pause: () => void;
  };
  skip: (idx: number) => void;
  play: () => void;
  pause: () => void;
  prev: () => {
    pause: () => void;
  };
  Events: {
    PLAY: string;
    PLAY_PROGRESS: string;
    PAUSE: string;
  };
};

export interface Progress {
  currentPosition: number;
}

export interface CurrentTrack {
  artist: string;
  artistUrl: string;
  background: string;
  duration: number;
  permalinkUrl: string;
  title: string;
}
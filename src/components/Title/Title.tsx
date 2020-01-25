import React, { FunctionComponent } from 'react';

interface Props {
  artist: string;
  artistUrl: string;
  permalink: string;
  title: string;
}

const Title: FunctionComponent<Props> = (props) => {
  const { artist, artistUrl, permalink, title } = props;
  return (
    <>
      <div className="sc-player__artist">
        <a href={artistUrl} target="_blank" rel="noopener noreferrer">
          {artist}
        </a>
      </div>
      <div className="sc-player__title">
        <a href={permalink} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </>
  );
};

export default Title;
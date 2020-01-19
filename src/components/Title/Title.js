import React from 'react';

const Title = (props) => {
  const { artist, artist_url, permalink, title } = props;
  return (
    <>
      <div className="sc-player__artist">
        <a href={artist_url} target="_blank" rel="noopener noreferrer">
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
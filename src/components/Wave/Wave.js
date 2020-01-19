import React from 'react';

const Wave = (props) => {
  const { percentPlayed } = props;
  const progressWidth = () => {
    return { width: `${percentPlayed}%` };
  }
  return (
    <div className="sc-player__wave" style={progressWidth()} />
  );
};

export default Wave;
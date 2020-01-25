import React, { FunctionComponent } from 'react';

interface Props {
  percentPlayed: number;
}

const Wave: FunctionComponent<Props> = (props) => {
  const { percentPlayed } = props;
  const progressWidth = (): object => {
    return { width: `${percentPlayed}%` };
  }
  return (
    <div className="sc-player__wave" style={progressWidth()} />
  );
};

export default Wave;
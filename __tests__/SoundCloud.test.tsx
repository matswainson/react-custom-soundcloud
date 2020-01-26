import * as React from 'react';
import SoundCloud from '../src';
import { create, ReactTestRenderer } from 'react-test-renderer';

let soundcloud: ReactTestRenderer;

it('renders correctly', () => {
  // soundcloud = create(<SoundCloud track="370226924" />);
  soundcloud = create(<SoundCloud track="370226924" />);
  soundcloud.toJSON();
  expect(soundcloud).toMatchSnapshot();
});
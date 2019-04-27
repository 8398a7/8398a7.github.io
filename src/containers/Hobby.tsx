import React, { SFC, useEffect } from 'react';
import 'video-react/dist/video-react.css';
import { dispatch } from '../';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';
import updateLocation from '../lib/updateLocation';

const Hobby: SFC<{}> = () => {
  useEffect(() => {
    dispatch(updateLocation());
  });
  return (
    <>
      <div className="col s12">
        <Gymkhana />
        <MusicGame />
      </div>
    </>
  );
};

export default Hobby;

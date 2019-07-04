import React, { SFC } from 'react';
import 'video-react/dist/video-react.css';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';

const Hobby: SFC<{}> = () => {
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

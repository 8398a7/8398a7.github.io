import React from 'react';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';

const Hobby: React.SFC = () => {
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

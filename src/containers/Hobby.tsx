import React from 'react';
import type { FC } from 'react';
import Gymkhana from '../components/Hobby/Gymkhana';
import MusicGame from '../components/Hobby/MusicGame';

const Hobby: FC = () => {
  return (
    <>
      <Gymkhana />
      <MusicGame />
    </>
  );
};

export default Hobby;

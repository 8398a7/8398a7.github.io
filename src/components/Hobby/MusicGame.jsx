import React from 'react';
import SectionTitle from '../SectionTitle';

const MusicGame = () => (
  <div className="col s12">
    <SectionTitle {...{ icon: 'gamepad', title: 'Music Game(2013 - )' }} />
    <div className="col s6">
      <div className="video-container video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t4FFqzzdYfw"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
    <div className="col s6">
      <table className="striped">
        <tbody>
          <tr>
            <td>iidx</td>
            <td>☆☆</td>
          </tr>
          <tr>
            <td>bms</td>
            <td>★7</td>
          </tr>
          <tr>
            <td>recommend</td>
            <td>★18.16</td>
          </tr>
          <tr>
            <td>style</td>
            <td>SP/2P/対象固定+3:5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default MusicGame;

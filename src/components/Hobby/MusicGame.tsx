import * as React from 'react';
import 'video-react/dist/video-react.css';
import SectionTitle from '../SectionTitle';
const Player: any = require('video-react').Player;

const MusicGame: React.StatelessComponent<{}> = () => (
  <div className="col s12">
    <SectionTitle {...{ icon: 'gamepad', title: 'Music Game(2013 - )' }} />
    <div className="flexbox-main">
      <div className="flexbox-column">
        <Player><source src="https://husq.tk/videos/bms1.mp4" /></Player>
      </div>
      <div className="flexbox-column">
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
              <td>★18.21</td>
            </tr>
            <tr>
              <td>style</td>
              <td>SP/2P/対象固定+3:5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default MusicGame;

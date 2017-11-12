import * as React from 'react';
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
              <td>bms</td>
              <td>★7</td>
            </tr>
            <tr>
              <td>recommend</td>
              <td>★18.44</td>
            </tr>
            <tr>
              <td>style</td>
              <td>SP/2P/対象固定+3:5</td>
            </tr>
            <tr>
              <td>start</td>
              <td>13/06/01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="flexbox-main">
      <div className="flexbox-column">
        <table className="striped">
          <tbody>
            <tr>
              <td>iidx</td>
              <td>☆☆</td>
            </tr>
            <tr>
              <td>author: <a href="https://iidx12.tk">iidx12.tk</a></td>
              <td>14/11/11</td>
            </tr>
            <tr>
              <td>remain</td>
              <td>灼熱pt.1 & 2/ICARUS†/Mare/冥</td>
            </tr>
            <tr>
              <td>start</td>
              <td>Lincle</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flexbox-column">
        <Player><source src="https://husq.tk/videos/bms2.mp4" /></Player>
      </div>
    </div>
  </div>
);

export default MusicGame;

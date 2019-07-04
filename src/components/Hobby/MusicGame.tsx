import React from 'react';
// @ts-ignore
import { Player } from 'video-react';
import SectionTitle from '../SectionTitle';

const MusicGame: React.SFC = () => (
  <div className="col s12">
    <SectionTitle {...{ icon: 'gamepad', title: 'Music Game(2013 - )' }} />
    <div className="flexbox-main">
      <div className="flexbox-column">
        <Player>
          <source src="https://husq.tk/videos/bms1.mp4" />
        </Player>
      </div>
      <div className="flexbox-column">
        <table className="striped">
          <tbody>
            <tr>
              <td>bms</td>
              <td>★8</td>
            </tr>
            <tr>
              <td>recommend</td>
              <td>★20.00</td>
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
              <td>
                author: <a href="https://iidx12.tk">iidx12.tk</a>
              </td>
              <td>14/11/11</td>
            </tr>
            <tr>
              <td>
                author: <a href="https://score.iidx12.tk">IST</a>
              </td>
              <td>18/01/20</td>
            </tr>
            <tr>
              <td>
                author: <a href="https://citrus-ir.tk">Citrus IR</a>
              </td>
              <td>18/05/27</td>
            </tr>
            <tr>
              <td>remain</td>
              <td>灼熱/ICARUS†/Mare</td>
            </tr>
            <tr>
              <td>start</td>
              <td>Lincle</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flexbox-column">
        <Player>
          <source src="https://husq.tk/videos/bms2.mp4" />
        </Player>
      </div>
    </div>
  </div>
);

export default MusicGame;

import React from 'react';
import SectionTitle from '../SectionTitle';

const MusicGame: React.SFC = () => (
  <div>
    <SectionTitle {...{ icon: 'gamepad', title: 'Music Game(2013 - )' }} />
    <div className="columns">
      <div className="column">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t4FFqzzdYfw"
            title="恋の2-4-11(BMS Edit)"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            frameBorder="0"
          />
        </div>
        <table className="table is-striped is-hoverable is-fullwidth">
          <tbody>
            <tr>
              <td>bms</td>
              <td>★8</td>
            </tr>
            <tr>
              <td>recommend</td>
              <td>★20.16</td>
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
      <div className="column">
        <table className="table is-striped is-hoverable is-fullwidth">
          <tbody>
            <tr>
              <td>iidx</td>
              <td>☆☆</td>
            </tr>
            <tr>
              <td>
                author: <a href="https://sp12.iidx.app">sp12.iidx.app</a>
              </td>
              <td>14/11/11</td>
            </tr>
            <tr>
              <td>
                author: <a href="https://score.iidx.app">IST</a>
              </td>
              <td>18/01/20</td>
            </tr>
            <tr>
              <td>
                author: <a href="https://citrus-ir.iidx.app">Citrus IR</a>
              </td>
              <td>18/05/27</td>
            </tr>
            <tr>
              <td>remain</td>
              <td>灼熱/ICARUS†/Mare/X-DEN</td>
            </tr>
            <tr>
              <td>start</td>
              <td>Lincle</td>
            </tr>
          </tbody>
        </table>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LYMssmrdz0Y"
            title="Poppin' Shower"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  </div>
);

export default MusicGame;

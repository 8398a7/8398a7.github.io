import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const Gymkhana: FC = () => (
  <div>
    <SectionTitle {...{ icon: 'motorcycle', title: 'Gymkhana(2010 - 2012, 2023-)' }} />
    <div className="columns">
      <div className="column">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wmwIFR_nJbE?si=Kq6OXi1Yuzkh7xtn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen={true}
          />
        </div>
        <table className="table is-striped is-hoverable is-fullwidth table-modern">
          <tbody>
            <tr>
              <td>2010 愛媛DUNLOP杯#スペシャルN</td>
              <td>2010/04/25</td>
              <td>21/30 (121.14%) (first run)</td>
            </tr>
            <tr>
              <td>2011 愛媛DUNLOP杯#スペシャルN</td>
              <td>2011/04/24</td>
              <td>1/26 (100.0%)</td>
            </tr>
            <tr>
              <td>2011 DUNLOP杯#JAPAN</td>
              <td>2011/10/09</td>
              <td>65/190 (108.91%)</td>
            </tr>
            <tr>
              <td>2011 近畿DUNLOP杯#2</td>
              <td>2011/12/11</td>
              <td>4/42 (102.53%)</td>
            </tr>
            <tr>
              <td>2025 JAGE杯#4</td>
              <td>2025/11/09</td>
              <td>34/143 (106.87%)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="column">
        <table className="table is-striped is-hoverable is-fullwidth table-modern">
          <thead>
            <tr>
              <th>Group</th>
              <th>License</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JAGE</td>
              <td>C1</td>
            </tr>
          </tbody>
        </table>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fPdtiItuGok?si=6J8q41A8nQz31fcf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen={true}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Gymkhana;

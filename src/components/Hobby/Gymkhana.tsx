import React from 'react';
import type { FC } from 'react';
import SectionTitle from '../SectionTitle';

const Gymkhana: FC = () => (
  <div>
    <SectionTitle {...{ icon: 'motorcycle', title: 'Gymkhana(2010 - 2012)' }} />
    <div className="columns">
      <div className="column">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6_EtxOKU63U"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="どら5787"
            allowFullScreen={true}
            frameBorder="0"
          />
        </div>
        <table className="table is-striped is-hoverable is-fullwidth" style={{ marginBottom: '5px' }}>
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
              <td>2011 中国大会#2</td>
              <td>2011/09/11</td>
              <td>10/29 (105.21%)</td>
            </tr>
            <tr>
              <td>2011 DUNLOP杯#JAPAN</td>
              <td>2011/10/09</td>
              <td>65/190 (108.91%)</td>
            </tr>
            <tr>
              <td>2011 愛媛DUNLOP杯#3</td>
              <td>2011/11/20</td>
              <td>8/44 (107.81%)</td>
            </tr>
            <tr>
              <td>2011 近畿DUNLOP杯#2</td>
              <td>2011/12/11</td>
              <td>4/42 (102.53%)</td>
            </tr>
            <tr>
              <td>2012 近畿DUNLOP杯#1</td>
              <td>2012/04/30</td>
              <td>3/40 (104.48%)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="column">
        <table className="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Group</th>
              <th>License</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>四国</td>
              <td>B</td>
            </tr>
            <tr>
              <td>中国</td>
              <td>B</td>
            </tr>
            <tr>
              <td>近畿</td>
              <td>B</td>
            </tr>
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
            src="https://www.youtube.com/embed/9y5YaNRyl_4"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="20120520MSGC"
            allowFullScreen={true}
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Gymkhana;

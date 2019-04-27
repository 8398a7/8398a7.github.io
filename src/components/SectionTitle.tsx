import React, { SFC } from 'react';
import './SectionTitle.css';

interface IProps {
  icon: string;
  title: string;
}
const SectionTitle: SFC<IProps> = ({ icon, title }) => (
  <h2 className="header indigo-text lighten-1 section-title">
    <span>
      <i className={`fa fa-${icon}`} />
      {title}
    </span>
  </h2>
);

export default SectionTitle;

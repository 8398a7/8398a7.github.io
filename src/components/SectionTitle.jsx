import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({ icon, title }) => (
  <h2 className="header indigo-text lighten-1 section-title">
    <span>
      <i className={`fa fa-${icon}`} />
      {title}
    </span>
  </h2>
)

export default SectionTitle;

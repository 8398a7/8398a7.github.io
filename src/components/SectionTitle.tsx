import React from 'react';

interface IProps {
  icon: string;
  title: string;
}
const SectionTitle: React.SFC<IProps> = ({ icon, title }) => (
  <h2 className="subtitle is-2">
    <span>
      <i className={`fas fa-${icon}`} />
      {title}
    </span>
  </h2>
);

export default SectionTitle;

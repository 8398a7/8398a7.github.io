import * as React from 'react';
import './SectionTitle.scss';

type Props = {
  icon: string,
  title: string,
}

const SectionTitle: React.StatelessComponent<Props> = ({ icon, title }) => (
  <h2 className="header indigo-text lighten-1 section-title">
    <span>
      <i className={`fa fa-${icon}`} />
      {title}
    </span>
  </h2>
)

export default SectionTitle;

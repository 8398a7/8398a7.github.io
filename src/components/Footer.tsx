import React from 'react';
import type { FC } from 'react';

const Footer: FC = () => (
  <footer className="footer">
    <div className="content has-text-centered text-sm font-medium">
      <strong>Last Modified</strong>: {import.meta.env.VITE_LAST_MODIFIED ?? ''}
    </div>
  </footer>
);

export default Footer;

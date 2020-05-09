import React from 'react';

const Footer: React.SFC = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <strong>Last Modified</strong>: {process.env.REACT_APP_LAST_MODIFIED}
    </div>
  </footer>
);

export default Footer;

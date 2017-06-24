
import * as React from 'react';

interface IProps {
  revision: string;
}

const Footer: React.StatelessComponent<IProps> = ({ revision }) => (
  <footer className="center">
    <i className="fa fa-code-fork" />revision: {revision}
  </footer>
);

export default Footer;

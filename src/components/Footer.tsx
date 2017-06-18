
import * as React from 'react';

type Props = {
  revision: string,
}

const Footer: React.StatelessComponent<Props> = ({ revision }) => (
  <footer className="center">
    <i className="fa fa-code-fork" />revision: {revision}
  </footer>
)

export default Footer;
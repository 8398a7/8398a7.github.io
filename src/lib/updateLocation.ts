import { push } from 'connected-react-router';

export default () => push(window.location.pathname + window.location.search);

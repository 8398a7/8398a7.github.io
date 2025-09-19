import NoMatch from './NoMatch';
import renderWithRoot from '../test/render';

it('renders without crashing', () => {
  const { unmount } = renderWithRoot(<NoMatch />);
  unmount();
});

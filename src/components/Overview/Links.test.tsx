import Links from './Links';
import renderWithRoot from '../../test/render';

it('renders without crashing', () => {
  const { unmount } = renderWithRoot(<Links />);
  unmount();
});

import Gymkhana from './Gymkhana';
import renderWithRoot from '../../test/render';

it('renders without crashing', () => {
  const { unmount } = renderWithRoot(<Gymkhana />);
  unmount();
});

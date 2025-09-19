import ActiveProjects from './ActiveProjects';
import renderWithRoot from '../../test/render';

it('renders without crashing', () => {
  const { unmount } = renderWithRoot(<ActiveProjects meta={{ abilitysheet: 0, ist: 0 }} />);
  unmount();
});

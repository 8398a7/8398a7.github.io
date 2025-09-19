import SectionTitle from './SectionTitle';
import renderWithRoot from '../test/render';

it('renders without crashing', () => {
  const { unmount } = renderWithRoot(<SectionTitle icon="info" title="AboutMe" />);
  unmount();
});

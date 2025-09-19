import SkillSet from './SkillSet';
import renderWithRoot from '../../test/render';

it('renders without crashing', () => {
  const { unmount } = renderWithRoot(<SkillSet />);
  unmount();
});

import MusicGame from './MusicGame';
import renderWithRoot from '../../test/render';

it('renders without crashing', () => {
  const { unmount } = renderWithRoot(<MusicGame />);
  unmount();
});

import Card from './Card';
import renderWithRoot from '../test/render';

it('renders without crashing', () => {
  const { unmount } = renderWithRoot(<Card title="test" body={['test', 'test2']} link="https://8398a7.github.io" />);
  unmount();
});

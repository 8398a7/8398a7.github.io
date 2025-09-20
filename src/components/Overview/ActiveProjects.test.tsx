import ActiveProjects from './ActiveProjects';
import type { MetricState } from '../../features/meta';
import renderWithRoot from '../../test/render';

it('renders without crashing', () => {
  const metric: MetricState = { value: 0, status: 'idle', error: null };
  const { unmount } = renderWithRoot(<ActiveProjects abilitysheet={metric} ist={metric} />);
  unmount();
});

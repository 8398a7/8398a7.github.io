import ActiveProjects from './ActiveProjects';
import type { MetricState } from '../../features/meta';
import renderWithRoot from '../../test/render';

it('renders without crashing', () => {
  const metric: MetricState = { value: 0, status: 'idle', error: null };
  const { unmount } = renderWithRoot(<ActiveProjects abilitysheet={metric} ist={metric} />);

  expect(document.body.textContent).toContain('mg-tools');
  expect(document.body.textContent).not.toContain('lgtm_creator');
  expect(document.body.textContent).not.toContain('api-abilitysheet');

  unmount();
});

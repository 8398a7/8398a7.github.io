import type { ReactNode } from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';

type RenderResult = {
  unmount: () => void;
};

export const renderWithRoot = (node: ReactNode): RenderResult => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(node);
  });

  return {
    unmount: () => {
      act(() => {
        root.unmount();
      });
      container.remove();
    },
  };
};

export default renderWithRoot;

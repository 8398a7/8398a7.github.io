import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bsky-embed': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        username?: string;
        feed?: string;
        search?: string;
        mode?: string;
        limit?: string | number;
        'link-target'?: string;
        'load-more'?: string;
        'link-image'?: string;
        'disable-styles'?: string;
        'custom-styles'?: string;
        'date-format'?: string;
      };
    }
  }
}

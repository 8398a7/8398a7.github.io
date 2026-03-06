import React from 'react';
import type { FC } from 'react';
import gh from '../../images/gh.png';
import hateblo from '../../images/hateblo.png';
import SectionTitle from '../SectionTitle';
import Card from '../Card';

const svgToDataUri = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

const xIcon = svgToDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
    <rect width="120" height="120" rx="26" fill="#111827"/>
    <path d="M27 28h18.8l16.7 24.1L82.8 28H93l-25.9 29.7L95 92H76.2L58 65.8 35.2 92H25l28.4-32.6L27 28Z" fill="#fff"/>
  </svg>`,
);

const blueskyIcon = svgToDataUri(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
    <rect width="120" height="120" rx="26" fill="#0285FF"/>
    <path transform="translate(-2 14) scale(0.95)" d="M60.3 52.1C67.2 38.7 81.8 26 89.8 20.9c5.8-3.7 15.1-6.5 15.1 3.9 0 2.1-1.2 17.5-2 19.9-2.6 8.6-11.9 10.8-20 9.5 14.2 2.4 17.8 10.2 10 17.8-14.9 14.5-21.3-3.7-23-8.3l-3.3-10.7-3.3 10.7c-1.7 4.6-8.1 22.8-23 8.3-7.8-7.6-4.2-15.4 10-17.8-8.1 1.3-17.4-.9-20-9.5-.8-2.4-2-17.8-2-19.9 0-10.4 9.3-7.6 15.1-3.9 8 5.1 22.6 17.8 29.5 31.2Z" fill="#fff"/>
  </svg>`,
);

const Links: FC = () => (
  <section className="grid gap-5">
    <SectionTitle {...{ icon: 'link', title: 'Link' }} />
    <Card title="GitHub" href="https://github.com/8398a7" hrefText="@8398a7" icon={gh} />
    <Card title="Hateblo" href="https://839.hateblo.jp/" hrefText="Link" icon={hateblo} />
    <Card title="X" href="https://x.com/8398a7" hrefText="@8398a7" icon={xIcon} />
    <Card
      title="Bluesky"
      href="https://bsky.app/profile/839.bsky.social"
      hrefText="@839.bsky.social"
      icon={blueskyIcon}
    />
  </section>
);

export default Links;

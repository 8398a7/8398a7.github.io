import React from 'react';
import gh from '../../images/gh.png';
import hateblo from '../../images/hateblo.png';
import qiita from '../../images/qiita.png';
import twitter from '../../images/twitter.png';
import wantedly from '../../images/wantedly.png';
import SectionTitle from '../SectionTitle';
import Card from '../Card';

const Links: React.SFC = () => (
  <>
    <SectionTitle {...{ icon: 'link', title: 'Link' }} />
    <Card
      title="GitHub"
      href="https://github.com/8398a7"
      hrefText="@8398a7"
      icon={gh}
    />
    <Card
      title="Hateblo"
      href="https://839.hateblo.jp/"
      hrefText="Link"
      icon={hateblo}
    />
    <Card
      title="Twitter"
      href="https://twitter.com/8398a7"
      hrefText="@8398a7"
      icon={twitter}
    />
    <Card
      title="Wantedly"
      href="https://www.wantedly.com/users/2796548"
      hrefText="Link"
      icon={wantedly}
    />
    <Card
      title="Qiita"
      href="https://qiita.com/8398a7"
      hrefText="@8398a7"
      icon={qiita}
    />
  </>
);

export default Links;

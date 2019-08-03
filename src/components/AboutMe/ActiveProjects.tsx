import React from 'react';

import { RootState } from '../../ducks';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

interface IProps {
  meta: RootState['meta'];
}
const ActiveProjects: React.SFC<IProps> = ({ meta }) => (
  <>
    <SectionTitle {...{ icon: 'telegram', title: 'Active Projects' }} />
    <Card
      title="abilitysheet"
      body={[
        'iidxのSP12難易度参考表',
        `登録者数: ${meta.abilitysheet}名`,
        'rails, react',
      ]}
      link="https://github.com/8398a7/abilitysheet"
    />
    <Card
      title="IIDX Score Table(IST)"
      body={[
        'iidxのスコア管理ツール(SP/DP)',
        `登録者数: ${meta.ist}名`,
        'rails, react',
      ]}
      link="https://8398a7.github.io"
    />
    <Card
      title="Citrus IR"
      body={['beatorajaのIRサーバ', `α版提供`, 'rails, java']}
      link="https://8398a7.github.io"
    />
    <Card
      title="lgtm_creator"
      body={['gif動画にLGTMをつけるcli', 'ruby gem']}
      link="https://github.com/8398a7/lgtm_creator"
    />
    <Card
      title="api-abilitysheet"
      body={['abilitysheetのapiサーバ', 'golang, docker']}
      link="https://github.com/8398a7/api-abilitysheet"
    />
  </>
);

export default ActiveProjects;

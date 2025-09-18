import React from 'react';

import gh from '../../images/gh.png';
import gin from '../../images/gin.png';
import ist from '../../images/ist.png';
import { RootState } from '../../ducks';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

interface IProps {
  meta: RootState['meta'];
}
const ActiveProjects: React.SFC<IProps> = ({ meta }) => (
  <>
    <SectionTitle {...{ icon: 'rocket', title: 'Active Projects' }} />
    <Card
      title="abilitysheet"
      href="https://github.com/8398a7/abilitysheet"
      icon={gh}
      hrefText="GitHub"
      tags={['Rails', 'React']}
    >
      <>
        <div>beatmania IIDXのSP☆12難易度参考表</div>
        <div>登録者数: {meta.abilitysheet}名</div>
      </>
    </Card>
    <Card title="IIDX Score Table" href="https://score.iidx.app" icon={ist} hrefText="Link" tags={['Rails', 'React']}>
      <>
        <div>iidxのスコア管理ツール(SP/DP)</div>
        <div>登録者数: {meta.ist}名</div>
      </>
    </Card>
    <Card
      title="lgtm_creator"
      href="https://github.com/8398a7/lgtm_creator"
      icon={gh}
      hrefText="GitHub"
      tags={['Ruby', 'Gem']}
    >
      <>
        <div>gif動画にLGTMをつけるcli</div>
      </>
    </Card>
    <Card
      title="api-abilitysheet"
      href="https://github.com/8398a7/api-abilitysheet"
      icon={gin}
      hrefText="GitHub"
      tags={['Golang', 'Docker']}
    >
      <>
        <div>abilitysheetのapiサーバ</div>
      </>
    </Card>
  </>
);

export default ActiveProjects;

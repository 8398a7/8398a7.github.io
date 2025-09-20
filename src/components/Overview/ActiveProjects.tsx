import React from 'react';
import type { FC } from 'react';

import gh from '../../images/gh.png';
import gin from '../../images/gin.png';
import istIcon from '../../images/ist.png';
import type { MetricState } from '../../features/meta';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

interface IProps {
  abilitysheet: MetricState;
  ist: MetricState;
}

const formatMetric = (metric: MetricState) => {
  if (metric.status === 'loading') {
    return '読み込み中...';
  }

  if (metric.status === 'failed') {
    return metric.error ?? '取得に失敗しました';
  }

  if (metric.status === 'succeeded') {
    return `${metric.value.toLocaleString()}名`;
  }

  return '---';
};

const ActiveProjects: FC<IProps> = ({ abilitysheet, ist }) => (
  <>
    <SectionTitle {...{ icon: 'rocket', title: 'Active Projects' }} />
    <Card
      title="abilitysheet"
      href="https://github.com/8398a7/abilitysheet"
      icon={gh}
      hrefText="GitHub"
      tags={['Rails', 'React']}
    >
      <div>beatmania IIDXのSP☆12難易度参考表</div>
      <div>登録者数: {formatMetric(abilitysheet)}</div>
    </Card>
    <Card
      title="IIDX Score Table"
      href="https://score.iidx.app"
      icon={istIcon}
      hrefText="Link"
      tags={['Rails', 'React']}
    >
      <div>iidxのスコア管理ツール(SP/DP)</div>
      <div>登録者数: {formatMetric(ist)}</div>
    </Card>
    <Card
      title="lgtm_creator"
      href="https://github.com/8398a7/lgtm_creator"
      icon={gh}
      hrefText="GitHub"
      tags={['Ruby', 'Gem']}
    >
      <div>gif動画にLGTMをつけるcli</div>
    </Card>
    <Card
      title="api-abilitysheet"
      href="https://github.com/8398a7/api-abilitysheet"
      icon={gin}
      hrefText="GitHub"
      tags={['Golang', 'Docker']}
    >
      <div>abilitysheetのapiサーバ</div>
    </Card>
  </>
);

export default ActiveProjects;

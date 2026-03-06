import React from 'react';
import type { FC } from 'react';

import gh from '../../images/gh.png';
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
  <section className="grid gap-5">
    <SectionTitle {...{ icon: 'rocket', title: 'Active Projects' }} />
    <Card
      title="abilitysheet"
      href="https://github.com/8398a7/abilitysheet"
      icon={gh}
      hrefText="GitHub"
      tags={['Rails', 'React']}
    >
      <div className="grid gap-3">
        <p>beatmania IIDXのSP☆12難易度参考表</p>
        <div className="rounded-2xl bg-slate-950/4 px-4 py-3 text-slate-700 dark:bg-white/5 dark:text-slate-200">
          登録者数: {formatMetric(abilitysheet)}
        </div>
      </div>
    </Card>
    <Card
      title="IIDX Score Table"
      href="https://score.iidx.app"
      icon={istIcon}
      hrefText="Link"
      tags={['Rails', 'React']}
    >
      <div className="grid gap-3">
        <p>beatmania IIDXのスコア管理ツール(SP/DP)</p>
        <div className="rounded-2xl bg-slate-950/4 px-4 py-3 text-slate-700 dark:bg-white/5 dark:text-slate-200">
          登録者数: {formatMetric(ist)}
        </div>
      </div>
    </Card>
    <Card
      title="mg-tools"
      href="https://8398a7.github.io/mg-tools/"
      icon={gh}
      hrefText="Link"
      tags={['React', 'Vite']}
    >
      <p>モトジムカーナ向けの補助ツール集</p>
    </Card>
  </section>
);

export default ActiveProjects;

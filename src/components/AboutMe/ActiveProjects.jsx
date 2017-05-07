import React from 'react';
import SectionTitle from '../SectionTitle';
import Card from '../Card';

const ActiveProjects = ({ users }) => (
  <div>
    <SectionTitle {...{ icon: 'telegram', title: 'Active Projects' }} />
    <Card
      title="abilitysheet"
      body={['iidxのSP12難易度参考表', `登録者数: ${users}名`, 'rails, react']}
      link="https://github.com/8398a7/abilitysheet"
    />
    <Card
      title="lgtm_creator"
      body={['gif動画にLGTMをつけるcli', 'ruby gem']}
      link="https://github.com/8398a7/lgtm_creator"
    />
    <Card
      title="api-abilitysheet"
      body={['abilitysheetのapiサーバ', 'crystal, docker']}
      link="https://github.com/8398a7/api-abilitysheet"
    />
  </div>
);

export default ActiveProjects;

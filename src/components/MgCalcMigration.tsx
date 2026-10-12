import React, { useEffect, useState } from 'react';
import { attachMgCalcMigration, MG_CALC_ORIGIN, readMgCalcBackup } from '../lib/mgCalcMigration';

export default function MgCalcMigration() {
  const [backup] = useState(() => {
    try {
      return readMgCalcBackup();
    } catch {
      return null;
    }
  });
  const [status, setStatus] = useState('');
  useEffect(() => {
    document.title = 'mg-calc 保存データの引き継ぎ';
    return attachMgCalcMigration(() =>
      setStatus('新サイトに保存データを送りました。新サイトの画面で結果を確認してください。'),
    );
  }, []);
  const found = backup && (backup.records.length > 0 || Boolean(backup.presets?.length));
  const json = backup
    ? JSON.stringify(
        { records: backup.records, ...(backup.presets ? { today: { presets: backup.presets } } : {}) },
        null,
        2,
      )
    : '';
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(json);
      setStatus('バックアップをコピーしました。必要なら新サイトの「データ管理 → インポート」に貼り付けられます。');
    } catch {
      setStatus('コピーできませんでした。下のバックアップ欄から選択してコピーしてください。');
    }
  };
  return (
    <main className="mx-auto grid min-h-screen max-w-2xl content-center gap-5 px-5 py-12 text-slate-900 dark:text-slate-100">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">MG TOOLS</p>
        <h1 className="mt-2 text-2xl font-bold">mg-calc 保存データの引き継ぎ</h1>
        <p className="mt-4 text-sm leading-7">
          新サイトの「旧サイトの記録を引き継ぐ」から開いた場合は、自動で記録とプリセットを送ります。旧サイトの保存データは残ります。
        </p>
        <p className="mt-3 text-sm leading-7">
          このページを直接開いた場合は、新サイトに戻って引き継ぎボタンを押してください。以前使っていたブラウザーで実行する必要があります。
        </p>
        <p className="mt-4 font-medium">
          {backup === null
            ? '保存データを読み出せませんでした。ブラウザーの保存設定をご確認ください。'
            : found
              ? `保存済み記録 ${backup.records.length}件${backup.presets?.length ? '・プリセットあり' : ''}`
              : 'このブラウザーには旧サイトの保存データが見つかりませんでした。'}
        </p>
        <a
          href={`${MG_CALC_ORIGIN}/mg-calc`}
          className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-orange-700 px-4 font-semibold text-white!"
        >
          新サイトの mg-calc を開く
        </a>
        {status && (
          <p role="status" className="mt-4 text-sm leading-7">
            {status}
          </p>
        )}
        {found && (
          <details className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-700">
            <summary className="cursor-pointer py-2 font-semibold">バックアップを取り出す</summary>
            <p className="mt-2 text-sm leading-7">
              手動インポートは新サイトの記録一覧を置き換えます。新サイトに記録がある場合は、自動引き継ぎをご利用ください。
            </p>
            <button
              type="button"
              onClick={copy}
              className="mt-3 min-h-11 rounded-xl border border-slate-300 px-4 font-medium dark:border-slate-600"
            >
              バックアップをコピー
            </button>
            <textarea
              aria-label="mg-calc バックアップJSON"
              readOnly
              value={json}
              className="mt-3 min-h-48 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 font-mono text-xs dark:border-slate-600 dark:bg-slate-950"
            />
          </details>
        )}
      </section>
    </main>
  );
}

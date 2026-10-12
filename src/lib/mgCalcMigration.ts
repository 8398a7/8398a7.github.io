export const MG_CALC_ORIGIN = 'https://mg-tools.kv3.dev';

export function readMgCalcBackup() {
  const rawRecords = localStorage.getItem('mg-calc-records-v1');
  const rawPresets = localStorage.getItem('mg-calc-presets');
  const records: unknown = rawRecords === null ? [] : JSON.parse(rawRecords);
  const presets: unknown = rawPresets === null ? null : JSON.parse(rawPresets);
  if (
    !Array.isArray(records) ||
    (presets !== null &&
      (!Array.isArray(presets) ||
        !presets.every((value) => typeof value === 'number' && Number.isFinite(value) && value > 0)))
  ) {
    throw new Error('保存データの形式を確認できませんでした。');
  }
  return { records, presets: presets as number[] | null };
}

export function attachMgCalcMigration(onSent: () => void) {
  const opener = window.opener;
  const requestId = new URLSearchParams(window.location.search).get('requestId');
  if (!opener || !requestId || !/^[a-f0-9-]{36}$/.test(requestId)) return () => {};
  let sent = false;
  const receive = (event: MessageEvent) => {
    if (
      sent ||
      event.origin !== MG_CALC_ORIGIN ||
      event.source !== opener ||
      event.data?.type !== 'mg-calc-migration-request' ||
      event.data.requestId !== requestId
    )
      return;
    try {
      const data = readMgCalcBackup();
      opener.postMessage({ type: 'mg-calc-migration-data', requestId, ...data }, MG_CALC_ORIGIN);
    } catch {
      opener.postMessage({ type: 'mg-calc-migration-data', requestId, error: true }, MG_CALC_ORIGIN);
    }
    sent = true;
    onSent();
  };
  window.addEventListener('message', receive);
  opener.postMessage({ type: 'mg-calc-migration-ready', requestId }, MG_CALC_ORIGIN);
  return () => window.removeEventListener('message', receive);
}

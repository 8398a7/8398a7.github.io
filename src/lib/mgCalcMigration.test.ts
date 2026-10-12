import { expect, it, vi } from 'vitest';
import { attachMgCalcMigration, MG_CALC_ORIGIN } from './mgCalcMigration';

it('依頼元の新サイトにだけmg-calcの記録を送り、旧データや他ツールの保存情報を変更しない', () => {
  const descriptor = Object.getOwnPropertyDescriptor(window, 'opener');
  const opener = { postMessage: vi.fn() };
  const requestId = '00000000-0000-4000-8000-000000000001';
  const records = [{ id: 'old-record', title: '練習会' }];
  const raw = JSON.stringify(records);
  localStorage.setItem('mg-calc-records-v1', raw);
  localStorage.setItem('mg-calc-presets', '[105,110]');
  localStorage.setItem('mg-entry-form-v1', 'private-entry');
  window.history.replaceState({}, '', `/mg-calc-migration?requestId=${requestId}`);
  Object.defineProperty(window, 'opener', { configurable: true, value: opener });
  const sent = vi.fn();
  const detach = attachMgCalcMigration(sent);
  const request = (origin: string, source: unknown, id = requestId) =>
    window.dispatchEvent(
      new MessageEvent('message', {
        origin,
        source: source as Window,
        data: { type: 'mg-calc-migration-request', requestId: id },
      }),
    );
  try {
    expect(opener.postMessage).toHaveBeenCalledWith({ type: 'mg-calc-migration-ready', requestId }, MG_CALC_ORIGIN);
    opener.postMessage.mockClear();
    request('https://example.com', opener);
    request(MG_CALC_ORIGIN, window);
    request(MG_CALC_ORIGIN, opener, 'another-request');
    expect(opener.postMessage).not.toHaveBeenCalled();
    request(MG_CALC_ORIGIN, opener);
    expect(opener.postMessage).toHaveBeenCalledExactlyOnceWith(
      {
        type: 'mg-calc-migration-data',
        requestId,
        records,
        presets: [105, 110],
      },
      MG_CALC_ORIGIN,
    );
    expect(sent).toHaveBeenCalledOnce();
    expect(localStorage.getItem('mg-calc-records-v1')).toBe(raw);
    expect(localStorage.getItem('mg-entry-form-v1')).toBe('private-entry');
  } finally {
    detach();
    localStorage.clear();
    window.history.replaceState({}, '', '/');
    if (descriptor) Object.defineProperty(window, 'opener', descriptor);
    else Reflect.deleteProperty(window, 'opener');
  }
});

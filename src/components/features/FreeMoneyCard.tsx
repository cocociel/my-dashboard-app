'use client';

import { useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import {
  getFreeMoneyLogs,
  insertFreeMoneyLog,
  FreeMoneyLog,
} from '@/lib/api/freeMoney';

export default function FreeMoneyCard() {
  /** 毎月の初期自由費 */
  const INITIAL_FREE_MONEY = 50000;
  /** ローディング */
  const [isLoading, setIsLoading] = useState(false);

  /** フォームの入力値 */
  const [item, setItem] = useState<Omit<FreeMoneyLog, 'id'>>({
    date: new Date().toISOString().split('T')[0] || '',
    title: '',
    amount: 0,
  });

  /** 自由費のログ */
  const [logs, setLogs] = useState<FreeMoneyLog[]>([]);

  /** ログのDB読み込み */
  const loadLogs = async () => {
    setIsLoading(true);
    const { data, error } = await getFreeMoneyLogs();
    if (data) {
      setLogs(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadLogs();
  }, []);

  /** ログの追加 */
  const handleAddLog = async () => {
    // 内容と金額がnullの場合は登録できない
    if (!item.title || !item.amount) return;
    setIsLoading(true);

    const { data, error } = await insertFreeMoneyLog(item);
    if (data) {
      setLogs((prevLogs) => [...prevLogs, data]);
    }

    if (error) {
      alert('自由費履歴の登録に失敗しました。');
    } else {
      // フォームをリセット
      setItem({
        date: new Date().toISOString().split('T')[0] || '',
        title: '',
        amount: 0,
      });
      // ログを再読み込み
      loadLogs();
    }
    setIsLoading(false);
  };

  /** 自由費の残高計算 */
  const remaining =
    INITIAL_FREE_MONEY - logs.reduce((sum, log) => sum + log.amount, 0);

  return (
    <GlassCard className="z-10 w-full max-w-lg">
      {/* 残高表示 */}
      <div className="mb-4">
        <h2 className="mb-2 text-lg font-bold">Free Money -自由費の計算-</h2>
        <p className="text-sm">
          今月の残高{'　'}
          <span className="text-lg font-bold text-blue-400">
            ¥{remaining.toLocaleString()}-
          </span>
        </p>
        <p className="text-sm">※食費、日用品費、交際費、推し活代などを含む</p>
      </div>
      {/* 支出の追加フォーム */}
      <div className="mb-6 grid grid-cols-7 gap-2">
        <input
          type="date"
          placeholder="日付"
          value={item.date}
          onChange={(e) => setItem({ ...item, date: e.target.value })}
          className="col-span-2 rounded border border-blue-50/10 bg-blue-50/5 p-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500/40"
        />
        <input
          type="text"
          maxLength={16}
          placeholder="内容"
          value={item.title}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
          className="col-span-3 rounded border border-blue-50/10 bg-blue-50/5 p-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500/40"
        />
        <input
          type="number"
          maxLength={8}
          placeholder="金額"
          value={item.amount}
          onChange={(e) => setItem({ ...item, amount: Number(e.target.value) })}
          className="col-span-1 rounded border border-blue-50/10 bg-blue-50/5 p-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500/40"
        />
        <button
          onClick={handleAddLog}
          disabled={item.title === '' || item.amount === 0 || isLoading}
          className="col-span-1 rounded bg-blue-500/40 px-4 py-2 text-xs text-blue-50 hover:bg-blue-500/60 disabled:bg-blue-50/10"
        >
          {isLoading ? '...' : '追加'}
        </button>
      </div>

      {/* 履歴のテーブル */}
      <div className="max-h-[180px] overflow-y-auto">
        <table className="w-full table-fixed text-left text-xs">
          <thead className="border-b border-blue-50/10 text-blue-400">
            <tr>
              <th className="w-1/4 pb-2">Date</th>
              <th className="w-1/2 pb-2">Title</th>
              <th className="w-1/4 pb-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b border-blue-50/5">
                <td className="py-2">{log.date}</td>
                <td className="py-2">{log.title}</td>
                <td className="py-2">¥{log.amount.toLocaleString()}-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}

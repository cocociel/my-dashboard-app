import { createClient } from '@/lib/supabase/client';

// 型定義
export interface FreeMoneyLog {
  id: number;
  date: string;
  title: string;
  amount: number;
}

/**
 * ログ全件取得
 * @returns FreeMoneyLogs[]
 */
export const getFreeMoneyLogs = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('free_money_logs')
    .select('*')
    .order('date', { ascending: false }); // 新しい順に並び替え

  if (error) {
    console.error('Error fetching free money logs:', error);
    return { data: [], error };
  }

  return { data: data as FreeMoneyLog[], error: null };
};

/**
 * ログ追加
 * @param date 支出日
 * @param title 内容
 * @param amount 金額
 * @returns
 */
export const insertFreeMoneyLog = async (log: Omit<FreeMoneyLog, 'id'>) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('free_money_logs')
    .insert([log])
    .select()
    .single();

  if (error) {
    console.error('Error inserting free money log:', error);
    return { data: null, error };
  }

  return { data: data as FreeMoneyLog, error: null };
};

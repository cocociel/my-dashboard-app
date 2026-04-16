import GlassCard from '@/components/ui/GlassCard';

/**
 * アプリ情報カード
 * ダッシュボードのタイトルとリード文
 * @returns AppInfoCard
 */
export default function AppInfoCard() {
  return (
    <GlassCard className="z-10 w-full max-w-md">
      <h1 className="mb-2 text-2xl font-bold">My Dashboard App</h1>
      <p className="text-blue-200/80">
        タスクも推し活も家計簿もこれ一つでまとめちゃおう！
      </p>
    </GlassCard>
  );
}

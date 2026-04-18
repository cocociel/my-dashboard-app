import AppInfoCard from '@/components/features/AppInfoCard';
import FreeMoneyCard from '@/components/features/FreeMoneyCard';
import MtorScheCard from '@/components/features/MtorScheCard';
import ShootingStar from '@/components/ui/ShootingStar';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-start justify-start gap-4 p-6">
      {/* 背景の奥で流れる星 */}
      <ShootingStar />

      {/* ここに各機能のガラスカードを追加していく */}
      <AppInfoCard />
      <MtorScheCard />
      <FreeMoneyCard />
    </div>
  );
}

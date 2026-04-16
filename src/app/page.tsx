import AppInfoCard from '@/components/features/AppInfoCard';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-start justify-start gap-4 p-6">
      {/* ここに各機能のガラスカードを追加していく */}
      <AppInfoCard />
      <AppInfoCard />
      <AppInfoCard />
    </div>
  );
}

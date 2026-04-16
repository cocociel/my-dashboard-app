import AppInfoCard from '@/components/features/AppInfoCard';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-4 p-10">
      {/* ここに各機能のガラスカードを追加していく */}
      <AppInfoCard />
    </div>
  );
}

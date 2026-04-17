import GlassCard from '@/components/ui/GlassCard';
import Image from 'next/image';
/**
 * めておらの配信スケジュールカード
 * TODO: スケジュールの更新は一旦手動, mtor_sche.jfifを最新のものに差し替える
 * @returns MtorScheCard
 */
export default function MtorScheCard() {
  return (
    <GlassCard className="z-10 w-full max-w-lg">
      <h2 className="mb-2 text-lg font-bold">めておら配信スケジュール</h2>
      <Image
        src="/images/mtor_sche.jfif"
        alt="めておら配信スケジュール"
        width={500}
        height={500}
        className="rounded-lg"
      />
    </GlassCard>
  );
}

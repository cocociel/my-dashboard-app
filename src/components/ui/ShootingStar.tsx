export default function ShootingStar() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 画面右上から流れる */}
      <div className="absolute right-0 top-0 z-0">
        {/* 星の発光する頭とアニメーション */}
        <span className="absolute h-[4px] w-[4px] animate-meteor rounded-full bg-red-400 shadow-[0_0_10px_4px_#ff0000]">
          {/* 星の尾（グラデーション） */}
          <span className="absolute left-0 top-1/2 -z-10 h-[2px] w-[200px] -translate-y-1/2 bg-gradient-to-r from-red-500 to-transparent"></span>
        </span>
      </div>
    </div>
  );
}

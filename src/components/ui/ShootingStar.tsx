'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: number;
  right: number;
  delay: number;
  duration: number;
}

/**
 * 流星を表現するコンポーネント
 * 開始位置をランダムに設定し、流星を表現する
 * @returns
 */
export default function ShootingStar() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // 初期ロード時にランダムな星を生成する
    const generatedStars = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      // 常に画面の上枠外〜上端付近からスタート (-100px 〜 100px)
      top: Math.random() * 200 - 100,
      // 理論上画面幅どこでも流れ星が流れるランダム位置（横1920px+縦1080px=3000px）
      right: Math.random() * 3200 - 1200,
      // 長い時間流れるので、発生タイミングも長めに散らす (-12秒 〜 12秒)
      delay: Math.random() * 24 - 12,
      // かなりゆっくり (16秒 〜 24秒)
      duration: Math.random() * 8 + 16,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        // 画面右上から流れる
        <div
          key={star.id}
          className="absolute z-0"
          style={{
            top: `${star.top}px`,
            right: `${star.right}px`,
          }}
        >
          {/* 星の発光する頭とアニメーション */}
          <span
            className="absolute h-[4px] w-[4px] animate-meteor rounded-full bg-red-400 opacity-0 shadow-[0_0_10px_4px_#ff0000]"
            style={{
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          >
            {/* 星の尾（グラデーション） */}
            <span className="absolute left-0 top-1/2 -z-10 h-[2px] w-[200px] -translate-y-1/2 bg-gradient-to-r from-red-500 to-transparent"></span>
          </span>
        </div>
      ))}
    </div>
  );
}

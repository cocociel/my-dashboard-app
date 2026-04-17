export type ColorMapKey =
  | 'purple'
  | 'orange'
  | 'pink'
  | 'cyan'
  | 'red'
  | 'yellow'
  | 'emerald'
  | 'lime'
  | 'white'
  | 'blue';

export const STPR_COLOR_MAP: Record<
  ColorMapKey,
  { bg: string; shadow: string; from: string }
> = {
  purple: {
    // ななもり。、まぜ太、心音、つきしろやしろ。
    bg: 'bg-purple-400',
    shadow: 'shadow-purple-400/50',
    from: 'from-purple-500',
  },
  orange: {
    // ジェル、はりま
    bg: 'bg-orange-400',
    shadow: 'shadow-orange-400/50',
    from: 'from-orange-500',
  },
  pink: {
    // さとみ、てるとくん、けちゃ、みかさくん、パルオ
    bg: 'bg-pink-400',
    shadow: 'shadow-pink-400/50',
    from: 'from-pink-500',
  },
  cyan: {
    // ころん、ちぐさくん、Lapis、おさでい、ゆたくん、そあらくん
    bg: 'bg-cyan-400',
    shadow: 'shadow-cyan-400/50',
    from: 'from-cyan-500',
  },
  red: {
    // 莉犬、ばあう、あっと、ロゼ、らお
    bg: 'bg-red-400',
    shadow: 'shadow-red-400/50',
    from: 'from-red-500',
  },
  yellow: {
    // るぅと、あっきぃ、明雷らいと、やなと、だいきり、まひろまる。
    bg: 'bg-yellow-400',
    shadow: 'shadow-yellow-400/50',
    from: 'from-yellow-500',
  },
  emerald: {
    // しゆん
    bg: 'bg-emerald-400',
    shadow: 'shadow-emerald-400/50',
    from: 'from-emerald-500',
  },
  lime: {
    // ぷりっつ
    bg: 'bg-lime-400',
    shadow: 'shadow-lime-400/50',
    from: 'from-lime-500',
  },
  white: {
    // タケヤキ翔、メルト・ダ・テンシ、にしき、ものくろ
    bg: 'bg-white',
    shadow: 'shadow-white/50',
    from: 'from-white',
  },
  blue: {
    // たちばな
    bg: 'bg-blue-400',
    shadow: 'shadow-blue-400/50',
    from: 'from-blue-500',
  },
};

export const STPR_COLOR_KEYS = Object.keys(STPR_COLOR_MAP) as ColorMapKey[];

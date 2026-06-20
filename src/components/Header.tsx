'use client';

import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';

const NAV_LINKS = [
  { href: '/guide', label: '물타기 가이드' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: '서비스 소개' },
  { href: '/privacy', label: '개인정보처리방침' },
];

const BUBBLES = [
  { left: '7%',  size: 7,  duration: 6.0, delay: 0.0 },
  { left: '19%', size: 4,  duration: 9.0, delay: 2.2 },
  { left: '33%', size: 10, duration: 7.0, delay: 1.0 },
  { left: '48%', size: 5,  duration: 5.5, delay: 3.5 },
  { left: '61%', size: 8,  duration: 8.5, delay: 0.5 },
  { left: '74%', size: 6,  duration: 6.5, delay: 4.0 },
  { left: '86%', size: 9,  duration: 7.5, delay: 1.8 },
  { left: '94%', size: 4,  duration: 10,  delay: 2.8 },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      {/* Water animation effects */}
      <div className="header-water" aria-hidden="true">
        <div className="hwave hwave-1" />
        <div className="hwave hwave-2" />
        <div className="hwave hwave-3" />
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="hbubble"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
        <div className="header-caustic" />
      </div>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ 라이트' : '🌙 다크'}
      </button>
      <h1>📉 물타기 계산기</h1>
      <p>주식 평균단가 계산 · 시뮬레이션 · 손익 분석</p>
      <nav className="header-nav">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className="header-nav-link">{label}</Link>
        ))}
      </nav>
    </header>
  );
}

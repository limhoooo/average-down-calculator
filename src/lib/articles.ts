export type ArticleCategory = '대출' | '투자' | '부동산' | '세금' | '예적금';

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  keywords: string[];
  relatedCalc?: { label: string; href: string };
}

export const ARTICLES: Article[] = [
  {
    slug: 'loan-repayment-comparison',
    title: '원리금균등 vs 원금균등 상환, 어떤 게 더 유리할까?',
    description: '두 상환 방식의 이자 총액·월 납입금 차이를 비교하고, 내 상황에 맞는 방식을 선택하는 기준을 안내합니다.',
    category: '대출',
    publishedAt: '2025-06-01',
    keywords: ['원리금균등상환', '원금균등상환', '대출 상환 방식', '대출 이자 비교', '주택담보대출 상환', '월 납입금 계산', '대출 이자 계산기', '만기일시상환', '총 이자 비교'],
    relatedCalc: { label: '대출 이자 계산기', href: '/loan' },
  },
  {
    slug: 'compound-interest-72-rule',
    title: '복리의 힘: 72법칙으로 보는 투자 원금 2배 기간',
    description: '복리 효과가 왜 강력한지, 72법칙으로 원금이 두 배 되는 기간을 계산하는 방법을 쉽게 설명합니다.',
    category: '투자',
    publishedAt: '2025-06-10',
    keywords: ['복리 계산', '72법칙', '복리 효과', '투자 원금 2배', '단리 복리 차이', '장기 투자', '복리 계산기', '투자 수익률 계산', '재테크'],
    relatedCalc: { label: '복리 계산기', href: '/compound' },
  },
  {
    slug: 'realestate-tax-checklist',
    title: '부동산 세금 완전 정리: 취득·보유·양도세 한눈에',
    description: '부동산을 사고·보유하고·팔 때 내야 하는 세금을 단계별로 정리했습니다. 절세 포인트까지 함께 확인하세요.',
    category: '부동산',
    publishedAt: '2025-06-18',
    keywords: ['부동산 세금', '취득세', '보유세', '양도소득세', '재산세', '종합부동산세', '부동산 절세', '1세대1주택 비과세', '장기보유특별공제', '부동산 취득세 계산'],
    relatedCalc: { label: '취득세 계산기', href: '/acquisition-tax' },
  },
  {
    slug: 'savings-vs-deposit',
    title: '정기예금 vs 적금, 이자를 더 많이 주는 건 어느 쪽일까?',
    description: '같은 금리라도 실제 받는 이자가 다릅니다. 예금과 적금의 구조적 차이와 세후 수익 비교법을 알기 쉽게 설명합니다.',
    category: '예적금',
    publishedAt: '2025-06-23',
    keywords: ['정기예금 적금 차이', '예금 이자 계산', '적금 이자 계산', '세후 이자', '이자소득세', '예금 금리 비교', '적금 계산기', '정기예금 계산기', 'ISA 비과세', '재테크 예금'],
    relatedCalc: { label: '예적금 계산기', href: '/savings' },
  },
  {
    slug: 'overseas-stock-tax-guide',
    title: '해외주식 양도소득세 신고 방법과 절세 전략',
    description: '해외주식 매도 시 꼭 알아야 할 양도소득세 신고 시기·방법·계산법과 기본공제 250만원 활용 절세 전략을 정리합니다.',
    category: '세금',
    publishedAt: '2025-06-28',
    keywords: ['해외주식 양도소득세', '미국주식 세금', '해외주식 세금 신고', '양도소득세 250만원 공제', '해외주식 절세', '홈택스 양도세 신고', '해외주식 양도세 계산기', '미국주식 ETF 세금', '해외주식 손익통산'],
    relatedCalc: { label: '해외주식 양도소득세 계산기', href: '/stock-tax' },
  },
  {
    slug: 'jongbu-tax-guide',
    title: '종합부동산세(종부세) 완벽 가이드: 계산부터 절세까지',
    description: '종부세 과세 기준, 세율, 계산 방법을 쉽게 설명하고 1세대 1주택자 공제·고령자 세액공제 등 절세 방법을 안내합니다.',
    category: '부동산',
    publishedAt: '2025-07-02',
    keywords: ['종합부동산세', '종부세 계산', '종부세 기준', '1세대1주택 종부세', '종부세 절세', '고령자 세액공제', '장기보유 종부세 공제', '재산세 종부세 차이', '보유세 계산기', '종부세 납부'],
    relatedCalc: { label: '보유세 계산기', href: '/holding-tax' },
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getLatestArticles(n = 3): Article[] {
  return [...ARTICLES]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, n);
}

const CATEGORY_COLOR: Record<ArticleCategory, string> = {
  '대출': '#2563eb',
  '투자': '#16a34a',
  '부동산': '#9333ea',
  '세금': '#dc2626',
  '예적금': '#0891b2',
};

export function categoryColor(cat: ArticleCategory): string {
  return CATEGORY_COLOR[cat];
}

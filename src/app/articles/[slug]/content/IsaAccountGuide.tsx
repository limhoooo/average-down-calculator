import Link from 'next/link';

export default function IsaAccountGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          ISA 계좌 완전 분석: 중개형·서민형·일반형 비교와 200만원 비과세 활용법
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          ISA(개인종합자산관리계좌)는 예금·펀드·ETF·채권 등 다양한 금융상품을 한 계좌에 담으면서 <strong>이자·배당 수익에 비과세 혜택</strong>을 받을 수 있는 절세 계좌입니다.
          2025년 확대 개편으로 혜택이 더 커진 ISA의 유형별 차이와 최적 활용법을 정리합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. ISA 계좌란?</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">비과세 한도 (일반형)</span>
            <span className="tax-value">200만원 (이자·배당 수익 기준)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">비과세 한도 (서민형·농어민형)</span>
            <span className="tax-value">400만원</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">초과분 세율</span>
            <span className="tax-value">9.9% 분리과세 (일반 15.4% 대비 절세)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">연간 납입 한도</span>
            <span className="tax-value">2,000만원 (총 한도 1억원)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">의무 가입 기간</span>
            <span className="tax-value">3년 (만기 후 자유롭게 인출)</span>
          </div>
        </div>
        <div className="guide-formula" style={{ marginTop: '14px' }}>
          절세 효과: 수익 200만원 기준 → 일반 계좌 세금 30만 8천원 → ISA 세금 0원
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. ISA 유형별 비교</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>중개형 ISA (가장 인기)</strong><br />
            주식·ETF·리츠·펀드·채권 등 직접 투자 가능. 국내 상장 주식 매매차익은 비과세. 증권사에서 개설. 투자에 적극적인 분에게 최적.
          </div>
          <div className="info-box">
            <strong>일반형 ISA</strong><br />
            예금·펀드 중심, 직접 주식 투자 불가. 은행·증권사 모두 개설 가능. 투자보다 저축 성격이 강한 분에게 적합.
          </div>
          <div className="tax-success-box">
            <strong>서민형 ISA</strong><br />
            총급여 5,000만원 이하 또는 종합소득 3,800만원 이하인 경우 가입 가능. 비과세 한도 400만원으로 두 배. 해당 조건이라면 반드시 서민형으로 가입해야 유리.
          </div>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '10px' }}>
          ⚠️ ISA는 1인 1계좌만 가능합니다. 유형을 신중히 선택하세요. 중개형이 가장 투자 자유도가 높습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 중개형 ISA에 담으면 좋은 상품</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>국내 상장 ETF (배당형)</strong>
              <p>KODEX 배당다우존스, TIGER 미국배당다우존스 등 배당 ETF는 매월 배당을 지급합니다. ISA 안에서 배당 수익이 비과세 혜택을 받아 절세 효과가 극대화됩니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>채권형 ETF</strong>
              <p>국채·회사채 ETF를 ISA 안에서 보유하면 이자 수익에 비과세 혜택이 적용됩니다. 금리 하락기에 특히 유리합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>리츠(REITs)</strong>
              <p>배당수익률이 높은 리츠를 ISA 안에 담으면 높은 배당금에 대한 세금 부담을 크게 줄일 수 있습니다.</p>
            </div>
          </li>
        </ul>
        <div className="info-box" style={{ marginTop: '10px' }}>
          <strong>중개형 ISA 내 국내 주식 주의사항</strong><br />
          국내 상장 주식 매매차익은 원래 비과세이므로 ISA 절세 효과가 없습니다. ISA 안에서는 배당·이자가 발생하는 상품에 집중하세요.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. ISA 만기 후 연금 전환 혜택</h2>
        <p className="privacy-text">
          ISA 만기 해지 후 60일 이내에 연금저축·IRP로 이전하면 추가 세액공제를 받을 수 있습니다.
        </p>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">이전 금액</span>
            <span className="tax-value">만기 해지금 전액 또는 일부</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">추가 세액공제</span>
            <span className="tax-value">이전 금액의 10% (최대 300만원 한도)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">절세 효과</span>
            <span className="tax-value">최대 300만원 × 16.5% = 49만 5천원 추가 환급</span>
          </div>
        </div>
        <div className="tax-success-box" style={{ marginTop: '14px' }}>
          ISA 3년 만기 → 연금저축 전환 → 추가 세액공제까지 받으면 <strong>ISA + 연금저축 이중 절세</strong>가 완성됩니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. ISA 가입 전 체크리스트</h2>
        <ul className="privacy-list">
          <li>총급여 5,000만원 이하라면 <strong>반드시 서민형으로 가입</strong> (비과세 한도 2배)</li>
          <li>주식·ETF 직접 투자를 원한다면 <strong>중개형 ISA</strong> 선택 (증권사 개설)</li>
          <li>3년 의무 가입 기간 동안 급히 쓸 돈은 ISA 밖에 보관</li>
          <li>연간 납입 한도는 2,000만원, 미사용 한도는 다음 해로 이월 가능</li>
          <li>만기 후 60일 내 연금저축 전환 시 추가 세액공제 챙기기</li>
        </ul>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 2025년 기준 세법 및 금융감독원 안내를 참고한 교육 자료이며, 특정 상품 가입을 권유하지 않습니다.</p>
          <p>ISA 세부 조건은 금융기관 및 관련 법령 개정에 따라 변경될 수 있으니 가입 전 확인하시기 바랍니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/savings"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          예적금 이자 계산기 →
        </Link>
      </div>
    </>
  );
}

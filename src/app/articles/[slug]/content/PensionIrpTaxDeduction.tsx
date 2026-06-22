import Link from 'next/link';

export default function PensionIrpTaxDeduction() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          연금저축 IRP 세액공제 완벽 가이드: 최대 148만 5천원 돌려받는 법
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          연금저축과 IRP(개인형 퇴직연금)는 노후 준비와 동시에 연말정산에서 세금을 돌려받을 수 있는 <strong>대한민국 최고의 절세 계좌</strong>입니다.
          납입 한도, 세액공제율, 연금저축과 IRP의 차이, 수령 시 세금까지 투자자가 꼭 알아야 할 내용을 정리합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 세액공제 한도와 환급액</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">연금저축 납입 한도</span>
            <span className="tax-value">연 600만원 (세액공제 대상)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">IRP 포함 합산 한도</span>
            <span className="tax-value">연 900만원 (연금저축 + IRP 합산)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">세액공제율 — 총급여 5,500만원 이하</span>
            <span className="tax-value">16.5% → 최대 148만 5천원 환급</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">세액공제율 — 총급여 5,500만원 초과</span>
            <span className="tax-value">13.2% → 최대 118만 8천원 환급</span>
          </div>
        </div>
        <div className="guide-formula" style={{ marginTop: '14px' }}>
          환급액 = 납입액(최대 900만원) × 세액공제율(13.2% 또는 16.5%)
        </div>
        <div className="tax-success-box" style={{ marginTop: '14px' }}>
          <strong>예시:</strong> 총급여 4,000만원인 직장인이 IRP에 900만원 납입 시<br />
          → 900만원 × 16.5% = <strong>148만 5천원 환급</strong>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 연금저축 vs IRP 차이</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">가입 대상</span>
            <span className="tax-value">연금저축: 누구나 / IRP: 소득 있는 자</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">세액공제 한도</span>
            <span className="tax-value">연금저축 600만원 + IRP 300만원 = 총 900만원</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">투자 상품</span>
            <span className="tax-value">연금저축: 펀드·ETF 자유롭게 / IRP: 위험자산 70% 제한</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">중도 인출</span>
            <span className="tax-value">연금저축: 부분 인출 가능 / IRP: 법정 사유 외 불가</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">퇴직금 수령</span>
            <span className="tax-value">IRP만 가능 (퇴직금 이전 의무)</span>
          </div>
        </div>
        <div className="info-box" style={{ marginTop: '14px' }}>
          <strong>추천 전략</strong> — 연금저축펀드에 600만원 먼저 채우고, 추가로 IRP에 300만원 납입해 합산 900만원 한도를 채우는 것이 유연성과 절세 효과를 동시에 극대화하는 방법입니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 연금저축펀드 vs 연금저축보험</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>연금저축펀드 (증권사)</strong><br />
            ETF·펀드 직접 투자 가능, 수익률 자기 책임, 사업비 없음. 투자에 관심 있는 분에게 유리. 대부분의 증권사 앱에서 개설 가능.
          </div>
          <div className="info-box">
            <strong>연금저축보험 (보험사)</strong><br />
            원금 보장, 예정이율 적용, 초기 사업비(7~10%)가 빠져나감. 장기 수익률이 펀드보다 낮은 경향. 보험 차원의 안정성을 원하는 분에게 적합.
          </div>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '10px' }}>
          ⚠️ 연금저축보험은 초기 사업비로 납입금의 상당 부분이 차감됩니다. 가입 전 반드시 확인하세요.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 연금 수령 시 세금</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">수령 나이 55세 이상</span>
            <span className="tax-value">연금소득세 3.3~5.5% (분리과세)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">70세 미만 수령</span>
            <span className="tax-value">5.5%</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">70세 이상 ~ 80세 미만</span>
            <span className="tax-value">4.4%</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">80세 이상</span>
            <span className="tax-value">3.3%</span>
          </div>
        </div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>납입 시 세액공제(13.2~16.5%)를 받고, 수령 시 저율(3.3~5.5%)로 과세되어 <strong>납입 시점보다 훨씬 낮은 세율</strong>이 적용됩니다.</li>
          <li>연간 연금 수령액이 1,200만원 이하면 분리과세 선택 가능 (종합소득세 합산 없음).</li>
          <li>중도 해지 시 세액공제 받은 금액에 기타소득세 16.5%가 부과됩니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 연금저축·IRP 절세 활용 팁</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>연말 한 번에 납입보다 월 자동이체</strong>
              <p>월 75만원씩 자동이체하면 900만원 한도를 채울 수 있고, 복리 효과를 극대화할 수 있습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>ETF로 장기 투자</strong>
              <p>연금저축펀드에서 S&P500 ETF, 나스닥100 ETF, 국내 배당 ETF 등을 담으면 장기 복리 수익을 기대할 수 있습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>퇴직금은 반드시 IRP로 수령</strong>
              <p>퇴직금을 IRP로 이전하면 퇴직소득세 납부를 연금 수령 시점까지 이연할 수 있습니다(30% 세액 감면 효과).</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 2025년 기준 세법을 참고한 교육 자료이며, 세무 조언을 제공하지 않습니다.</p>
          <p>세액공제 한도 및 세율은 법 개정에 따라 변경될 수 있으니 국세청 홈택스 또는 세무사를 통해 확인하시기 바랍니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/compound"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          복리 수익 계산기 →
        </Link>
      </div>
    </>
  );
}

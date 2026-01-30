import {
  IconRecap, IconInvest, IconExploitation, IconChart, IconCalendar,
  IconDiamond, IconMaterial, IconInstall, IconPayment, IconWarranty, IconFileText
} from './Icons'

function Recapitulatif({ calculs, donnees, t }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(value)
  }

  return (
    <section id="recapitulatif">
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '1rem', color: 'var(--accent-color)' }}><IconRecap size={32} /></span>
        {t('recap_global_caps')}
      </h2>

      <div className="cards-grid">
        <div className="stat-card">
          <div className="stat-label">
            <span style={{ marginRight: '0.5rem', verticalAlign: '-3px' }}><IconInvest size={18} /></span>
            {t('investissement')}
          </div>
          <div className="stat-value">{formatCurrency(calculs.investissementInitial)}</div>
          <div className="stat-detail">
            {t('materiel_total')}: {formatCurrency(calculs.totalMateriel)}<br />
            {t('installation_total')}: {formatCurrency(calculs.totalInstallation)}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            <span style={{ marginRight: '0.5rem', verticalAlign: '-3px' }}><IconExploitation size={18} /></span>
            {t('couts_mensuels')}
          </div>
          <div className="stat-value">{formatCurrency(calculs.totalMensuel)}</div>
          <div className="stat-detail">
            {t('abonnements_maintenance')}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            <span style={{ marginRight: '0.5rem', verticalAlign: '-3px' }}><IconCalendar size={18} /></span>
            {t('total_36_mois')}
          </div>
          <div className="stat-value">{formatCurrency(calculs.total36Mois)}</div>
          <div className="stat-detail">
            {calculs.totalMensuel > 0 ? `${formatCurrency(calculs.totalMensuel)} × 36 ${t('mois')}` : t('a_completer')}
          </div>
        </div>

        <div className="stat-card" style={{ gridColumn: '1 / -1', background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)', color: 'white' }}>
          <div className="stat-label" style={{ color: '#f6e05e' }}>
            <span style={{ marginRight: '0.5rem', verticalAlign: '-3px' }}><IconDiamond size={20} /></span>
            {t('total_3_ans')}
          </div>
          <div className="stat-value" style={{ fontSize: '3rem', color: '#d4af37' }}>{formatCurrency(calculs.totalSur3Ans)}</div>
          <div className="stat-detail" style={{ color: 'rgba(255,255,255,0.9)' }}>
            {t('invest_exploit')}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            <span style={{ marginRight: '0.5rem', verticalAlign: '-3px' }}><IconCalendar size={18} /></span>
            {t('cout_moyen')}
          </div>
          <div className="stat-value">{formatCurrency(calculs.coutMensuelMoyen)}</div>
          <div className="stat-detail">
            {t('sur_36_mois')}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            <span style={{ marginRight: '0.5rem', verticalAlign: '-3px' }}><IconMaterial size={18} /></span>
            {t('materiel_total')}
          </div>
          <div className="stat-value">{formatCurrency(calculs.totalMateriel)}</div>
          <div className="stat-detail">
            VL/PL: {formatCurrency(calculs.totalMaterielVL)}<br />
            Engins: {formatCurrency(calculs.totalMaterielEngin)}
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            <span style={{ marginRight: '0.5rem', verticalAlign: '-3px' }}><IconInstall size={18} /></span>
            {t('installation_total')}
          </div>
          <div className="stat-value">{formatCurrency(calculs.totalInstallation)}</div>
          <div className="stat-detail">
            VL/PL: {formatCurrency(calculs.totalInstallationVL)}<br />
            Engins: {formatCurrency(calculs.totalInstallationEngin)}
          </div>
        </div>
      </div>

      <div className="premium-card">
        <div className="premium-subtitle">
          <span style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}><IconPayment size={24} /></span>
          {t('modalites_paiement')}
        </div>
        <table className="premium-table">
          <thead>
            <tr>
              <th>{t('echeance')}</th>
              <th>{t('condition')}</th>
              <th>{t('pourcentage')}</th>
              <th>{t('montant_estime')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('acompte')}</td>
              <td>{t('signature_contrat')}</td>
              <td>30%</td>
              <td>{formatCurrency(calculs.investissementInitial * 0.30)}</td>
            </tr>
            <tr>
              <td>{t('livraison')}</td>
              <td>{t('reception_materiel')}</td>
              <td>30%</td>
              <td>{formatCurrency(calculs.investissementInitial * 0.30)}</td>
            </tr>
            <tr>
              <td>{t('fin_install')}</td>
              <td>{t('validation_install')}</td>
              <td>25%</td>
              <td>{formatCurrency(calculs.investissementInitial * 0.25)}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>{t('solde')}</td>
              <td>{t('mise_service')}</td>
              <td>15%</td>
              <td>{formatCurrency(calculs.investissementInitial * 0.15)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="premium-card" style={{ marginTop: '2rem' }}>
        <div className="premium-subtitle">
          <span style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}><IconFileText size={24} /></span>
          {t('infos_contract')}
        </div>
        <table className="premium-table">
          <tbody>
            <tr>
              <td style={{ fontWeight: '600' }}>{t('date_prop')}</td>
              <td>{donnees.dateProposition}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600' }}>{t('validite_offre')}</td>
              <td>{donnees.validiteOffre} {t('jours')}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600' }}>{t('garantie_mat')}</td>
              <td>{donnees.garantieMateriel} {t('mois')} ({t('remplacement_72h')})</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600' }}>{t('garantie_log')}</td>
              <td>{donnees.garantieLogiciel} {t('mois')} ({t('duree_contrat')})</td>
            </tr>
            <tr>
              <td style={{ fontWeight: '600' }}>{t('engagement')}</td>
              <td>{t('disponibilite')}</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.9rem' }}>{t('penalites_sla')}</p>
      </div>

      <style jsx>{`
        .stat-detail {
          font-size: 0.85rem;
          color: #718096;
          margin-top: 0.5rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}

export default Recapitulatif

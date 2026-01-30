import './Header.css'

function Header({ t, language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <div className="logo-circle">
            <span className="logo-text">SUCAF CI</span>
          </div>
        </div>

        <div className="header-title">
          <h1 className="main-title">
            <span className="title-line-1">{t('proposition_financiere')}</span>
            <span className="title-line-2">{t('systeme_geolocalisation')}</span>
            <span className="title-line-3">{t('flotte_vehicules')}</span>
          </h1>
        </div>

        <div className="header-info">
          <div className="info-item">
            <span className="info-label">{t('prestataire')}</span>
            <span className="info-value">ONLOUTOU</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('mandataire')}</span>
            <span className="info-value">SOUTARAH</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('date')}</span>
            <span className="info-value">{language === 'fr' ? '26 janvier 2026' : 'January 26, 2026'}</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('validite')}</span>
            <span className="info-value">60 {t('jours')}</span>
          </div>

          <button
            onClick={toggleLanguage}
            className="lang-btn"
            title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
          </button>
        </div>
      </div>

      <div className="header-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dot"></div>
        <div className="decoration-line"></div>
      </div>

      <style jsx>{`
        .lang-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
          margin-left: 1rem;
          font-family: inherit;
        }
        .lang-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
      `}</style>
    </header>
  )
}

export default Header

import { useState } from 'react'
import {
  IconInvest, IconMaterial, IconInstall, IconExploitation,
  IconRecap, IconChart, IconPivots, IconPayment, IconWarranty, IconDevelopment
} from './Icons'
import './Sommaire.css'

function Sommaire({ activeSection, setActiveSection, t }) {
  const sections = [
    { id: 'investissement', title: t('invest_initial'), icon: <IconInvest /> },
    { id: 'installation', title: t('couts_installation'), icon: <IconInstall /> },
    { id: 'developpement', title: t('couts_dev'), icon: <IconDevelopment /> },
    { id: 'exploitation', title: t('couts_exploitation'), icon: <IconExploitation /> },
    { id: 'option-pivots', title: t('option_pivots'), icon: <IconPivots /> },
    { id: 'recapitulatif', title: t('recap_global'), icon: <IconRecap /> },
    { id: 'diagrammes', title: t('visualisations'), icon: <IconChart /> },
  ]

  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <nav className={`sommaire ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sommaire-header">
        <h3 className="sommaire-title">
          {!isCollapsed && '📋 Sommaire'}
        </h3>
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? 'Ouvrir le sommaire' : 'Réduire le sommaire'}
        >
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>

      {!isCollapsed && (
        <ul className="sommaire-list">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`sommaire-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="item-icon">{section.icon}</span>
              <span className="item-title">{section.title}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="sommaire-footer">
        {!isCollapsed && (
          <>
            <div className="progress-info">
              <span>Progression</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="sommaire-actions">
              <button className="action-btn save-btn" title="Sauvegarder">
                💾 Sauvegarder
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Sommaire

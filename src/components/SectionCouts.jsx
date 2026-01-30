import { IconInvest, IconMaterial, IconInstall, IconExploitation, IconPivots, IconDevelopment } from './Icons'

function SectionCouts({ donnees, updateDonnee, calculs }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="section-couts">
      <section id="investissement" className="premium-section">
        <h2 className="premium-title">
          <span style={{ marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-color)' }}>
            <IconInvest size={32} />
          </span>
          1. INVESTISSEMENT INITIAL
        </h2>

        {/* MATÉRIEL VL/PL */}
        <div className="premium-card">
          <div className="premium-subtitle">
            <span style={{ marginRight: '0.8rem', verticalAlign: 'middle' }}><IconMaterial size={24} /></span>
            1.1 Coûts Matériel - VL/PL (170 unités)
          </div>
          <table className="premium-table">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: '100px' }}>Quantité</th>
                <th style={{ width: '150px' }}>Prix Unitaire (FCFA)</th>
                <th style={{ width: '150px' }}>Total (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Boîtier GPS/GSM/4G/5G</td>
                <td>{donnees.boitierVLPL.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.boitierVLPL.prixUnitaire}
                    onChange={(e) => updateDonnee('boitierVLPL', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalBoitierVL)}</td>
              </tr>
              <tr>
                <td>Lecteur identification chauffeur</td>
                <td>{donnees.lecteurIdentification.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.lecteurIdentification.prixUnitaire}
                    onChange={(e) => updateDonnee('lecteurIdentification', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalLecteur)}</td>
              </tr>
              <tr>
                <td>Antenne GPS externe</td>
                <td>{donnees.antenneGPSVL.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.antenneGPSVL.prixUnitaire}
                    onChange={(e) => updateDonnee('antenneGPSVL', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalAntenneVL)}</td>
              </tr>
              <tr>
                <td>Câblage et accessoires</td>
                <td>{donnees.cablageVL.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.cablageVL.prixUnitaire}
                    onChange={(e) => updateDonnee('cablageVL', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalCablageVL)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">SOUS-TOTAL VL/PL</td>
                <td>{formatCurrency(calculs.totalMaterielVL)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MATÉRIEL ENGINS */}
        <div className="premium-card">
          <div className="premium-subtitle">🚜 1.2 Coûts Matériel - Engins Agricoles (230 unités)</div>
          <table className="premium-table">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: '100px' }}>Quantité</th>
                <th style={{ width: '150px' }}>Prix Unitaire (FCFA)</th>
                <th style={{ width: '150px' }}>Total (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Boîtier GPS IP67 (J1939)</td>
                <td>{donnees.boitierEngin.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.boitierEngin.prixUnitaire}
                    onChange={(e) => updateDonnee('boitierEngin', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalBoitierEngin)}</td>
              </tr>
              <tr>
                <td>Antenne GPS renforcée</td>
                <td>{donnees.antenneGPSEngin.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.antenneGPSEngin.prixUnitaire}
                    onChange={(e) => updateDonnee('antenneGPSEngin', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalAntenneEngin)}</td>
              </tr>
              <tr>
                <td>Câblage et accessoires</td>
                <td>{donnees.cablageEngin.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.cablageEngin.prixUnitaire}
                    onChange={(e) => updateDonnee('cablageEngin', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalCablageEngin)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">SOUS-TOTAL ENGINS</td>
                <td>{formatCurrency(calculs.totalMaterielEngin)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="recap-card">
          <h3>📊 TOTAL MATÉRIEL PRINCIPAL</h3>
          <div className="montant-principal">{formatCurrency(calculs.totalMateriel)}</div>
        </div>
      </section>

      {/* INSTALLATION */}
      <section id="installation" className="premium-section">
        <h2 className="premium-title">🔧 2. COÛTS INSTALLATION</h2>

        <div className="premium-card">
          <div className="premium-subtitle">Installation VL/PL (170 unités)</div>
          <table className="premium-table">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: '100px' }}>Quantité</th>
                <th style={{ width: '150px' }}>Prix Unitaire (FCFA)</th>
                <th style={{ width: '150px' }}>Total (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Installation boîtier GPS</td>
                <td>{donnees.installVL.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.installVL.prixUnitaire}
                    onChange={(e) => updateDonnee('installVL', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalInstallVL)}</td>
              </tr>
              <tr>
                <td>Installation lecteur chauffeur</td>
                <td>{donnees.installLecteur.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.installLecteur.prixUnitaire}
                    onChange={(e) => updateDonnee('installLecteur', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalInstallLecteur)}</td>
              </tr>
              <tr>
                <td>Configuration et tests</td>
                <td>{donnees.configVL.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.configVL.prixUnitaire}
                    onChange={(e) => updateDonnee('configVL', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalConfigVL)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">SOUS-TOTAL INSTALLATION VL/PL</td>
                <td>{formatCurrency(calculs.totalInstallationVL)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="premium-card">
          <div className="premium-subtitle">Installation Engins (230 unités)</div>
          <table className="premium-table">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: '100px' }}>Quantité</th>
                <th style={{ width: '150px' }}>Prix Unitaire (FCFA)</th>
                <th style={{ width: '150px' }}>Total (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Installation boîtier IP67</td>
                <td>{donnees.installEngin.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.installEngin.prixUnitaire}
                    onChange={(e) => updateDonnee('installEngin', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalInstallEngin)}</td>
              </tr>
              <tr>
                <td>Configuration CANBUS J1939</td>
                <td>{donnees.configCANBUS.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.configCANBUS.prixUnitaire}
                    onChange={(e) => updateDonnee('configCANBUS', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalConfigCANBUS)}</td>
              </tr>
              <tr>
                <td>Tests résistance environnement</td>
                <td>{donnees.testsEngin.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.testsEngin.prixUnitaire}
                    onChange={(e) => updateDonnee('testsEngin', 'prixUnitaire', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(calculs.totalTestsEngin)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">SOUS-TOTAL INSTALLATION ENGINS</td>
                <td>{formatCurrency(calculs.totalInstallationEngin)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="premium-card">
          <div className="premium-subtitle">Frais de Déplacement et Hébergement (Personnel détaché)</div>
          <table className="premium-table">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: '100px' }}>Quantité</th>
                <th style={{ width: '150px' }}>Prix Unitaire (FCFA)</th>
                <th style={{ width: '150px' }}>Total (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frais déplacement (Missions Ferké 1, 2, Abidjan)</td>
                <td>{donnees.fraisDeplacementMissions.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.fraisDeplacementMissions.prixUnitaire}
                    onChange={(e) => updateDonnee('fraisDeplacementMissions', 'prixUnitaire', e.target.value)}
                  />
                </td>
                <td>{formatCurrency(donnees.fraisDeplacementMissions.quantite * donnees.fraisDeplacementMissions.prixUnitaire)}</td>
              </tr>
              <tr>
                <td>Frais déplacement (Installation Mai-Juin)</td>
                <td>{donnees.fraisDeplacementInstallation.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.fraisDeplacementInstallation.prixUnitaire}
                    onChange={(e) => updateDonnee('fraisDeplacementInstallation', 'prixUnitaire', e.target.value)}
                  />
                </td>
                <td>{formatCurrency(donnees.fraisDeplacementInstallation.quantite * donnees.fraisDeplacementInstallation.prixUnitaire)}</td>
              </tr>
              <tr>
                <td>Frais hébergement (4 pers x 2 mois)</td>
                <td>{donnees.fraisHebergement.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.fraisHebergement.prixUnitaire}
                    onChange={(e) => updateDonnee('fraisHebergement', 'prixUnitaire', e.target.value)}
                  />
                </td>
                <td>{formatCurrency(donnees.fraisHebergement.quantite * donnees.fraisHebergement.prixUnitaire)}</td>
              </tr>
              <tr>
                <td>Frais restauration (Forfait global)</td>
                <td>{donnees.fraisRestauration.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.fraisRestauration.prixUnitaire}
                    onChange={(e) => updateDonnee('fraisRestauration', 'prixUnitaire', e.target.value)}
                  />
                </td>
                <td>{formatCurrency(donnees.fraisRestauration.quantite * donnees.fraisRestauration.prixUnitaire)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">SOUS-TOTAL DÉPLACEMENT/HÉBERGEMENT</td>
                <td>{formatCurrency(calculs.totalFraisDeplacement)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="recap-card">
          <h3>🔧 TOTAL INSTALLATION (Inc. Déplacements)</h3>
          <div className="montant-principal">{formatCurrency(calculs.totalInstallation)}</div>
        </div>
      </section>

      {/* DÉVELOPPEMENT (NOUVEAU) */}
      <section id="developpement" className="premium-section">
        <h2 className="premium-title">💻 3. COÛTS DÉVELOPPEMENT SPÉCIFIQUE</h2>
        <div className="premium-card">
          <div className="premium-subtitle">Développement Plateforme SUCAF CI (300 Jours/Homme)</div>
          <table className="premium-table">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: '100px' }}>Jours</th>
                <th style={{ width: '150px' }}>TJM (FCFA)</th>
                <th style={{ width: '150px' }}>Total (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rapports personnalisés (11 rapports)</td>
                <td>{donnees.devRapports.jours}</td>
                <td>{formatCurrency(donnees.devRapports.tjm)}</td>
                <td>{formatCurrency(calculs.totalDevRapports)}</td>
              </tr>
              <tr>
                <td>Fonctionnalités agricoles (Superficie/Parcelles)</td>
                <td>{donnees.devAgricole.jours}</td>
                <td>{formatCurrency(donnees.devAgricole.tjm)}</td>
                <td>{formatCurrency(calculs.totalDevAgricole)}</td>
              </tr>
              <tr>
                <td>Gestion administrative (Patentes, Assurances)</td>
                <td>{donnees.devAdmin.jours}</td>
                <td>{formatCurrency(donnees.devAdmin.tjm)}</td>
                <td>{formatCurrency(calculs.totalDevAdmin)}</td>
              </tr>
              <tr>
                <td>Intégration Plan Parcellaire</td>
                <td>{donnees.integrationParcellaire.jours}</td>
                <td>{formatCurrency(donnees.integrationParcellaire.tjm)}</td>
                <td>{formatCurrency(calculs.totalIntegrationParcellaire)}</td>
              </tr>
              <tr>
                <td>API REST + Swagger</td>
                <td>{donnees.devAPI.jours}</td>
                <td>{formatCurrency(donnees.devAPI.tjm)}</td>
                <td>{formatCurrency(calculs.totalDevAPI)}</td>
              </tr>
              <tr>
                <td>Adaptation Interface Ecran 55-65"</td>
                <td>{donnees.adaptationEcran.jours}</td>
                <td>{formatCurrency(donnees.adaptationEcran.tjm)}</td>
                <td>{formatCurrency(calculs.totalAdaptationEcran)}</td>
              </tr>
              <tr>
                <td>Intégration Lecteur Identification</td>
                <td>{donnees.integrationLecteur.jours}</td>
                <td>{formatCurrency(donnees.integrationLecteur.tjm)}</td>
                <td>{formatCurrency(calculs.totalIntegrationLecteur)}</td>
              </tr>
              <tr>
                <td>Développement Option Pivots</td>
                <td>{donnees.devPivots.jours}</td>
                <td>{formatCurrency(donnees.devPivots.tjm)}</td>
                <td>{formatCurrency(calculs.totalDevPivots)}</td>
              </tr>
              <tr>
                <td>Tests et Validation Fonctionnelle</td>
                <td>{donnees.testsValidation.jours}</td>
                <td>{formatCurrency(donnees.testsValidation.tjm)}</td>
                <td>{formatCurrency(calculs.totalTestsValidation)}</td>
              </tr>
              <tr>
                <td>Documentation Technique et Utilisateur</td>
                <td>{donnees.docTechnique.jours}</td>
                <td>{formatCurrency(donnees.docTechnique.tjm)}</td>
                <td>{formatCurrency(calculs.totalDocTechnique)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">TOTAL DÉVELOPPEMENT</td>
                <td>{formatCurrency(calculs.totalDeveloppement)}</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#666' }}>* TJM : Taux Journalier Moyen (150 000 FCFA), base 300 jours pour l'ensemble du projet.</p>
        </div>
        <div className="recap-card">
          <h3>💻 TOTAL DÉVELOPPEMENT</h3>
          <div className="montant-principal">{formatCurrency(calculs.totalDeveloppement)}</div>
        </div>
      </section>

      {/* EXPLOITATION */}
      <section id="exploitation" className="premium-section">
        <h2 className="premium-title">📊 4. COÛTS D'EXPLOITATION (36 mois)</h2>

        <div className="premium-card">
          <div className="premium-subtitle">Coûts Mensuels Récurrents</div>
          <table className="premium-table">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: '100px' }}>Quantité</th>
                <th style={{ width: '150px' }}>Prix Unitaire/mois (FCFA)</th>
                <th style={{ width: '150px' }}>Total/mois (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abonnement GSM/GPRS (400 boîtiers)</td>
                <td>{donnees.abonnementGSM.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.abonnementGSM.prixUnitaireMensuel}
                    onChange={(e) => updateDonnee('abonnementGSM', 'prixUnitaireMensuel', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(donnees.abonnementGSM.quantite * donnees.abonnementGSM.prixUnitaireMensuel)}</td>
              </tr>
              <tr>
                <td>Maintenance matériel (400 boîtiers)</td>
                <td>{donnees.maintenanceMateriel.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.maintenanceMateriel.prixUnitaireMensuel}
                    onChange={(e) => updateDonnee('maintenanceMateriel', 'prixUnitaireMensuel', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(donnees.maintenanceMateriel.quantite * donnees.maintenanceMateriel.prixUnitaireMensuel)}</td>
              </tr>
              <tr>
                <td>Maintenance Plateforme (Hébergement + Support)</td>
                <td>1</td>
                <td>
                  <input
                    type="number"
                    value={donnees.maintenancePlateforme.prixMensuel}
                    onChange={(e) => updateDonnee('maintenancePlateforme', 'prixMensuel', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(donnees.maintenancePlateforme.prixMensuel)}</td>
              </tr>
              <tr>
                <td>Technicien permanent sur site (Ferké)</td>
                <td>1</td>
                <td>
                  <input
                    type="number"
                    value={donnees.technicienSite.prixMensuel}
                    onChange={(e) => updateDonnee('technicienSite', 'prixMensuel', e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td>{formatCurrency(donnees.technicienSite.prixMensuel)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">TOTAL MENSUEL</td>
                <td>{formatCurrency(calculs.totalMensuel)}</td>
              </tr>
              <tr className="total-row" style={{ background: 'var(--color-primary-light)', color: 'white' }}>
                <td colSpan="3">TOTAL SUR 36 MOIS</td>
                <td>{formatCurrency(calculs.total36Mois)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* OPTION PIVOTS */}
      <section id="option-pivots" className="premium-section">
        <h2 className="premium-title">💧 OPTION - PIVOTS IRRIGATION</h2>

        <div className="premium-card">
          <div className="premium-subtitle">Matériel et Installation (150 unités)</div>
          <table className="premium-table">
            <thead>
              <tr>
                <th>Description</th>
                <th style={{ width: '100px' }}>Quantité</th>
                <th style={{ width: '150px' }}>Prix Unitaire (FCFA)</th>
                <th style={{ width: '150px' }}>Total (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Balise géolocalisation Pivot</td>
                <td>{donnees.balisePivot.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.balisePivot.prixUnitaire}
                    onChange={(e) => updateDonnee('balisePivot', 'prixUnitaire', e.target.value)}
                  />
                </td>
                <td>{formatCurrency(donnees.balisePivot.quantite * donnees.balisePivot.prixUnitaire)}</td>
              </tr>
              <tr>
                <td>Sonde niveau carburant (1000L)</td>
                <td>{donnees.sondePivot.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.sondePivot.prixUnitaire}
                    onChange={(e) => updateDonnee('sondePivot', 'prixUnitaire', e.target.value)}
                  />
                </td>
                <td>{formatCurrency(donnees.sondePivot.quantite * donnees.sondePivot.prixUnitaire)}</td>
              </tr>
              <tr>
                <td>Installation complète (Balise + Sonde)</td>
                <td>{donnees.installPivot.quantite}</td>
                <td>
                  <input
                    type="number"
                    value={donnees.installPivot.prixUnitaire}
                    onChange={(e) => updateDonnee('installPivot', 'prixUnitaire', e.target.value)}
                  />
                </td>
                <td>{formatCurrency(calculs.totalInstallPivots)}</td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">TOTAL OPTION PIVOTS (Investissement)</td>
                <td>{formatCurrency(calculs.totalOptionPivots)}</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#666' }}>* Cette option fait l'objet d'une commande séparée. Maintenance et GSM non inclus dans ce tableau (voir section Exploitation si activé).</p>
        </div>
      </section>
    </div>
  )
}

export default SectionCouts

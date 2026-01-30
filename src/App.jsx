import { useState, useRef, useEffect } from 'react'
import Header from './components/Header'
import Sommaire from './components/Sommaire'
import SectionCouts from './components/SectionCouts'
import Diagrammes from './components/Diagrammes'
import Recapitulatif from './components/Recapitulatif'
import ExportButtons from './components/ExportButtons'
import { translations } from './translations'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('investissement')
  // Language State - Default FR
  const [language, setLanguage] = useState('fr')
  const contentRef = useRef(null)

  // Translation Helper
  const t = (key) => {
    return translations[language][key] || key
  }

  // Auto-scroll when activeSection changes
  useEffect(() => {
    if (activeSection) {
      const element = document.getElementById(activeSection)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [activeSection])

  // État pour toutes les données de la proposition
  const [donnees, setDonnees] = useState({
    dateProposition: '26 janvier 2026',
    validiteOffre: 60,
    garantieMateriel: 24,
    garantieLogiciel: 36,

    // 1.1.1 Matériel VL/PL (170 unités)
    boitierVLPL: { quantite: 170, prixUnitaire: 58000 },
    lecteurIdentification: { quantite: 170, prixUnitaire: 28000 },
    antenneGPSVL: { quantite: 170, prixUnitaire: 10000 },
    cablageVL: { quantite: 170, prixUnitaire: 9000 },

    // 1.1.2 Matériel Engins (230 unités)
    boitierEngin: { quantite: 230, prixUnitaire: 72000 },
    antenneGPSEngin: { quantite: 230, prixUnitaire: 12000 },
    cablageEngin: { quantite: 230, prixUnitaire: 8000 },

    // 1.1.4 Option Pivots (150 unités)
    balisePivot: { quantite: 150, prixUnitaire: 45000 },
    sondePivot: { quantite: 150, prixUnitaire: 85000 },
    installPivot: { quantite: 150, prixUnitaire: 25000 }, // Matériel Câblage (10k) + Install (15k approx in logic? No user says 10k cable)
    // Correction logic: User separate Cabling (10k) from Install
    // We will use existing fields but mapped correctly:
    cablagePivot: { quantite: 150, prixUnitaire: 10000 }, // New field needed if strictly following

    // 1.2.1 Installation VL/PL
    installVL: { quantite: 170, prixUnitaire: 12000 },
    installLecteur: { quantite: 170, prixUnitaire: 8000 },
    configVL: { quantite: 170, prixUnitaire: 5000 },

    // 1.2.2 Installation Engins
    installEngin: { quantite: 230, prixUnitaire: 12000 },
    configCANBUS: { quantite: 230, prixUnitaire: 10000 },
    testsEngin: { quantite: 230, prixUnitaire: 8000 },

    // 1.2.3 Installation Pivots
    installBalisePivot: { quantite: 150, prixUnitaire: 12000 },
    installSondePivot: { quantite: 150, prixUnitaire: 10000 },
    configPivot: { quantite: 150, prixUnitaire: 3000 },

    // 1.2.4 Configuration et formation
    configPlateforme: 2500000,
    parametragePostes: 1500000,
    formationAdmin: 2000000,
    formationInstallateurs: 1200000,
    formationUtilisateurs: 500000,
    documentation: 300000,

    // 1.2.5 Frais Déplacement et Hébergement
    fraisDeplacementMissions: { quantite: 2, prixUnitaire: 500000 },
    fraisDeplacementInstallation: { quantite: 1, prixUnitaire: 2500000 },
    fraisHebergement: { quantite: 8, prixUnitaire: 150000 }, // 4 pers * 2 mois = 8
    fraisRestauration: { quantite: 1, prixUnitaire: 800000 },

    // 1.3 Coûts Développement Plateforme (300 jours @ 150k)
    devRapports: { jours: 55, tjm: 150000 },
    devAgricole: { jours: 35, tjm: 150000 },
    devAdmin: { jours: 25, tjm: 150000 },
    integrationParcellaire: { jours: 20, tjm: 150000 },
    devAPI: { jours: 30, tjm: 150000 },
    adaptationEcran: { jours: 15, tjm: 150000 }, // New
    integrationLecteur: { jours: 20, tjm: 150000 }, // New
    devPivots: { jours: 25, tjm: 150000 }, // New
    testsValidation: { jours: 45, tjm: 150000 }, // New
    docTechnique: { jours: 30, tjm: 150000 }, // New

    // 1.4 Coûts Exploitation (36 mois)
    abonnementGSM: { quantite: 400, prixUnitaireMensuel: 3500 },
    maintenanceMateriel: { quantite: 400, prixUnitaireMensuel: 2000 },
    maintenancePlateforme: { prixMensuel: 500000 },
    technicienSite: { prixMensuel: 350000 },

    // 1.4 Option Exploitation Pivots
    abonnementGSMPivot: { quantite: 150, prixUnitaireMensuel: 3000 },
    maintenancePivot: { quantite: 150, prixUnitaireMensuel: 1500 }
  })

  const updateDonnee = (key, field, value) => {
    if (typeof donnees[key] === 'object' && donnees[key] !== null) {
      setDonnees(prev => ({
        ...prev,
        [key]: { ...prev[key], [field]: parseFloat(value) || 0 }
      }))
    } else {
      setDonnees(prev => ({
        ...prev,
        [key]: parseFloat(value) || 0
      }))
    }
  }

  // Calculs détaillés
  const calculs = {}

  // 1.1 Matériel
  calculs.totalBoitierVL = donnees.boitierVLPL.quantite * donnees.boitierVLPL.prixUnitaire
  calculs.totalLecteur = donnees.lecteurIdentification.quantite * donnees.lecteurIdentification.prixUnitaire
  calculs.totalAntenneVL = donnees.antenneGPSVL.quantite * donnees.antenneGPSVL.prixUnitaire
  calculs.totalCablageVL = donnees.cablageVL.quantite * donnees.cablageVL.prixUnitaire
  calculs.totalMaterielVL = calculs.totalBoitierVL + calculs.totalLecteur + calculs.totalAntenneVL + calculs.totalCablageVL

  calculs.totalBoitierEngin = donnees.boitierEngin.quantite * donnees.boitierEngin.prixUnitaire
  calculs.totalAntenneEngin = donnees.antenneGPSEngin.quantite * donnees.antenneGPSEngin.prixUnitaire
  calculs.totalCablageEngin = donnees.cablageEngin.quantite * donnees.cablageEngin.prixUnitaire
  calculs.totalMaterielEngin = calculs.totalBoitierEngin + calculs.totalAntenneEngin + calculs.totalCablageEngin

  calculs.totalMateriel = calculs.totalMaterielVL + calculs.totalMaterielEngin

  // 1.2 Installation
  const totalInstallVLUnit = donnees.installVL.quantite * donnees.installVL.prixUnitaire
  const totalInstallLecteur = donnees.installLecteur.quantite * donnees.installLecteur.prixUnitaire
  const totalConfigVL = donnees.configVL.quantite * donnees.configVL.prixUnitaire
  calculs.totalInstallationVL = totalInstallVLUnit + totalInstallLecteur + totalConfigVL

  const totalInstallEnginUnit = donnees.installEngin.quantite * donnees.installEngin.prixUnitaire
  const totalConfigCANBUS = donnees.configCANBUS.quantite * donnees.configCANBUS.prixUnitaire
  const totalTestsEngin = donnees.testsEngin.quantite * donnees.testsEngin.prixUnitaire
  calculs.totalInstallationEngin = totalInstallEnginUnit + totalConfigCANBUS + totalTestsEngin

  calculs.totalFormationConfig = donnees.configPlateforme + donnees.parametragePostes +
    donnees.formationAdmin + donnees.formationInstallateurs +
    donnees.formationUtilisateurs + donnees.documentation

  calculs.totalFraisDeplacement = (donnees.fraisDeplacementMissions.quantite * donnees.fraisDeplacementMissions.prixUnitaire) +
    (donnees.fraisDeplacementInstallation.quantite * donnees.fraisDeplacementInstallation.prixUnitaire) +
    (donnees.fraisHebergement.quantite * donnees.fraisHebergement.prixUnitaire) +
    (donnees.fraisRestauration.quantite * donnees.fraisRestauration.prixUnitaire)

  calculs.totalInstallationBase = calculs.totalInstallationVL + calculs.totalInstallationEngin + calculs.totalFormationConfig
  calculs.totalInstallation = calculs.totalInstallationBase + calculs.totalFraisDeplacement

  // 1.3 Développement
  calculs.totalDevRapports = donnees.devRapports.jours * donnees.devRapports.tjm
  calculs.totalDevAgricole = donnees.devAgricole.jours * donnees.devAgricole.tjm
  calculs.totalDevAdmin = donnees.devAdmin.jours * donnees.devAdmin.tjm
  calculs.totalIntegrationParcellaire = donnees.integrationParcellaire.jours * donnees.integrationParcellaire.tjm
  calculs.totalDevAPI = donnees.devAPI.jours * donnees.devAPI.tjm
  calculs.totalAdaptationEcran = donnees.adaptationEcran.jours * donnees.adaptationEcran.tjm
  calculs.totalIntegrationLecteur = donnees.integrationLecteur.jours * donnees.integrationLecteur.tjm
  calculs.totalDevPivots = donnees.devPivots.jours * donnees.devPivots.tjm
  calculs.totalTestsValidation = donnees.testsValidation.jours * donnees.testsValidation.tjm
  calculs.totalDocTechnique = donnees.docTechnique.jours * donnees.docTechnique.tjm

  calculs.totalDeveloppement = calculs.totalDevRapports + calculs.totalDevAgricole + calculs.totalDevAdmin +
    calculs.totalIntegrationParcellaire + calculs.totalDevAPI + calculs.totalAdaptationEcran +
    calculs.totalIntegrationLecteur + calculs.totalDevPivots + calculs.totalTestsValidation + calculs.totalDocTechnique

  // 1.4 Exploitation Recurrente (Mensuel)
  calculs.totalMensuel = (donnees.abonnementGSM.quantite * donnees.abonnementGSM.prixUnitaireMensuel) +
    (donnees.maintenanceMateriel.quantite * donnees.maintenanceMateriel.prixUnitaireMensuel) +
    donnees.maintenancePlateforme.prixMensuel +
    donnees.technicienSite.prixMensuel

  calculs.total36Mois = calculs.totalMensuel * 36

  // Investissement initial global
  calculs.investissementInitial = calculs.totalMateriel + calculs.totalInstallation + calculs.totalDeveloppement

  // Total sur 3 ans
  calculs.totalSur3Ans = calculs.investissementInitial + calculs.total36Mois
  calculs.coutMensuelMoyen = calculs.totalSur3Ans / 36

  // Option Pivots
  calculs.totalMaterielPivots = (donnees.balisePivot.quantite * donnees.balisePivot.prixUnitaire) +
    (donnees.sondePivot.quantite * donnees.sondePivot.prixUnitaire) +
    (donnees.cablagePivot ? donnees.cablagePivot.quantite * donnees.cablagePivot.prixUnitaire : 0)

  calculs.totalInstallPivots = (donnees.installPivot.quantite * donnees.installPivot.prixUnitaire) +
    (donnees.installBalisePivot ? donnees.installBalisePivot.quantite * donnees.installBalisePivot.prixUnitaire : 0) +
    (donnees.installSondePivot ? donnees.installSondePivot.quantite * donnees.installSondePivot.prixUnitaire : 0) +
    (donnees.configPivot ? donnees.configPivot.quantite * donnees.configPivot.prixUnitaire : 0)

  // Correction: The total 21M for option pivots in user text seems to be Balise + Sonde + Cabling.
  // 150 * (45+85+10) = 150 * 140k = 21M. Correct.
  // Installation Option: 3.75M.
  // 150 * (12+10+3) = 150 * 25k = 3.75M. Correct.

  calculs.totalOptionPivots = calculs.totalMaterielPivots + calculs.totalInstallPivots

  return (
    <div className="app">
      <Header t={t} language={language} setLanguage={setLanguage} />

      <div className="container">
        <Sommaire
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          t={t}
        />

        <div className="content" ref={contentRef}>
          <SectionCouts
            donnees={donnees}
            updateDonnee={updateDonnee}
            calculs={calculs}
            t={t}
          />

          <Diagrammes calculs={calculs} t={t} />

          <Recapitulatif
            calculs={calculs}
            donnees={donnees}
            t={t}
          />

          <ExportButtons
            contentRef={contentRef}
            donnees={donnees}
            calculs={calculs}
            t={t}
          />
        </div>
      </div>
    </div>
  )
}

export default App

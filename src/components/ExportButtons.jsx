import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function ExportButtons({ contentRef, donnees, calculs }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(value)
  }

  const exportToPDF = async () => {
    if (!contentRef.current) return

    const button = document.querySelector('.export-buttons')
    if (button) button.style.display = 'none'

    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'

      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 10

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save(`Proposition_Financiere_SUCAF_${new Date().toLocaleDateString('fr-FR').replace(/\//g, '-')}.pdf`)

      alert('✅ PDF exporté avec succès !')
    } catch (error) {
      console.error('Erreur export PDF:', error)
      alert('❌ Erreur lors de l\'export PDF')
    } finally {
      if (button) button.style.display = 'flex'
    }
  }

  const exportToWord = async () => {
    // Note: Export Word simplifié - pour un vrai export, utiliser docx.js
    let content = `
PROPOSITION FINANCIÈRE - SUCAF CI
Système de Géolocalisation de la Flotte Véhicules et Engins

Prestataire: ONLOUTOU
Mandataire: SOUTARAH
Date: ${donnees.dateProposition}

═══════════════════════════════════════════════════

RÉCAPITULATIF FINANCIER

Investissement Initial: ${formatCurrency(calculs.investissementInitial)}
- Matériel: ${formatCurrency(calculs.totalMateriel)}
- Installation: ${formatCurrency(calculs.totalInstallation)}

Coûts Mensuels: ${formatCurrency(calculs.totalMensuel)}

Total 36 Mois: ${formatCurrency(calculs.total36Mois)}

TOTAL SUR 3 ANS: ${formatCurrency(calculs.totalSur3Ans)}

Coût Mensuel Moyen: ${formatCurrency(calculs.coutMensuelMoyen)}

═══════════════════════════════════════════════════

INFORMATIONS CONTRACTUELLES

Validité de l'offre: ${donnees.validiteOffre} jours
Garantie matériel: ${donnees.garantieMateriel} mois
Garantie logiciel: ${donnees.garantieLogiciel} mois
Nombre de boîtiers: 400 (170 VL/PL + 230 Engins)
Durée du contrat: 36 mois renouvelable

═══════════════════════════════════════════════════

Document généré le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
    `

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Proposition_Financiere_SUCAF_${new Date().toLocaleDateString('fr-FR').replace(/\//g, '-')}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    alert('✅ Document exporté avec succès !')
  }

  const handlePrint = () => {
    window.print()
  }

  const saveData = () => {
    const dataToSave = {
      donnees,
      calculs,
      savedAt: new Date().toISOString()
    }
    localStorage.setItem('proposition_financiere_sucaf', JSON.stringify(dataToSave))
    alert('✅ Données sauvegardées localement !')
  }

  const loadData = () => {
    const saved = localStorage.getItem('proposition_financiere_sucaf')
    if (saved) {
      const data = JSON.parse(saved)
      alert(`✅ Données chargées (sauvegarde du ${new Date(data.savedAt).toLocaleString('fr-FR')})`)
      window.location.reload()
    } else {
      alert('❌ Aucune sauvegarde trouvée')
    }
  }

  return (
    <div className="export-buttons">
      <h3>📤 Exporter la Proposition</h3>

      <div className="export-grid">
        <button onClick={exportToPDF} className="export-btn pdf-btn">
          📄 Exporter en PDF
        </button>

        <button onClick={exportToWord} className="export-btn word-btn">
          📝 Exporter en Texte
        </button>

        <button onClick={handlePrint} className="export-btn print-btn">
          🖨️ Imprimer
        </button>

        {/* Boutons désactivés en production pour éviter les modifications
        <button onClick={saveData} className="export-btn save-btn">
          💾 Sauvegarder
        </button>

        <button onClick={loadData} className="export-btn load-btn">
          📂 Charger
        </button>
        */}
      </div>

      <style jsx>{`
        .export-buttons {
          margin: 3rem 0;
          padding: 2rem;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 16px;
          border: 2px dashed #d4af37;
        }

        .export-buttons h3 {
          margin-top: 0;
          color: #1a365d;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .export-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .export-btn {
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .export-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .pdf-btn {
          background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
          color: white;
        }

        .word-btn {
          background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
          color: white;
        }

        .print-btn {
          background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
          color: white;
        }

        .save-btn {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          color: white;
        }

        .load-btn {
          background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
          color: white;
        }

        @media (max-width: 768px) {
          .export-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default ExportButtons

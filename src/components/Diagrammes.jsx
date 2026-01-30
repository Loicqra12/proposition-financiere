import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

function Diagrammes({ calculs, t }) {
  // Données pour le camembert
  const pieData = [
    { name: t('materiel_total'), value: calculs.totalMateriel, color: '#1a365d' },
    { name: t('installation_total'), value: calculs.totalInstallation, color: '#2c5282' },
    { name: `${t('couts_exploitation')} (36 ${t('mois')})`, value: calculs.total36Mois, color: '#d4af37' },
  ]

  // Données pour l'évolution mensuelle
  const monthlyData = Array.from({ length: 12 }, (_, i) => ({
    mois: `${t('mois')} ${i + 1}`,
    coutMensuel: calculs.totalMensuel,
    cumulatif: (i + 1) * calculs.totalMensuel + calculs.investissementInitial
  }))

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(value)
  }

  const COLORS = ['#1a365d', '#2c5282', '#d4af37', '#f6e05e']

  const barData = [
    { name: t('investissement'), montant: calculs.investissementInitial },
    { name: `${t('couts_exploitation')} 36 ${t('mois')}`, montant: calculs.total36Mois },
    { name: t('comparaison_3ans'), montant: calculs.totalSur3Ans }
  ]

  return (
    <section id="diagrammes">
      <h2>📉 {t('visualisations').toUpperCase()}</h2>

      <div className="charts-grid">
        {/* Répartition des coûts */}
        <div className="chart-card">
          <h3>{t('repartition_invest')}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Évolution des coûts */}
        <div className="chart-card">
          <h3>{t('evolution_mensuelle')} (12 {t('mois')})</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend />
              <Line type="monotone" dataKey="coutMensuel" stroke="#d4af37" strokeWidth={2} name={t('cout_moyen')} />
              <Line type="monotone" dataKey="cumulatif" stroke="#1a365d" strokeWidth={2} name="Cumulatif" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Comparaison investissement vs exploitation */}
        <div className="chart-card full-width">
          <h3>{t('comparaison_3ans')}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Bar dataKey="montant" fill="#d4af37">
                {[0, 1, 2].map((index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <style jsx>{`
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .chart-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-top: 4px solid #d4af37;
        }

        .chart-card.full-width {
          grid-column: 1 / -1;
        }

        .chart-card h3 {
          margin-top: 0;
          color: #1a365d;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Diagrammes

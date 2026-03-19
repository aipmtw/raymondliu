function App() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const distances = [104, 116, 58, null, null, null, null, null, null, null, null, null];
  const goal = 1300;
  const total = distances.reduce((sum, d) => sum + (d || 0), 0);
  const gap = goal - total;

  return (
    <>
      <div style={{textAlign:'center',padding:'10px 0',background:'linear-gradient(90deg,#1e3a5f,#2d5a87)',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
        <a href="https://dailyai.tw/" target="_blank" rel="noopener noreferrer" style={{color:'#e0e0e0',textDecoration:'none',fontSize:'14px'}}>
          歡迎訪問 <strong style={{color:'#60a5fa'}}>Daily AI Taiwan</strong> — 立足台灣，讀懂 AI
        </a>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col">
        <nav className="max-w-6xl mx-auto px-6 py-6 w-full">
        <a href="https://aipm.com.tw/" className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 rounded-lg transition inline-block">
          ← aipm.com.tw
        </a>
      </nav>
      <main className="flex-1 flex flex-col items-center px-6 pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          Raymond Liu
        </h1>
        <p className="text-slate-400 mb-4">2026 Sport Plan — Monthly Review</p>

        {/* About me */}
        <div className="w-full max-w-3xl mb-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-indigo-300 mb-3">關於我</h2>
          <p className="text-slate-300 leading-relaxed mb-3">
            AI的小白，希望透過不斷的實作練習，可以學習到更多東西，可以幫助自己的生活。
          </p>
          <p className="text-cyan-400 font-medium italic mb-3">
            「天行健，君子以自強不息」
          </p>
          <p className="text-slate-400 text-sm">
            無論是不是休假，要維持自己的正常生活、飲食、運動、學習以及隨時隨地的放鬆自己
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-3xl mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Total: {total} km</span>
            <span>Goal: {goal} km</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all"
              style={{ width: `${Math.min((total / goal) * 100, 100)}%` }}
            />
          </div>
          <p className="text-sm text-slate-500 mt-1 text-right">
            {((total / goal) * 100).toFixed(1)}% — Gap: {gap} km
          </p>
        </div>

        {/* Monthly table */}
        <div className="w-full max-w-3xl overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-slate-400 font-medium border-b border-slate-700">Month</th>
                {months.map((m) => (
                  <th key={m} className="px-3 py-2 text-center text-slate-400 font-medium border-b border-slate-700">{m}</th>
                ))}
                <th className="px-3 py-2 text-center text-emerald-400 font-bold border-b border-slate-700">Total</th>
                <th className="px-3 py-2 text-center text-amber-400 font-bold border-b border-slate-700">Gap</th>
                <th className="px-3 py-2 text-center text-cyan-400 font-bold border-b border-slate-700">Goal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-3 text-slate-300 font-medium border-b border-slate-800">Distance (km)</td>
                {distances.map((d, i) => (
                  <td
                    key={i}
                    className={`px-3 py-3 text-center border-b border-slate-800 font-semibold ${
                      d ? 'text-white bg-emerald-500/10' : 'text-slate-600'
                    }`}
                  >
                    {d || '—'}
                  </td>
                ))}
                <td className="px-3 py-3 text-center font-bold text-emerald-400 border-b border-slate-800 bg-emerald-500/10">{total}</td>
                <td className="px-3 py-3 text-center font-bold text-amber-400 border-b border-slate-800">{gap}</td>
                <td className="px-3 py-3 text-center font-bold text-cyan-400 border-b border-slate-800">{goal}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Monthly bar chart */}
        <div className="w-full max-w-3xl mt-8">
          <h2 className="text-lg font-semibold text-slate-300 mb-4">Monthly Progress</h2>
          <div className="flex items-end gap-2 h-40">
            {months.map((m, i) => {
              const d = distances[i] || 0;
              const maxD = Math.max(...distances.filter(Boolean), 1);
              const height = d > 0 ? (d / maxD) * 100 : 0;
              return (
                <div key={m} className="flex-1 flex flex-col items-center gap-1">
                  {d > 0 && <span className="text-xs text-emerald-300">{d}</span>}
                  <div
                    className="w-full rounded-t bg-gradient-to-t from-indigo-600 to-cyan-500 transition-all"
                    style={{ height: `${height}%`, minHeight: d > 0 ? '4px' : '0' }}
                  />
                  <span className="text-xs text-slate-500">{m}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      </div>
    </>
  )
}

export default App

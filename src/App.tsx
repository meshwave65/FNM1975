import logoFNM from './assets/logo_fnm.jpeg'
import cunhadoFoto from './assets/lsgo.png'

function App() {
  return (
    <div className="min-h-screen bg-green-800 text-white font-sans">
      {/* Header */}
      <header className="bg-green-900 py-8 text-center">
        <img
          src={logoFNM}
          alt="Logo FNM"
          className="w-48 h-48 mx-auto object-contain mb-6"
        />
        <h1 className="text-5xl font-bold mb-2">Faculdade Nacional de Medicina</h1>
        <p className="text-xl opacity-90">Turma de 1975</p>
      </header>

      {/* Card Principal */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl mb-6">
            <img
              src={cunhadoFoto}
              alt="Dr. Luiz Sergio Gomes de Oliveira"
              className="w-full h-full object-cover"
            />
          </div>
         
          <h2 className="text-3xl font-semibold mb-2">Dr. Luiz Sergio Gomes de Oliveira</h2>
          <p className="text-green-200 mb-8">Médico • Formado em 1975</p>
        </div>
      </main>

      <footer className="text-center py-8 text-green-200 text-sm">
        Turma Eterna • FNM 1975
      </footer>
    </div>
  )
}

export default App

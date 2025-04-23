import { useState, useEffect } from 'react';

function App() {
  const [tipoUsuario, setTipoUsuario] = useState(null);

  if (!tipoUsuario) {
    return (
      <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm text-center">
          <h1 className="text-xl font-bold mb-4">Você é:</h1>
          <button
            onClick={() => setTipoUsuario('medico')}
            className="w-full bg-emerald-700 text-white py-2 mb-3 rounded hover:bg-emerald-800"
          >
            Médico
          </button>
          <button
            onClick={() => setTipoUsuario('paciente')}
            className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600"
          >
            Paciente
          </button>
        </div>
      </div>
    );
  }

  if (tipoUsuario === 'medico') return <CadastroMedico />;
  if (tipoUsuario === 'paciente') return <ReceitaPaciente />;
}

function CadastroMedico() {
  const [cirurgia, setCirurgia] = useState('');
  const [paciente, setPaciente] = useState('');
  const [data, setData] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = () => {
    if (cirurgia && paciente && data) {
      setEnviado(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">Cadastrar Procedimento</h1>
        <input
          type="text"
          placeholder="Tipo de cirurgia"
          className="w-full mb-3 p-2 border rounded"
          value={cirurgia}
          onChange={(e) => setCirurgia(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome do paciente"
          className="w-full mb-3 p-2 border rounded"
          value={paciente}
          onChange={(e) => setPaciente(e.target.value)}
        />
        <input
          type="date"
          className="w-full mb-3 p-2 border rounded"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="w-full bg-emerald-700 text-white py-2 rounded hover:bg-emerald-800"
          onClick={handleSubmit}
        >
          Enviar Receita
        </button>

        {enviado && (
          <div className="mt-4 text-green-700 font-medium text-center">
            Receita enviada para o paciente!
          </div>
        )}
      </div>
    </div>
  );
}

function ReceitaPaciente() {
  const [receita, setReceita] = useState(null);
  const [alarmeAtivo, setAlarmeAtivo] = useState(false);

  useEffect(() => {
    const receitaSimulada = {
      paciente: 'João da Silva',
      cirurgia: 'Facectomia OD',
      data: '2025-04-22',
      medicamentos: [
        {
          nome: 'Predfort',
          posologia: '1 gota de 6/6h por 7 dias'
        },
        {
          nome: 'Cilodex',
          posologia: '1 gota de 8/8h por 10 dias'
        }
      ]
    };
    setReceita(receitaSimulada);
  }, []);

  const ativarAlarme = () => {
    setAlarmeAtivo(true);
    alert("Alarmes configurados! Você será lembrado dos horários.");
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">Receita Pós-Operatória</h1>

        {receita ? (
          <div>
            <p className="mb-2"><strong>Paciente:</strong> {receita.paciente}</p>
            <p className="mb-2"><strong>Procedimento:</strong> {receita.cirurgia}</p>
            <p className="mb-4"><strong>Data:</strong> {receita.data}</p>

            <h2 className="font-semibold mb-2">Medicações:</h2>
            <ul className="mb-4 list-disc list-inside">
              {receita.medicamentos.map((med, index) => (
                <li key={index}><strong>{med.nome}:</strong> {med.posologia}</li>
              ))}
            </ul>

            {!alarmeAtivo ? (
              <button
                className="w-full bg-emerald-700 text-white py-2 rounded hover:bg-emerald-800"
                onClick={ativarAlarme}
              >
                Ativar Alarmes
              </button>
            ) : (
              <p className="text-green-700 font-medium text-center">Alarmes ativados com sucesso!</p>
            )}
          </div>
        ) : (
          <p>Carregando receita...</p>
        )}
      </div>
    </div>
  );
}

export default App;

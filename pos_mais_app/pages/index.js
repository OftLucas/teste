
import { useState } from 'react';

export default function Home() {
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

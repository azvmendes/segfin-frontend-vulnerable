// src/pages/Simulate.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Simulate() {
  const [simulacoes, setSimulacoes] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:8080/metas/${userId}/simular`)
      .then(res => setSimulacoes(res.data))
      .catch(err => console.error("Erro na simulação:", err));
  }, [userId]);

  return (
    <div className="container mt-4">
      <h2>Simulação de Metas</h2>
      {simulacoes.length === 0 ? (
        <p>Você ainda não possui metas ou rendimentos cadastrados para simular.</p>
      ) : (
        <ul className="list-group">
          {simulacoes.map((sim, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
              {sim.descricao}
              <span className="badge bg-info text-dark">
                {sim.meses} mês(es) - R$ {sim.valorObjetivo.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Simulate;

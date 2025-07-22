// src/pages/Goals.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Goals() {
  const [descricao, setDescricao] = useState('');
  const [valorObjetivo, setValorObjetivo] = useState('');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:8080/metas/${userId}/nova`, {
        descricao,
        valorObjetivo: parseFloat(valorObjetivo)
      });
      alert('Meta criada com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      alert('Erro ao salvar meta: ' + (err.response?.data || err.message));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Criar Nova Meta</h2>
      <input
        className="form-control mb-3"
        placeholder="Descrição da meta"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
      />
      <input
        type="number"
        className="form-control mb-3"
        placeholder="Valor objetivo (R$)"
        value={valorObjetivo}
        onChange={e => setValorObjetivo(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleSubmit}>
        Salvar Meta
      </button>
    </div>
  );
}

export default Goals;

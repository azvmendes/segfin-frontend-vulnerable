// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [goals, setGoals] = useState([]);
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) return;

    axios.get(`http://localhost:8080/usuarios/dashboard/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error("Erro ao carregar usuário:", err));

    axios.get(`http://localhost:8080/metas/${userId}/listar`)
      .then(res => setGoals(res.data))
      .catch(err => console.error("Erro ao carregar metas:", err));
  }, [userId]);

  return (
    <div className="container mt-4">
      <h2>Welcome, {user?.nome || 'Usuário'} 👋</h2>
      <p>Email: {user?.email}</p>

      <hr />

      <h4>Your Financial Goals</h4>
      {goals.length === 0 ? (
        <p>No goals registered. Start planning your financial future!</p>
      ) : (
        <ul className="list-group">
          {goals.map((goal, index) => {
            const descricao = goal?.descricao || 'Meta não definida';
            const valor = typeof goal?.valorObjetivo === 'number' ? goal.valorObjetivo.toFixed(2) : '0.00';

            return (
              <li key={goal?.id || index} className="list-group-item d-flex justify-content-between align-items-center">
                {descricao}
                <span className="badge bg-primary rounded-pill">R$ {valor}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;

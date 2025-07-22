import React, { useEffect, useState } from 'react';
import { createIncome, listIncomes } from '../api/api';

function Incomes() {
  const [value, setValue] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState([]);
  const id = localStorage.getItem('userId');

  useEffect(() => {
    listIncomes(id).then(res => setList(res.data));
  }, [id]);

  const handleAdd = () => {
    createIncome(id, { valor: parseFloat(value), descricao: desc })
      .then(() => window.location.reload());
  };

  return (
    <div className="container">
      <h2>Register Incomes</h2>
      <input type="number" className="form-control" placeholder="Value" onChange={e => setValue(e.target.value)} />
      <input type="text" className="form-control mt-2" placeholder="Description" onChange={e => setDesc(e.target.value)} />
      <button className="btn btn-info mt-2" onClick={handleAdd}>Add</button>

      <ul className="list-group mt-4">
        {list.map((r, i) => (
          <li className="list-group-item" key={i}>R$ {r.valor} – {r.descricao}</li>
        ))}
      </ul>
    </div>
  );
}

export default Incomes;

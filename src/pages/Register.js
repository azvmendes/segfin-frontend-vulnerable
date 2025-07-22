import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8080/usuarios/cadastrar", {
        nome,
        email,
        senha
      });

      alert(response.data);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data || "Erro ao cadastrar");
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <input className="form-control mb-3" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input className="form-control mb-3" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control mb-3" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button className="btn btn-success" onClick={handleRegister}>Cadastrar</button>
    </div>
  );
}

export default Register;

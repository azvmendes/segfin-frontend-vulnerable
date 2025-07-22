import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/usuarios/login", {
        email,
        senha
      });

      localStorage.setItem("userId", response.data.id);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      alert(error.response?.data || "Erro ao fazer login");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        className="form-control mb-3"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form-control mb-3"
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>Entrar</button>
      <p className="mt-3">
        Não tem conta? <a href="/register">Cadastre-se</a>
      </p>
    </div>
  );
}

export default Login;

import axios from 'axios';

const API_BASE = 'http://localhost:8080';

export const registerUser = (data) => axios.post(`${API_BASE}/usuarios/cadastrar`, data);
export const loginByEmail = (email, senha) => 
  axios.post(`${API_BASE}/usuarios/login`, { email, senha });
export const getDashboard = (id) => axios.get(`${API_BASE}/usuarios/dashboard/${id}`);
export const createIncome = (id, data) => axios.post(`${API_BASE}/rendimentos/${id}/novo`, data);
export const listIncomes = (id) => axios.get(`${API_BASE}/rendimentos/${id}/listar`);
export const createGoal = (id, data) => axios.post(`${API_BASE}/metas/${id}/nova`, data);
export const simulateGoals = (id) => axios.get(`${API_BASE}/metas/${id}/simular`);
export const ssrfTest = (url) => axios.get(`${API_BASE}/util/proxy`, { params: { url } });
export const listGoals = (id) => axios.get(`${API_BASE}/metas/${id}/listar`);

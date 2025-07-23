import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

// User APIs
export async function createUser(user) {
  const res = await axios.post(`${API_BASE_URL}/createuser`, user);
  return res.data;
}

export async function getAllUsers() {
  const res = await axios.get(`${API_BASE_URL}/getall`);
  return res.data;
}

export async function updateUser(id, user) {
  const res = await axios.put(`${API_BASE_URL}/update/${id}`, user);
  return res.data;
}

export async function deleteUser(id) {
  const res = await axios.delete(`${API_BASE_URL}/delete/${id}`);
  return res.data;
}

// Menu Item APIs
export async function createMenuItem(item) {
  const res = await axios.post(`${API_BASE_URL}/createmenuitem`, item);
  return res.data;
}

export async function getAllMenuItems() {
  const res = await axios.get(`${API_BASE_URL}/getallmenuitem`);
  return res.data;
}

export async function getMenuItem(id) {
  const res = await axios.get(`${API_BASE_URL}/getmenuitem/${id}`);
  return res.data;
}

export async function updateMenuItem(id, item) {
  const res = await axios.put(`${API_BASE_URL}/updatemenuitem/${id}`, item);
  return res.data;
}

export async function deleteMenuItem(id) {
  const res = await axios.delete(`${API_BASE_URL}/deletemenuitem/${id}`);
  return res.data;
}
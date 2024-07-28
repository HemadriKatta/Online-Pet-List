import axios from 'axios';

const API_BASE_URL = 'http://pets-v2.dev-apis.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchPets = async () => {
  const response = await api.get('/pets');
  return response.data;
};

export const fetchPetById = async (id) => {
  const response = await api.get(`/pets?id=${id}`);
  return response.data;
};

export const searchPets = async (animal, location, breed) => {
  const response = await api.get(`/pets?animal=${animal}&city=${location}&breed=${breed}`);
  return response.data;
};

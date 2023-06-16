import axios from 'axios';

axios.defaults.baseURL = 'https://648cbbd48620b8bae7ed508b.mockapi.io';

export const getContacts = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    throw e.message;
  }
};

export const createContacts = async newData => {
  try {
    const response = await axios.post('/contacts', newData);
    return response.data;
  } catch (e) {
    throw e.message;
  }
};

export const deleteContacts = async contactId => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (e) {
    throw e.message;
  }
};
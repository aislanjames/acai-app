import axios from 'axios';

export const fetchProdutos = async () => {
  const response = await axios.get('https://65f4ffa8f54db27bc02286b4.mockapi.io/produtos');
  return response.data;
};

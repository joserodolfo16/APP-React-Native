import axios from 'axios';

const API_URL = 'https://api.example.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

interface Product {
  id: number;
  name: string;
  price: number;
};

export { Product };
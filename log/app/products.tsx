import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { fetchProducts, Product } from './api';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  return (
    <View>
      {products.map(product => (
        <Text key={product.id}>{product.name} - {product.price}</Text>
      ))}
    </View>
  );
};

export default App;
// ProductData.js
import { useState, useEffect } from 'react';

export const useProductData = () => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    fetch('https://api-test.innoloft.com/product/6781/')
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.error(error));
  }, []);

  return productData;
};

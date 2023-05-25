import axios from "axios";


const produtos = () => {
axios.get('https://dummyjson.com/products/1')
  .then(response => {
    // A resposta da API estará disponível em response.data
    console.log(response.data);
  })
  .catch(error => {
    // Lidar com erros, se houver
    console.error(error);
  });

}

export default produtos;
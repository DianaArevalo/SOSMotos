import axios from 'axios';


export const request = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: 'bearer ' + REACT_APP_API_TOKEN,
  },
});




// se genero problema con las dependencias de node y librerias 
//ya que no conecta el process.env en el navegador
//1er intento tratar de cambiar el codigo en request https://youtu.be/MvxHph1CSss intentar este video con solo datausefetch 
//2do intento tratar de configurar la dependencia con npm i -D react-error-overlay@6.0.9
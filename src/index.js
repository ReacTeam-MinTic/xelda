import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import AppPrueba from 'AppPrueba';

const prueba = false;

if(prueba === true){
 
  ReactDOM.render(
    <React.StrictMode>
       <App />
  </React.StrictMode>,
    document.getElementById('root')
  );
}else{
 
  ReactDOM.render(
    <React.StrictMode>
       <AppPrueba />
  </React.StrictMode>,
    document.getElementById('root')
  );
}


reportWebVitals();

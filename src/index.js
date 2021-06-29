import './index.css'
import React from 'react' //Biblioteca necessária para lidar com sintaxe jsx
import ReactDOM from 'react-dom'

import App from './App.jsx'

//Recebe o elemendo que será renderizado
ReactDOM.render(

    <App></App>,
    document.getElementById('root')//Toda a aplicação ficará dentro da DIV Root do arquivo public/index.html

    
)
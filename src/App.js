import React from 'react';
import { Encabezado } from './Componentes/Encabezado';
import { Balance } from './Componentes/Balance';
import { IncomeExpenses } from './Componentes/IncomeExpenses';
import { ListaTransacciones } from './Componentes/ListaTransacciones';
import { AgregarTransaccion } from './Componentes/AgregarTransaccion';

import { GlobalProvider } from './Context/GlobalState';

import './App.css';
function App() {
  return (
    <GlobalProvider>
      <Encabezado />
      <div className="Container">
        <Balance />
        <IncomeExpenses />
        <ListaTransacciones />
        <AgregarTransaccion />
      </div>
    </GlobalProvider>
  );
}

export default App;

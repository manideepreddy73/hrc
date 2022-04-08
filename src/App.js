import './App.css';
import React from 'react';
import Header from './components/Header/header';
import Action_Bar  from './components/Action_Bar/action';
//import Table_grid  from './components/Table_grid/grid';
import Pages from "./components/Pages/Add_cust"

const App =()=> {
  return (
    <div>
      <div>
        <Header />
        <Action_Bar />
      </div>
      <div>
        <Pages />
      </div>
    </div>
  );
}
export default App;

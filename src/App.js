import React from 'react';

import './App.scss'
import Header from './components/navbar'
import Body from './components/body'
import Lspd from './components/lspd'
import Ems from './components/ems'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <div className="Home">
      <Header></Header>  
      <Body></Body>
      </div>
      <Lspd></Lspd>
      <Ems></Ems>
      <Footer></Footer>
    </div>
  );
}

export default App;

//import { useState } from 'react';

import viteLogo from '/vite.svg';

import Button from './shared/buttons/button/Button';
import InputText from './shared/inputs/inputText/InputText';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <InputText label="Nome" />
        <InputText label="CPF" />
        <Button height="36px" background="#4FA1C1" color="white">
          Salvar
        </Button>
      </div>
    </>
  );
}

export default App;

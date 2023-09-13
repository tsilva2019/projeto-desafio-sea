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
        <InputText margin="0 0 12px 0" label="Nome" />
        <InputText margin="0 0 12px 0" label="CPF" />
        <Button margin="0 0 12px 0" height="36px" background="#4FA1C1" color="white">
          Salvar
        </Button>
      </div>
    </>
  );
}

export default App;

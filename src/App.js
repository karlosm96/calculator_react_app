import './App.css';
import Button from './components/Button.jsx';
import InputScreen from './components/InputScreen.jsx';
import ClearButton from './components/Clear.jsx';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const concatInput = (nInp) => {
    setInput(input + nInp);
  };

  const clearInput = (nInp) => {
    setInput(nInp);
  };

  return (
    <div className="App">
      <div className='main-calculator-container'>
        <InputScreen input={ input } />
        <div className='row'>
            <Button clicOperator={ concatInput }>7</Button>
            <Button clicOperator={ concatInput }>8</Button>
            <Button clicOperator={ concatInput }>9</Button>
            <Button clicOperator={ concatInput }>X</Button>
        </div>
        <div className='row'>
            <Button clicOperator={ concatInput }>4</Button>
            <Button clicOperator={ concatInput }>5</Button>
            <Button clicOperator={ concatInput }>6</Button>
            <Button clicOperator={ concatInput }>-</Button>
        </div>
        <div className='row'>
          <Button clicOperator={ concatInput }>1</Button>
          <Button clicOperator={ concatInput }>2</Button>
          <Button clicOperator={ concatInput }>3</Button>
          <Button clicOperator={ concatInput }>+</Button>
        </div>
        <div className='row'>
          <Button >=</Button>
          <Button clicOperator={ concatInput }>0</Button>
          <Button clicOperator={ concatInput }>,</Button>
          <Button clicOperator={ concatInput }>/</Button>
        </div>
        <div className='row'>
          <ClearButton clicOperator={ clearInput }>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;

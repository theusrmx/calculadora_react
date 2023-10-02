import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row} from "./styles";
import { useState } from 'react';


const App = () => {
  const[currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => (prev === '0' ? `${number}` : `${prev}${number}`));
  };
  
  const handleMemoryClear = () =>{
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () =>{
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }

  }

  const handleSubNumbers = () =>{
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }

  const handlePlusNumbers = () =>{
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*')
    }else{
      const plus = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(plus));
      setOperation('');
    }
  }

  const handleDiviNumbers = () =>{
    if (firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/')
    }else{
      const divi = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divi));
      setOperation('');
    }
  }

  const handleEquals = () =>{
    if (firstNumber !== '0' && operation !== '' && firstNumber !== 0){
      switch (operation) {
        case '+':
            handleSumNumbers();
          break;
        case '-':
            handleSubNumbers();
            break;
        case '*':
            handlePlusNumbers();
            break;
        case '/':
            handleDiviNumbers();
            break;
        default:
          break;
      }
    }
  }

    return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handlePlusNumbers}/>
          <Button label="/" onClick={handleDiviNumbers}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="CE" onClick={handleMemoryClear}/>

        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
          
        </Row>

        
        
      </Content>
    </Container>
  );
}

export default App;

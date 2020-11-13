
import './App.css';
import Title from './components/Title/Title';
import Score from './components/Score/Score';
import Cards from './components/Cards/Cards';
import { useState } from 'react'

function App() {

  const [dataScore, setDataScore] = useState({})

  const callback = (data) => {
    setDataScore({ ...data })
  }


  return (
    <div className="App">
      <Title />
      <Score data={dataScore} />
      <Cards callback={callback} />
    </div>
  );
}

export default App;

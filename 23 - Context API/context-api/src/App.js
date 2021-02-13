import './App.css';
import Counter from './componets/Counter';
import Header from './componets/Header';
import { ContadorProvider } from '../src/componets/countContext';

function App() {
  return (
    <div className="App">
      <ContadorProvider>
        <Header></Header>
        <Counter></Counter>
      </ContadorProvider>
    </div>
  )
}

export default App;

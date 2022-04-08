import { Route, Routes } from 'react-router';
import './App.css';
import BeerDetail from './components/BeerDetail';
import BeerRandom from './components/BeerRandom';
import BeersList from './components/BeersList';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
    
      <MainPage />
    <Routes>
      <Route path="/beers" element={<BeersList/>}></Route>
      <Route path="/random-beer" element={<BeerRandom/>}></Route>
      <Route path="/beers/:beerId" element={<BeerDetail/>}></Route>
    </Routes>
  
    </div>
  );
}

export default App;

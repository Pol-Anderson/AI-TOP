import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import All from './All';
import Ai from './Components/ai';
import Header from './Components/header';
import AnimatedScene from './Components/episodes';
import Anime from './Components/anime';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/animatedScenes" element={<AnimatedScene />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Pedido } from './pages/Pedido';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pedido" element={<Pedido />} />
    </Routes>
  );
}

export default App;

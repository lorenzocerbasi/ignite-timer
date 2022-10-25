import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { History } from './pages/History';
import { Home } from './pages/Home';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
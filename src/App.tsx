import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/' element={<Home />} />
      <Route path='/books/:booksId' element={<Detail />} />
      {/* <Route path='/category' element={<Detail />} /> */}
    </Routes>
  );
}

export default App;

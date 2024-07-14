import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './pages/home';
import Fav from './pages/favorites';
import Details from './pages/details';

function App() {
  return (
    <div>
        <div className='min-h-screen p-6 bg-red'>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/favorites' element={<Fav/>}/>
              <Route path='/recipe-item/:id' element={<Details/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;

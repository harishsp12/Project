import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/productList' element={<ProductList/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

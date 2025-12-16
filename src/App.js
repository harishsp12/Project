import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import ProductList from './ProductList';
import Calculator from './page/Calculator';
import Form from './page/Form';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculator/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/productList' element={<ProductList/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

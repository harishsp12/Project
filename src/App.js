import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import ProductList from './ProductList';
import Calculator from './page/Calculator';
import Form from './page/Form';
import Api from './page/Api';
import Putapi from './page/Putapi';
import Delete from './page/Delete';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Calculator/>}/> */}
        <Route path='/delete' element={<Delete/>}/>
        <Route  path='/' element={<Putapi/>} />
        <Route path='/sigup' element={<Signup/>}/>
        <Route path='/api' element={<Api/>}/>
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

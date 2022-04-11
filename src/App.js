import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/Shop' element={<Shop></Shop>}></Route>
        <Route path='/Orders' element={<Orders></Orders>}></Route>
        <Route path='/Inventory' element ={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
         <Route path='/Shipment' element={
           <RequireAuth>
             <Shipment></Shipment>
           </RequireAuth>
         }></Route>
        <Route path='/About' element ={<About></About>}></Route>
        <Route path='/SignUp' element ={<SignUp></SignUp>}></Route>
        <Route path='/Login' element ={<Login></Login>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

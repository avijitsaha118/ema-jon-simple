import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    // <div className="App">
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}> </Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      {/* <Shop></Shop> */}


    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import RequireAuth from './pages/Shared/RequireAuth/RequireAuth';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import InventoryDetail from './pages/Home/InventoryDetail/InventoryDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<InventoryDetail></InventoryDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;

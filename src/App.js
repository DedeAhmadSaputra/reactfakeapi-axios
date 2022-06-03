import AllUsers from "../src/Component/NavBar"
import AddUser from '../src/Component/AddUser';
import EditUser from '../src/Component/EditUser';
import NavBar from '../src/Component/NavBar';
import NotFound from '../src/Component/NotFound'; 
import DAS from './Component/Das';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<DAS />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
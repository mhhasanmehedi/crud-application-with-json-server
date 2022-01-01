import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import CrudApp from './Components/CrudApp';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CrudApp />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

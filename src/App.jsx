import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import './app.css'


function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
      
    </>
  );
}

export default App;
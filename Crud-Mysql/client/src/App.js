
import './App.css';
import Home from './Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,

  Routes,
  Route
} from "react-router-dom";
import AddEdit from './AddEdit';
import Navbar from './Navbar';
import Login from './Login';
import Resister from './Resister';
import Protect from './Protect';
import ForgetP from './ForgetP';
import Reset from './Reset';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <ToastContainer/>
  
    <Routes>

      <Route  path='/' element={<Protect Component = {Home}/>} />
      <Route  path='/AddContact' element={<Protect Component = {AddEdit}/>}  />
      <Route  path='/Edit/:id' element={<Protect Component = {AddEdit}/>}  />
    

   
      <Route  path='/login' element={ <Login/>} />
      <Route  path='/forget' element={ <ForgetP/>} />
      <Route  path='/Reset/:id' element={ <Reset/>} />

      
      <Route  path='/resister' element={ <Resister/>} />
    </Routes>



    </Router>
   
    </>
  );
}

export default App;

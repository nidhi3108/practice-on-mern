// import logo from './logo.svg';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import EventHandling from './components/EventHandling';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Notfound from './components/Notfound';
import Todo from './components/Todo';  
import Register from './components/Register';
import Product from './components/Product';
import UserManager from './components/UserManager';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      {/* <Login/> */}
       <Toaster position='top-right'/>
      <BrowserRouter>
        <Header/>
        {/* <Link to="/home">Home</Link>
        <br/>
        <Link to="/login">Login</Link> */}
      <Routes> 
        <Route element={<EventHandling/>} path="/eventhandling"/>
        <Route element={<Home></Home>} path="/"/>
        <Route element={<Home></Home>} path="home"/>
        {/* <Route element={<Login/>} path="login"//> */}
        <Route element={<UserManager/>} path="UserManager"/>
        <Route element={<Notfound/>} path="*"/>
        <Route element={<Todo/>} path="todo"/>
        <Route element={<Register/>} path="register"/>
        <Route element={<Product/>} path="product"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

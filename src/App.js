import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Webpages/Home';
import SignUp from './Webpages/SignUp';
import SignIn from './Webpages/SignIn';
import UserDashboard from './Webpages/UserDashboard';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/userdashboard' element={<UserDashboard/>}/>
    </Routes>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Signup from './Components/Authendication/SignUp';
import SignIn from './Components/Authendication/SignIn';
import SamplePage from './Components/Pages/SamplePage';
import NavBar from './Components/Header/NavBar';
import ProtectedRoute from './Components/Authendication/ProtectedRoute';
import Counter from './Components/Redux/Counter';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Signup />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/sample' element={<ProtectedRoute><SamplePage /></ProtectedRoute>}></Route>
          <Route path='/counter' element={<ProtectedRoute><Counter /></ProtectedRoute>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useState,useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth]);

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
      <BrowserRouter>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={!user? <Login/> : <Navigate to = "/" />} />
            <Route path='/register' element={!user?  <Register/> : <Navigate to = "/" />} />  
            <Route path='/posts/create' element={user? <CreatePost /> : <Navigate tp = "/login" />} />
            <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to = "/login" />} />  
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

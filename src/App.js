import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';




function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path= "/home" element = {<Home></Home>} ></Route>
      <Route path='/service/:serviceId' element={
        <RequireAuth>
          <ServiceDetail></ServiceDetail>
        </RequireAuth>
      }></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
     
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;

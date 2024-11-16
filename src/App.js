import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import HomePage from './components/Home';
import ProductsPage from './components/Products';
import ProductDetailPage from './components/ProductDetail';
import SignupPage from './components/Signup';
import LoginPage from './components/Login';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path='/Home' element={<HomePage />}></Route>
                <Route path='/Products' element={<ProductsPage />}></Route>
                <Route path='/Productdetail/:id' element={<ProductDetailPage />} />
                <Route path='/Signup' element={<SignupPage />}></Route>
                <Route path='/Login' element={<LoginPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
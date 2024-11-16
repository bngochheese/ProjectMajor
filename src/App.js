import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import HomePage from './components/Home';
import ProductsPage from './components/Products';
import ProductDetailPage from './components/ProductDetail';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path='/Home' element={<HomePage />}></Route>
                <Route path='/Products' element={<ProductsPage />}></Route>
                <Route path='/Productdetail/:id' element={<ProductDetailPage />} />
            </Routes>
        </div>
    );
}

export default App;
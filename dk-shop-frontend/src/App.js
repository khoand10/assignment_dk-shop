import React, { useState } from 'react';
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
import dataFake from './dataFake';
import Routers from './routers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AddProduct from './components/AddProduct';
function App() {

  const [products, setProducts] = useState(dataFake);
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState('green');
  const onHandleClick = () => {
    // setStatus(true);
    setColor('red');
  }
  const onHandleRemove = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  }
  const onHanleAdd = (product) => {
    const newProduct = {
      id: products.length + 1,
      ...product
    }
    setProducts([
      ...products,
      newProduct
    ])
  }
  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} />
    </div>
  )

}
export default App;
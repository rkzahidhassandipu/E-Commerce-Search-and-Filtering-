import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './Product/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/Data'
import { useState } from 'react';
import Cart from './components/Cart';



function App() {
  const [selectCategory, setSelectCategory] = useState(null);

  const [query, setQuery] = useState('');

  // ------ input filtering ----------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())  !== -1
  )

   // ------ input filtering ----------
  const handleChange = (event) => {
    setSelectCategory(event.target.value)
  }

  // -------- button filtering -----------
  const handleClick = (event) => {
    setSelectCategory(event.target.value)
  }

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    if(query) {
      filteredProducts = filteredItems;
    }

    if(selected){
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.newPrice === selected ||
          product.title === selected
        
      )
    }

    return filteredProducts.map(
      ({img, title, star, prevPrice, newPrice, reviews}) => (
        <Cart
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          prevPrice={prevPrice}
          newPrice={newPrice}
          reviews={reviews}
        />
      )
    )
  }

  const result = filteredData(products, selectCategory, query);


  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './Product/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/Data'
import { useState } from 'react';



function App() {
  const [selectCategory, setSelectCategory] = useState(null);

  const [query, setQuery] = useState('');

  // ------ input filtering ----------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter((product) => {
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  })

   // ------ input filtering ----------
  const handleChange = (event) => {
    setSelectCategory(event.target.value)
  }

  // -------- button filtering -----------
  const handleClick = (event) => {
    setSelectCategory(event.target.value)
  }




  return (
    <>
      <Sidebar />
      <Navbar />
      <Recommended />
      <Products />
    </>
  );
}

export default App;

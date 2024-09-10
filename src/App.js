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
  const handleInputChange = (event) => {
    setQuery(event.target.value);
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

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './Product/Products';
import Recommended from './Recommended/Recommended';
import Category from './Sidebar/Category/Category';
import Sidebar from './Sidebar/Sidebar';

function App() {
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

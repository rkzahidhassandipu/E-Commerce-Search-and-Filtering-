import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './Product/Products';
import Recommended from './Recommended/Recommended';

function App() {
  return (
    <>
      <Navbar />
      <Products />
      <Recommended />
    </>
  );
}

export default App;

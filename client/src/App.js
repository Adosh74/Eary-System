import logo from './logo.svg';
import './App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;

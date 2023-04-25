import './App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Outlet, Route } from 'react-router-dom';
import Home_user from './pages/home/Home_user';

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

import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Team from './components/team';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>   
      <Home></Home>
      <About></About>
      <Team></Team>
    </div>
  );
}

export default App;

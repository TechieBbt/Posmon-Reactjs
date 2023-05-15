import './App.css';
import Dashboard from './Dashboard/dashboard';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from '../src/Components/NavBar/navbar';
import Sidebar from '../src/Sidebar/sidebar';
import Cards from './Cards/cards';
import Whatsapp from '../src/Components/Whatsapp/whatsapp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <main>
      <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Sidebar" exact component={Sidebar} />
      <Route path="/Cards" exact component={Cards} />
  
     </Switch>
     </main>
     <Whatsapp/>
     </BrowserRouter>
    </div>
  );
}

export default App;

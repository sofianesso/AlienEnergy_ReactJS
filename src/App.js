
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;


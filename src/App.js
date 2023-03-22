
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'
import Products from "./components/Products/Products";
import About from "./components/About/About"
import Contact from "./components/Contact/Contact";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/signup' exact component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;


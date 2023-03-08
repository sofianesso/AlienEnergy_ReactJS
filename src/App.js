import './app.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomePage/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;


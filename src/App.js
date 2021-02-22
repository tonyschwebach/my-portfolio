import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

// TODO: add context for tracking current page for active tab and background

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <main className="page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={Home} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

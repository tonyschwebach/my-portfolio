import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import PageContext from "./contexts/PageContext";
import {useState} from "react";

  // "homepage": "https://tonyschwebach.github.io/my-portfolio",

function App() {
  const [pageContext,setPageContext] = useState("home");

  return (
    // <div className="App">
      <PageContext.Provider value={{pageContext,setPageContext}}>
        <Router basename="/">
          {/* <main className="page"> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="*" component={Home} />
            </Switch>
          {/* </main> */}
        </Router>
      </PageContext.Provider>
    // </div>
  );
}

export default App;

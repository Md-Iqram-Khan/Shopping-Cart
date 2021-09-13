import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
        </div>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

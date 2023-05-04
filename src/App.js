import "./App.css";
import Navbar from "./Navbar";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import Details from "./Details.json";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };


  return (
    <div className="App">
      <Navbar count={count} />
      <Header />

      <div>
        {Details.map((value, index) => (
          <Products
            key={index}
            index={index}
            value={value}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;

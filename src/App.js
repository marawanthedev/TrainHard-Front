import "./App.css";
import Landing from "./pages/landing/landing";
import { Route } from "react-router-dom";
import Category from "./pages/category/category.jsx";
import ProductDisplayPage from "./pages/productDisplay/productDisplay";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/category" component={Category} />
      <Route exact path="/product" component={ProductDisplayPage} />
    </div>
  );
}

export default App;

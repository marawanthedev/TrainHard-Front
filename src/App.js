import "./App.css";
import Landing from "./pages/landing/landing";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import { useState } from "react";
import { Route } from "react-router-dom";
function App() {
  const [isInAuth, setIsInAuth] = useState(false);
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route
        path="/dashboard"
        render={(props) => <Dashboard {...props} isInAuth={isInAuth} />}
      />
      <Route
        path="/login"
        render={(props) => <Login {...props} setAuthState={setIsInAuth} />}
      />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Signin from "./pages/Auth/signin";
import Successful from "./pages/Auth/registration_successful";
import Alert from "./components/Alert/Alert";
import Error from "./components/Alert/Error";
import PrivateRoute from "./PrivateRoute";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Alert></Alert>
        <Error></Error>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/successful" element={<Successful />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;

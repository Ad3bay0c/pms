import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from "./pages/Register";
import Signin from './pages/signin';
import Successful from './pages/registration_successful'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/successful' element={<Successful />} />
      </Routes>
    </Router>
  );
};

export default App;

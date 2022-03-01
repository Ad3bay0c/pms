import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/signin';
import Successful from './pages/registration_successful'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/successful' element={<Successful />} />
      </Routes>
    </Router>
  );
}

export default App;

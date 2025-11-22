import { Container} from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OEECalculator from './pages/OEECalculator';
import Help from './pages/Help';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';

function App() {


  return (
      <Router>
       {<AppNavbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oeecalculator" element={<OEECalculator />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        {<Footer />}
      </Router>
  );
};
export default App;
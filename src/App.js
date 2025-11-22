import { Container} from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OEECalculator from './pages/OEECalculator';
import Footer from './components/Footer';

function App() {


  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/oeecalculator" element={<OEECalculator />} />
          </Routes>
        {<Footer />}
      </Router>
  );
};
export default App;
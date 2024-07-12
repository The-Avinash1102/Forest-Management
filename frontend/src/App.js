import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Frontend/Homepage';
import ForestPage from './Frontend/Forestpage';
import AddTree from './Frontend/EditForestPage';
import AnimalPage from './Frontend/AnimalPage';
import AddAnimal from './Frontend/EditAnimalPage';
import VisitorsPage from './Frontend/VisitorPage';
import Chatbot from './Frontend/Chatbot';
import PrivacyPolicy from './Frontend/Policy';
import TermsOfService from './Frontend/Terms';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forest-page" element={<ForestPage />} />
        <Route path="/edit-forest" element={<AddTree />} />
        <Route path="/animal-page" element={<AnimalPage />} />
        <Route path="/edit-animal" element={<AddAnimal />} />
        <Route path="/visitors-page" element={<VisitorsPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
};

export default App;

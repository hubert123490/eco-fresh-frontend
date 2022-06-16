import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

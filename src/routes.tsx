import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import Loading from './components/loading';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;

import {
  BrowserRouter, Routes, Route, Outlet, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogin } from './slices/loginSlice';
import MainPage from './components/MainPage/MainPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

const PrivateRoute = () => {
  const login = useSelector(selectLogin);

  return login ? <Outlet /> : <Navigate to="/" />;
};

const PublicRoute = () => {
  const login = useSelector(selectLogin);

  return login ? <Navigate to="/profile" /> : <Outlet />;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

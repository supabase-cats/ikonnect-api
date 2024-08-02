import { Route, Routes } from 'react-router-dom';

import HeaderLayout from './components/HeaderLayout';
import AddSponsorPage from './pages/AddSponsorPage';
import LandingPage from './pages/LandingPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<HeaderLayout />}>
          <Route path="/list" element={<ListPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/addsponsor" element={<AddSponsorPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

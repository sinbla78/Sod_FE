import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import UploadPage from "./pages/UploadPage";
import DetailPage from "./pages/DetailPage";
import HeaderLayout from "./layout/HeaderLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<HeaderLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

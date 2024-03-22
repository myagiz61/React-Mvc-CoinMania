import MainPageController from "./controllers/MainPageController";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderView from "./views/HeaderView";
import DetailController from "./controllers/DetailController";

function App() {
  return (
    <>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/coins" element={<MainPageController />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </>
  );
}

export default App;

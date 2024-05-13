import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./pages/Main";
import Write from "./pages/Write";
import PostingDetail from "./pages/PostingDetail";
import MyPage from "./pages/MyPage";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<PostingDetail />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;

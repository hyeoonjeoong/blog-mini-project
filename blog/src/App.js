import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./pages/Main";
import Write from "./pages/Write";
import PostingDetail from "./pages/PostingDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<PostingDetail />} />
      </Routes>
    </>
  );
}

export default App;

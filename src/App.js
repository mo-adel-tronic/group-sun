import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../src/pages/Layout'
import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import NoPage from '../src/pages/Nopage'
import Posts from "./pages/Posts";
import AddPost from "./pages/posts/AddPost"
import ShowPost from "./pages/posts/ShowPost"
function App() {
  return (
    <>
      {/* You can add fixed component outside browser router */}
      <h1>Header Content fixed in all routes</h1>

      {/* Parent Object Handle Routing in browser */}
      <BrowserRouter>
        {/* group all routes and handle navigate */}
        <Routes>
          {/* Define route to show content Here */}
          {/* parent route => /... */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            {/* Another Parent inside parent => /posts/... */}
            <Route path="posts" element={<Posts />}>
              <Route path="add" element={<AddPost />} />
              <Route path="show/:id" element={<ShowPost />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


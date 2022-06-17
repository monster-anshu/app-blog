import "./App.css";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import { Route, Routes } from "react-router";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Post from "./Component/Post";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                title={"Clean Blog"}
                dis={"New blog website"}
                img={"https://i.ibb.co/HHQt1Z6/home-bg.jpg"}
              />
              <Main />
            </>
          }
        ></Route>
        <Route
          path="/index.html"
          element={
            <>
              <Header
                title={"Clean Blog"}
                dis={"New blog website"}
                img={"https://i.ibb.co/HHQt1Z6/home-bg.jpg"}
              />
              <Main />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <Header
                title={"About"}
                img={"https://i.ibb.co/k2v8P9c/about-bg.jpg"}
                dis={"This is what I do"}
              />
              <About />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Header
                title={"Contact  Me"}
                img={"https://i.ibb.co/NTvxxtJ/contact-bg.jpg"}
                dis={"Have questions? I have answers."}
              />
              <Contact />
            </>
          }
        ></Route>
        <Route
          path="/post"
          element={
            <>
              <Header
                title={
                  "Man must explore, and this is exploration at its greatest"
                }
                img={"https://i.ibb.co/DC0sDLK/post-bg.jpg"}
                dis={"Problems look mighty small from 150 miles up"}
              />
              <Post />
            </>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

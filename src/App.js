import React from "react";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/about/About";
import Faq from "./Pages/Faq";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";
import Search from "./Pages/about/search";
import List from "./Pages/about/list";
import Add from "./Pages/about/add";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List />} />
          <Route path="add" element={<Add />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
        <Route path="/" exact element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

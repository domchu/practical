import React from "react";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/about/About";
import Faq from "./Pages/Faq";
import Blog from "./Pages/Blog";
import Error from "./Pages/Error";
import Banner from "./Components/Banner/Banner";
import Search from "./Pages/about/search";
import List from "./Pages/about/list";
import Add from "./Pages/about/add";

import { Route, Routes } from "react-router-dom";
import Counter from "./Counter/Counter";
import Props from "./Props/Props";
import SampleOne from "./Toggle/SampleOne";
import SampleThree from "./Toggle/SampleThree";
import SampleTwo from "./Toggle/SampleTwo";
import Navbar from "./Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      {/* <h2>navbar project setup</h2> */}
      {/* <Counter /> */}
      {/* <SampleOne /> */}
      {/* <SampleTwo /> */}
      {/* <SampleThree /> */}
      {/* <Props /> */}

      <Menu />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/search" element={<Search />} />
        <Route path="/about/list" element={<List />} />
        <Route path="/about/add" element={<Add />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Banner />
      <Footer />
    </>
  );
}

export default App;

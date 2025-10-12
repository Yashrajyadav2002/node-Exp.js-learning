import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Insert from "./components/Insert";
import Display from "./components/Display";
import Update from "./components/Update";
import Search from "./components/Search";
import MyEdit from "./components/MyEdit";

const App = () => {
  return (
    <div>
    
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
            <Route path="update" element={<Update />} />
            <Route path="search" element={<Search />} />
            <Route path="myedit/:id" element={<MyEdit />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;

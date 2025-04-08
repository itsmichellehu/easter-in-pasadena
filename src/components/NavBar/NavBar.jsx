import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/leadership">Leadership</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leadership" element={<Leadership />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
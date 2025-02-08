import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import Basket from "./components/Basket";
import Profile from "./components/Profile";
import Favorite from "./components/Favorite";
import Category from "./components/Category";

class App extends React.Component {
    render () {
        return (
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/category" element={<Category />} />
                </Routes>
                <Footer />
            </>
        )
    }
}

export default App;
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import logo from '../image/logo.png'
import logo_user from '../image/logo-user.png'
import logo_favorite from '../image/add-favorite.svg'
import MainPage from "./MainPage";
import Basket from "./Basket";
import Profile from "./Profile";
import Favorite from "./Favorite";

class Header extends React.Component {
    render() {
        return (
            <Router>
                 <header class="header">
                    <div class="logo-search">
                        <Link to="/">
                        <div class="logo">
                            <img src={logo} alt="" />
                        </div>
                        </Link>
                        <div class="search">
                            <input type="text" placeholder="Поиск" />
                        </div>
                    </div>
                    <div class="center-row">
                        <div class="orange-button">
                            <button>Обратная связь</button>
                        </div>
                        <div class="orange-button">
                            <Link to="/basket">
                                <button>Корзина</button>
                            </Link>
                        </div>
                        <Link to="/favorite">
                            <div class="logo-button">
                                <img src={logo_favorite} alt="" />
                            </div>
                        </Link>
                        <Link to="/profile">
                            <div class="logo-button">
                                <img src={logo_user} alt="" />
                            </div>
                        </Link>
                        
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/favorite" element={<Favorite />} />
                </Routes>
            </Router>
        );
    }
}

export default Header;

import React from "react";
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { VscHeart } from "react-icons/vsc";
import { FaTruckArrowRight } from "react-icons/fa6";

class Header extends React.Component {
    render() {
        return (
                 <header className="header">
                    <div className="logo-search">
                        <div className="logo">
                            <FaTruckArrowRight className="logo-react"/>
                            <label>стройматериалы</label>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Поиск" />
                        </div>
                    </div>
                    <div className="center-row">
                        <div className="orange-button">
                            <button>Обратная связь</button>
                        </div>
                        <Link to="/basket">
                            <div className="orange-button">
                                    <button>Корзина</button>
                            </div>
                        </Link>
                        <Link to="/favorite">
                            <div className="logo-button">
                                    <VscHeart className="logo-from-react"/>
                            </div>
                        </Link>
                        <Link to="/profile">
                            <div className="logo-button">
                                    <VscAccount  className="logo-from-react"/>
                            </div>
                        </Link>
                    </div>
                </header>
        );
    }
}

export default Header;

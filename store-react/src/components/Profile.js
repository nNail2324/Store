import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div class="body-page">
                <div class="name">
                    <label>Личные данные</label>
                </div>
                <div class="char">
                    <div class="left-row">
                        <div class="title">
                            <label>Шарипов Наиль</label>
                        </div>
                        <div class="white-button">
                            <button>Выйти</button>
                        </div>
                    </div>
                    <div class="product-desc">
                        <div class="black-title">
                            <label>Номер телефона:</label>
                        </div>
                        <div class="black-title">
                            <label>Электронная почта:</label>
                        </div>
                        <div class="black-title">
                            <label>Город/Населенный пункт:</label>
                        </div>
                        <div class="black-title">
                            <label>Улица:</label>
                        </div>
                        <div class="black-title">
                            <label>Дом:</label>
                        </div>
                    </div>
                    <div class="left-row">
                        <div class="white-button">
                            <button>Редактировать</button>
                        </div>
                        <div class="white-button">
                            <button>Изменить пароль</button>
                        </div>
                    </div>
                </div>
                
                <div class="char">
                    <div class="title">
                        <label>Мои заказы</label>
                    </div>
                    <div class="products">
                        <div class="order-item">
                            <div class="black-title">
                                <label>09.09.2023</label>
                            </div>
                            <div class="title">
                                <label>647</label>
                            </div>
                            <div class="orange-title">
                                <label>Доставлен</label>
                            </div>
                        </div>
                        <div class="order-item">
                            <div class="black-title">
                                <label>14.11.2024</label>
                            </div>
                            <div class="title">
                                <label>589</label>
                            </div>
                            <div class="orange-title">
                                <label>Доставлен</label>
                            </div>
                        </div>
                        <div class="order-item">
                            <div class="black-title">
                                <label>17.11.2024</label>
                            </div>
                            <div class="title">
                                <label>346</label>
                            </div>
                            <div class="orange-title">
                                <label>Доставлен</label>
                            </div>
                        </div>
                        <div class="order-item">
                            <div class="black-title">
                                <label>25.12.2024</label>
                            </div>
                            <div class="title">
                                <label>312</label>
                            </div>
                            <div class="orange-title">
                                <label>В пути</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;

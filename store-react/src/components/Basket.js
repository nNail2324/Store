import React from "react";

class Basket extends React.Component {
    render() {
        return (
            <div class="body-page">
                <div class="name">
                    <label>Корзина</label>
                </div>
                <div class="types">
                    <div class="type">
                        <div class="orange-title">
                            <label>Уголок стальной 25x25</label>
                        </div>
                        <div class="black-title">
                            <label>120 руб./м</label>
                        </div>
                        <div class="quantity-button">
                            <button id="plus">+</button>
                            <input type="text" placeholder="1" id="print" />
                            <button id="minus">-</button>
                        </div>
                        <div class="left-row">
                            <div class="orange-button">
                                <button>Перейти</button>
                            </div>
                            <div class="add-button">
                                <button>&times;</button>
                            </div>
                        </div>
                    </div>
                    <div class="type">
                        <div class="orange-title">
                            <label>Уголок стальной 25x25</label>
                        </div>
                        <div class="black-title">
                            <label>120 руб./м</label>
                        </div>
                        <div class="quantity-button">
                            <button id="plus">+</button>
                            <input type="text" placeholder="1" id="print" />
                            <button id="minus">-</button>
                        </div>
                        <div class="left-row">
                            <div class="orange-button">
                                <button>Перейти</button>
                            </div>
                            <div class="add-button">
                                <button>&times;</button>
                            </div>
                        </div>
                    </div>
                    <div class="type">
                        <div class="orange-title">
                            <label>Уголок стальной 25x25</label>
                        </div>
                        <div class="black-title">
                            <label>120 руб./м</label>
                        </div>
                        <div class="quantity-button">
                            <button id="plus">+</button>
                            <input type="text" placeholder="1" id="print" />
                            <button id="minus">-</button>
                        </div>
                        <div class="left-row">
                            <div class="orange-button">
                                <button>Перейти</button>
                            </div>
                            <div class="add-button">
                                <button>&times;</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="char">
                    <div class="column">
                        <div class="product-desc">
                            <div>
                                <div class="black-title">
                                    <label>Адрес доставки</label>
                                </div>
                                <div class="black-text">
                                    <label>с. Чекмагуш, ул. Луговая, д. 6</label>
                                </div>
                            </div>
                            <div>
                                <div class="black-title">
                                    <label>Тип доставки</label>
                                </div>
                                <div class="black-text">
                                    <label>Самовывоз</label>
                                </div>
                            </div>
                            
                        </div>
                    <div class="product-desc" style={{textAlign: "right"}}>
                            <div>
                                <div class="black-title">
                                    <label>Общая сумма к оплате</label>
                                </div>
                                <div class="black-text">
                                    <label>3750 &#8381;</label>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div class="right-row">
                    <div class="black-text">
                        <label>Наличными</label>
                    </div>
                    <div class="white-button">
                        <button>Заказать</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basket;

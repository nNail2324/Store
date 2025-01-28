import React from "react";

class Favorite extends React.Component {
    render() {
        return (
            <div class="body-page">
                <div class="name">
                    <label>Избранное</label>
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
                                <button>+</button>
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
                                <button>+</button>
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
                                <button>+</button>
                            </div>
                            <div class="add-button">
                                <button>&times;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Favorite;

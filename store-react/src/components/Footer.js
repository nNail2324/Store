import React from "react";
import whatsapp from '../image/whatsapp.svg'
import telegram from '../image/telegram.svg'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="description">
                    <label>КОНТАКТНЫЕ ДАННЫЕ</label>
                </div>
                <div className="network">
                    <img src={whatsapp} alt="Whatsapp" />
                    <img src={telegram} alt="Telegram" />
                </div>
            </footer>
        );
    }
}

export default Footer;

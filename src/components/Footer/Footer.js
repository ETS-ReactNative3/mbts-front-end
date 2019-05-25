import React from 'react';

import './Footer.scss';


export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="copyright">
                    <div className="copyright-sign">
                        &copy; All rights reserved
                    </div>
                    <div className="copyright-desine">
                        design made by:
                    </div>
                    <div>
                        <a href="https://zhannacraftsman.tumblr.com/">Zhannacraftsman</a>
                    </div>
                </div>

                <div className="social-links">
                    <a href="https://www.facebook.com/mieszkobulik" className="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/mieszkobulik/?hl=en" className="fa fa-instagram"></a>
                </div>

                <div className="addr">
                    <div>
                        <strong>Kontakt:</strong>
                    </div>
                    <div>
                        Jana Dekerta 47 (wjazd od ul. Portowej)
                    </div>
                    <div>
                        30-703 Kraków
                    </div>
                    <div>
                        mieszkobulik@gmail.com
                    </div>
                    <div>
                        tel. +48 692 504 147
                    </div>
                </div>
            </div>
        );
    }
}

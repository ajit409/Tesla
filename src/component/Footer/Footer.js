import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className='paraTxt'>
                    <p>
                        <sup>1</sup> Price before estimated savings is $47,490, excluding taxes and fees. Subject to change.<br />
                        <a href="#">Est. gas savings is $83/month.</a>
                    </p>
                    <p>
                        <sup>2</sup>Price before estimated savings is $44,990, excluding taxes and fees. Subject to change. <br /><a href="#">Learn about est. gas savings.</a>
                    </p>
                    <p>
                        <sup>3</sup> Price before estimated savings is $77,990, excluding taxes and fees. Subject to change.<br /> <a href="#">Learn about est. gas savings.</a>
                    </p>
                    <p>
                        <sup>4</sup> Price before estimated savings is $72,990, excluding taxes and fees. Subject to change. <br /><a href="#">Learn about est. gas savings.</a>
                    </p>
                </div>

                <div className='ftTesla'>
                    <p>
                        <a href="#">Tesla © 2024</a> |

                        <a href="#">Privacy & Legal</a> |
                        <a href="#">Vehicle Recalls</a> |
                        <a href="#">Contact</a> |
                        <a href="#">News</a> |
                        <a href="#">Get Updates</a> |
                        <a href="#">Locations</a>
                    </p>
                </div>

            </footer>
        </div>
    );
}

export default Footer;

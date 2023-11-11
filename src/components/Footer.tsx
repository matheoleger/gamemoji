import React from 'react';

import "../static/css/Footer.css";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h5>Made with ❤️ by Mathéo LEGER (aka Smoowy)</h5>
                <h5>•</h5>
                <h5>Inspired by <a href="https://gitmoji.dev/" target="_blank">Gitmoji</a></h5>
            </div>
            <div className="footer-content">
                <h5><a href="https://github.com/matheoleger/gamemoji" target="_blank">The repository</a></h5>
                <h5>•</h5>
                <h5><a href="https://github.com/matheoleger/" target="_blank">My Github</a></h5>
            </div>
        </footer>
    )
}
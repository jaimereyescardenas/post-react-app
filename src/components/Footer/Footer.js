import React from "react";

import './Footer.css';

export default function Footer() {
    return (
        <footer className="App-footer">
            <div className="App-footer-content d-flex justify-content-end align-items-center py-3 pr-5">
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://www.linkedin.com/in/jaime-reyes-cardenas/" target="_blank" rel="noopener noreferrer">
                        <img src="img/linkedin-icon.svg" alt="LinkedIn icon" className="d-inline-block px-2" />
                    </a>
                    <a href="https://github.com/jaimereyescardenas" target="_blank" rel="noopener noreferrer">
                        <img src="img/github-icon.svg" alt="Github icon" className="d-inline-block px-2" />
                    </a>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <p className="my-auto px-2">Jaime Reyes C.</p>
                </div>
            </div>
        </footer>
    );
}
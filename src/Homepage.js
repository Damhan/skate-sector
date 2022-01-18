import React from "react";

import './Homepage.styles.scss'

function HomePage() {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Decks</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Wheels</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Trucks</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Parts</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Gear</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HomePage;
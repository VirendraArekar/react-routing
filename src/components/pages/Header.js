import React from 'react';
import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import Profile from './Profile';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';



export default function Header() {
    return (
        <Router>
        <div>
            <nav className="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
            <Link className="navbar-brand" to="/">
                    <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/58.1.3/v8-ignition/v8-ignition_128x128.png" className="rounded-circle z-depth-0"
                        alt="LOGO" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home
                    <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">Contacts Us</Link>
                </li>
                
                </ul>
                <ul className="navbar-nav ml-auto nav-flex-icons">
                <li className="nav-item avatar dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown" href="/link"
                    aria-haspopup="true" aria-expanded="false">
                    <img src="https://avatars0.githubusercontent.com/u/27573632?s=460&v=4" className="rounded-circle z-depth-0"
                        alt="picavatar" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
                    aria-labelledby="navbarDropdownMenuLink-55">
                    <a className="dropdown-item" href="/login">Sign Out</a>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
            <Route path="/" exact component={Profile} />
            <Route path="/about" exact component={About} />
            <Route path="/contact-us" exact component={Contact} />
            <Route path="/blogs" exact component={Blog} />
           
        </div>
        </Router>
        
    )
}

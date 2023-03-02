import React from 'react';
import { Link } from 'react-router-dom';
import '../GeneralStyle.css';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-warning">
                <div className="container-fluid">
                    <Link className="text-black navbar-brand fs-4" to="/" ><img src="./Images/Navicon.png" alt="" style={{ height: "70px", margin: "0 .5rem" }} /><i>FoodMonk</i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="text-black nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="text-black nav-link" to="/">Features</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="text-black nav-link" to="/login" tabindex="-1" aria-disabled="true">Login</Link>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </nav>
        </div>
    )
}

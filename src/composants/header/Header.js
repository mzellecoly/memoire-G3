import React, { useState } from 'react';
import './header.css';
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg headerfirst">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active element" aria-current="page" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active element" aria-current="page" href="#">Mémoire</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active element" aria-current="page" href="#">Profil</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active element" aria-current="page" href="#">A propos</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    );
  };
  
  export default Header;
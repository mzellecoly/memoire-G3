import Header from '../header/Header';
import './accueil.css';
import React, { Component } from 'react'

export default class Accueil extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/* <h1 className='mt-5'> Bienvenu sur la page d'Accueil</h1> */}
                <img className='imageBanner' src="https://img.freepik.com/photos-gratuite/coup-moyen-homme-posant-fond-graduation_23-2150319970.jpg?size=626&ext=jpg&ga=GA1.2.12207566.1692912950&semt=ais" alt="Logo" />
                <div className="card carte">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
      }
}

import './memoire.css';
import React, { Component } from 'react';

// ...

class Memoire extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filtre: '',
        filtreDomaine: '',  // Nouveau filtre pour le domaine
      };
    }
  
    handleFiltreChange = (e) => {
      this.setState({ filtre: e.target.value });
    };
  
    handleFiltreDomaineChange = (domaine) => {
      this.setState({ filtreDomaine: domaine });
    };
  
    render() {
      const { titre, auteur, datePublication, domaine } = this.props;
      const { filtre, filtreDomaine } = this.state;
  
      return (
        <>
          {/* Filtrage par titre */}
          <div className="mb-3 d-flex justify-content-end my-5 me-4">
            <input type="text" className="form-control border border-black rounded-2" id="filtre" value={filtre} onChange={this.handleFiltreChange} style={{ width: '200px' }} placeholder="Entrez un titre..." />
          </div>
  
          {/* Filtrage par domaine avec des boutons Bootstrap */}
          <div className="mb-3 d-flex justify-content-center">
            <div className="btn-group" role="group" aria-label="Filtre par domaine">
              <button
                type="button"
                className={`btn btn-danger me-3 rounded-2 ${filtreDomaine === '' ? 'active' : ''}`}
                onClick={() => this.handleFiltreDomaineChange('')}
              >
                Tous
              </button>
              <button
                type="button"
                className={`btn btn-danger me-3  rounded-2 ${filtreDomaine === 'Sociologie' ? 'active' : ''}`}
                onClick={() => this.handleFiltreDomaineChange('Sociologie')}
              >
                Sociologie
              </button>
              <button
                type="button"
                className={`btn btn-danger me-lg-3 rounded-2 ${filtreDomaine === 'Informatique' ? 'active' : ''}`}
                onClick={() => this.handleFiltreDomaineChange('Informatique')}
              >
                Informatique
              </button>
              <button
                type="button"
                className={`btn btn-danger rounded-2 ${filtreDomaine === 'Sante' ? 'active' : ''}`}
                onClick={() => this.handleFiltreDomaineChange('Sante')}
              >
                Sante
              </button>
            </div>
          </div>
  
          {/* Affichage du mémoire si le titre et le domaine correspondent aux filtres */}
          {filtre && !titre.toLowerCase().includes(filtre.toLowerCase()) ? null : (
            <div className="card w-50">
              <div className="card-body">
                <h5 className="card-title">{titre}</h5>
                <p className="card-text">Auteur: {auteur}</p>
                <p className="card-text">Date de publication: {datePublication}</p>
                <p className="card-text">Domaine: {domaine}</p>
                <button className="btn btn-primary me-3">Télécharger</button>
                <button className="btn btn-primary">Mini détails</button>
              </div>
            </div>
          )}
        </>
      );
    }
  }
  

export default Memoire;

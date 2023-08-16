import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
            </ul>
            <h2>Utilisateurs</h2>
            <ul>
            <li><Link to="/admin/user/index">Liste des utilisateurs</Link></li>
            <li><Link to="/admin/user/add">Ajouter des utilisateurs</Link></li>
            <li><Link to="/admin/user/edit">Modifier des utilisateurs</Link></li>
            </ul>
            <h2>Cocktails</h2>
            <ul>
            <li><Link to="/admin/cocktail/index">Liste des cocktails</Link></li>
            <li><Link to="/admin/cocktail/edit">Modifier des utilisateurs</Link></li>
            </ul>
        </div>
    );
};

export default SideMenu;
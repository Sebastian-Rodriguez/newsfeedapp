import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {SideBarWrapper, Items } from './styled';

const SideBar = () => {
    return(
            <SideBarWrapper>
                <Items className="items"><i class="fas fa-home"></i><Link to="/" className="link">Home</Link></Items>
                <hr></hr>
                <Items className="items"><i class="fas fa-balance-scale"></i><Link to="/politica" className="link">Politica</Link></Items>
                <hr></hr>
                <Items className="items"><i class="fas fa-globe-americas"></i><Link to="/internacionales" className="link">Internacionales</Link></Items>
                <hr></hr>
                <Items className="items"><i class="fas fa-microchip"></i><Link to="/tecnologia" className="link">Tecnologia</Link></Items>
                <hr></hr>
                <Items className="items"><i class="fas fa-glasses"></i><Link to="/espectaculos" className="link">Espectaculos</Link></Items>
                <hr></hr>
                <Items className="items"><i class="fas fa-futbol"></i><Link to="/deportes" className="link">Deportes</Link></Items>
                <hr></hr>
                
            </SideBarWrapper>
    )
}

export default SideBar;
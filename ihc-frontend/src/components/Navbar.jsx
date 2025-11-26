import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import logoOscuro from '../assets/imgs/logoTemaOscuro.png';
import logoClaro from '../assets/imgs/logoTemaClaro.png';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src={theme === 'dark' ? logoOscuro : logoClaro}
                    alt="SmartFood Logo"
                    className="navbar-logo"
                />
                <span className="navbar-brand">SMARTFOOD</span>
            </div>

            <div className="navbar-center">
                <Link to="/crear-perfil" className="nav-link">Crear perfil</Link>
                <Link to="/mis-perfiles" className="nav-link">Ver perfiles</Link>
                <Link to="/mis-perfiles" className="nav-link">Seleccionar perfil</Link>
            </div>

            <div className="navbar-right">
                <div className="role-switcher">
                    <Link to="/" className="role-link">CLIENTE</Link>
                    <span className="role-divider">|</span>
                    <Link to="/menu-admin" className="role-link">ADMIN</Link>
                </div>

                <ThemeToggle onThemeChange={handleThemeChange} />

                <div className="auth-controls">
                    <FontAwesomeIcon className="user-icon" icon={faCircleUser} />
                    <button className="btn-auth" onClick={() => navigate('/login')}>Login</button>
                    <button className="btn-auth register" onClick={() => navigate('/register')}>Register</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

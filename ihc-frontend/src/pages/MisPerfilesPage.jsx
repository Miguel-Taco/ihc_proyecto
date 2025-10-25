import "../styles/MisPerfilesPage.css"
import PerfilCard from '../components/PerfilCard'
import { useNavigate } from "react-router-dom";

function MisPerfilesPage() {
    const navigate = useNavigate();

    const perfiles = [
        {
            id: 1,
            nombre: 'Yo',
            tipo: 'Omnívoro',
            ultimaModificacion: '8 días',
            icono: 'Yo'
        },
        {
            id: 2,
            nombre: 'Hermana',
            tipo: 'Vegano, sin picante',
            ultimaModificacion: '2 días',
            icono: 'Hermana'
        },
        {
            id: 3,
            nombre: 'Padre',
            tipo: 'Vegetariano, sin lactosa, sin soya',
            fechaCreacion: '21/02/2025',
            icono: 'Padre'
        }
    ];

    return (
        <div className="misperfiles-main-container">
            <div className="misperfiles-header">
                <div className="misperfiles-usuario-button">
                    <div className="usuario-avatar">
                        👤
                    </div>
                    <span>Usuario</span>
                </div>
            </div>

            <div className="misperfiles-title-section">
                <h1>Mis Perfiles Personalizados</h1>
                <p className="misperfiles-subtitle">
                    Configura tus filtros personalizados para ti y tu familia
                </p>
            </div>

            <div className="misperfiles-list-container">
                {perfiles.map(perfil => (
                    <PerfilCard key={perfil.id} {...perfil} />
                ))}
            </div>

            <div className="misperfiles-footer">
                <button className="crear-perfil-button button-general">
                    + Crear Perfil Personalizado
                </button>
                <button onClick={() => {navigate('/')}} className="salir-button button-general">
                    Salir
                </button>
            </div>
        </div>
    );
}

export default MisPerfilesPage;
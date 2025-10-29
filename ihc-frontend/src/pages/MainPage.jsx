import '../styles/MainPage.css'
import ItemMenu from '../components/ItemMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png'
import { useEffect, useState } from 'react';
import { getItems } from "../api/items";

function MainPage(){
    const navigate = useNavigate();
    const [itemsMenuDisponibles, setItemsMenuDisponibles] = useState([]);

    useEffect(() =>{
        const fetchItems = async () => {
        try {
            const data = await getItems(); // 🔹 llamada al backend
            setItemsMenuDisponibles(data);
        } catch (error) {
            console.error("❌ Error al obtener los items:", error);
        }
        };
        fetchItems();
    },[]);
    
    return(
        <div className="main-page-container">
            {/*MOMENTANEO PARA VER LAS VISTAS TANTO DEL CLIENTE COMO DEL ADMIN GAA*/}
            <div className='navigate-rol-container row'>
                <Link to="/">CLIENTE</Link>
                <Link to="/menu-admin">ADMIN</Link>
            </div>
            {/**/}
            <div className='mainpage-head-container row'>   
                <div className='head-left-top-container row'>
                    <h1>SMARTFOOD</h1>
                    {/*<img class="logo-smartFood" src="" alt="logo"></img>*/}
                </div>
                <div className='head-center-top-container'>
                    <h1>MENU DEL DÍA</h1>
                    <div className='buttons-main-container row'>
                        <button className='button-general' onClick={() => {navigate('/crear-perfil')}}>Crear perfil</button>
                        <button className='button-general' onClick={() => {navigate('/mis-perfiles')}}>Ver perfiles</button>
                        <button className='button-general' onClick={() => {navigate('/mis-perfiles')}}>Seleccionar perfil</button>
                    </div>
                </div>
                <div className='head-right-top-container col'>
                    <FontAwesomeIcon className="user-login-icon" icon={faCircleUser} />
                    <button>Login</button>
                    <button>Register</button>
                </div>

            </div>
            <div className='mainpage-body-container row'>
                <aside className="filtros-container">
                    <h2>Estilo de vida</h2>
                    <div className='tag-aside-container'></div>
                    <h3 className='text-add-style'>+ Agregar etiqueta</h3>
                    <h2>Alérgenos</h2>
                    <h3 className='text-add-style'>+ Agregar alérgeno</h3>
                    <div className='preferencias-especificas-container'>
                        <h2>Preferencias</h2>
                        <div className="extra-container">
                            <h3 id="preferencias-picante">Nivel de picante</h3>
                            <div className="extra-options-container row">
                                <input type="radio" name="opcionExtra"/>
                                <label>0</label>
                                <input type="radio" name="opcionExtra"/>
                                <label>bajo</label>
                                <input type="radio" name="opcionExtra"/>
                                <label>alto</label>
                            </div>
                        </div>
                        <div className="sabor-container">
                            <h3>Sabor base</h3>
                            <div className="sabor-options-container row">
                                <input type="radio" name="opcionSabor"/>
                                <label>dulce</label>
                                <input type="radio" name="opcionSabor"/>
                                <label>salado</label>
                                <input type="radio" name="opcionSabor"/>
                                <label>agridulce</label>
                            </div>
                        </div> 
                        <h2>Kcal</h2>
                        <input placeholder="ej:200" className='form-input-general'/>
                    </div>

                </aside>
                <section className="items-container">
                    {/*De alguna forma debo lograr que aqui se carguen todos items que existen en el menú */}
                    {itemsMenuDisponibles.map( item => (
                        <ItemMenu key={item.id_item} item={item}/>
                    ))}
                </section>
            </div>
            
        </div>
    );
}

export default MainPage;
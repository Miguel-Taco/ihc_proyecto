import "../styles/CreatePerfilPage.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'
function CreatePerfilPage(){
    return(
        <div className="createPerfil-main-container">
            <h1>Crear Perfil Personalizado</h1>
            <h2>Nombre del perfil</h2>
            <input className="form-input-general" placeholder="Ejemplo: Yo, Papá, Hermanos, Niños"></input>

            <h2>Diete / Estilo de vida</h2>
            <div className="diet-checkbox-container row wrap">
                <label><input type="checkbox" id="omnivoro"/>Omnivoro</label>
                <label><input type="checkbox" id="vegetariano"/>Vegetariano</label>
                <label><input type="checkbox" id="vegano"/>Vegano</label>
                <label><input type="checkbox" id="pescetariano"/>Pescetariano</label>
            </div>               
            
            <h2>Preferencias personales</h2>
            <h3>Nivel de picante</h3>
            <button className="low-spicy spicy-button"><FontAwesomeIcon icon={faPepperHot} /></button>
            <label>Bajo</label>
            <button className="high-spicy spicy-button"><FontAwesomeIcon icon={faPepperHot} /></button>
            <label>Alto</label>
            <h3>No me gustan</h3>
            <div className="ingredientes-dislike-container">
                <ul className="elements-list-form row wrap">
                    <li>Pescado</li>
                    <li>Limon</li>
                    <li>Cebolla</li>  
                    <li>Camote</li>       
                    <li>Cebolla</li>  
                    <li>Camote</li> 
                    <li>Cebolla</li>  
                    <li>Camote</li>                                                                                      
                </ul>                
            </div>
            <h3 className="text-add-style">+ Añadir ingrediente</h3>
            <div className="createPerfil-foot-container row">
                <button className="save-perfil-button button-general">Guardar Perfil</button>    
                <button className="cancel-perfil-button button-general">Cancelar</button>                           
            </div>
        </div>
    )
}

export default CreatePerfilPage;
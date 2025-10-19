import "../styles/CreateItemPage.css"
import ceviche from '../assets/imgs/ceviche.jpg'
function CreateItemPage(){
    return(
        <div className="createItem-main-container">
            <h1>Agregar Item</h1>
            <h2>Informacion básica</h2>
            <div className="basic-info-item-container row">
                <div className="data-one-container">
                    <h3>Nombre del item</h3>
                    <input className="form-input-general" placeholder="Ejemplo: Ceviche Clásico"></input>
                    <h3>Descripcion</h3>
                    <textarea className="form-input-general textarea-style" placeholder="Ejemplo: Pescado fresco en cubos, marinado al instante en jugo de limón, con cebolla roja, ají limo y un toque de culantro. "/>
                    <h3>Kcal aprox.</h3>
                    <input id="input-kcal" className="form-input-general" placeholder="Ejemplo: 300"></input>
                </div>
                <div className="data-two-container">
                    <h3>Precio (S/)</h3>
                    <input id="input-precio" className="form-input-general" placeholder="Ejemplo: 22.00"></input>
                    <h3>Categoría</h3>
                    <select id="input-cat" className="form-input-general">
                        <option value="1">Fondo</option>
                        <option value="2">Entrada</option>
                        <option value="3">Bebida</option>
                        <option value="4">Postre</option>
                    </select>
                    
                </div>
                <div className="item-img-container">
                    <h3>Imagen del item</h3>
                    <img src={ceviche} alt="item-image"/>
                </div>
            </div>
            <div className="ingredientes-extra-container row">
                <div className="ingredientes-container"> 
                    <h2>Ingredientes</h2>
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
                    <h3 className="text-add-style">+ Añadir ingrediente</h3>
                </div>
                <div className="extra-container">
                    <h2>Nivel de picante</h2>
                    <div className="extra-options-container row">
                        <input type="radio" name="opcionExtra"/>
                        <label>0</label>
                        <input type="radio" name="opcionExtra"/>
                        <label>bajo</label>
                        <input type="radio" name="opcionExtra"/>
                        <label>alto</label>
                    </div>
                </div>
            </div>
            <div className="etiquetas-container">
                <h2>Etiquetas</h2>
                    <ul className="elements-list-form row wrap">
                        <li>Vegano</li>
                        <li>Vegano</li>                     
                    </ul>                
                <h3 className="text-add-style">+ Añadir etiqueta</h3>
            </div>
            <div className="foot-form row">
                <button className="cancel-item-button button-general">Cancelar</button>
                <button className="save-item-button button-general">Guardar</button>
            </div>
        </div>
    )
}

export default CreateItemPage;
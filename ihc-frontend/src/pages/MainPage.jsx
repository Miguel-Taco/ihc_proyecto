import '../styles/MainPage.css'
import ItemMenu from '../components/ItemMenu';

function MainPage(){
    return(
        <div className="main-page-container">
            <div className='mainpage-head-container'>
                <h1>MENU DEL DÍA</h1>
                <div className='buttons-main-container'>

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
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                </section>
            </div>
            
        </div>
    );
}

export default MainPage;
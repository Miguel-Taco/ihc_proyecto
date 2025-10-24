import '../styles/ItemMenu.css'
import ceviche from '../assets/imgs/ceviche.jpg'
function ItemMenu(){
    return(
        <div className='item-menu-container'>
            <p>Ceviche</p>
            <img src={ceviche} alt="item"/>
            <div className='item-menu-avaliable-container row'>
                <p>Compatibilidad</p>
                <div className='avaliable-view'></div> {/*Esta compatibilidad va a variar, segun no se cumplan ciertos filtros de segundo orden*/ }
            </div>
            <div className='item-menu-price-container row'>
                <p>Precio</p>
                <span>S/.XX</span>
            </div>
        </div>
    );
}

export default ItemMenu;
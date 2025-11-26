import '../styles/ItemMenu.css'
import StarRating from './StarRating';

function ItemMenu({ item }) {
    return (
        <div className='item-menu-container'>
            <p>{item.nombre}</p>
            <img src={`/${item.url_imagen}`} alt="item" />
            <div className='item-menu-avaliable-container row'>
                <p>Compatibilidad</p>
                <div className='avaliable-view'></div> {/*Esta compatibilidad va a variar, segun no se cumplan ciertos filtros de segundo orden*/}
            </div>
            <div className='item-menu-price-container row'>
                <p>Precio</p>
                <span>S/{item.precio}</span>
            </div>
            <div className="item-rating-container">
                <StarRating initialRating={0} onRate={(rating) => console.log(`Rated ${item.nombre}: ${rating}`)} />
            </div>
        </div>
    );
}

export default ItemMenu;
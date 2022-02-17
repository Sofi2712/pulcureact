import './ItemList.css';
import Item from './Item'

function ItemList({ productos }) {

    return (
        <div className='divItemList'>
            { productos.map(prod => <Item key={prod.id} id={prod.key} nombre={prod.nombre} imagen={prod.img} precio={prod.precio} stock={prod.stock} />) }
        </div>
    )
}

export default ItemList

import { useState , useEffect } from 'react'
import { getFetch } from '../../helpers/mock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail'


function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    const {detalleId} = useParams()

    useEffect(() => {
        
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))

    }, [detalleId])
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
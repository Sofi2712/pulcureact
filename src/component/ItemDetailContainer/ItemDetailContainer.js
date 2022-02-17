import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    const {detalleId} = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryProd = doc(db, 'Items', detalleId)
        getDoc(queryProd)
        .then((resp) => (setProducto({id: resp.id, ...resp.data()})))


    }, [detalleId])
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}
export default ItemDetailContainer
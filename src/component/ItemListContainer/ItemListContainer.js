import './ItemListContainer.css'
import ItemList from './ItemList'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer({ greeting }) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {



        if(categoriaId) {

            const db = getFirestore()
            const queryCollectionCategoria = query(collection(db, 'Items'), 
                where('categoria', '==', categoriaId)
            )
            getDocs(queryCollectionCategoria)
            .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        } else {

            const db = getFirestore()
            const queryCollection = query(collection(db, 'Items'))
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }

    }, [categoriaId])

    return (
        <div className='divItemListContainer'>
            <h1 className='saludo'>{greeting}</h1>
            { loading ? <Spinner /> : <ItemList productos={productos} /> }
        </div>
    )
}

export default ItemListContainer
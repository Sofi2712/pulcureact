import './ItemListContainer.css'
import ItemList from './ItemList'
import { useState , useEffect } from 'react'
import { getFetch } from '../../helpers/mock'
import { useParams } from 'react-router-dom'



function ItemListContainer({ greeting }) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {

        if (categoriaId) {

            getFetch
        .then(answer => setProductos(answer.filter(prod => prod.categoria === categoriaId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

        } else {

            getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

        }

    }, [categoriaId])

    return (
        <div className='divItemListContainer'>
            <h1 className='saludo'>{greeting}</h1>
            { loading ? <h3>Aguarde unos segundos, la página esta cargando</h3> : <ItemList productos={productos} /> }
        </div>
    )
}

export default ItemListContainer


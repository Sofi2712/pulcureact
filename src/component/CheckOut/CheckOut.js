import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, Timestamp, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import OrderProcessed from "../OrderProcessed/OrderProcessed";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function CheckOut() {

    const { cartList, vaciarCarrito, precioTotal } = useCartContext()
    
    const [condicional, setCondicional] = useState(false);
    
    const [formData , setFormData ] = useState({
        email: '',
        name: '',
        phone: '',
        lastName: '',
    });
    
    const [idOrder, setIdOrder] = useState('');

    const realizarCompra = async (e) => {

        e.preventDefault()   
        
        let order = {}

        order.date = Timestamp.fromDate(new Date())        
        order.buyer = formData 
        order.total = precioTotal();

        order.Items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad
            
            return {id, nombre, precio, cantidad}   
        }) 

        
        const db = getFirestore()

        const ordenCollection = collection(db, 'orders')
        await addDoc(ordenCollection, order) 
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        
        const queryCollection = collection(db, 'Items')
        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.key))          
        ) 

        const batch = writeBatch(db)      
        
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(Item => Item.key === res.id).cantidad
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()

        setCondicional(true)    

        vaciarCarrito()
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            { 
                condicional ? (<OrderProcessed idOrder={idOrder} />

                ):(
                    
                <form onChange={handleChange}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Nombres"
                        onChange={handleChange}
                        value={formData.name}
                        required
                    />
                    <input 
                        type="text" 
                        name="lastName"
                        placeholder="Apellidos"
                        onChange={handleChange}
                        value={formData.lastName}
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <input 
                        type="number" 
                        name="phone"
                        placeholder="Telefono"
                        onChange={handleChange}
                        value={formData.phone}
                        required
                    />
                    <Link to={'/cart/OrderProcessed'}>
                        <Button variant="dark" onClick={realizarCompra}>Finalizar compra</Button>
                    </Link>
                </form>
                )}
        </div>
    );
}

export default CheckOut;

import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity} = useContext(CartContext)

    const quantityCart = getProductQuantity(id)
    
    const handleOnAdd = (quantity) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se agregaron ${quantity} de ${name}`,
            showConfirmButton: false,
            timer: 1500
          })
        setQuantity(quantity)
        addItem({id, name, price, quantity})
    }
    
    return(
    <div className="detalle">
        <h3 className='tituloDetalle'>{name}</h3> 
        <img className='imagen' src={img}></img>
        <p className='descripcion'>{description}</p>
        <p className='stock'>Stock: {stock}</p>
        <p className='precio'>${price}</p>
        {quantity> 0 ? <Link className='linkFin' to= '/cart'>Finalizar compra</Link>:<Counter stock={stock} onAdd={handleOnAdd} initial={quantityCart}/>}
    </div>
    )
}

export default ItemDetail

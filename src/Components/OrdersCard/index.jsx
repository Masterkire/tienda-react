import PropTypes from 'prop-types';
// import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts} = props

    return ( 
        <div className="flex flex-col justify-center items-start mb-4 p-4 border rounded-lg  bg-black-500 shadow-lg shadow-black-500/50 border-gray-500 w-60">
            <p className='flex justify-between font-semibold w-full'>Fecha: <span className='font-light '>01.02.23</span></p>
            <p className='flex justify-between font-semibold w-full'>Articulos: <span className='font-light'>{totalProducts}</span></p>
            <p className='flex justify-between font-semibold w-full'>Precio total: <span className='font-medium'>${totalPrice}</span></p>
        </div>
     );
}

OrdersCard.propTypes = {
    totalProducts: PropTypes.number,
    totalPrice: PropTypes.number.isRequired,
}
 
export default OrdersCard;
import PropTypes from 'prop-types';
// import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts} = props

    return ( 
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
     );
}

OrdersCard.propTypes = {
    totalProducts: PropTypes.number,
    totalPrice: PropTypes.number.isRequired,
}
 
export default OrdersCard;
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/outline'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW', context.productToShow);

    return ( 
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div onClick={context.closeCheckoutSideMenu}>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer"/>
                </div>
            </div>
            
        </aside>
     );
}
 
export default CheckoutSideMenu;
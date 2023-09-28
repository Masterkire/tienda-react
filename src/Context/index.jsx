import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)
    
    // Product detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product detail - show product
    const [productToShow, setProductToShow] = useState({})
    
    // Shopping Cart - Add products to cart 
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)
    // console.log(items[1].title);
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by titles
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('searchByTitle: ', searchByTitle);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      }, [items, searchByTitle])

      console.log('filteredItems: ',filteredItems);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
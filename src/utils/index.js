/**
 *  This function calculates the total price of a new order
 * @param {Array} products cartProducts: Array of Objects 
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
    let total = 0
    products.forEach(product => total += product.price)
    return total
}
const database = {
    paints: [
        {id: 1, color: "Silver", price: 200},
        {id: 2, color: "Midnight Blue", price: 250},
        {id: 3, color: "Firebrick Red", price: 300},
        {id: 4, color: "Spring Green", price: 225}
    ],
    interiors: [
        {id: 1, upholstry: "Beige Fabric", price: 50},
        {id: 2, upholstry: "Charcoal Fabric", price: 50},
        {id: 3, upholstry: "White Leather", price: 575},
        {id: 4, upholstry: "Black Leather", price: 650}
    ],
    technologies: [
        {id: 1, package: "Basic", price: 100},
        {id: 2, package: "Navigation", price: 400},
        {id: 3, package: "Visibility", price: 500},
        {id: 4, package: "Ultra", price: 800}
    ],
    wheels: [
        {id: 1, option: "17-inch Pair Radial", price: 125},
        {id: 2, option: "17-inch Pair Radial Black", price: 150},
        {id: 3, option: "18-inch Pair Spoke Silver", price: 225},
        {id: 4, option: "18-inch Pair Spoke Black", price: 250},
    ],
    orders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 1
        }
    ],
    orderBuilder: {}
}


export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tecnology => ({...tecnology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}




export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}




export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

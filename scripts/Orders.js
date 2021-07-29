import { getOrders, getPaints, getInteriors, getTechnologies, getWheels } from "./database.js"


const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()



const buildOrderListItem = (order) => {
    const findPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const findInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const findTecnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const findWheel = wheels.find (
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

      
    const totalCost = findPaint.price + findInterior.price + findTecnology.price + findWheel.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} costs ${costString} and was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItemsArray = orders.map(buildOrderListItem)

    html += listItemsArray.join(" ")
    html += "</ul>"

    return html
}


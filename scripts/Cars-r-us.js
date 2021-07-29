import { Colors } from "./Paints.js"
import { Upholstry } from "./Interiors.js"
import { Technology } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"



document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)








export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us</h1>
        
        <article class ="choices">
            <section class="choices__colors options">
                <h2>Color Options</h2>
                ${Colors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior Upholstry</h2>
                ${Upholstry()}
            </section>
            <section class="choices__technologies options">
                <h2>Tech Packages</h2>
                ${Technology()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>
            
        <article>
            <button id="orderButton">Create Custom Vehicle</button>
        </article>
        
        <article class="customOrders">
            <h2>Custom Vehicle Orders</h2>
            ${Orders()}
            
        </article>
    `
}
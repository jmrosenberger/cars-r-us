import { getPaints, setPaint, getOrderBuilder } from "./database.js"
import { renderAllHTML } from "./main.js"

const paints = getPaints()




document.addEventListener(
    "change",
    (event) => {

        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
            // document.dispatchEvent(new CustomEvent("stateChanged"))
            console.log("State of data has changed. Regenerating HTML...")
            renderAllHTML()
        }
    }
)





export const Colors = () => {
    const orderBuilder = getOrderBuilder()
    
    let html = "<ul>"
    
    const listItems = paints.map(paint => {
        if (paint.id === orderBuilder.paintId) {
            return `<li>
            <input type="radio" name="paint" value="${paint.id}" checked="checked"/>${paint.color}
            </li>`
        } else {
            return `<li>
            <input type="radio" name="paint" value="${paint.id}" />${paint.color}
            </li>`
        }
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}


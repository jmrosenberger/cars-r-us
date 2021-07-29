import { getInteriors } from "./database.js"

const interiors = getInteriors()





document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            window.alert(`User chose ${interiors.upholstry}`)
        }
    }
)



export const Upholstry = () => {
    let html = "<ul>"

    for (const interior of interiors) {
        html += `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.upholstry}
        </li>`
    }

    html += "</ul>"
    return html
}
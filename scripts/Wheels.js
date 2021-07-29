import { getWheels } from "./database.js"

const wheels = getWheels()






document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            window.alert(`User chose ${wheels.option}`)
        }
    }
)



export const Wheels = () => {
    let html = "<ul>"

    for (const wheel of wheels) {
        html += `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.option}
        </li>`
    }

    html += "</ul>"
    return html
}
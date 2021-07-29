import { getTechnologies } from "./database.js"

const technologies = getTechnologies()





document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            window.alert(`User chose ${technologies.package}`)
        }
    }
)



export const Technology = () => {
    let html = "<ul>"

    for (const technology of technologies) {
        html += `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.package}
        </li>`
    }

    html += "</ul>"
    return html
}
import { getPaints, setPaint } from "./database.js"

const paints = getPaints()








document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)





// document.addEventListener(
//     "change",
//     (event) => {
        
//         for (const paint of paints) {

//             if (event.target.name === "paint") {

//                 const paintSelected = paints.find(
//                     (paint) => {

//                     }
//                     )
//                     if (paint.id === parseInt(paintId)) {
//                         const paintSelected = paint.color
//                         window.alert(`User chose ${paint.color}`)
//                     }
//                 }
//         }
//     }
// )



export const Colors = () => {
    let html = "<ul>"

    for (const paint of paints) {
        html += `<li>
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
        </li>`
    }

    html += "</ul>"
    return html
}






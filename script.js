
let array = [12, 15, 35, 34, 23, 54, 23, 68, 92, 98, 14, 17, 71, 43, 19, 64, 83, 99, 56, 34, 37, 25, 44, 76, 22, 11, 10, 45, 66, 84]

function createTable() {
    let k = 0;
    let tbody = document.body.firstElementChild.firstElementChild
    for(let i = 0; i < 6; i++){
        tbody.innerHTML += "<tr></tr>"
        let childTr = tbody.childNodes[i]
        for(let v = 0; v < 5; v++) {
            if (array[k] >= 50) {
                childTr.innerHTML += `<td style="background-color: orange;">${array[k]}</td>`
            } else {
                childTr.innerHTML += `<td>${array[k]}</td>`
            }
            k++
        }
    }
}
createTable()
let newK = 0;
let tbody = document.body.firstElementChild.firstElementChild;
tbody.innerHTML += "<tr></tr>";
function addNewElem() {
    let num = Math.floor(Math.random() * 99)
    if(newK < 5) {
        let lastTr = tbody.lastElementChild
        if (num >= 50) {
            lastTr.innerHTML += `<td style="background-color: orange;">${num}</td>`
        } else {
            lastTr.innerHTML += `<td>${num}</td>`
        }
        newK++
    } else {
        tbody.innerHTML += "<tr></tr>"
        let lastTr = tbody.lastElementChild
        if (num >= 50) {
            lastTr.innerHTML += `<td style="background-color: orange;">${num}</td>`
        } else {
            lastTr.innerHTML += `<td>${num}</td>`
        }
        newK = 1
    }
}

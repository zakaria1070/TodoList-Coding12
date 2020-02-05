let input = document.getElementById("input-task")
let ul = document.getElementById("list all")
let ajouter = document.getElementById("add-task")
let supprimer = document.getElementsByTagName("span")[0]
// let divAjouter = document.getElement
// modificationhtml
ajouter.setAttribute("type", "button");



ajouter.addEventListener("click", () => {
  if (input.value !== "") {
    let li = document.createElement("li")
    li.innerText = input.value
    input.value = ""
    ul.appendChild(li)

    li.style.display = 'flex'
    li.style.justifyContent = "space-between"
    li.style.alignItems = 'center'
    li.style.padding = '25px'
    li.style.fontWeight = 'bold'
    li.style.backgroundColor = "lightgray"
    supprimer.classList.add("display-none")

let div = document.createElement("div")
// icon1
let icon1 = document.createElement("i")
icon1.setAttribute("class", "far fa-2x fa-check-circle")
icon1.style.color = "blue"
div.appendChild(icon1)
// icon1

// icon2
let icon2 = document.createElement("i")
icon2.setAttribute("class","fa-2x far fa-edit")
icon2.style.color = "yellow"
icon2.style.marginLeft = "15px"
div.appendChild(icon2)
// icon2

// icon3
let icon3 = document.createElement("i")
icon3.setAttribute("class","fa-2x far fa-trash-alt")
icon3.style.color = "red"
icon3.style.marginLeft = "15px"
div.appendChild(icon3)
// icon3

li.appendChild(div)
  } else {
    supprimer.classList.remove("display-none")

  }
})









let input = document.getElementById("input-task")
let ul = document.getElementById("list all")
let ajouter = document.getElementById("add-task")
let supprimer = document.getElementsByTagName("span")[0]
let todo = document.getElementsByClassName("btn")[1]
let done = document.getElementsByClassName("btn")[2]
let all = document.getElementsByClassName("btn")[4]
let body = document.querySelector("body")
body.appendChild(todo)

// let divAjouter = document.getElement
// modificationhtml
ajouter.setAttribute("type", "button");



ajouter.addEventListener("click", () => {
  let li = document.getElementsByClassName("zak")
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

    li.setAttribute("class","zak")
    // icon1
    let icon1 = document.createElement("i")
    icon1.setAttribute("class", "far fa-2x fa-check-circle")
    icon1.style.color = "blue"
    div.appendChild(icon1)
    icon1.addEventListener("click", () => {
      if (li.style.backgroundColor === 'green') {
        li.style.backgroundColor = 'lightgray';
      } else {
        li.style.backgroundColor = 'green';
      }
    })

    // icon1

    // icon2
    let icon2 = document.createElement("i")
    icon2.setAttribute("class", "fa-2x far fa-edit")
    icon2.style.color = "yellow"
    icon2.style.marginLeft = "15px"
    div.appendChild(icon2)
    icon2.addEventListener("click", () => {
      icon1.remove()
      icon2.remove()
      icon3.remove()
      let input4 = document.createElement("input")
      li.appendChild(input4)
      let icon4 = document.createElement("i")
      icon4.style.color = "red"
      icon4.style.marginLeft = "15px"
      li.appendChild(icon4)
      icon4.setAttribute("class", "fa-2x fas fa-save")
      icon4.addEventListener("click", () => {
        li.innerText = input4.value
        li.append(icon1, icon2, icon3)
        icon1.style.position = "relative"
        icon1.style.left = "400px"
        icon2.style.position = "relative"
        icon2.style.left = "198px"


        // icon3.style.marginLeft = "167px"



      })
    })
    // icon2

    // icon3
    let icon3 = document.createElement("i")
    icon3.setAttribute("class", "fa-2x far fa-trash-alt")
    icon3.style.color = "red"
    icon3.style.marginLeft = "15px"
    div.appendChild(icon3)
    icon3.addEventListener("click", () => {
      li.remove()
    })

    // icon3

    li.appendChild(div)
  } else {
    supprimer.classList.remove("display-none")

    
    todo.addEventListener("click", () => {
      switch (li.style.backgroundColor) {
        case "green":
          li.remove()
          break;
        default:
          li.appendChild()
          break;
      }
    })
    
    
    
    done.addEventListener("click", () => {
      switch (li.style.backgroundColor) {
        case "lightgray":
          ul.removeChild(li)
          break;
        default:
          ul.removeChild(li)
          break;
      }
    })
    
    
    
    
    
    all.addEventListener("click", () => {
      switch (li.style.backgroundColor) {
        case "lightgray":
          ul.appendChild(li)
          break;
          case "green":
          ul.appendChild(li)
          break;
        
      }
    })
  }
})



















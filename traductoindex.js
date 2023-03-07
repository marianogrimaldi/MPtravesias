const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async  language=>{
    const requestJson = await fetch(`languages/${language}.json`)
    const texts = await requestJson.json()

    for(const textToChange of textsToChange){
       const section = textToChange.dataset.section
       const value = textToChange.dataset.value
      

       textToChange.innerHTML = texts [section][value]
    }
}

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language) 
})







//CODIGO PARA QUE QUEDE GUARDADO EL IDIOMA EN LOCAL STORAGE


let idiomaIngles = document.getElementById ("in")
let idiomaEspañol = document.getElementById ("es")

let ingles = localStorage.getItem("ing")

if(ingles == "true"){
    document.body.classList.add("ingles")
}else{
    document.body.classList.remove("ingles")
}

idiomaIngles.addEventListener("click", ()=>{
    document.body.classList.add("ingles")
    localStorage.setItem("ing",true)
})

idiomaEspañol.addEventListener("click", ()=>{
    document.body.classList.remove("ingles")
    localStorage.setItem("ing", false)
})
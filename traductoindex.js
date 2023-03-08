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

//Yo no guardaría un valor por cada idioma, sino que guardaría el idioma que va para después tenerlos. 
//Ej: localStorage.getItem("languageSelected");
// y que ese valor, me devuelva: eng, esp, bra, etc...
let ingles = localStorage.getItem("ing")

if(ingles == "true"){
    document.body.classList.add("ingles")
    changeLanguage("en"); 
}else{
    document.body.classList.remove("ingles")
    changeLanguage("es"); 
}

idiomaIngles.addEventListener("click", ()=>{
    
    document.body.classList.add("ingles")
    localStorage.setItem("ing",true)
})

idiomaEspañol.addEventListener("click", ()=>{
    document.body.classList.remove("ingles")
    localStorage.setItem("ing", false)
})
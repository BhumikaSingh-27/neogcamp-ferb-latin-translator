const userInput  = document.querySelector("#user-input");
const buttonTranslate = document.querySelector("#button-translate");
const translatedOutput = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getURL(text){    
    var URL = serverURL + "?" + "text=" + text;
    // console.log(URL)
    return URL;
}

function errorHandler(error){
    alert("Something went wrong! Please try again later!")
    console.log(error)
}

function eventHandler(){

    fetch(getURL(userInput.value))
    .then(response => response.json())
    .then(json =>{ translatedOutput.innerText = json.contents.translated})
    .catch(errorHandler)
}
buttonTranslate.addEventListener("click",eventHandler)
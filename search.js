import FetchWrapper from "./fetch-wrapper.js"




const API = new FetchWrapper("./gamelist.json")

const SearchBar = document.querySelector("#gname")
const result = document.querySelector("#ResultsList")
SearchBar.addEventListener("keyup", event => {
    result.innerHTML= ""
    if (SearchBar.value != "") {
    API.get("").then(data => {
       
        data.forEach(element => {
            var trimmedvalue = SearchBar.value.trim().toLowerCase()

            if (element.name.toLowerCase().includes(trimmedvalue)) {
                result.insertAdjacentHTML("beforeend", `<h3 class="blackfont"><a href='${element.URL}'>${element.name}</h3>`)
            }
        });
    })
}
})

SearchBar.addEventListener("submit", event => {
    event.preventDefault();
})
let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
fetch (url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.log(error))


const curiousFactsWindow = document.getElementById('curious-facts')

const showData = (data) => {
    curiousFactsWindow.textContent = data.text;
}

const favouritesAdd = document.getElementById('favourites-button')
const listItems = document.getElementById('list')

function addCuriousFacts() {
    let favouriteItem = document.createElement("li");
    favouriteItem.classList.add("favourite-item");
    favouriteItem.textContent = curiousFactsWindow.textContent;
    listItems.appendChild(favouriteItem);
    localStorage.setItem('savedList',list.innerHTML);
    location.reload();
    
}
favouritesAdd.addEventListener("click", addCuriousFacts )



function keepList() {
    var savedList = localStorage.getItem('savedList');

    if (savedList) {
        var list = document.getElementById('list');
        list.innerHTML = savedList;
    }
}
window.addEventListener('DOMContentLoaded', keepList );


const refreshPage = document.getElementById('next-button')

function reloadPage() {
    location.reload();
    
}
refreshPage.addEventListener('click', reloadPage )


// localStorage.clear();




 
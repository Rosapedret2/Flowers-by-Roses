function callFetch() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        .then(response => response.json())
        .then(data => showData(data))
        .catch(error => console.log(error))
}

callFetch();

const curiousFactsWindow = document.getElementById('curious-facts')

const showData = (data) => {
    curiousFactsWindow.textContent = data.text;
}

const listItems = document.getElementById('list');

const addCuriousFacts = () => {
    let favouriteItem = document.createElement("li");
    favouriteItem.classList.add("favourite-item");
    favouriteItem.textContent = curiousFactsWindow.textContent;
    listItems.appendChild(favouriteItem);
    localStorage.setItem('savedList', list.innerHTML);
    window.location.reload();
};


function keepList() {
    let savedList = localStorage.getItem('savedList');

    if (savedList) {
        let list = document.getElementById('list');
        list.innerHTML = savedList;
    }
}
window.addEventListener('DOMContentLoaded', keepList);


function reloadPage() {
    window.location.reload();
}

// localStorage.clear();

module.exports = {
    reloadPage,
    addCuriousFacts
};




 
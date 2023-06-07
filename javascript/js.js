let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
fetch (url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.log(error))


const curiousFactsWindow = document.getElementById('curious-facts')

const showData = (data) => {
    
    curiousFactsWindow.textContent = data.text ;
}


 
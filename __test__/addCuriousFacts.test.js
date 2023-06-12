const {addCuriousFacts} = require('../javascript/js')

describe('function addCuriousFacts()', () => {
    it("should be declared", () => {
        expect(typeof addCuriousFacts).toBe("function")
    });

    it("should be able to add a list item to the list", () => {
        
        //We define the HTML elements we need from our index.html document
        
        document.body.innerHTML = `
        <button id="favourites-button" class="favourites-button" onclick="addCuriousFacts()"><img class="star" src="/img/Star.png">Save</button>
        <ul id="list"></ul>
  `;
        //We export the javascript file we are testing with the lines of code we want to test
    
        require('../javascript/js');

        const listItems = document.getElementById('list');
        let favouriteItem = document.createElement("li");
        favouriteItem.textContent = "New curious fact";
        listItems.appendChild(favouriteItem);

        expect(listItems.innerHTML).toBe('<li>New curious fact</li>')
    });
});
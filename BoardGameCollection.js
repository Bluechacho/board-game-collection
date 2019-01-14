/*Variable initialization for board game images*/
var gameCatan = { name: "Catan", theme: "Medieval", playerCount: "2 - 4", imageURL: "https://images-na.ssl-images-amazon.com/images/I/81tWnmJQwBL._SX466_.jpg"};
var gameClank = {name: "Clank", theme: "Medieval", playerCount: "2 - 4", imageURL: "https://www.magicmadhouse.co.uk/images/clank-a-deck-building-adventure-p254691-239231_image.jpg"};
var gameCoup = {name: "Coup", theme: "Sci-fi", playerCount: "2 - 4", imageURL: "https://cdn-images-1.medium.com/max/1047/1*0f9z3uKRcFCK8S5gkU5hZg.jpeg"};
var gameCoupReformation = {name: "Coup: Reformation", theme: "Sci-fi", playerCount: "2 - 4", imageURL: "https://images-na.ssl-images-amazon.com/images/I/81SX466_.jpg"};
var gameDungeonsAndDragons = {name: "Dungeons & Dragons", theme: "Medieval", playerCount: "2 - 4", imageURL: "https://images-na.ssl-images-amazon.com/images/I/81tWnmJQwBL._SX466_.jpg"};/* */
var gameKemet = {name: "Kemet", theme: "Egyptian", playerCount: "2 - 4", imageURL: "https://images-na.ssl-images-amazon.com/images/I/81tWnmJQwBL._SX466_.jpg"};
var gameMageKnight = {name: "Mage Knight", theme: "Medieval", playerCount: "2 - 4", imageURL: "https://images-na.ssl-images-amazon.com/images/I/81tWnmJQwBL._tWnmJQwBL._SX466_.jpg"};
var gameTicketToRide = {name: "Ticket to Ride", theme: "Abstract", playerCount: "2 - 4", imageURL: "https://images-na.ssl-images-amazon.com/images/I/81tWnmJQwBL._SX466_.jpg"};
var gameVast = {name: "Vast", theme: "Medieval", playerCount: "2 - 4", imageURL: "https://images-na.ssl-images-amazon.com/images/I/81tWnmJQwBL._SX466_.jpg"};
//TO-DO: Make gamePlaceholder
var gamePlaceholder = {name: "n/a", theme: "n/a", playerCount: "n/a", imageURL: "https://images-na.ssl-images-amazon.com/images/I/81tWnmJQwBL._SX466_.jpg"};

//Initialization of gameArray to hold all game vars and sortArray to display sorted order
var gameArray = [gameCatan, gameClank, gameCoup, gameCoupReformation, gameDungeonsAndDragons, gameKemet, gameMageKnight, gameTicketToRide, gameVast];
var sortArray = [gameCatan, gameClank, gameCoup, gameCoupReformation, gameDungeonsAndDragons, gameKemet, gameMageKnight, gameTicketToRide, gameVast, gamePlaceholder, gamePlaceholder, gamePlaceholder];
populateTable();

//On click of icon, display game information in gameTitle, gameDisplay, gameInfo
function displayGameInfo(gameID)
{
    var gameVar = sortArray[gameID.slice(-2).replace(/\D/,"")];
    if (gameVar != gamePlaceholder){
        document.getElementById("gameTitle").innerHTML = document.getElementById(gameID).innerText;
       document.getElementById("gameDisplay").src = gameVar.imageURL;
    }
    return 0;
}

//Read the sortArray, populate table in sorted order
function populateTable()
{
    for (i=0; i < sortArray.length; i++) {
        document.getElementById("tableData".concat(i)).innerHTML = sortArray[i].name;
    }
}

//Sort game objects by name into array, then call populateTable()
function sortByName()
{
    sortArray = gameArray.slice();
    populateTable();
}
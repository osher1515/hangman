let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //Alphabet Array declration
let categories = ["Cities","Countries","Top-PL Teams","Top-Athlets"]; //Categories Array
let choosenCategory; // Choose Category
let maxGuess = 10; //Maximum guesses for player.
const alphabetDiv = document.getElementById("alphabet")

function createButton () {
    for(let i = 0; i < alphabet.length; i++)
    {
        var btn = document.createElement("BUTTON");
        btn.setAttribute("id" , alphabet[i])
        btn.innerHTML = alphabet[i];
        btn.style.marginRight = "15px" 
        btn.style.backgroundColor = "#ffffff"
        btn.style.fontSize = "24px"
        btn.style.borderRadius = "8px"
        btn.style.fontFamily = "'Krona One', sans-serif"
        alphabetDiv.appendChild(btn);
    }

}

function randCategoryChoose () {
    let randomNumber = Math.floor(Math.random() * Math.floor(categories.length) + 1) //Random Category to choose from the array.
    var h2 = document.getElementById("h2").innerText = "Choosen Category is" + " " + `${categories[randomNumber]}` + " " + "Good Luck"
}


createButton();
randCategoryChoose();

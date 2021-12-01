var Namespace;
(function (Namespace) {
    const inputIntpret = document.getElementById("inputIntpret");
    const inputPrice = document.getElementById("inputPrice");
    const display = document.querySelector("display");
    const myButton = document.querySelector("machwas");
    myButton.addEventListener("click", mybuttonHandler);
    function mybuttonHandler() {
        let interpretValue = inputIntpret.value;
        let priceValue = Number(inputPrice.value);
        let newElement = document.createElement("div");
        let deleteButton = document.createElement("myButton");
        deleteButton.textContent = "delete";
        newElement.textContent = interpretValue + "; " + priceValue;
        display.appendChild(newElement);
        newElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
            deleteEvent(newElement);
        });
    }
    function deleteEvent(parentElement) {
        display.removeChild(parentElement);
    }
})(Namespace || (Namespace = {}));

var localStorage;
(function (localStorage) {
    
    let array = [10, 12, 14, 16]; 
    let arrayIGotFromLocalStorage; 
    let arrayString = JSON.stringify(array);
    
    localStorage.setItem("myArray", arrayString);
    
    let stringFromLocalStorage = localStorage.getItem("myArray"); 
    arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage); 
    console.log("Das Array mit dem Key 'myArray' aus dem LocalStorage:", arrayIGotFromLocalStorage); 
    console.log("Der Wert an der Stelle[0] mal den Wert an der Stelle[2]=", arrayIGotFromLocalStorage[0] * arrayIGotFromLocalStorage[2]);
})(localStorage || (localStorage = {}));
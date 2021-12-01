namespace Namespace {


    const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("inputIntpret"); 
    const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("inputPrice"); 
    const display: HTMLElement = <HTMLElement>document.querySelector("display"); 
    const myButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("machwas"); 

   
    myButton.addEventListener("click", mybuttonHandler); 
    
   
    function mybuttonHandler(): void {
        
        let interpretValue: string = inputIntpret.value; 
        let priceValue: number = Number(inputPrice.value); 

        let newElement: HTMLDivElement = document.createElement("div"); 
        let deleteButton: HTMLButtonElement = document.createElement("button"); 
        deleteButton.textContent = "Löschen"; 

        newElement.textContent = interpretValue + "; " + priceValue; 

        display.appendChild(newElement); 


        newElement.appendChild(deleteButton); 

        
        deleteButton.addEventListener("click", function(): void {
            deleteEvent(newElement); 
        });

    }
    function deleteEvent(parentElement: HTMLDivElement): void {
        display.removeChild(parentElement); 
    }
}
namespace localStorage1{
    

    let array: number[]= [10, 12, 14, 16]; 
    let arrayIGotFromLocalStorage: number[]; 

     
    let arrayString: string = JSON.stringify(array);

    
    localStorage.setItem("myArray", arrayString); 

    let stringFromLocalStorage: string= localStorage.getItem("myArray"); 

    arrayIGotFromLocalStorage = JSON.parse(stringFromLocalStorage); 

    console.log("Das Array mit dem Key 'myArray' aus dem LocalStorage:", arrayIGotFromLocalStorage); 

    console.log("Der Wert an der Stelle[0] mal den Wert an der Stelle[2]=", arrayIGotFromLocalStorage[0] * arrayIGotFromLocalStorage[2]);
}
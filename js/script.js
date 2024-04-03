const shoppingList = [];
let listContinue = true;

//creo lista che mi continua a chiedere di inserire un prodotto
while ( listContinue) { 
    let listElem = prompt ("Inserisci nella lista un prodotto:")
    console.log(listElem);
    
    shoppingList.push(listElem);
    
    if (listElem.toLowerCase() === "fine") {
        break;
    }
    
}

let listElem = document.querySelector(".shopping-list");

// quando finisco la lista 
for (i = 0; i < shoppingList.length; i++) {
    let listElemLi = document.createElement("li");
    listElemLi.textContent = shoppingList[i];
    listElem.appendChild(listElemLi);
}


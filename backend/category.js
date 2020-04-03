// TODO category CRUD #region

let category = []

function addItemAArray(newItem, array) {
    newItem = newItem.toLowerCase()
    if (array.indexOf(newItem) === -1) {
        array.push(newItem)
        console.log(`Item "${newItem}" added`)
    } else {
        console.log(`The item "${newItem}" already exists`)
    }
}


function updateItemArray(itemList, updated, array) {
    let test = false
    for (item in array) {
        if (array[item] === itemList.toLowerCase()) {
            array[item] = updated.toLowerCase()
            test = true
            console.log(`Item ${itemList} updated to ${updated}`)
        }
    }
    if (test === false) {
        console.log(`Item ${itemList} don't exist`)
    }
}

function deleteItemArray(erase, array) {
    for (item in array) {
        if (array[item] === erase.toLowerCase()) {
            array.splice(item)
        }
    }
}


addItemAArray("Teste", category)
addItemAArray("Teste_2", category)
addItemAArray("Teste_3", category)
addItemAArray("teste_4", category)
console.log(category)
updateItemArray("teste", "Conrado", category)
updateItemArray("casa", "ola", category)
console.log(category)
//deleteItemArray("teste_2", category)
console.log(category)

var dict = {
    "one": [15, 4.5],
    "two": [34, 3.3],
    "three": [67, 5.0],
    "four": [32, 4.1]
};

var dictstring = JSON.stringify(category);



let fs = require('fs');
fs.writeFile("category.json", dictstring, function (err, result) {
    if (err) console.log('error', err);
});
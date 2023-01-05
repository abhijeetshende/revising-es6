function sumofArgs(array){
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result += element;
    }
    printToScreen(`the sum of ${array} is ${result}`)
}

function usingSpreadSum(...array){
    printToScreen(array)
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result += element;
    }
    printToScreen(result)
}

sumofArgs([1,2,4])
usingSpreadSum(1,2,4)
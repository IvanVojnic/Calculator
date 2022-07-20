function buttonToolPressed(symbol){
    let inputField = document.getElementById("inputField");
    let strToSolve = inputField.value;
    let checkNewSymbol = validatePrevSymbol(symbol);
    let checkSymbols = validatePrevSymbol(strToSolve);
    if(checkSymbols==true && checkNewSymbol == true){
        return;
    }
    switch (symbol){
        case "xSqr":
            strToSolve += "^2";
            break;
        case "xn":
            strToSolve += "^";
            break;
        case "C":
            strToSolve = "";
            break;
        case "delete":
            strToSolve = strToSolve.slice(0, strToSolve.length-1);
            break;
        case "+/-":
            strToSolve += "-"
            break;
        case "=":
            let solution = getSolution(strToSolve);
            break;
        default:
            strToSolve = strToSolve + symbol;
            break;
    }
    inputField.value = strToSolve;
}

function validatePrevSymbol(str){
    let toolsSymbols = ["+", "-", "*", "/", "%", "^"];
    for(let i = 0; i < toolsSymbols.length; i++){
        if(str[str.length-1] == toolsSymbols[i]){
            return true;
        }
    }
}

async function getSolution(str) {
    let equip = {
        equipment: str
    };

    let response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(equip)
    });

    let result = await response.json();
    alert(result.message);
}
